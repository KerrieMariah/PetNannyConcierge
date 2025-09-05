// Mobile nav toggle
(function attachMobileNavToggle() {
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.getElementById('nav-menu');
  if (!toggle || !menu) return;
  toggle.addEventListener('click', function () {
    var open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
})();

// Smooth scroll for anchor links
document.addEventListener('click', function (e) {
  var link = e.target.closest('a[href^="#"]');
  if (!link) return;
  var id = link.getAttribute('href').slice(1);
  var target = document.getElementById(id);
  if (!target) return;
  e.preventDefault();
  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

// Footer year
(function setYear() {
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();

// Simple carousel controls
// testimonials carousel removed in split layout

// Sticky header background on scroll
(function stickyHeader(){
  var header = document.querySelector('.site-header');
  if (!header) return;
  function onScroll(){
    var scrolled = (window.scrollY || window.pageYOffset) > 10;
    header.classList.toggle('scrolled', scrolled);
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
})();

