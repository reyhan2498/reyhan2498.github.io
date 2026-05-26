export function initMobileNav() {
  const mobileToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');
  if (!mobileToggle || !nav) return;

  mobileToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('show');
    mobileToggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('show');
      mobileToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

export function initScrollReveal() {
  function reveal() {
    const threshold = window.innerHeight * 0.88;

    document.querySelectorAll('.reveal-on-scroll').forEach((element) => {
      if (element.classList.contains('reveal-visible')) return;
      if (element.getBoundingClientRect().top < threshold) {
        element.classList.add('reveal-visible');
      }
    });

    document.querySelectorAll('.stat-value[data-target]').forEach((el) => {
      if (el.dataset.animated === 'true') return;
      if (el.getBoundingClientRect().top > window.innerHeight * 0.9) return;

      el.dataset.animated = 'true';
      const target = Number(el.dataset.target);
      const suffix = el.dataset.suffix || '';
      const duration = 1200;
      const start = performance.now();

      function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = `${Math.round(target * eased)}${suffix}`;
        if (progress < 1) requestAnimationFrame(tick);
      }

      requestAnimationFrame(tick);
    });
  }

  window.addEventListener('load', reveal);
  window.addEventListener('scroll', reveal, { passive: true });
  window.addEventListener('resize', reveal);
  reveal();
}

export function initActiveNav() {
  if (document.body.dataset.page !== 'home') return;

  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.site-nav a[href^="#"]');
  const topbar = document.getElementById('topbar');
  if (!sections.length || !links.length) return;

  function update() {
    const scrollY = window.scrollY + 120;
    let current = 'home';

    sections.forEach((section) => {
      if (scrollY >= section.offsetTop) current = section.id;
    });

    links.forEach((link) => {
      const href = link.getAttribute('href')?.replace('#', '');
      link.classList.toggle('active', href === current);
    });

    topbar?.classList.toggle('topbar-scrolled', window.scrollY > 24);
  }

  window.addEventListener('scroll', update, { passive: true });
  update();
}
