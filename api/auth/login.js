/**
 * POST /api/auth/login
 * Verifies a password account and starts a session.
 */
const crypto = require('crypto');
const { getPool, ensureSchema } = require('../lib/db');
const helpers = require('../lib/helpers');
const session = require('../lib/session');

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function verifyPassword(password, salt, expectedHash) {
  const candidate = crypto.scryptSync(password, salt, 64);
  const expected = Buffer.from(expectedHash, 'hex');
  return candidate.length === expected.length && crypto.timingSafeEqual(candidate, expected);
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') return helpers.methodNotAllowed(res);
  const body = await helpers.readBody(req);
  if (!body) return helpers.error(res, 400, 'Invalid request body.');

  const email = String(body.email || '').trim().toLowerCase();
  if (!EMAIL_RE.test(email)) return helpers.error(res, 400, 'Valid email is required.');
  if (typeof body.password !== 'string' || !body.password) {
    return helpers.error(res, 400, 'Password is required.');
  }

  try {
    await ensureSchema();
    const client = await getPool().connect();
    try {
      const found = await client.query(
        'SELECT id, email, name, provider, picture, pw_hash, pw_salt, created_at FROM users WHERE email = $1',
        [email]
      );
      const user = found.rows[0];
      if (!user) return helpers.error(res, 404, 'No account found with this email.');
      if (!user.pw_hash) {
        return helpers.error(res, 400, 'This email uses Google sign-in. Use "Continue with Google" instead.');
      }
      if (!verifyPassword(body.password, user.pw_salt, user.pw_hash)) {
        return helpers.error(res, 401, 'Incorrect password.');
      }
      await session.createSession(req, res, user.id, client);
      return helpers.ok(res, {
        user: {
          email: user.email,
          name: user.name,
          provider: user.provider,
          picture: user.picture || '',
          createdAt: user.created_at,
        },
      });
    } finally {
      client.release();
    }
  } catch (err) {
    console.error('login error', err);
    return helpers.error(res, 500, 'Login failed.');
  }
};
