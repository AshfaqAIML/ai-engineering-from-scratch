/**
 * Server-side streak computation.
 *
 * Mirrors the client logic in site/streak.js so the dashboard and the API
 * agree. A day is a "reading day" once its accumulated minutes reach the
 * study threshold (5). The current streak counts consecutive days ending
 * today, or ending yesterday (today not yet locked).
 */
const STUDY_THRESHOLD_MINUTES = 5;

function formatDate(d) {
  return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
}

function daysBetween(a, b) {
  const da = new Date(a + 'T00:00:00');
  const db = new Date(b + 'T00:00:00');
  return Math.round((db - da) / 86400000);
}

/**
 * rows: [{ day: 'YYYY-MM-DD', minutes: number }]
 * today: optional client-local calendar day 'YYYY-MM-DD'. The server may run
 * in a different timezone than the reader, so the client anchors "today" by
 * passing the day it already reports read minutes against. Defaults to the
 * server's local day.
 * Returns { currentStreak, longestStreak, totalDays, lastReadDate,
 *           readingDays, dayMinutes }.
 */
function computeStreak(rows, today) {
  const dayMinutes = {};
  const readingDays = [];
  for (const row of rows || []) {
    const day = String(row.day);
    dayMinutes[day] = (dayMinutes[day] || 0) + Number(row.minutes || 0);
  }
  for (const day of Object.keys(dayMinutes)) {
    if (dayMinutes[day] >= STUDY_THRESHOLD_MINUTES) readingDays.push(day);
  }
  readingDays.sort();

  let currentStreak = 0;
  let longestStreak = 0;
  const anchor = today && /^\d{4}-\d{2}-\d{2}$/.test(today) ? new Date(today + 'T00:00:00') : new Date();
  const todayStr = formatDate(anchor);
  const yesterdayStr = formatDate(new Date(anchor.getTime() - 86400000));

  if (readingDays.length) {
    const todayIdx = readingDays.indexOf(todayStr);
    const startIdx = todayIdx >= 0 ? todayIdx : readingDays.indexOf(yesterdayStr);
    if (startIdx >= 0) {
      currentStreak = 1;
      for (let j = startIdx; j > 0; j--) {
        if (daysBetween(readingDays[j - 1], readingDays[j]) === 1) currentStreak++;
        else break;
      }
    }

    longestStreak = 1;
    let run = 1;
    for (let k = 1; k < readingDays.length; k++) {
      if (daysBetween(readingDays[k - 1], readingDays[k]) === 1) {
        run++;
        if (run > longestStreak) longestStreak = run;
      } else {
        run = 1;
      }
    }
    longestStreak = Math.max(longestStreak, currentStreak);
  }

  return {
    currentStreak,
    longestStreak,
    totalDays: readingDays.length,
    lastReadDate: readingDays.length ? readingDays[readingDays.length - 1] : '',
    readingDays,
    dayMinutes,
  };
}

module.exports = { computeStreak, STUDY_THRESHOLD_MINUTES };
