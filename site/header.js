/**
 * Shared header behaviors: GitHub star counter, TTS auto-loading,
 * current-page highlighting, and responsive navigation.
 * Loaded by every page.
 */
(function () {
  'use strict';

  var REPO = 'rohitg00/ai-engineering-from-scratch';
  var CACHE_KEY = 'gh:stars:' + REPO;
  var CACHE_TTL_MS = 10 * 60 * 1000;
  var TTS_VERSION = '20260905a';

  /* ── GitHub star counter ─────────────────────────────────────────────── */

  function formatStars(n) {
    if (n >= 10000) return (n / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
    if (n >= 1000) return (n / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
    return String(n);
  }

  function paintStars(n) {
    var els = document.querySelectorAll(
      '.header-github .star-count, #starCount, [data-gh-stars="' + REPO + '"]'
    );
    for (var i = 0; i < els.length; i++) {
      els[i].textContent = formatStars(n);
      els[i].removeAttribute('data-loading');
    }
  }

  function readCache() {
    try {
      var raw = localStorage.getItem(CACHE_KEY);
      if (!raw) return null;
      var parsed = JSON.parse(raw);
      if (Date.now() - parsed.t > CACHE_TTL_MS) return null;
      return parsed.n;
    } catch (e) {
      return null;
    }
  }

  function writeCache(n) {
    try {
      localStorage.setItem(CACHE_KEY, JSON.stringify({ n: n, t: Date.now() }));
    } catch (e) {}
  }

  function loadStars() {
    var cached = readCache();
    if (cached != null) {
      paintStars(cached);
      return;
    }
    fetch('https://api.github.com/repos/' + REPO, {
      headers: { Accept: 'application/vnd.github+json' },
    })
      .then(function (r) {
        if (!r.ok) throw new Error('gh ' + r.status);
        return r.json();
      })
      .then(function (data) {
        var n = data.stargazers_count;
        if (typeof n !== 'number') return;
        writeCache(n);
        paintStars(n);
      })
      .catch(function () {});
  }

  /* ── TTS auto-loading ────────────────────────────────────────────────── */

  function ensureNarration() {
    if (window.__AIFS_TTS_VERSION === TTS_VERSION) return;
    if (document.querySelector('script[data-aifs-tts="' + TTS_VERSION + '"]')) return;
    var script = document.createElement('script');
    script.src = 'tts.js?v=' + TTS_VERSION;
    script.async = true;
    script.setAttribute('data-aifs-tts', TTS_VERSION);
    document.head.appendChild(script);
  }

  /* ── Current page highlighting ───────────────────────────────────────── */

  function syncCurrentPage() {
    var path = location.pathname.split('/').pop() || 'index.html';
    var links = document.querySelectorAll('.header-nav a, .header-priority-nav a');
    for (var i = 0; i < links.length; i++) {
      var href = links[i].getAttribute('href') || '';
      var linkPath = href.split('?')[0].split('#')[0];
      if (linkPath === path || (path === '' && linkPath === 'index.html')) {
        links[i].setAttribute('aria-current', 'page');
      }
    }
  }

  /* ── Init ────────────────────────────────────────────────────────────── */

  function init() {
    loadStars();
    ensureNarration();
    syncCurrentPage();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
