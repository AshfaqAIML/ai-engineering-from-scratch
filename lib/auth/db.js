/**
 * Shared Postgres access for the AI Engineering from Scratch API.
 *
 * Uses a small, lazy connection pool per serverless instance against Neon
 * Postgres. `ensureSchema()` is idempotent and safe to call from every
 * function on cold start — CREATE TABLE IF NOT EXISTS makes concurrent cold
 * starts harmless.
 *
 * Schema notes:
 *  - users:   one row per account (email is the natural key; a stable BIGSERIAL
 *             id is the FK everywhere else so emails can change).
 *  - sessions: opaque random token stored as a SHA-256 hex digest. The cookie
 *             only ever carries the raw token; the DB never stores it raw.
 *  - progress: one row per (user, lesson-path). answers is a JSONB map of
 *             quiz question -> {picked, correct, t}; ON CONFLICT merges it.
 *  - study_days: one row per (user, calendar day) accumulating reading
 *             minutes, used to compute streaks. A day counts once minutes
 *             reach the study threshold (5).
 */
const { Pool } = require('pg');

// Keep DATE columns as the 'YYYY-MM-DD' string Postgres sends. The default
// parser returns a JS Date, whose String() renders as "Fri Aug 07" and whose
// toISOString() can shift the calendar day across timezones — both break the
// streak day-key matching.
require('pg').types.setTypeParser(1082, (val) => val);

let pool = null;

function isTransientConnectError(err) {
  const msg = (err && (err.message || err.code)) || '';
  return /connection terminated|ECONNRESET|connection refused|timeout/i.test(msg);
}

// Neon free-tier computes autosuspend after idle. The first connection after
// wake-up can fail while the compute resumes, so acquire with one bounded
// retry instead of surfacing a 500 to the reader.
class RetryingPool extends Pool {
  async connect(...args) {
    try {
      return await super.connect(...args);
    } catch (err) {
      if (isTransientConnectError(err)) {
        await new Promise((r) => setTimeout(r, 2000));
        return super.connect(...args);
      }
      throw err;
    }
  }
}

function getPool() {
  if (!pool) {
    // The node pg driver does not implement SCRAM channel binding, so Neon
    // URLs carrying channel_binding=require must have that param stripped or
    // the connection is rejected. TLS is still enforced via ssl below.
    const raw = process.env.DATABASE_URL || '';
    const connectionString = raw.replace(/([?&])channel_binding=[^&]+(&|$)/, (m, pre, post) =>
      pre === '&' && post ? '&' : ''
    ).replace(/[?&]$/, '');
    pool = new RetryingPool({
      connectionString,
      max: 2,
      idleTimeoutMillis: 15000,
      connectionTimeoutMillis: 30000,
      ssl: { rejectUnauthorized: false },
    });
    // Idle sockets the server closes mid-request must not crash the process.
    pool.on('error', () => {});
  }
  return pool;
}

const SCHEMA_SQL = `
CREATE TABLE IF NOT EXISTS users (
  id         BIGSERIAL PRIMARY KEY,
  email      TEXT NOT NULL UNIQUE,
  name       TEXT NOT NULL DEFAULT '',
  provider   TEXT NOT NULL DEFAULT 'password',
  google_sub TEXT,
  picture    TEXT NOT NULL DEFAULT '',
  pw_hash    TEXT,
  pw_salt    TEXT,
  created_at BIGINT NOT NULL DEFAULT (extract(epoch FROM now()) * 1000)::bigint,
  updated_at BIGINT NOT NULL DEFAULT (extract(epoch FROM now()) * 1000)::bigint
);

CREATE TABLE IF NOT EXISTS sessions (
  id           BIGSERIAL PRIMARY KEY,
  user_id      BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  token_hash   TEXT NOT NULL UNIQUE,
  created_at   BIGINT NOT NULL DEFAULT (extract(epoch FROM now()) * 1000)::bigint,
  expires_at   BIGINT NOT NULL,
  last_seen_at BIGINT
);
CREATE INDEX IF NOT EXISTS idx_sessions_user ON sessions(user_id);

CREATE TABLE IF NOT EXISTS progress (
  user_id      BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  path         TEXT NOT NULL,
  section_id   TEXT NOT NULL DEFAULT '',
  scroll_pct   REAL NOT NULL DEFAULT 0,
  read_seconds BIGINT NOT NULL DEFAULT 0,
  completed    BOOLEAN NOT NULL DEFAULT FALSE,
  completed_at BIGINT,
  answers      JSONB NOT NULL DEFAULT '{}'::jsonb,
  last_visited BIGINT NOT NULL,
  PRIMARY KEY (user_id, path)
);

CREATE TABLE IF NOT EXISTS study_days (
  user_id BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  day     DATE NOT NULL,
  minutes REAL NOT NULL DEFAULT 0,
  PRIMARY KEY (user_id, day)
);
`;

async function ensureSchema() {
  if (!process.env.DATABASE_URL) throw new Error('DATABASE_URL is not set');
  await getPool().query(SCHEMA_SQL);
}

module.exports = { getPool, ensureSchema };
