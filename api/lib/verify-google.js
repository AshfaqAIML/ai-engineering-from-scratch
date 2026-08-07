/**
 * Server-side verification of Google ID tokens (RS256 JWTs).
 *
 * Google Identity Services signs the credential JWT with its public keys,
 * published at https://www.googleapis.com/oauth2/v3/certs. We fetch the JWKS,
 * pick the key named by the token's "kid", verify the signature with Node's
 * built-in crypto (no extra dependency), and check iss/aud/exp. This replaces
 * the old client-side decode, so a forged token can no longer log in.
 */
const crypto = require('crypto');

const JWKS_URL = 'https://www.googleapis.com/oauth2/v3/certs';
const ALLOWED_ISS = new Set(['accounts.google.com', 'https://accounts.google.com']);
const CLOCK_SKEW_S = 300;

const DEFAULT_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || '1036316303591-nf7jv6o2or5oob92u9atrom89i6klanj.apps.googleusercontent.com';

let jwksCache = { keys: null, fetchedAt: 0 };
const JWKS_TTL_MS = 60 * 60 * 1000;

function base64urlDecode(str) {
  const s = String(str).replace(/-/g, '+').replace(/_/g, '/');
  const padded = s + '='.repeat((4 - (s.length % 4)) % 4);
  return Buffer.from(padded, 'base64');
}

function decodeSegment(segment) {
  try {
    return JSON.parse(base64urlDecode(segment).toString('utf8'));
  } catch (e) {
    return null;
  }
}

async function fetchJwks() {
  if (jwksCache.keys && Date.now() - jwksCache.fetchedAt < JWKS_TTL_MS) {
    return jwksCache.keys;
  }
  const res = await fetch(JWKS_URL, { headers: { Accept: 'application/json' } });
  if (!res.ok) throw new Error('Failed to fetch Google JWKS: ' + res.status);
  const body = await res.json();
  jwksCache = { keys: body.keys || [], fetchedAt: Date.now() };
  return jwksCache.keys;
}

/**
 * Verify a Google ID token. Returns the decoded payload on success, else null.
 */
async function verifyIdToken(token) {
  if (typeof token !== 'string' || !token) return null;
  const parts = token.split('.');
  if (parts.length !== 3) return null;

  const header = decodeSegment(parts[0]);
  const payload = decodeSegment(parts[1]);
  if (!header || !payload || header.alg !== 'RS256' || !header.kid) return null;

  const clientId = process.env.GOOGLE_CLIENT_ID || DEFAULT_CLIENT_ID;

  if (payload.aud !== clientId) return null;
  if (!ALLOWED_ISS.has(payload.iss)) return null;
  if (typeof payload.exp !== 'number' || payload.exp < Math.floor(Date.now() / 1000) - CLOCK_SKEW_S) {
    return null;
  }
  if (!payload.email) return null;

  let keys;
  try {
    keys = await fetchJwks();
  } catch (e) {
    return null;
  }
  const key = keys.find((k) => k.kid === header.kid && k.kty === 'RSA');
  if (!key) return null;

  try {
    const publicKey = crypto.createPublicKey({ key, format: 'jwk' });
    const signingInput = parts[0] + '.' + parts[1];
    const signature = Buffer.from(parts[2], 'base64url');
    const valid = crypto.verify('RSA-SHA256', Buffer.from(signingInput, 'utf8'), publicKey, signature);
    if (!valid) return null;
  } catch (e) {
    return null;
  }

  return payload;
}

module.exports = { verifyIdToken };
