import { caseStudies } from './case-studies.js';

let lastFocus = null;

function renderCaseStudy(id) {
  const study = caseStudies[id];
  if (!study) return '';

  const hasSingleVideoHighlight = study.highlights.length === 1 && study.highlights[0].video;

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

    ${hasSingleVideoHighlight ? `
    <div class="case-modal__overview-preview-grid">
      <div class="case-modal__preview-side">
        <div class="story-grid case-modal__highlights">
          ${study.highlights
            .map(
              (item) => {
                return `
            <article class="case-modal__highlight case-modal__highlight--video">
              <div class="case-modal__highlight-media">
                <video controls preload="metadata" poster="${item.image}">
                  <source src="${item.video}" type="video/mp4">
                  Your browser does not support the video tag.
                </video>
              </div>
              <div class="case-modal__highlight-body">
                <span class="case-modal__highlight-cat mono text-accent">${item.category}</span>
                <h4>${item.title}</h4>
              </div>
            </article>
          `;
              })
            .join('')}
        </div>
      </div>

      <div class="case-modal__section-divider"></div>

      <section class="case-modal__section case-modal__overview-side">
        <h3 class="case-modal__heading"><span class="mono text-accent">//</span> Overview</h3>
        ${study.overview.map((p) => `<p class="case-modal__text">${p}</p>`).join('')}
      </section>
    </div>
    ` : `
    <section class="case-modal__section">
      <h3 class="case-modal__heading"><span class="mono text-accent">//</span> Overview</h3>
      ${study.overview.map((p) => `<p class="case-modal__text">${p}</p>`).join('')}
    </section>

    <div class="story-grid case-modal__highlights">
      ${study.highlights
        .map(
          (item) => {
            const hideImage = item.category === 'Platform' || item.category === 'Backend';
            const hasVideo = item.video;
            const isGallery = Array.isArray(item.images) && item.images.length > 1;
            return `
            <article class="case-modal__highlight${hideImage ? ' case-modal__highlight--no-image' : ''}${hasVideo ? ' case-modal__highlight--video' : ''}${isGallery ? ' case-modal__highlight--gallery' : ''}${item.tall ? ' case-modal__highlight--tall' : ''}${item.category === 'Before' ? ' case-modal__highlight--before' : ''}${item.category === 'After' ? ' case-modal__highlight--after' : ''}">
              ${!hideImage ? `
              <div class="case-modal__highlight-media">
                ${hasVideo ? `
                <video controls preload="metadata" poster="${item.image}">
                  <source src="${item.video}" type="video/mp4">
                  Your browser does not support the video tag.
                </video>` : isGallery ? `
                <div class="case-modal__gallery-track">
                  ${item.images.map((src, i) => `<img src="${src}" alt="${item.title} — slide ${i + 1} of ${item.images.length}" loading="lazy" />`).join('')}
                </div>
                <button type="button" class="case-modal__gallery-btn case-modal__gallery-btn--prev" data-dir="prev" aria-label="Previous image">&#8249;</button>
                <button type="button" class="case-modal__gallery-btn case-modal__gallery-btn--next" data-dir="next" aria-label="Next image">&#8250;</button>
                <span class="case-modal__gallery-counter mono">1 / ${item.images.length}</span>` : `
                <img
                  src="${item.image}"
                  alt="${item.title}"
                  loading="lazy"
                  ${item.imagePosition ? `style="object-position: ${item.imagePosition}"` : ''}
                />` }
              </div>` : ''}
            <div class="case-modal__highlight-body">
              <span class="case-modal__highlight-cat mono text-accent">${item.category}</span>
              <h4>${item.title}</h4>
            </div>
          </article>
        `;
          })
        .join('')}
    </div>
    `}
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
  // Don't open modal if clicking on a link inside a case study card
  if (e.target.closest('.work-card-link')) return;

  const galleryBtn = e.target.closest('.case-modal__gallery-btn');
  if (galleryBtn) {
    const track = galleryBtn
      .closest('.case-modal__highlight-media')
      ?.querySelector('.case-modal__gallery-track');
    if (track) {
      const dir = galleryBtn.dataset.dir === 'next' ? 1 : -1;
      track.scrollBy({ left: dir * track.clientWidth, behavior: 'smooth' });
    }
    return;
  }

  const trigger = e.target.closest('[data-case-study]');
  if (!trigger) return;
  e.preventDefault();
  openCaseStudy(trigger.dataset.caseStudy);
  });

  // Scroll doesn't bubble, so listen in the capture phase to catch it
  // from any gallery track nested inside the modal.
  document.addEventListener(
    'scroll',
    (e) => {
      const track = e.target.closest?.('.case-modal__gallery-track');
      if (!track) return;
      const counter = track
        .closest('.case-modal__highlight-media')
        ?.querySelector('.case-modal__gallery-counter');
      if (!counter) return;
      const total = track.children.length;
      const index = Math.min(
        Math.round(track.scrollLeft / track.clientWidth) + 1,
        total
      );
      counter.textContent = `${index} / ${total}`;
    },
    true
  );

  const hash = location.hash.replace(/^#/, '');
  if (hash.startsWith('case-study-')) {
    const id = hash.replace('case-study-', '');
    if (caseStudies[id]) openCaseStudy(id);
  }
}

export { openCaseStudy, closeCaseStudy };
