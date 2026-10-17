/**
 * Single entry point for the reader account API.
 *
 * Vercel's Hobby plan allows at most 12 serverless functions per deployment and
 * counts one per file under api/, so the five auth endpoints used to live as
 * separate files. They are pure request handlers with no shared mutable state,
 * so they are dispatched here from the request path instead. The public URLs are
 * unchanged: /api/auth/login, /signup, /google, /logout and /me all still work,
 * because vercel.json rewrites /api/auth/<action> to this function.
 *
 * Progress stays its own function (POST /api/progress) since it is not part of
 * the auth surface.
 */
const { URL } = require('url');

const handlers = {
  login: require('../lib/auth/handlers/login'),
  signup: require('../lib/auth/handlers/signup'),
  google: require('../lib/auth/handlers/google'),
  logout: require('../lib/auth/handlers/logout'),
  me: require('../lib/auth/handlers/me'),
};

function actionFrom(req) {
  // Prefer the explicit rewrite marker, then the raw path tail, then ?action=.
  if (req.query && req.query.action) return String(req.query.action);
  const raw = req.url || '';
  try {
    const parsed = new URL(raw, 'http://internal');
    const segs = parsed.pathname.split('/').filter(Boolean);
    const i = segs.indexOf('auth');
    if (i >= 0 && segs[i + 1]) return decodeURIComponent(segs[i + 1]);
    const q = parsed.searchParams.get('action');
    if (q) return q;
  } catch (_) {
    const m = raw.match(/\/api\/auth\/([a-z]+)/i);
    if (m) return m[1];
  }
  return '';
}

module.exports = async function authRouter(req, res) {
  const action = actionFrom(req);
  const handler = handlers[action];

  if (!handler) {
    res.statusCode = action ? 405 : 404;
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.setHeader('Allow', 'GET, POST');
    res.end(JSON.stringify({
      ok: false,
      error: action
        ? `Unknown auth action "${action}".`
        : 'Missing auth action. Use /api/auth/login, /signup, /google, /logout or /me.',
    }));
    return;
  }

  await handler(req, res);
};