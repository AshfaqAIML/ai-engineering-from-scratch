/**
 * Shared responsive navigation.
 * Loaded by every page. Wires the mobile drawer (#menuToggle / #siteNav)
 * and mirrors aria-expanded for the lesson sidebar (#sidebarToggle).
 * Style follows the site blueprint theme; see site/style.css tokens.
 */
(function () {
  'use strict';

  // The full nav always rides in an off-canvas drawer; the fixed bar shows only
  // the brand plus the compact priority links and the menu toggle at every width.
  var MENU_BREAKPOINT = 900;

  function syncAccessibility() {
    var nav = document.getElementById('siteNav');
    if (!nav) return;
    var drawerHidden = window.innerWidth <= MENU_BREAKPOINT && !nav.classList.contains('open');
    if (drawerHidden) {
      nav.setAttribute('inert', '');
      nav.setAttribute('aria-hidden', 'true');
    } else {
      nav.removeAttribute('inert');
      nav.removeAttribute('aria-hidden');
    }
  }

  function wireDrawer() {
    var toggle = document.getElementById('menuToggle');
    var nav = document.getElementById('siteNav');
    if (!toggle || !nav) return;

    toggle.setAttribute('aria-controls', 'siteNav');
    toggle.setAttribute('aria-expanded', 'false');

    function open() {
      nav.classList.add('open');
      toggle.classList.add('is-open');
      toggle.setAttribute('aria-expanded', 'true');
      document.body.classList.add('nav-open');
      syncAccessibility();
    }
    function close() {
      nav.classList.remove('open');
      toggle.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('nav-open');
      syncAccessibility();
    }

    toggle.addEventListener('click', function (e) {
      e.stopPropagation();
      if (nav.classList.contains('open')) close();
      else open();
    });

    // Outside click closes the drawer.
    document.addEventListener('click', function (e) {
      if (nav.classList.contains('open') && !nav.contains(e.target) && !toggle.contains(e.target)) {
        close();
      }
    });

    // Any link click in the drawer closes it.
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) close();
    });

    // Resize back above the breakpoint resets state.
    window.addEventListener('resize', function () {
      if (window.innerWidth > MENU_BREAKPOINT) close();
      else syncAccessibility();
    });

    syncAccessibility();
  }

  // The language picker cannot stay in the fixed bar on narrow screens
  // without crowding the brand, so it rides inside the drawer there and is
  // restored to its original header slot (before the theme toggle) on wide.
  function relocateLangPicker() {
    var host = document.getElementById('langPicker');
    var nav = document.getElementById('siteNav');
    var headerInner = document.querySelector('.header-inner');
    var theme = document.getElementById('themeToggle');
    if (!host || !nav || !headerInner) return;
    var narrow = window.innerWidth <= MENU_BREAKPOINT;
    var inNav = host.parentNode === nav;
    if (narrow && !inNav) {
      nav.appendChild(host);
    } else if (!narrow && inNav) {
      if (theme) headerInner.insertBefore(host, theme);
      else headerInner.appendChild(host);
    }
  }

  function wireLessonSidebar() {
    var toggle = document.getElementById('sidebarToggle');
    var sidebar = document.getElementById('lessonSidebar');
    if (!toggle || !sidebar) return;
    toggle.setAttribute('aria-controls', 'lessonSidebar');
    toggle.setAttribute('aria-expanded', 'false');
    var sync = function () {
      toggle.setAttribute('aria-expanded', sidebar.classList.contains('open') ? 'true' : 'false');
    };
    toggle.addEventListener('click', sync);
  }

  function wireEscape() {
    document.addEventListener('keydown', function (e) {
      if (e.key !== 'Escape') return;
      var nav = document.getElementById('siteNav');
      if (nav) {
        nav.classList.remove('open');
        document.getElementById('menuToggle') && document.getElementById('menuToggle').classList.remove('is-open');
        document.getElementById('menuToggle') && document.getElementById('menuToggle').setAttribute('aria-expanded', 'false');
        document.body.classList.remove('nav-open');
        syncAccessibility();
      }
      var sidebar = document.getElementById('lessonSidebar');
      if (sidebar) {
        sidebar.classList.remove('open');
        var t = document.getElementById('sidebarToggle');
        if (t) t.setAttribute('aria-expanded', 'false');
      }
    });
  }

  function init() {
    wireDrawer();
    wireLessonSidebar();
    wireEscape();
    relocateLangPicker();
    window.addEventListener('resize', relocateLangPicker);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
