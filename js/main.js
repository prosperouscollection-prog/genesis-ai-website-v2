/* ============================================================
   Genesis AI Systems — Shared JS
   Extracted from pages/*.html
   ============================================================ */

(function () {
  'use strict';

  // ── Hamburger / mobile menu ──
  var hamburger = document.getElementById('hamburger');
  var mobileMenu = document.getElementById('mobileMenu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function () {
      var isOpen = mobileMenu.classList.toggle('open');
      mobileMenu.hidden = !isOpen;
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when any nav link is tapped
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.remove('open');
        mobileMenu.hidden = true;
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ── Nav scroll shadow ──
  var nav = document.querySelector('nav');
  if (nav) {
    window.addEventListener('scroll', function () {
      nav.style.boxShadow =
        window.scrollY > 10 ? '0 2px 20px rgba(0,0,0,.4)' : 'none';
    }, { passive: true });
  }

}());
