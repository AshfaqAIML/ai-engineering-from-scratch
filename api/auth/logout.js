/**
 * POST /api/auth/logout
 * Destroys the current session (best effort) and clears the cookie.
 */
const { getPool, ensureSchema } = require('../lib/db');
const helpers = require('../lib/helpers');
const session = require('../lib/session');

module.exports = async (req, res) => {
  if (req.method !== 'POST') return helpers.methodNotAllowed(res);
  try {
    await ensureSchema();
    const client = await getPool().connect();
    try {
      await session.destroySession(req, client);
    } finally {
      client.release();
    }
  } catch (err) {
    console.error('logout error', err);
  }
  helpers.clearSessionCookie(res);
  return helpers.ok(res);
};
