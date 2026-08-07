/**
 * Reading streak tracker.
 *
 * Stores streak data per user in localStorage. Tracks consecutive reading
 * days, total reading days, longest streak, and today's status.
 *
 * Schema (versioned):
 *
 *   aifs:streak:v1 = {
 *     "<user-key>": {
 *       currentStreak: number,
 *       longestStreak: number,
 *       totalDays: number,
 *       lastReadDate: string,   // "YYYY-MM-DD"
 *       readingDays: string[],  // ["2026-08-01", "2026-08-02", ...]
 *       dayMinutes: {}          // { "YYYY-MM-DD": minutes read that day }
 *     }
 *   }
 *
 * A day counts as a reading day once the user accumulates at least
 * MIN_READING_MINUTES of reading across any lessons that day. The threshold
 * is configurable via setMinReadingMinutes().
 */
(function () {
  var STORAGE_KEY = 'aifs:streak:v1';
  var MIN_READING_MINUTES = 5;
  var listeners = [];

  function userKey() {
    if (window.AIFSAuth && window.AIFSAuth.isLoggedIn()) {
      var u = window.AIFSAuth.currentUser();
      return u ? u.email : 'anonymous';
    }
    return 'anonymous';
  }

  function readAll() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      return {};
    }
  }

  function writeAll(data) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {}
    notifyListeners();
  }

  function getStreak() {
    var all = readAll();
    var key = userKey();
    return all[key] || { currentStreak: 0, longestStreak: 0, totalDays: 0, lastReadDate: '', readingDays: [], dayMinutes: {} };
  }

  function saveStreak(streak) {
    var all = readAll();
    all[userKey()] = streak;
    writeAll(all);
  }

  function todayStr() {
    var d = new Date();
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  }

  function dateStr(ts) {
    var d = new Date(ts);
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  }

  function daysBetween(a, b) {
    var da = new Date(a + 'T00:00:00');
    var db = new Date(b + 'T00:00:00');
    return Math.round((db - da) / 86400000);
  }

  function calculateStreak(readingDays) {
    if (!readingDays || !readingDays.length) {
      return { currentStreak: 0, longestStreak: 0, totalDays: 0 };
    }

    var sorted = readingDays.slice().sort();
    var unique = [];
    for (var i = 0; i < sorted.length; i++) {
      if (i === 0 || sorted[i] !== sorted[i - 1]) unique.push(sorted[i]);
    }

    var today = todayStr();
    var yesterday = dateStr(Date.now() - 86400000);

    var currentStreak = 0;
    var todayIdx = unique.indexOf(today);
    var yesterdayIdx = unique.indexOf(yesterday);

    if (todayIdx >= 0) {
      currentStreak = 1;
      for (var j = todayIdx; j > 0; j--) {
        if (daysBetween(unique[j - 1], unique[j]) === 1) currentStreak++;
        else break;
      }
    } else if (yesterdayIdx >= 0) {
      currentStreak = 1;
      for (var j = yesterdayIdx; j > 0; j--) {
        if (daysBetween(unique[j - 1], unique[j]) === 1) currentStreak++;
        else break;
      }
    }

    var longestStreak = 1;
    var run = 1;
    for (var k = 1; k < unique.length; k++) {
      if (daysBetween(unique[k - 1], unique[k]) === 1) {
        run++;
        if (run > longestStreak) longestStreak = run;
      } else {
        run = 1;
      }
    }
    if (unique.length === 0) longestStreak = 0;

    return {
      currentStreak: currentStreak,
      longestStreak: Math.max(longestStreak, currentStreak),
      totalDays: unique.length
    };
  }

  function updateStreak(minutesRead) {
    if (typeof minutesRead !== 'number' || minutesRead < 0) return getStreak();

    var streak = getStreak();
    var today = todayStr();

    if (!streak.dayMinutes) streak.dayMinutes = {};
    streak.dayMinutes[today] = (streak.dayMinutes[today] || 0) + minutesRead;

    if (streak.lastReadDate !== today && streak.dayMinutes[today] >= MIN_READING_MINUTES) {
      var hadYesterday = streak.lastReadDate === dateStr(Date.now() - 86400000);

      if (!streak.readingDays) streak.readingDays = [];
      if (streak.readingDays.indexOf(today) < 0) {
        streak.readingDays.push(today);
      }

      if (hadYesterday) {
        streak.currentStreak += 1;
      } else {
        streak.currentStreak = 1;
      }

      streak.lastReadDate = today;

      var stats = calculateStreak(streak.readingDays);
      streak.currentStreak = stats.currentStreak;
      streak.longestStreak = Math.max(streak.longestStreak, stats.longestStreak);
      streak.totalDays = stats.totalDays;
    }

    saveStreak(streak);
    return streak;
  }

  function resetStreak() {
    var all = readAll();
    delete all[userKey()];
    writeAll(all);
  }

  /**
   * Import a server streak (from GET /api/auth/me) for a user key, replacing
   * whatever that browser had cached for the same account. Server wins so
   * minutes are never double-counted across devices.
   */
  function hydrate(userKeyToUse, streak) {
    if (!userKeyToUse || !streak || typeof streak !== 'object') return;
    var all = readAll();
    all[userKeyToUse] = {
      currentStreak: streak.currentStreak || 0,
      longestStreak: streak.longestStreak || 0,
      totalDays: streak.totalDays || 0,
      lastReadDate: streak.lastReadDate || '',
      readingDays: Array.isArray(streak.readingDays) ? streak.readingDays : [],
      dayMinutes: streak.dayMinutes && typeof streak.dayMinutes === 'object' ? streak.dayMinutes : {}
    };
    writeAll(all);
  }

  function getLongestStreak() {
    return getStreak().longestStreak;
  }

  function getTodayStatus() {
    var streak = getStreak();
    return streak.lastReadDate === todayStr();
  }

  function getTodayMinutes() {
    var streak = getStreak();
    return Math.round((streak.dayMinutes || {})[todayStr()] || 0);
  }

  function setMinReadingMinutes(n) {
    if (typeof n === 'number' && n > 0) MIN_READING_MINUTES = n;
  }

  function getMinReadingMinutes() {
    return MIN_READING_MINUTES;
  }

  function onChange(fn) {
    if (typeof fn === 'function') listeners.push(fn);
  }

  function notifyListeners() {
    var streak = getStreak();
    for (var i = 0; i < listeners.length; i++) {
      try { listeners[i](streak); } catch (_) {}
    }
  }

  window.addEventListener('storage', function (e) {
    if (e.key !== STORAGE_KEY) return;
    notifyListeners();
  });

  window.AIFSStreak = {
    getStreak: getStreak,
    updateStreak: updateStreak,
    resetStreak: resetStreak,
    hydrate: hydrate,
    getLongestStreak: getLongestStreak,
    getTodayStatus: getTodayStatus,
    getTodayMinutes: getTodayMinutes,
    calculateStreak: calculateStreak,
    setMinReadingMinutes: setMinReadingMinutes,
    getMinReadingMinutes: getMinReadingMinutes,
    onChange: onChange
  };
})();
