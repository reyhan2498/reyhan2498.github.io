const themeToggle = document.querySelector('#theme-toggle');
const root = document.documentElement;
const storageKey = 'ry-theme-mode';

function applyTheme(themeName) {
  root.setAttribute('data-theme', themeName);
  localStorage.setItem(storageKey, themeName);
  if (themeToggle) {
    themeToggle.innerHTML = `
      <i class="fa-solid fa-palette"></i>
      <span>${themeName === 'alt' ? 'Neon' : 'Ocean'}</span>
    `;
  }
}

function initTheme() {
  const saved = localStorage.getItem(storageKey);
  const theme = saved === 'alt' ? 'alt' : 'dark';
  applyTheme(theme);
}

function toggleTheme() {
  const next = root.getAttribute('data-theme') === 'alt' ? 'dark' : 'alt';
  applyTheme(next);
}

if (themeToggle) {
  themeToggle.addEventListener('click', toggleTheme);
}

initTheme();
