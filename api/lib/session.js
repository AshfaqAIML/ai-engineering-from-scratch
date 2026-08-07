/**
 * Session management for the AI Engineering from Scratch API.
 *
 * Sessions are opaque random tokens stored in an HttpOnly cookie. Only the
 * SHA-256 digest is kept in Postgres, so a database leak never exposes a live
 * session token. Expiry slides: each authenticated request refreshes the
 * lifetime (at most once a day, to keep writes rare).
 */
const crypto = require('crypto');
const helpers = require('./helpers');

const SESSION_TTL_MS = 30 * 24 * 60 * 60 * 1000; // 30 days
const REFRESH_THRESHOLD_MS = 24 * 60 * 60 * 1000; // extend at most daily

function tokenHash(token) {
  return crypto.createHash('sha256').update(token).digest('hex');
}

function newToken() {
  return crypto.randomBytes(32).toString('base64url');
}

async function createSession(req, res, userId, client) {
  const token = newToken();
  const now = Date.now();
  await client.query(
    'INSERT INTO sessions (user_id, token_hash, created_at, expires_at, last_seen_at) VALUES ($1, $2, $3, $4, $5)',
    [userId, tokenHash(token), now, now + SESSION_TTL_MS, now]
  );
  helpers.setSessionCookie(req, res, token, Math.floor(SESSION_TTL_MS / 1000));
  return token;
}

/**
 * Resolve the session cookie to a user row, or null. Optionally extends the
 * session expiry when it is close to sliding.
 */
async function requireUser(req, client) {
  const cookies = helpers.getCookies(req);
  const token = cookies[helpers.SESSION_COOKIE];
  if (!token) return null;

  const now = Date.now();
  const res = await client.query(
    `SELECT u.id, u.email, u.name, u.provider, u.picture, u.created_at,
            s.id AS session_id, s.expires_at, s.last_seen_at
       FROM sessions s
       JOIN users u ON u.id = s.user_id
      WHERE s.token_hash = $1 AND s.expires_at > $2`,
    [tokenHash(token), now]
  );
  if (!res.rows.length) return null;

  const row = res.rows[0];
  if (!row.last_seen_at || now - row.last_seen_at > REFRESH_THRESHOLD_MS) {
    await client.query(
      'UPDATE sessions SET last_seen_at = $1, expires_at = $2 WHERE id = $3',
      [now, now + SESSION_TTL_MS, row.session_id]
    );
  }

  return {
    id: row.id,
    email: row.email,
    name: row.name,
    provider: row.provider,
    picture: row.picture,
    createdAt: row.created_at,
  };
}

async function destroySession(req, client) {
  const cookies = helpers.getCookies(req);
  const token = cookies[helpers.SESSION_COOKIE];
  if (!token) return;
  await client.query('DELETE FROM sessions WHERE token_hash = $1', [tokenHash(token)]);
}

module.exports = { createSession, requireUser, destroySession, tokenHash, SESSION_TTL_MS };
