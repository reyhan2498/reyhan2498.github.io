import { caseStudies } from './case-studies.js';

let lastFocus = null;

function renderCaseStudy(id) {
  const study = caseStudies[id];
  if (!study) return '';

  return `
    <header class="case-modal__header">
      <p class="case-modal__label mono">Case Study</p>
      <h2 class="case-modal__title" id="case-modal-title">${study.title}</h2>
      <p class="case-modal__subtitle">${study.subtitle}</p>
      <p class="case-modal__period mono">${study.period}</p>
      <p class="case-modal__intro">${study.intro}</p>
      <ul class="tag-list case-modal__tags">
        ${study.tags.map((t) => `<li>${t}</li>`).join('')}
      </ul>
    </header>

    <div class="story-stats">
      ${study.stats
        .map(
          (stat) => `
        <div class="story-stat">
          <strong>${stat.value}</strong>
          <span>${stat.label}</span>
        </div>
      `
        )
        .join('')}
    </div>

    <section class="case-modal__section">
      <h3 class="case-modal__heading"><span class="mono text-accent">//</span> Overview</h3>
      ${study.overview.map((p) => `<p class="case-modal__text">${p}</p>`).join('')}
    </section>

    <div class="story-grid case-modal__highlights">
      ${study.highlights
        .map(
          (item) => `
        <article class="case-modal__highlight">
          <div class="case-modal__highlight-media">
            <img
              src="${item.image}"
              alt="${item.title}"
              loading="lazy"
              ${item.imagePosition ? `style="object-position: ${item.imagePosition}"` : ''}
            />
          </div>
          <div class="case-modal__highlight-body">
            <span class="mono text-accent">${item.category}</span>
            <h4>${item.title}</h4>
          </div>
        </article>
      `
        )
        .join('')}
    </div>
  `;
}

function openCaseStudy(id) {
  const modal = document.getElementById('case-modal');
  const body = document.getElementById('case-modal-body');
  if (!modal || !body || !caseStudies[id]) return;

  body.innerHTML = renderCaseStudy(id);
  lastFocus = document.activeElement;

  modal.hidden = false;
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');

  const closeBtn = modal.querySelector('.case-modal__close');
  closeBtn?.focus();

  if (history.replaceState) {
    history.replaceState(null, '', `#case-study-${id}`);
  } else {
    location.hash = `case-study-${id}`;
  }
}

function closeCaseStudy() {
  const modal = document.getElementById('case-modal');
  if (!modal || modal.hidden) return;

  modal.hidden = true;
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');

  if (history.replaceState) {
    const base = location.pathname + location.search;
    history.replaceState(null, '', base);
  }

  lastFocus?.focus?.();
  lastFocus = null;
}

export function initCaseStudyModal() {
  const modal = document.getElementById('case-modal');
  if (!modal) return;

  modal.querySelector('.case-modal__backdrop')?.addEventListener('click', closeCaseStudy);
  modal.querySelector('.case-modal__close')?.addEventListener('click', closeCaseStudy);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.hidden) closeCaseStudy();
  });

  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-case-study]');
    if (!trigger) return;
    e.preventDefault();
    openCaseStudy(trigger.dataset.caseStudy);
  });

  const hash = location.hash.replace(/^#/, '');
  if (hash.startsWith('case-study-')) {
    const id = hash.replace('case-study-', '');
    if (caseStudies[id]) openCaseStudy(id);
  }
}

export { openCaseStudy, closeCaseStudy };
