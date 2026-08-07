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

let pool = null;

function getPool() {
  if (!pool) {
    pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      max: 2,
      idleTimeoutMillis: 15000,
      connectionTimeoutMillis: 8000,
      ssl: { rejectUnauthorized: false },
    });
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
