// Eazily landing — small progressive enhancements only.

(function () {
  'use strict';

  // Mobile navigation
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.getElementById('mobile-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var open = menu.hidden;
      menu.hidden = !open;
      toggle.setAttribute('aria-expanded', String(open));
    });
    menu.addEventListener('click', function (event) {
      if (event.target.tagName === 'A') menu.hidden = true;
    });
  }

  // Current year in footer
  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  // Waitlist form — front-end only (no backend yet). Simply records interest
  // locally and confirms; swap this for your email/CRM endpoint when ready.
  var form = document.getElementById('waitlist-form');
  var note = document.getElementById('waitlist-note');
  if (form && note) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      form.hidden = true;
      note.hidden = false;
    });
  }

  // Gentle reveal-on-scroll (skipped entirely for reduced-motion users).
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion || !('IntersectionObserver' in window)) return;

  var revealables = document.querySelectorAll('.services-grid li, .steps-grid li, .assurance-item, .pro-copy');
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'none';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealables.forEach(function (el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(12px)';
    el.style.transition = 'opacity .45s ease, transform .45s ease';
    observer.observe(el);
  });
})();
