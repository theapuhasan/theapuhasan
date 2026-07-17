// Shared behaviour for every page: mobile menu, footer year, scroll reveals.
(function () {
  // --- Mobile menu ---
  var nav = document.querySelector('.nav');
  var btn = document.querySelector('.menu-btn');
  function closeMenu() {
    if (!nav || !btn) return;
    nav.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
  }
  if (nav && btn) {
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.querySelectorAll('.nav-links a').forEach(function (a) {
      a.addEventListener('click', closeMenu);
    });
    document.addEventListener('click', function (e) {
      if (nav.classList.contains('open') && !nav.contains(e.target)) closeMenu();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });
  }

  // --- Footer year ---
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // --- Scroll reveal (respects reduced motion) ---
  var items = document.querySelectorAll('.reveal');
  if (items.length) {
    var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || !('IntersectionObserver' in window)) {
      items.forEach(function (el) { el.classList.add('in'); });
    } else {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
      items.forEach(function (el) { io.observe(el); });
    }
  }
})();
