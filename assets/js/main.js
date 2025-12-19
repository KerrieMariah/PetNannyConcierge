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

// Scroll-triggered animations using Intersection Observer
(function scrollAnimations() {
  var animatedSections = document.querySelectorAll('.section-checkin, .section-about, .section-feature, .section-services, .section-pricing, .section-testimonials, .section-latest');
  
  if (!animatedSections.length || !('IntersectionObserver' in window)) {
    // Fallback: just show everything
    animatedSections.forEach(function(section) {
      section.classList.add('in-view');
    });
    return;
  }
  
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        // Optional: stop observing once animated
        // observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15, // Trigger when 15% of section is visible
    rootMargin: '0px 0px -50px 0px' // Trigger slightly before fully in view
  });
  
  animatedSections.forEach(function(section) {
    observer.observe(section);
  });
})();

