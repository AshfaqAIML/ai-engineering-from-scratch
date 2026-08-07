/**
 * POST /api/auth/google
 * Verifies a Google ID token server-side and logs the user in, creating the
 * account on first sign-in (linking a Google login onto a prior password
 * account keeps the password method working).
 */
const { getPool, ensureSchema } = require('../lib/db');
const helpers = require('../lib/helpers');
const session = require('../lib/session');
const { verifyIdToken } = require('../lib/verify-google');

module.exports = async (req, res) => {
  if (req.method !== 'POST') return helpers.methodNotAllowed(res);
  const body = await helpers.readBody(req);
  if (!body || typeof body.credential !== 'string' || !body.credential) {
    return helpers.error(res, 400, 'Google credential is required.');
  }

  let payload;
  try {
    payload = await verifyIdToken(body.credential);
  } catch (err) {
    console.error('google verify error', err);
    return helpers.error(res, 500, 'Google verification failed.');
  }
  if (!payload) return helpers.error(res, 401, 'Invalid Google credential.');

  const email = String(payload.email || '').trim().toLowerCase();
  if (!email) return helpers.error(res, 400, 'Google did not return a valid email.');

  const name = String(payload.name || payload.given_name || email.split('@')[0]).trim() || email;
  const picture = payload.picture || '';

  try {
    await ensureSchema();
    const client = await getPool().connect();
    try {
      const upsert = await client.query(
        `INSERT INTO users (email, name, provider, google_sub, picture)
         VALUES ($1, $2, 'google', $3, $4)
         ON CONFLICT (email) DO UPDATE SET
           name = EXCLUDED.name,
           provider = 'google',
           google_sub = EXCLUDED.google_sub,
           picture = EXCLUDED.picture,
           updated_at = (extract(epoch FROM now()) * 1000)::bigint
         RETURNING id, email, name, provider, picture, created_at`,
        [email, name, payload.sub, picture]
      );
      const user = upsert.rows[0];
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
    console.error('google signin error', err);
    return helpers.error(res, 500, 'Google sign-in failed.');
  }
};
