/**
 * Local-only progress tracker.
 *
 * Stores everything in the user's own browser (localStorage). No network,
 * no account, no server. Data never leaves the device.
 *
 * Schema (versioned so we can migrate later without nuking users):
 *
 *   aifs:progress:v1 = {
 *     lessons: {
 *       "<lesson-path>": {
 *         answers: { "<qid>": { picked: number, correct: boolean, t: number } },
 *         completedAt: number | null,
 *         visitedAt: number
 *       }
 *     },
 *     updatedAt: number
 *   }
 *
 * "<lesson-path>" matches the path used in lesson.html?path=... and in
 * data.js urls (e.g. "phases/00-setup-and-tooling/01-dev-environment").
 *
 * "<qid>" is "<stage>-q<index>" e.g. "pre-q0", to match the quiz renderer.
 */
(function () {
  var STORAGE_KEY = 'aifs:progress:v1';
  var listeners = [];

  function emptyState() {
    return { lessons: {}, updatedAt: 0 };
  }

  function read() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return emptyState();
      var parsed = JSON.parse(raw);
      if (!parsed || typeof parsed !== 'object' || !parsed.lessons) return emptyState();
      return parsed;
    } catch (e) {
      return emptyState();
    }
  }

  function write(state) {
    state.updatedAt = Date.now();
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      // quota or disabled storage; fail silently
    }
    for (var i = 0; i < listeners.length; i++) {
      try { listeners[i](state); } catch (_) {}
    }
  }

  function ensureLesson(state, path) {
    if (!state.lessons[path]) {
      state.lessons[path] = { answers: {}, completedAt: null, visitedAt: 0 };
    }
    return state.lessons[path];
  }

  function recordVisit(path) {
    if (!path) return;
    var state = read();
    var lesson = ensureLesson(state, path);
    lesson.visitedAt = Date.now();
    write(state);
  }

  function recordAnswer(path, qid, picked, correct) {
    if (!path || !qid) return;
    var state = read();
    var lesson = ensureLesson(state, path);
    lesson.answers[qid] = { picked: picked, correct: !!correct, t: Date.now() };
    write(state);
  }

  function markLessonComplete(path) {
    if (!path) return;
    var state = read();
    var lesson = ensureLesson(state, path);
    if (!lesson.completedAt) {
      lesson.completedAt = Date.now();
      write(state);
    }
  }

  function unmarkLessonComplete(path) {
    if (!path) return;
    var state = read();
    if (state.lessons[path] && state.lessons[path].completedAt) {
      state.lessons[path].completedAt = null;
      write(state);
    }
  }

  function getLessonProgress(path) {
    if (!path) return null;
    var state = read();
    return state.lessons[path] || { answers: {}, completedAt: null, visitedAt: 0 };
  }

  function isLessonComplete(path) {
    var lp = getLessonProgress(path);
    return !!(lp && lp.completedAt);
  }

  /**
   * Given a list of lesson urls (full GitHub urls from data.js), count how
   * many the user has completed. Match by the trailing "phases/.../..." path.
   */
  function countCompletedFromUrls(urls) {
    var state = read();
    var n = 0;
    for (var i = 0; i < urls.length; i++) {
      var path = extractPath(urls[i]);
      if (path && state.lessons[path] && state.lessons[path].completedAt) n++;
    }
    return n;
  }

  function extractPath(url) {
    if (!url) return '';
    var m = String(url).match(/(phases\/[^/]+\/[^/]+)\/?/);
    return m ? m[1] : '';
  }

  function totalCompleted() {
    var state = read();
    var n = 0;
    for (var k in state.lessons) {
      if (state.lessons[k].completedAt) n++;
    }
    return n;
  }

  /**
   * Import server state (from GET /api/auth/me) into the local store so the
   * UI reflects the account's progress on any device. Server data wins, but
   * never reduces visitedAt.
   */
  function hydrate(serverProgress) {
    if (!serverProgress || typeof serverProgress !== 'object') return;
    var state = read();
    for (var path in serverProgress) {
      if (!serverProgress.hasOwnProperty(path)) continue;
      var sp = serverProgress[path];
      if (!sp || !sp.lastVisited) continue;
      var lesson = ensureLesson(state, path);
      for (var qid in (sp.answers || {})) {
        lesson.answers[qid] = sp.answers[qid];
      }
      if (sp.completedAt) lesson.completedAt = sp.completedAt;
      lesson.visitedAt = Math.max(lesson.visitedAt || 0, sp.lastVisited || 0);
    }
    write(state);
  }

  function reset() {
    try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
    for (var i = 0; i < listeners.length; i++) {
      try { listeners[i](emptyState()); } catch (_) {}
    }
  }

  function onChange(fn) {
    if (typeof fn === 'function') listeners.push(fn);
  }

  // Cross-tab sync: if user clears or updates progress in another tab,
  // refresh listeners here too.
  window.addEventListener('storage', function (e) {
    if (e.key !== STORAGE_KEY) return;
    var state = read();
    for (var i = 0; i < listeners.length; i++) {
      try { listeners[i](state); } catch (_) {}
    }
  });

  window.AIFSProgress = {
    recordVisit: recordVisit,
    recordAnswer: recordAnswer,
    markLessonComplete: markLessonComplete,
    unmarkLessonComplete: unmarkLessonComplete,
    getLessonProgress: getLessonProgress,
    isLessonComplete: isLessonComplete,
    countCompletedFromUrls: countCompletedFromUrls,
    extractPath: extractPath,
    totalCompleted: totalCompleted,
    hydrate: hydrate,
    reset: reset,
    onChange: onChange,
  };
})();
