// Mobile nav toggle
document.querySelectorAll('.nav-toggle').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var nav = btn.closest('.nav');
    var links = nav.querySelector('.nav-links');
    var open = links.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
});

// Scroll reveal for section blocks
var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
var revealEls = document.querySelectorAll('.reveal');

if (prefersReducedMotion || !('IntersectionObserver' in window)) {
  revealEls.forEach(function (el) { el.classList.add('is-visible'); });
} else {
  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  revealEls.forEach(function (el) { io.observe(el); });
}
