/**
 * Shared authentication UI controller for the reader dashboard.
 *
 * Owns the login/signup overlay state machine (open, close, toggle, submit),
 * inline validation, password guidance, loading/error/success states, Google
 * sign-in as a secondary path, the authenticated header profile menu, and
 * human-readable error translation for the server-backed AIFSAuth API.
 *
 * Included on index.html, lesson.html and dashboard.html after auth.js and
 * google-auth.js. It reads the same DOM ids used across those pages and never
 * changes the underlying auth API or backend security. Pages may register
 * window.AIFSAuthUI.onAuthChanged(user) to render page-specific content when
 * the auth state changes.
 *
 * Source: site/auth.js (public API) - https://github.com/rohitg00/ai-engineering-from-scratch
 */
(function () {
  var ui = window.AIFSAuthUI = window.AIFSAuthUI || {};

  function $id(id) { return document.getElementById(id); }

  var els = function () {
    return {
      overlay: $id('authOverlay'),
      close: $id('authClose'),
      title: $id('authTitle'),
      info: $id('authInfo'),
      error: $id('authError'),
      form: $id('authForm'),
      nameField: $id('authNameField'),
      name: $id('authName'),
      nameErr: $id('authNameErr'),
      email: $id('authEmail'),
      emailErr: $id('authEmailErr'),
      password: $id('authPassword'),
      pwGuide: $id('authPwGuide'),
      passwordErr: $id('authPasswordErr'),
      submit: $id('authSubmit'),
      submitLabel: $id('authSubmitLabel'),
      status: $id('authStatus'),
      googleWrap: $id('authGoogleWrap'),
      googleBtn: $id('authGoogleBtn'),
      switchEl: $id('authSwitch'),
      toggleLink: $id('authToggleLink'),
      loginBtn: $id('loginBtn'),
      profileBtn: $id('profileBtn'),
      profileAvatar: $id('profileAvatar'),
      profileName: $id('profileName'),
      profileDropdown: $id('profileDropdown'),
      logoutBtn: $id('logoutBtn')
    };
  };

  var isSignup = false;

  function notify(user) {
    if (typeof ui.onAuthChanged === 'function') {
      try { ui.onAuthChanged(user); } catch (e) {}
    }
  }

  function clearFieldErrors(e) {
    if (!e) return;
    ['nameErr', 'emailErr', 'passwordErr'].forEach(function (k) {
      var el = e[k];
      if (el) {
        el.textContent = '';
        el.classList.remove('visible');
      }
    });
  }

  function setFieldError(e, key, msg) {
    var el = e[key];
    if (!el) return;
    el.textContent = msg;
    el.classList.add('visible');
  }

  function showGlobalError(e, msg) {
    if (e.error) {
      e.error.textContent = msg;
      e.error.classList.add('visible');
    }
  }

  function setLoading(e, busy) {
    if (!e.submit) return;
    if (busy) {
      e.submit.classList.add('busy');
      e.submit.setAttribute('aria-busy', 'true');
      e.submit.setAttribute('disabled', 'disabled');
    } else {
      e.submit.classList.remove('busy');
      e.submit.removeAttribute('aria-busy');
      e.submit.removeAttribute('disabled');
    }
  }

  function setStatus(e, msg) {
    if (e.status) {
      e.status.textContent = msg || '';
      e.status.className = 'auth-status' + (msg ? ' visible' : '');
    }
  }

  function setInfo(e, mode) {
    if (!e.info) return;
    e.info.textContent = mode === 'signup'
      ? 'Create a free account to save your reading progress, streak, and history — so they follow you on any device.'
      : 'Sign in to keep your reading progress, streak, and history saved to your account and in sync across devices.';
  }

  function updatePasswordGuide(e, value) {
    if (!e.pwGuide) return;
    if (!isSignup || !value) {
      e.pwGuide.textContent = '';
      e.pwGuide.classList.remove('ok');
      return;
    }
    var okLen = value.length >= 6;
    e.pwGuide.textContent = okLen
      ? 'At least 6 characters \u2014 looks good.'
      : 'Use at least 6 characters.';
    e.pwGuide.classList.toggle('ok', okLen);
  }

  function setMode(e, mode) {
    isSignup = mode === 'signup';
    if (e.title) e.title.textContent = isSignup ? 'Sign Up' : 'Log In';
    if (e.submitLabel) e.submitLabel.textContent = isSignup ? 'Sign Up' : 'Log In';
    if (e.submit) e.submit.setAttribute('aria-label', isSignup ? 'Create account' : 'Log in');
    if (e.nameField) e.nameField.style.display = isSignup ? '' : 'none';
    if (e.toggleLink) e.toggleLink.textContent = isSignup ? 'Log in' : 'Sign up';
    if (e.switchEl && e.switchEl.childNodes.length && e.switchEl.childNodes[0]) {
      e.switchEl.childNodes[0].textContent = isSignup
        ? 'Already have an account? '
        : "Don't have an account? ";
    }
    setInfo(e, mode);
    clearFieldErrors(e);
    if (e.error) {
      e.error.textContent = '';
      e.error.classList.remove('visible');
    }
    setStatus(e, '');
    if (e.password) updatePasswordGuide(e, e.password.value);
  }

  function openAuth(mode) {
    var e = els();
    if (!e.overlay) return;
    setMode(e, mode);
    if (e.form) e.form.reset();
    updatePasswordGuide(e, '');
    e.overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    var focused = isSignup ? e.name : e.email;
    if (focused) { try { focused.focus(); } catch (err) {} }
    if (window.AIFSGoogleAuth && window.AIFSGoogleAuth.isConfigured && window.AIFSGoogleAuth.isConfigured()) {
      if (e.googleWrap) e.googleWrap.style.display = '';
      if (window.AIFSGoogleAuth.renderButton) window.AIFSGoogleAuth.renderButton(e.googleBtn);
    } else if (e.googleWrap) {
      e.googleWrap.style.display = 'none';
    }
  }

  function closeAuth() {
    var e = els();
    if (!e.overlay) return;
    e.overlay.classList.remove('open');
    document.body.style.overflow = '';
    setLoading(e, false);
    setStatus(e, '');
  }

  /* Translate backend/API errors into human-readable messages. */
  function humanError(mode, errors, networkError) {
    if (networkError) {
      return 'We couldn\u2019t reach the server. Check your connection and try again.';
    }
    var list = (errors || []).map(String);
    var joined = list.join(' ');

    if (/couldn't find|no account/i.test(joined)) {
      return mode === 'signup'
        ? 'That email looks new \u2014 let\u2019s create your account below.'
        : 'We couldn\u2019t find an account with that email. Sign up if you\u2019re new here.';
    }
    if (/incorrect password/i.test(joined)) {
      return 'That password isn\u2019t right for this account. Double-check and try again.';
    }
    if (/uses Google sign-in|continue with google/i.test(joined)) {
      return 'That email uses Google sign-in \u2014 use \u201cContinue with Google\u201d below instead.';
    }
    if (/already exists/i.test(joined)) {
      return 'An account with that email already exists \u2014 try logging in instead.';
    }
    if (/valid email/i.test(joined)) {
      return 'Enter a valid email address.';
    }
    if (/password must be at least 6/i.test(joined)) {
      return 'Choose a password with at least 6 characters.';
    }
    if (/password is required/i.test(joined)) {
      return 'Enter your password.';
    }
    if (/name is required/i.test(joined)) {
      return 'Enter your name.';
    }
    if (/signup failed|sign in failed|login failed|google sign-in failed/i.test(joined)) {
      return 'Something went wrong on our end. Please try again in a moment.';
    }
    if (/google did not return|failed to load google/i.test(joined)) {
      return 'Google sign-in couldn\u2019t start. Please try again.';
    }
    return 'That didn\u2019t go through. Please check your details and try again.';
  }

  function validate(e) {
    var ok = true;
    clearFieldErrors(e);
    var name = e.name ? String(e.name.value || '').trim() : '';
    var email = e.email ? String(e.email.value || '').trim() : '';
    var password = e.password ? String(e.password.value || '') : '';

    if (isSignup) {
      if (!name) { setFieldError(e, 'nameErr', 'Enter your name.'); ok = false; }
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setFieldError(e, 'emailErr', 'Enter a valid email address.'); ok = false;
    }
    if (isSignup) {
      if (typeof password !== 'string' || password.length < 6) {
        setFieldError(e, 'passwordErr', 'Use at least 6 characters.'); ok = false;
      }
    } else if (!password) {
      setFieldError(e, 'passwordErr', 'Enter your password.'); ok = false;
    }
    return ok;
  }

  async function handleSubmit(ev) {
    ev.preventDefault();
    var e = els();
    if (!e.overlay || !window.AIFSAuth) return;
    if (!validate(e)) return;

    var isSignupNow = isSignup;
    var name = e.name ? e.name.value : '';
    var email = e.email ? e.email.value : '';
    var password = e.password ? e.password.value : '';

    setLoading(e, true);
    setStatus(e, isSignupNow ? 'Creating your account\u2026' : 'Signing you in\u2026');

    var result;
    try {
      result = isSignupNow
        ? await window.AIFSAuth.signup(name, email, password)
        : await window.AIFSAuth.login(email, password);
    } catch (err) {
      result = { ok: false, errors: [] };
    }

    if (result && result.ok) {
      setStatus(e, isSignupNow ? 'Account created \u2014 signing you in\u2026' : 'You\u2019re signed in \u2014 syncing your progress\u2026');
      setLoading(e, false);
      setTimeout(function () {
        closeAuth();
        var user = window.AIFSAuth.currentUser();
        renderHeader(user);
        notify(user);
      }, 450);
    } else {
      setLoading(e, false);
      var msg = humanError(isSignupNow ? 'signup' : 'login', (result && result.errors) || [], result && result.networkError);
      showGlobalError(e, msg);
    }
  }

  function renderHeader(user) {
    var e = els();
    if (!e.loginBtn) return;
    if (user) {
      e.loginBtn.style.display = 'none';
      e.profileBtn.style.display = '';
      if (user.picture) {
        e.profileAvatar.style.backgroundImage = 'url("' + user.picture + '")';
        e.profileAvatar.style.backgroundSize = 'cover';
        e.profileAvatar.style.backgroundPosition = 'center';
        e.profileAvatar.textContent = '';
      } else {
        e.profileAvatar.style.backgroundImage = '';
        e.profileAvatar.textContent = String(user.name || user.email || '?').charAt(0).toUpperCase();
      }
      e.profileName.textContent = String(user.name || user.email).split(' ')[0];
    } else {
      e.loginBtn.style.display = '';
      e.profileBtn.style.display = 'none';
      e.profileAvatar.style.backgroundImage = '';
      if (e.profileDropdown) e.profileDropdown.classList.remove('open');
    }
  }

  function wire() {
    var e = els();
    if (!e.overlay) return; // page has no auth overlay

    if (e.loginBtn && e.profileBtn && e.profileName) {
      e.loginBtn.addEventListener('click', function () { openAuth('login'); });
      e.profileBtn.addEventListener('click', function (ev) {
        ev.stopPropagation();
        e.profileDropdown.classList.toggle('open');
      });
      document.addEventListener('click', function () {
        if (e.profileDropdown) e.profileDropdown.classList.remove('open');
      });
      if (e.logoutBtn) {
        e.logoutBtn.addEventListener('click', async function () {
          if (window.AIFSSync && window.AIFSSync.flushNow) {
            try { await window.AIFSSync.flushNow(); } catch (err) {}
          }
          if (window.AIFSAuth) await window.AIFSAuth.logout();
          if (e.profileDropdown) e.profileDropdown.classList.remove('open');
          renderHeader(null);
          notify(null);
        });
      }
    }

    if (e.close) e.close.addEventListener('click', closeAuth);
    if (e.overlay) e.overlay.addEventListener('click', function (ev) { if (ev.target === e.overlay) closeAuth(); });
    if (e.toggleLink) e.toggleLink.addEventListener('click', function () { openAuth(isSignup ? 'login' : 'signup'); });
    if (e.name) e.name.addEventListener('input', function () { if (e.nameErr) e.nameErr.classList.remove('visible'); });
    if (e.email) e.email.addEventListener('input', function () { if (e.emailErr) e.emailErr.classList.remove('visible'); });
    if (e.password) {
      e.password.addEventListener('input', function () {
        if (e.passwordErr) e.passwordErr.classList.remove('visible');
        updatePasswordGuide(e, e.password.value);
      });
    }
    if (e.form) e.form.setAttribute('novalidate', 'novalidate');
    if (e.form) e.form.addEventListener('submit', handleSubmit);
    document.addEventListener('keydown', function (ev) {
      if (ev.key === 'Escape' && e.overlay && e.overlay.classList.contains('open')) {
        closeAuth();
      }
    });
    if (window.addEventListener) {
      window.addEventListener('aifs:google-signin', function () {
        closeAuth();
        var user = window.AIFSAuth ? window.AIFSAuth.currentUser() : null;
        renderHeader(user);
        notify(user);
      });
    }

    if (window.AIFSAuth && window.AIFSAuth.onChange) {
      window.AIFSAuth.onChange(function (user) {
        renderHeader(user);
        notify(user);
      });
    }
  }

  ui.close = closeAuth;
  ui.open = openAuth;
  ui.renderHeader = renderHeader;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      wire();
      renderHeader(window.AIFSAuth ? window.AIFSAuth.currentUser() : null);
    });
  } else {
    wire();
    renderHeader(window.AIFSAuth ? window.AIFSAuth.currentUser() : null);
  }
})();
