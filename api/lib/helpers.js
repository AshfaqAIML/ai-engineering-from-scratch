/**
 * Shared HTTP helpers for the AI Engineering from Scratch API.
 */

function json(res, status, body) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.end(JSON.stringify(body));
}

function ok(res, body) {
  json(res, 200, body || { ok: true });
}

function error(res, status, message) {
  json(res, status, { ok: false, error: message });
}

function methodNotAllowed(res) {
  json(res, 405, { ok: false, error: 'Method not allowed.' });
}

async function readBody(req) {
  return new Promise((resolve) => {
    let raw = '';
    req.on('data', (chunk) => {
      raw += chunk;
      if (raw.length > 512 * 1024) {
        req.destroy();
        resolve(null);
        return;
      }
    });
    req.on('end', () => {
      if (!raw) return resolve({});
      try {
        resolve(JSON.parse(raw));
      } catch (e) {
        resolve(null);
      }
    });
    req.on('error', () => resolve(null));
  });
}

function getCookies(req) {
  const header = req.headers.cookie || '';
  const out = {};
  header.split(';').forEach((part) => {
    const idx = part.indexOf('=');
    if (idx < 0) return;
    const key = part.slice(0, idx).trim();
    const value = part.slice(idx + 1).trim();
    if (key) out[key] = decodeURIComponent(value);
  });
  return out;
}

const SESSION_COOKIE = 'aifs_session';

function isSecureRequest(req) {
  return String(req.headers['x-forwarded-proto'] || '').split(',')[0].trim() === 'https';
}

function setSessionCookie(req, res, token, maxAgeSeconds) {
  const secure = isSecureRequest(req);
  const parts = [
    SESSION_COOKIE + '=' + encodeURIComponent(token),
    'Path=/',
    'HttpOnly',
    'SameSite=Lax',
    'Max-Age=' + maxAgeSeconds,
  ];
  if (secure) parts.push('Secure');
  res.setHeader('Set-Cookie', parts.join('; '));
}

function clearSessionCookie(res) {
  const parts = [SESSION_COOKIE + '=', 'Path=/', 'HttpOnly', 'SameSite=Lax', 'Max-Age=0'];
  res.setHeader('Set-Cookie', parts.join('; '));
}

module.exports = {
  json,
  ok,
  error,
  methodNotAllowed,
  readBody,
  getCookies,
  SESSION_COOKIE,
  setSessionCookie,
  clearSessionCookie,
  isSecureRequest,
};
