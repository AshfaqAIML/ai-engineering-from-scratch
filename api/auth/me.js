/**
 * GET /api/auth/me
 * Returns the signed-in user plus their full progress snapshot and streak.
 * The frontend hydrates its local caches from this response on login and on
 * page load, which is what makes "resume where I left off" work on any device.
 */
const { getPool, ensureSchema } = require('../lib/db');
const helpers = require('../lib/helpers');
const session = require('../lib/session');
const streakLib = require('../lib/streak');

module.exports = async (req, res) => {
  if (req.method !== 'GET') return helpers.methodNotAllowed(res);
  try {
    await ensureSchema();
    const client = await getPool().connect();
    try {
      const user = await session.requireUser(req, client);
      if (!user) return helpers.error(res, 401, 'Not signed in.');

      const [progressRows, studyRows] = await Promise.all([
        client.query('SELECT path, section_id, scroll_pct, read_seconds, completed, completed_at, answers, last_visited FROM progress WHERE user_id = $1', [user.id]),
        client.query('SELECT day, minutes FROM study_days WHERE user_id = $1', [user.id]),
      ]);

      const progress = {};
      for (const row of progressRows.rows) {
        progress[row.path] = {
          sectionId: row.section_id || '',
          scrollPct: Math.round(row.scroll_pct || 0),
          readSeconds: row.read_seconds || 0,
          completed: !!row.completed,
          completedAt: row.completed_at || null,
          answers: row.answers || {},
          lastVisited: row.last_visited,
        };
      }

      const studyDays = studyRows.rows.map((r) => ({ day: r.day, minutes: r.minutes }));

      return helpers.ok(res, {
        user: {
          email: user.email,
          name: user.name,
          provider: user.provider,
          picture: user.picture || '',
          createdAt: user.createdAt,
        },
        progress,
        streak: streakLib.computeStreak(studyDays),
      });
    } finally {
      client.release();
    }
  } catch (err) {
    console.error('me error', err);
    return helpers.error(res, 500, 'Failed to load account data.');
  }
};
