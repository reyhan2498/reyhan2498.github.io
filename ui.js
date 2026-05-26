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
