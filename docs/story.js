import { initCodeBackground, initMobileNav, initScrollReveal, initScrollTop } from './ui.js';

initCodeBackground();
initMobileNav();
initScrollReveal();
initScrollTop();

const scrollTop = document.getElementById('scroll-top');
if (scrollTop) {
  function toggleTop() {
    scrollTop.classList.toggle('visible', window.scrollY > 500);
  }
  window.addEventListener('scroll', toggleTop, { passive: true });
  toggleTop();
}
