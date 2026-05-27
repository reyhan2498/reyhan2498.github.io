const CODE_LINES = [
  'import { createApp } from "react";',
  'const developer = { name: "Reyhan", stack: ["React", "Node"] };',
  'export async function fetchData(url) {',
  '  const res = await fetch(url);',
  '  return res.json();',
  '}',
  'function Portfolio() {',
  '  return <Layout>{children}</Layout>;',
  '}',
  'SELECT * FROM projects WHERE status = "shipped";',
  'npm run build && npm run deploy',
  'interface User { id: string; role: string; }',
  'const theme = { dark: true, accent: "#64ffda" };',
  'git commit -m "feat: portfolio redesign"',
  'await prisma.user.findMany({ take: 10 });',
  'const routes = ["/", "/work", "/contact"];',
  'export default function Home() {',
  '  useEffect(() => initAnimations(), []);',
  '}',
  'docker compose up -d',
  'tailwind.config = { content: ["./src/**/*"] };',
  'try { await deploy(); } catch (e) { log(e); }',
  'const skills = ["Next.js", "SQL", "Flutter"];',
  'module.exports = { build, dev, preview };',
  '// Auckland · Full Stack Developer',
  'return response.status(200).json(data);',
  'class ApiClient extends BaseService {}',
  'pnpm install && pnpm dev',
  'type Project = { title: string; href: string };',
];

export function initCodeBackground() {
  const container = document.getElementById('code-bg');
  if (!container) return;

  container.innerHTML = CODE_LINES.map(
    (line, i) =>
      `<div class="code-line" style="--line-i:${i}; left:${(i * 7) % 85}%; animation-delay:${(i % 12) * 0.4}s">${line}</div>`
  ).join('');
}

export function initMobileNav() {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    document.body.classList.toggle('nav-open', open);
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('nav-open');
    });
  });
}

export function initScrollReveal() {
  function reveal() {
    const threshold = window.innerHeight * 0.9;
    document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
      if (el.classList.contains('reveal-visible')) return;
      if (el.getBoundingClientRect().top < threshold) {
        el.classList.add('reveal-visible');
      }
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
  const links = document.querySelectorAll('.site-nav a');
  const topbar = document.getElementById('topbar');
  const scrollTop = document.getElementById('scroll-top');

  function update() {
    const y = window.scrollY + 140;
    let current = 'home';

    sections.forEach((section) => {
      if (y >= section.offsetTop) current = section.id;
    });

    links.forEach((link) => {
      const id = link.getAttribute('href')?.replace('#', '');
      link.classList.toggle('active', id === current);
    });

    topbar?.classList.toggle('scrolled', window.scrollY > 40);
    scrollTop?.classList.toggle('visible', window.scrollY > 500);
  }

  window.addEventListener('scroll', update, { passive: true });
  update();
}

export function initScrollTop() {
  const btn = document.getElementById('scroll-top');
  if (!btn) return;

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

const CURSOR_INTERACTIVE =
  'a, button, [data-case-study], .btn-primary, .btn-resume, .filter-btn, input, textarea, select, label[for]';

export function initCustomCursor() {
  const cursor = document.getElementById('custom-cursor');
  if (!cursor) return;

  const dot = cursor.querySelector('.cursor-dot');
  const ring = cursor.querySelector('.cursor-ring');
  if (!dot || !ring) return;

  // Check for touch capability - if device has coarse pointer (touch), disable cursor
  const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
  const hasTouchSupport = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  // Only enable custom cursor on devices with fine pointer (mouse) and no touch
  const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
  const canHover = window.matchMedia('(hover: hover)').matches;

  // Disable on touch devices or if no fine pointer support
  if (isTouchDevice || hasTouchSupport || !hasFinePointer || !canHover) {
    cursor.remove();
    return;
  }

  document.body.classList.add('has-custom-cursor');
  cursor.classList.remove('is-hidden');

  let mouseX = -100;
  let mouseY = -100;
  let ringX = -100;
  let ringY = -100;
  let rafId = null;
  let visible = false;

  function setPosition(el, x, y) {
    el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
  }

  function animateRing() {
    const ease = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 1 : 0.2;
    ringX += (mouseX - ringX) * ease;
    ringY += (mouseY - ringY) * ease;
    setPosition(ring, ringX, ringY);

    if (Math.hypot(mouseX - ringX, mouseY - ringY) > 0.5) {
      rafId = requestAnimationFrame(animateRing);
    } else {
      rafId = null;
    }
  }

  function moveCursor(x, y) {
    mouseX = x;
    mouseY = y;
    setPosition(dot, x, y);
    if (!visible) {
      visible = true;
      cursor.classList.remove('is-hidden');
      setPosition(ring, x, y);
      ringX = x;
      ringY = y;
    }
    if (!rafId) rafId = requestAnimationFrame(animateRing);
  }

  window.addEventListener(
    'mousemove',
    (e) => moveCursor(e.clientX, e.clientY),
    { passive: true }
  );

  document.documentElement.addEventListener('mouseout', (e) => {
    if (!e.relatedTarget) cursor.classList.add('is-hidden');
  });

  document.documentElement.addEventListener('mouseover', () => {
    if (visible) cursor.classList.remove('is-hidden');
  });

  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(CURSOR_INTERACTIVE)) {
      document.body.classList.add('cursor-hover');
    }
  });

  document.addEventListener('mouseout', (e) => {
    const from = e.target.closest(CURSOR_INTERACTIVE);
    const to = e.relatedTarget?.closest?.(CURSOR_INTERACTIVE);
    if (from && !to) document.body.classList.remove('cursor-hover');
  });

  document.addEventListener('mousedown', () => document.body.classList.add('cursor-click'));
  document.addEventListener('mouseup', () => document.body.classList.remove('cursor-click'));
}
