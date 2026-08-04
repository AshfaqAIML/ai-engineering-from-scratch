/**
 * Lightweight client-side authentication.
 *
 * Stores user accounts and sessions in localStorage. Passwords are hashed
 * with SHA-256 (Web Crypto API). No server — reading data never leaves the
 * device. Google sign-in (see google-auth.js) shares only the user's name
 * and email with Google and is linked to the same local account store.
 *
 * Schema (versioned for future migration):
 *
 *   aifs:auth:users = {
 *     "<email>": {
 *       name: string,
 *       hash: string,   // SHA-256 hex of salt + password (password accounts)
 *       salt: string,   // random hex (password accounts)
 *       provider: "password" | "google",
 *       googleSub: string, // Google "sub" claim, when provider is google
 *       picture: string,   // avatar URL, when provider is google
 *       createdAt: number
 *     }
 *   }
 *
 *   aifs:auth:session = {
 *     email: string,
 *     name: string,
 *     provider: "password" | "google",
 *     picture: string,
 *     loginAt: number
 *   }
 */
(function () {
  var USERS_KEY = 'aifs:auth:users';
  var SESSION_KEY = 'aifs:auth:session';
  var listeners = [];

  function getUsers() {
    try {
      var raw = localStorage.getItem(USERS_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      return {};
    }
  }

  function saveUsers(users) {
    try {
      localStorage.setItem(USERS_KEY, JSON.stringify(users));
    } catch (e) {}
  }

  function getSession() {
    try {
      var raw = localStorage.getItem(SESSION_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  }

  function saveSession(session) {
    try {
      if (session) {
        localStorage.setItem(SESSION_KEY, JSON.stringify(session));
      } else {
        localStorage.removeItem(SESSION_KEY);
      }
    } catch (e) {}
    notifyListeners();
  }

  function notifyListeners() {
    var user = currentUser();
    for (var i = 0; i < listeners.length; i++) {
      try { listeners[i](user); } catch (_) {}
    }
  }

  function randomHex(len) {
    var arr = new Uint8Array(len);
    crypto.getRandomValues(arr);
    var hex = '';
    for (var i = 0; i < arr.length; i++) {
      hex += ('0' + arr[i].toString(16)).slice(-2);
    }
    return hex;
  }

  async function hashPassword(salt, password) {
    var enc = new TextEncoder();
    var data = enc.encode(salt + password);
    var buf = await crypto.subtle.digest('SHA-256', data);
    var arr = new Uint8Array(buf);
    var hex = '';
    for (var i = 0; i < arr.length; i++) {
      hex += ('0' + arr[i].toString(16)).slice(-2);
    }
    return hex;
  }

  function validateEmail(email) {
    return typeof email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function validatePassword(pw) {
    return typeof pw === 'string' && pw.length >= 6;
  }

  function validateName(name) {
    return typeof name === 'string' && name.trim().length >= 1;
  }

  async function signup(name, email, password) {
    var errors = [];
    if (!validateName(name)) errors.push('Name is required.');
    if (!validateEmail(email)) errors.push('Valid email is required.');
    if (!validatePassword(password)) errors.push('Password must be at least 6 characters.');
    if (errors.length) return { ok: false, errors: errors };

    var users = getUsers();
    var key = email.toLowerCase().trim();
    if (users[key]) return { ok: false, errors: ['An account with this email already exists.'] };

    var salt = randomHex(16);
    var hash = await hashPassword(salt, password);
    users[key] = {
      name: name.trim(),
      hash: hash,
      salt: salt,
      provider: 'password',
      createdAt: Date.now()
    };
    saveUsers(users);

    var session = { email: key, name: name.trim(), provider: 'password', picture: '', loginAt: Date.now() };
    saveSession(session);
    return { ok: true };
  }

  async function login(email, password) {
    var errors = [];
    if (!validateEmail(email)) errors.push('Valid email is required.');
    if (!password) errors.push('Password is required.');
    if (errors.length) return { ok: false, errors: errors };

    var users = getUsers();
    var key = email.toLowerCase().trim();
    var user = users[key];
    if (!user) return { ok: false, errors: ['No account found with this email.'] };
    if (!user.hash) return { ok: false, errors: ['This email uses Google sign-in. Use "Continue with Google" instead.'] };

    var hash = await hashPassword(user.salt, password);
    if (hash !== user.hash) return { ok: false, errors: ['Incorrect password.'] };

    var session = { email: key, name: user.name, provider: 'password', picture: user.picture || '', loginAt: Date.now() };
    saveSession(session);
    return { ok: true };
  }

  /**
   * Complete a Google sign-in. Called by google-auth.js after it decodes the
   * ID-token payload. Creates the account on first run, otherwise logs into
   * the existing one (linking a Google login onto a prior password account
   * keeps the password method working).
   */
  function googleSignIn(info) {
    var key = (info.email || '').toLowerCase().trim();
    if (!validateEmail(key)) return { ok: false, errors: ['Google did not return a valid email.'] };

    var users = getUsers();
    var user = users[key] || { createdAt: Date.now() };
    user.name = (info.name || user.name || key).trim();
    user.provider = 'google';
    user.googleSub = info.sub || user.googleSub;
    if (info.picture) user.picture = info.picture;
    users[key] = user;
    saveUsers(users);

    var session = {
      email: key,
      name: user.name,
      provider: 'google',
      picture: user.picture || '',
      loginAt: Date.now()
    };
    saveSession(session);
    return { ok: true };
  }

  function logout() {
    saveSession(null);
  }

  function currentUser() {
    var session = getSession();
    if (!session) return null;
    var users = getUsers();
    var user = users[session.email];
    if (!user) {
      saveSession(null);
      return null;
    }
    return {
      email: session.email,
      name: user.name,
      provider: session.provider || user.provider || 'password',
      picture: session.picture || user.picture || '',
      loginAt: session.loginAt
    };
  }

  function isLoggedIn() {
    return currentUser() !== null;
  }

  function onChange(fn) {
    if (typeof fn === 'function') listeners.push(fn);
  }

  window.addEventListener('storage', function (e) {
    if (e.key !== SESSION_KEY) return;
    notifyListeners();
  });

  window.AIFSAuth = {
    signup: signup,
    login: login,
    googleSignIn: googleSignIn,
    logout: logout,
    currentUser: currentUser,
    isLoggedIn: isLoggedIn,
    onChange: onChange
  };
})();
