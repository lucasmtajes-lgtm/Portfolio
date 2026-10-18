(function () {
  'use strict';

  var documentElement = document.documentElement;
  var body = document.body;
  var menuToggle = document.getElementById('menu-toggle');
  var navigation = document.getElementById('site-navigation');
  var backdrop = document.querySelector('.nav-backdrop');
  var themeToggle = document.getElementById('theme-toggle');
  var mobileQuery = window.matchMedia('(max-width: 760px)');

  function isMobile() {
    return mobileQuery.matches;
  }

  function getFocusable(container) {
    if (!container) return [];
    return Array.prototype.slice.call(container.querySelectorAll(
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )).filter(function (element) {
      return !element.hidden && element.getAttribute('aria-hidden') !== 'true';
    });
  }

  function setMenuState(open, restoreFocus) {
    if (!menuToggle || !navigation) return;

    if (!isMobile()) {
      body.classList.remove('nav-open');
      if (backdrop) backdrop.hidden = true;
      body.classList.toggle('nav-expanded', !!open);
      menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      menuToggle.setAttribute('aria-label', open ? 'Recolher navegação' : 'Expandir navegação');
      return;
    }

    body.classList.toggle('nav-open', !!open);
    body.classList.remove('nav-expanded');
    if (backdrop) {
      backdrop.hidden = !open;
      backdrop.setAttribute('aria-hidden', open ? 'false' : 'true');
    }
    menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    menuToggle.setAttribute('aria-label', open ? 'Fechar navegação' : 'Abrir navegação');

    if (open) {
      var firstLink = getFocusable(navigation)[0];
      if (firstLink) {
        window.setTimeout(function () { firstLink.focus(); }, 0);
      }
    } else if (restoreFocus) {
      menuToggle.focus();
    }
  }

  function resetMenuForViewport() {
    body.classList.remove('nav-open', 'nav-expanded');
    if (backdrop) {
      backdrop.hidden = true;
      backdrop.setAttribute('aria-hidden', 'true');
    }
    if (menuToggle) {
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Abrir navegação');
    }
  }

  if (menuToggle && navigation) {
    menuToggle.addEventListener('click', function () {
      if (isMobile()) {
        setMenuState(!body.classList.contains('nav-open'), false);
      } else {
        setMenuState(!body.classList.contains('nav-expanded'), false);
      }
    });

    navigation.querySelectorAll('a[href]').forEach(function (link) {
      link.addEventListener('click', function () {
        if (isMobile()) setMenuState(false, false);
      });
    });

    if (backdrop) {
      backdrop.addEventListener('click', function () {
        setMenuState(false, true);
      });
    }

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        if (body.classList.contains('nav-open') || body.classList.contains('nav-expanded')) {
          setMenuState(false, true);
        }
        return;
      }

      if (event.key !== 'Tab' || !isMobile() || !body.classList.contains('nav-open')) return;

      var focusable = [menuToggle].concat(getFocusable(navigation));
      if (!focusable.length) return;

      var currentIndex = focusable.indexOf(document.activeElement);
      if (event.shiftKey && (currentIndex <= 0 || currentIndex === -1)) {
        event.preventDefault();
        focusable[focusable.length - 1].focus();
      } else if (!event.shiftKey && currentIndex === focusable.length - 1) {
        event.preventDefault();
        focusable[0].focus();
      }
    });

    var onViewportChange = function () {
      resetMenuForViewport();
    };
    if (typeof mobileQuery.addEventListener === 'function') {
      mobileQuery.addEventListener('change', onViewportChange);
    } else if (typeof mobileQuery.addListener === 'function') {
      mobileQuery.addListener(onViewportChange);
    }
  }

  function readTheme() {
    var savedTheme = null;
    try {
      savedTheme = window.localStorage.getItem('theme');
    } catch (error) {
      savedTheme = null;
    }
    return savedTheme === 'dark' || savedTheme === 'light' ? savedTheme : 'light';
  }

  function setTheme(theme, persist) {
    var nextTheme = theme === 'dark' ? 'dark' : 'light';
    documentElement.setAttribute('data-theme', nextTheme);
    if (themeToggle) {
      var label = nextTheme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro';
      themeToggle.setAttribute('aria-label', label);
      themeToggle.setAttribute('title', label);
      themeToggle.setAttribute('aria-pressed', nextTheme === 'dark' ? 'true' : 'false');
    }
    if (persist) {
      try {
        window.localStorage.setItem('theme', nextTheme);
      } catch (error) {
        // Preferir o tema da sessão quando o armazenamento estiver indisponível.
      }
    }
  }

  setTheme(readTheme(), false);

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      var currentTheme = documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      setTheme(currentTheme === 'dark' ? 'light' : 'dark', true);
    });
  }

  function prefersReducedMotion() {
    return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  document.querySelectorAll('[data-carousel]').forEach(function (wrap) {
    var track = wrap.querySelector('.carousel');
    var previous = wrap.querySelector('.carousel-nav [data-dir="prev"]');
    var next = wrap.querySelector('.carousel-nav [data-dir="next"]');
    if (!track || !previous || !next) return;

    function step() {
      return Math.max(240, track.clientWidth * 0.8);
    }

    function setDisabled(button, disabled) {
      button.disabled = disabled;
      button.setAttribute('aria-disabled', disabled ? 'true' : 'false');
    }

    function updateControls() {
      var maxScroll = Math.max(0, track.scrollWidth - track.clientWidth);
      var currentScroll = Math.max(0, track.scrollLeft);
      setDisabled(previous, currentScroll <= 1);
      setDisabled(next, currentScroll >= maxScroll - 1);
    }

    previous.addEventListener('click', function () {
      track.scrollBy({ left: -step(), behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
    });
    next.addEventListener('click', function () {
      track.scrollBy({ left: step(), behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
    });
    track.addEventListener('scroll', updateControls, { passive: true });
    window.addEventListener('resize', updateControls);
    window.addEventListener('load', updateControls, { once: true });
    updateControls();
  });
})();
