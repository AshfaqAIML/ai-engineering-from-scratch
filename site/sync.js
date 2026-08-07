/**
 * Server sync layer for the AI Engineering from Scratch site.
 *
 * Bridges the local progress modules (progress.js / streak.js /
 * reading-progress.js) and the Vercel Functions API so a signed-in learner's
 * progress is persisted per account and restorable on any device.
 *
 *  - Hydration: when auth.js refresh() succeeds it dispatches an `aifs:me`
 *    event carrying the account's server snapshot; this module writes it into
 *    the local caches (server wins) and records baselines so deltas are not
 *    re-sent.
 *  - Push: changes to the local modules mark the state dirty; a debounced
 *    POST to /api/progress sends per-lesson deltas (read seconds, absolute
 *    scroll/section, completion, quiz answers) plus today's minute delta.
 *  - Reliability: failed pushes are retried with backoff; page unload fires a
 *    final beacon so progress survives a closed tab. Duplicate protection is
 *    handled server-side (idempotent upsert + max-merge).
 */
(function () {
  var FLUSH_DELAY_MS = 8000;
  var RETRY_DELAY_MS = 30000;
  var API_URL = '/api/progress';

  var loggedIn = false;
  var hydratedFor = '';
  var dirty = false;
  var timer = null;
  var activeSection = '';
  var lastSectionUpdate = 0;
  var baselines = { paths: {}, minutesToday: 0 };
  var currentUser = null;

  function todayStr() {
    var d = new Date();
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  }

  function currentSection() {
    return activeSection;
  }

  function userEmail() {
    return currentUser ? currentUser.email : '';
  }

  // ---- section tracking ------------------------------------------------

  function trackSections() {
    var lastFire = 0;
    window.addEventListener('scroll', function () {
      var now = Date.now();
      if (now - lastFire < 400) return;
      lastFire = now;
      updateActiveSection();
    }, { passive: true });
    window.addEventListener('resize', updateActiveSection, { passive: true });
  }

  function updateActiveSection() {
    var article = document.querySelector('.lesson-article');
    if (!article) return;
    var headings = article.querySelectorAll('h2');
    if (!headings.length) return;
    var offset = window.scrollY + 140;
    var found = '';
    for (var i = 0; i < headings.length; i++) {
      var top = headings[i].getBoundingClientRect().top + window.scrollY;
      if (top <= offset) found = headings[i].id || '';
    }
    activeSection = found;
  }

  // ---- hydration -------------------------------------------------------

  function toReadingMap(progress) {
    var map = {};
    for (var path in progress) {
      if (!progress.hasOwnProperty(path)) continue;
      var p = progress[path];
      map[path] = {
        scrollPct: p.scrollPct || 0,
        sectionId: p.sectionId || '',
        readSeconds: p.readSeconds || 0,
        lastOpened: p.lastVisited || 0,
        completed: !!p.completed
      };
    }
    return map;
  }

  function setBaselines() {
    baselines.paths = {};
    var all = window.AIFSReadingProgress ? window.AIFSReadingProgress.getAllProgress() : {};
    for (var path in all) {
      if (all.hasOwnProperty(path)) baselines.paths[path] = all[path].readSeconds || 0;
    }
    var streak = window.AIFSStreak ? window.AIFSStreak.getStreak() : { dayMinutes: {} };
    baselines.minutesToday = (streak.dayMinutes || {})[todayStr()] || 0;
  }

  function hydrate(detail) {
    if (!detail || !detail.progress) return;
    var email = userEmail();
    if (!email) return;
    if (window.AIFSReadingProgress) {
      window.AIFSReadingProgress.hydrate(email, toReadingMap(detail.progress));
    }
    if (window.AIFSStreak && detail.streak) {
      window.AIFSStreak.hydrate(email, detail.streak);
    }
    if (window.AIFSProgress) {
      window.AIFSProgress.hydrate(detail.progress);
    }
    hydratedFor = email;
    setBaselines();
  }

  function fetchAndHydrate() {
    fetch('/api/auth/me', { credentials: 'same-origin' })
      .then(function (res) { return res.ok ? res.json() : null; })
      .then(function (data) {
        if (data && data.user && data.progress) {
          currentUser = data.user;
          hydrate(data);
        }
      })
      .catch(function () {});
  }

  // ---- push ------------------------------------------------------------

  function markDirty() {
    if (!loggedIn) return;
    dirty = true;
    if (!timer) timer = setTimeout(flush, FLUSH_DELAY_MS);
  }

  function scheduleRetry() {
    dirty = true;
    if (timer) clearTimeout(timer);
    timer = setTimeout(flush, RETRY_DELAY_MS);
  }

  function buildPayload() {
    var items = [];
    var all = window.AIFSReadingProgress ? window.AIFSReadingProgress.getAllProgress() : {};
    var currentPath = window.AIFSReadingProgress ? window.AIFSReadingProgress.getCurrentPath() : '';
    for (var path in all) {
      if (!all.hasOwnProperty(path)) continue;
      var p = all[path];
      var base = baselines.paths[path] || 0;
      var deltaSeconds = Math.max(0, (p.readSeconds || 0) - base);
      if (deltaSeconds === 0 && path !== currentPath) continue;
      var answers = null;
      if (window.AIFSProgress) {
        var lp = window.AIFSProgress.getLessonProgress(path);
        if (lp && lp.answers && Object.keys(lp.answers).length) answers = lp.answers;
      }
      items.push({
        path: path,
        deltaSeconds: deltaSeconds,
        scrollPct: Math.round(p.scrollPct || 0),
        sectionId: path === currentPath ? currentSection() : (p.sectionId || ''),
        completed: !!p.completed,
        answers: answers
      });
    }

    var streak = window.AIFSStreak ? window.AIFSStreak.getStreak() : { dayMinutes: {} };
    var minutesToday = (streak.dayMinutes || {})[todayStr()] || 0;
    var deltaMinutes = Math.max(0, minutesToday - baselines.minutesToday);

    if (!items.length && deltaMinutes === 0) return null;
    return { items: items, deltaMinutes: deltaMinutes, day: todayStr() };
  }

  async function flush() {
    if (timer) { clearTimeout(timer); timer = null; }
    if (!loggedIn) return;
    if (!dirty) return;
    dirty = false;

    var payload = buildPayload();
    if (!payload) return;

    try {
      var res = await fetch(API_URL, {
        method: 'POST',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (res.ok) {
        setBaselines();
      } else {
        scheduleRetry();
      }
    } catch (e) {
      scheduleRetry();
    }
  }

  function beaconNow() {
    if (!loggedIn || !dirty) return;
    dirty = false;
    var payload = buildPayload();
    if (!payload) return;
    var blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
    var sent = false;
    if (navigator.sendBeacon) {
      try { sent = navigator.sendBeacon(API_URL, blob); } catch (e) {}
    }
    if (!sent && typeof fetch === 'function') {
      try {
        fetch(API_URL, { method: 'POST', credentials: 'same-origin', headers: { 'Content-Type': 'application/json' }, body: blob, keepalive: true });
      } catch (e) {}
    }
  }

  // ---- lifecycle -------------------------------------------------------

  function handleAuth(user) {
    currentUser = user;
    var wasLoggedIn = loggedIn;
    loggedIn = !!user;
    if (loggedIn) {
      var email = user.email;
      if (hydratedFor !== email) {
        // aifs:me (dispatched synchronously after refresh) usually hydrates
        // first; only fall back to a direct fetch when it never arrives.
        setTimeout(function () {
          if (hydratedFor !== email) fetchAndHydrate();
        }, 0);
      }
    } else {
      hydratedFor = '';
      if (timer) { clearTimeout(timer); timer = null; }
    }
    if (wasLoggedIn && !loggedIn) {
      // just logged out: nothing left to flush (pages flush before logout)
    }
  }

  function init() {
    if (window.AIFSAuth) window.AIFSAuth.onChange(handleAuth);
    window.addEventListener('aifs:me', function (e) {
      if (!e.detail) return;
      currentUser = e.detail.user || currentUser;
      if (currentUser) hydratedFor = '';
      hydrate(e.detail);
    });

    if (window.AIFSReadingProgress) window.AIFSReadingProgress.onChange(markDirty);
    if (window.AIFSProgress) window.AIFSProgress.onChange(markDirty);
    if (window.AIFSStreak) window.AIFSStreak.onChange(markDirty);

    trackSections();

    window.addEventListener('pagehide', beaconNow);
    document.addEventListener('visibilitychange', function () {
      if (document.visibilityState === 'hidden') beaconNow();
    });

    var u = window.AIFSAuth ? window.AIFSAuth.currentUser() : null;
    if (u) {
      loggedIn = true;
      currentUser = u;
      fetchAndHydrate();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.AIFSSync = {
    currentSection: currentSection,
    flushNow: flush,
    beaconNow: beaconNow
  };
})();
