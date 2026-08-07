/**
 * Account and session handling for the AI Engineering from Scratch site.
 *
 * Server-backed: every auth action hits the Vercel Functions API and the
 * session lives in an HttpOnly cookie, so a learner is recognized on any
 * device/browser. A small localStorage mirror lets the UI paint instantly on
 * navigation; GET /api/auth/me (refresh) is the source of truth and re-runs
 * on every page load.
 *
 * When refresh() succeeds it also dispatches an `aifs:me` CustomEvent carrying
 * { user, progress, streak } so sync.js can hydrate the local progress caches.
 *
 * Public API (unchanged from the old local-only build):
 *   signup(name, email, password) -> Promise<{ok, errors}>
 *   login(email, password)        -> Promise<{ok, errors}>
 *   googleSignIn(credentialJwt)   -> Promise<{ok, errors}>
 *   logout()                      -> Promise<void>
 *   currentUser()                 -> user | null
 *   isLoggedIn()                  -> boolean
 *   onChange(fn)                  -> subscribe to login/logout transitions
 *   refresh()                     -> Promise<user | null>
 */
(function () {
  var API_BASE = '/api/auth';
  var CACHE_KEY = 'aifs:auth:cache';
  var listeners = [];
  var cachedUser = null;

  function loadCache() {
    try {
      var raw = localStorage.getItem(CACHE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  }

  function saveCache(user) {
    try {
      if (user) {
        localStorage.setItem(CACHE_KEY, JSON.stringify({
          email: user.email,
          name: user.name,
          provider: user.provider,
          picture: user.picture,
          createdAt: user.createdAt
        }));
      } else {
        localStorage.removeItem(CACHE_KEY);
      }
    } catch (e) {}
  }

  function normalize(u) {
    return {
      email: u.email,
      name: u.name || u.email,
      provider: u.provider || 'password',
      picture: u.picture || '',
      createdAt: u.createdAt || null
    };
  }

  function currentUser() {
    return cachedUser;
  }

  function isLoggedIn() {
    return !!cachedUser;
  }

  function notify() {
    var user = currentUser();
    for (var i = 0; i < listeners.length; i++) {
      try { listeners[i](user); } catch (_) {}
    }
  }

  function onChange(fn) {
    if (typeof fn === 'function') listeners.push(fn);
  }

  async function api(path, opts) {
    opts = opts || {};
    opts.method = opts.method || 'GET';
    opts.credentials = 'same-origin';
    if (opts.body) {
      opts.headers = Object.assign({ 'Content-Type': 'application/json' }, opts.headers || {});
      if (typeof opts.body !== 'string') opts.body = JSON.stringify(opts.body);
    }
    try {
      var res = await fetch(API_BASE + path, opts);
      var data = null;
      try { data = await res.json(); } catch (_) {}
      return { ok: res.ok, status: res.status, data: data };
    } catch (e) {
      return { ok: false, status: 0, data: null, networkError: true };
    }
  }

  function dispatchMe(payload) {
    try {
      window.dispatchEvent(new CustomEvent('aifs:me', { detail: payload }));
    } catch (e) {}
  }

  /**
   * Re-sync with the server: refreshes the user from the session cookie and
   * hydrates progress. Returns the user (or null).
   */
  async function refresh() {
    var r = await api('/me');
    if (r.ok && r.data && r.data.user) {
      cachedUser = normalize(r.data.user);
      saveCache(cachedUser);
      notify();
      dispatchMe({ user: cachedUser, progress: r.data.progress || {}, streak: r.data.streak || null });
      return cachedUser;
    }
    if (cachedUser) {
      cachedUser = null;
      saveCache(null);
      notify();
    }
    return null;
  }

  function errorsFrom(r, fallback) {
    if (r.data && Array.isArray(r.data.errors)) return r.data.errors;
    if (r.data && r.data.error) return [r.data.error];
    if (r.networkError) return ['Network error — check your connection and try again.'];
    return [fallback];
  }

  async function signup(name, email, password) {
    var errors = [];
    if (!name || !String(name).trim()) errors.push('Name is required.');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email || '').trim())) errors.push('Valid email is required.');
    if (typeof password !== 'string' || password.length < 6) errors.push('Password must be at least 6 characters.');
    if (errors.length) return { ok: false, errors: errors };

    var r = await api('/signup', { method: 'POST', body: { name: name.trim(), email: email.trim(), password: password } });
    if (r.ok) {
      await refresh();
      return { ok: true };
    }
    return { ok: false, errors: errorsFrom(r, 'Sign up failed.') };
  }

  async function login(email, password) {
    var errors = [];
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email || '').trim())) errors.push('Valid email is required.');
    if (!password) errors.push('Password is required.');
    if (errors.length) return { ok: false, errors: errors };

    var r = await api('/login', { method: 'POST', body: { email: email.trim(), password: password } });
    if (r.ok) {
      await refresh();
      return { ok: true };
    }
    return { ok: false, errors: errorsFrom(r, 'Log in failed.') };
  }

  /**
   * Complete a Google sign-in. `credential` is the raw ID token from
   * Google Identity Services; it is verified server-side (see
   * api/auth/google.js) before a session is issued.
   */
  async function googleSignIn(credential) {
    if (typeof credential !== 'string' || !credential) {
      return { ok: false, errors: ['Google did not return a credential.'] };
    }
    var r = await api('/google', { method: 'POST', body: { credential: credential } });
    if (r.ok) {
      await refresh();
      return { ok: true };
    }
    return { ok: false, errors: errorsFrom(r, 'Google sign-in failed.') };
  }

  async function logout() {
    await api('/logout', { method: 'POST' });
    cachedUser = null;
    saveCache(null);
    notify();
  }

  // Prime the UI from the cache, then reconcile with the server.
  cachedUser = loadCache();
  if (cachedUser) notify();
  setTimeout(refresh, 0);

  window.AIFSAuth = {
    signup: signup,
    login: login,
    googleSignIn: googleSignIn,
    logout: logout,
    currentUser: currentUser,
    isLoggedIn: isLoggedIn,
    onChange: onChange,
    refresh: refresh
  };
})();
