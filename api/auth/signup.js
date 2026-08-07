/**
 * POST /api/auth/signup
 * Creates a password account and starts a session.
 */
const crypto = require('crypto');
const { getPool, ensureSchema } = require('../lib/db');
const helpers = require('../lib/helpers');
const session = require('../lib/session');

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

module.exports = async (req, res) => {
  if (req.method !== 'POST') return helpers.methodNotAllowed(res);
  const body = await helpers.readBody(req);
  if (!body) return helpers.error(res, 400, 'Invalid request body.');

  const email = String(body.email || '').trim().toLowerCase();
  const name = String(body.name || '').trim();
  const password = body.password;

  if (!EMAIL_RE.test(email)) return helpers.error(res, 400, 'Valid email is required.');
  if (!name) return helpers.error(res, 400, 'Name is required.');
  if (typeof password !== 'string' || password.length < 6) {
    return helpers.error(res, 400, 'Password must be at least 6 characters.');
  }

  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto.scryptSync(password, salt, 64).toString('hex');

  try {
    await ensureSchema();
    const client = await getPool().connect();
    try {
      const existing = await client.query('SELECT id FROM users WHERE email = $1', [email]);
      if (existing.rows.length) {
        return helpers.error(res, 409, 'An account with this email already exists.');
      }
      const ins = await client.query(
        'INSERT INTO users (email, name, provider, pw_hash, pw_salt) VALUES ($1, $2, $3, $4, $5) RETURNING id, email, name',
        [email, name, 'password', hash, salt]
      );
      await session.createSession(req, res, ins.rows[0].id, client);
      return helpers.json(res, 201, {
        ok: true,
        user: { email: ins.rows[0].email, name: ins.rows[0].name, provider: 'password', picture: '' },
      });
    } finally {
      client.release();
    }
  } catch (err) {
    console.error('signup error', err);
    return helpers.error(res, 500, 'Signup failed.');
  }
};
