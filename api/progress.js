/**
 * POST /api/progress   (also accepts PUT)
 *
 * Upserts reading progress for one or more lessons and accumulates study
 * minutes for the day, all inside a single transaction. The client debounces
 * these calls and also fires one final beacon on page unload.
 *
 * Body:
 * {
 *   "items": [
 *     { "path": "phases/01-x/02-y",
 *       "deltaSeconds": 12,          // incremental read time since last sync
 *       "scrollPct": 42,             // absolute 0-100
 *       "sectionId": "learning-objectives",
 *       "completed": false,
 *       "answers": { "pre-q0": { "picked": 1, "correct": true, "t": 123 } } }
 *   ],
 *   "deltaMinutes": 0.5,             // incremental reading minutes today
 *   "day": "2026-08-07"              // client-local calendar day
 * }
 *
 * Duplicate protection: progress has a composite primary key (user_id, path),
 * so re-sends are idempotent; scroll_pct only grows; read_seconds/minutes are
 * deltas and answers merge via jsonb.
 */
const { getPool, ensureSchema } = require('./lib/db');
const helpers = require('./lib/helpers');
const session = require('./lib/session');

const PATH_RE = /^phases\/[a-zA-Z0-9._-]+\/[a-zA-Z0-9._-]+$/;
const DAY_RE = /^\d{4}-\d{2}-\d{2}$/;

function clamp(n, lo, hi, fallback) {
  const v = Number(n);
  if (!Number.isFinite(v)) return fallback;
  return Math.min(hi, Math.max(lo, v));
}

module.exports = async (req, res) => {
  if (req.method !== 'POST' && req.method !== 'PUT') return helpers.methodNotAllowed(res);
  const body = await helpers.readBody(req);
  if (!body) return helpers.error(res, 400, 'Invalid request body.');

  const items = Array.isArray(body.items) ? body.items : [];
  if (!items.length) return helpers.ok(res);

  const deltaMinutes = clamp(body.deltaMinutes, 0, 600, 0);
  const day = DAY_RE.test(body.day || '') ? body.day : null;
  const now = Date.now();

  try {
    await ensureSchema();
    const client = await getPool().connect();
    try {
      const user = await session.requireUser(req, client);
      if (!user) return helpers.error(res, 401, 'Not signed in.');

      await client.query('BEGIN');
      try {
        for (const item of items.slice(0, 200)) {
          const path = String(item.path || '');
          if (!PATH_RE.test(path)) continue;

          const deltaSeconds = Math.round(clamp(item.deltaSeconds, 0, 3600, 0));
          const scrollPct = clamp(item.scrollPct, 0, 100, 0);
          const sectionId = String(item.sectionId || '').slice(0, 200);
          const completed = !!item.completed;
          const answers = item.answers && typeof item.answers === 'object' ? JSON.stringify(item.answers) : null;

          await client.query(
            `INSERT INTO progress (user_id, path, section_id, scroll_pct, read_seconds, completed, completed_at, answers, last_visited)
             VALUES ($1, $2, $3, $4, $5, $6, CASE WHEN $6 THEN $8 ELSE NULL END, COALESCE($7::jsonb, '{}'::jsonb), $8)
             ON CONFLICT (user_id, path) DO UPDATE SET
               section_id = CASE WHEN EXCLUDED.section_id <> '' THEN EXCLUDED.section_id ELSE progress.section_id END,
               scroll_pct = GREATEST(progress.scroll_pct, EXCLUDED.scroll_pct),
               read_seconds = progress.read_seconds + EXCLUDED.read_seconds,
               completed = progress.completed OR EXCLUDED.completed,
               completed_at = COALESCE(progress.completed_at, EXCLUDED.completed_at),
               answers = progress.answers || EXCLUDED.answers,
               last_visited = EXCLUDED.last_visited`,
            [user.id, path, sectionId, scrollPct, deltaSeconds, completed, answers, now]
          );
        }

        if (day && deltaMinutes > 0) {
          await client.query(
            `INSERT INTO study_days (user_id, day, minutes)
             VALUES ($1, $2, $3)
             ON CONFLICT (user_id, day) DO UPDATE SET
               minutes = study_days.minutes + EXCLUDED.minutes`,
            [user.id, day, deltaMinutes]
          );
        }

        await client.query('COMMIT');
      } catch (err) {
        await client.query('ROLLBACK');
        throw err;
      }
      return helpers.ok(res);
    } finally {
      client.release();
    }
  } catch (err) {
    console.error('progress error', err);
    return helpers.error(res, 500, 'Failed to save progress.');
  }
};
