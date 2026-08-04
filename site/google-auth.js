/**
 * "Continue with Google" sign-in for the reader dashboard.
 *
 * Uses Google Identity Services in popup mode — no backend required, so the
 * static site keeps working with zero server code. Google returns an ID
 * token (JWT); its payload is decoded client-side to recover the user's
 * Google sub, email, and name, which are then handed to AIFSAuth.googleSignIn()
 * so the session lives in localStorage like every other account.
 *
 * SECURITY NOTE: the token signature is not verified (there is no server),
 * so this is a convenience identity link for the local-only dashboard, not
 * strong authentication. For server-side verification, route the ID token
 * through a backend endpoint instead.
 *
 * Configuration: GOOGLE_CLIENT_ID below is the app default; set
 * window.AIFS_GOOGLE_CLIENT_ID before this script loads to override it.
 * The button stays hidden until a valid client ID (ending in
 * .apps.googleusercontent.com) is configured.
 *
 * Source: Google Identity Services — https://developers.google.com/identity/gsi/web
 */
(function () {
  var GOOGLE_CLIENT_ID = window.AIFS_GOOGLE_CLIENT_ID || '1036316303591-nf7jv6o2or5oob92u9atrom89i6klanj.apps.googleusercontent.com';
  var GSI_SRC = 'https://accounts.google.com/gsi/client';

  var inited = false;
  var gsiPromise = null;

  function isConfigured() {
    return typeof GOOGLE_CLIENT_ID === 'string' &&
      GOOGLE_CLIENT_ID.indexOf('.apps.googleusercontent.com') !== -1 &&
      GOOGLE_CLIENT_ID.indexOf('YOUR_GOOGLE_CLIENT_ID') === -1;
  }

  function decodeJwt(token) {
    try {
      var seg = token.split('.')[1];
      var b64 = seg.replace(/-/g, '+').replace(/_/g, '/');
      var raw = atob(b64);
      var utf8 = decodeURIComponent(Array.prototype.map.call(raw, function (ch) {
        return '%' + ('00' + ch.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
      return JSON.parse(utf8);
    } catch (e) {
      return null;
    }
  }

  function handleCredential(response) {
    if (!response || !response.credential) return;
    var payload = decodeJwt(response.credential);
    if (!payload || !payload.email || !window.AIFSAuth) return;
    var result = window.AIFSAuth.googleSignIn({
      sub: payload.sub,
      email: payload.email,
      name: payload.name || payload.given_name || payload.email.split('@')[0],
      picture: payload.picture || ''
    });
    if (result && result.ok) {
      try { window.dispatchEvent(new CustomEvent('aifs:google-signin')); } catch (e) {}
    }
  }

  function loadGsi() {
    if (window.google && window.google.accounts && window.google.accounts.id) {
      return Promise.resolve();
    }
    if (!gsiPromise) {
      gsiPromise = new Promise(function (resolve, reject) {
        var s = document.createElement('script');
        s.src = GSI_SRC;
        s.async = true;
        s.onload = function () { resolve(); };
        s.onerror = function () { reject(new Error('Failed to load Google Identity Services.')); };
        document.head.appendChild(s);
      });
    }
    return gsiPromise;
  }

  function ensureInit() {
    if (inited) return Promise.resolve(true);
    if (!isConfigured()) return Promise.resolve(false);
    inited = true;
    return loadGsi().then(function () {
      window.google.accounts.id.initialize({
        client_id: GOOGLE_CLIENT_ID,
        callback: handleCredential,
        auto_select: false,
        ux_mode: 'popup'
      });
      return true;
    }).catch(function () {
      inited = false;
      return false;
    });
  }

  function renderButton(container) {
    if (!isConfigured() || !container) return;
    ensureInit().then(function (ok) {
      if (!ok || !container.isConnected) return;
      container.innerHTML = '';
      requestAnimationFrame(function () {
        try {
          window.google.accounts.id.renderButton(container, {
            type: 'standard',
            theme: 'outline',
            size: 'large',
            text: 'continue_with',
            shape: 'rectangular',
            logo_alignment: 'left',
            width: Math.max(240, Math.round(container.clientWidth) || 320)
          });
        } catch (e) {}
      });
    });
  }

  window.AIFSGoogleAuth = {
    isConfigured: isConfigured,
    ensureInit: ensureInit,
    renderButton: renderButton
  };
})();
