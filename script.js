/* Original progressive mobile navigation, plus direct project links and print support.
   All content and native project details work without JavaScript. */
(() => {
  'use strict';
  const root = document.documentElement;
  const menu = document.querySelector('.menu-toggle');
  const nav = document.getElementById('main-nav');
  const mobile = window.matchMedia('(max-width: 980px)');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  if (menu && nav) {
    const setMenu = (open, returnFocus = false) => {
      menu.setAttribute('aria-expanded', String(open));
      nav.classList.toggle('is-open', open);
      menu.querySelector('.menu-label').textContent = open ? 'Close' : 'Menu';
      menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
      if (returnFocus) menu.focus();
    };
    root.classList.add('js');
    menu.hidden = false;
    setMenu(false);
    menu.addEventListener('click', () => setMenu(menu.getAttribute('aria-expanded') !== 'true'));
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') setMenu(false, true);
    });
    document.addEventListener('click', event => {
      if (!nav.contains(event.target) && !menu.contains(event.target)) setMenu(false);
    });
    nav.addEventListener('focusout', () => {
      setTimeout(() => {
        if (!nav.contains(document.activeElement) && !menu.contains(document.activeElement)) setMenu(false);
      }, 0);
    });
    nav.addEventListener('click', event => {
      const link = event.target.closest('a');
      if (!link) return;
      setMenu(false);
      const href = link.getAttribute('href');
      if (href.startsWith('#')) {
        const destination = document.getElementById(href.slice(1));
        if (destination) {
          destination.setAttribute('tabindex', '-1');
          destination.focus({ preventScroll: true });
        }
      } else if (mobile.matches) {
        menu.focus({ preventScroll: true });
      }
    });
    mobile.addEventListener('change', () => setMenu(false));
  }

  const openLinkedProject = () => {
    if (!location.hash) return;
    let id;
    try { id = decodeURIComponent(location.hash.slice(1)); } catch { return; }
    const target = document.getElementById(id);
    const details = target?.closest('details');
    if (details) {
      details.open = true;
      requestAnimationFrame(() => target.scrollIntoView({ behavior: reduceMotion.matches ? 'instant' : 'smooth', block: 'start' }));
    }
  };
  window.addEventListener('hashchange', openLinkedProject);
  openLinkedProject();

  // Indicate the section nearest the reading position; never alter scroll or focus.
  const links = [...document.querySelectorAll('.main-nav a[href^="#"]')];
  const sections = links.map(link => document.getElementById(link.hash.slice(1)));
  let scheduled = false;
  const markSection = () => {
    scheduled = false;
    const threshold = Math.min(innerHeight * .3, 200);
    let current = -1;
    sections.forEach((section, index) => {
      if (section && section.getBoundingClientRect().top <= threshold) current = index;
    });
    links.forEach((link, index) => {
      if (index === current) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  };
  const queueMark = () => {
    if (!scheduled) { scheduled = true; requestAnimationFrame(markSection); }
  };
  window.addEventListener('scroll', queueMark, { passive: true });
  window.addEventListener('resize', queueMark);
  markSection();

  let closedForScreen = [];
  window.addEventListener('beforeprint', () => {
    closedForScreen = [...document.querySelectorAll('details:not([open])')];
    closedForScreen.forEach(details => { details.open = true; });
  });
  window.addEventListener('afterprint', () => {
    closedForScreen.forEach(details => { details.open = false; });
    closedForScreen = [];
  });
})();
