import { projects } from './projects.js';
import { expertise, experience, education } from './site-data.js';
import {
  initCodeBackground,
  initMobileNav,
  initScrollReveal,
  initActiveNav,
  initScrollTop,
  initCustomCursor
} from './ui.js';
import { initCaseStudyModal } from './case-study-modal.js';

const expertiseGrid = document.querySelector('#expertise-grid');
const featuredProjectEl = document.querySelector('#featured-project');
const projectGrid = document.querySelector('#project-grid');
const experienceList = document.querySelector('#experience-list');
const educationList = document.querySelector('#education-list');

function renderExpertise() {
  if (!expertiseGrid) return;

  expertiseGrid.innerHTML = expertise
    .map(
      (item) => {
        const iconHtml = item.icon
          ? (item.icon.startsWith('fa-')
              ? `<i class="fa-solid ${item.icon} expertise-icon"></i>`
              : `<img src="${item.icon}" alt="${item.title} icon" class="expertise-icon-img" />`)
          : '';

        return `
      <article class="expertise-card reveal-on-scroll">
        <div class="expertise-header">
          ${iconHtml}
          <h3 class="expertise-title">${item.title}</h3>
        </div>
        <p class="expertise-sub mono">${item.subtitle}</p>
        <p class="expertise-desc">${item.description}</p>
        <ul class="expertise-tools">
          ${item.tools.map((t) => `<li>${t}</li>`).join('')}
        </ul>
      </article>
    `;
      }
    )
    .join('');
}

function renderFeatured() {
  if (!featuredProjectEl) return;

  const project = projects.find((p) => p.featured) || projects[0];
  if (!project) return;

  const cardTag = project.caseStudy ? 'button' : 'a';
  const cardAttrs = project.caseStudy
    ? `type="button" class="featured-card" data-case-study="${project.caseStudy}"`
    : `class="featured-card" href="${project.link}"${
        project.link.startsWith('http') ? ' target="_blank" rel="noreferrer"' : ''
      }`;

  featuredProjectEl.innerHTML = `
    <p class="featured-label mono">Featured Project</p>
    <${cardTag} ${cardAttrs}>
      <div class="featured-media">
        <img src="${project.image}" alt="${project.title}" loading="eager" />
      </div>
      <div class="featured-info">
        <h3>${project.title}</h3>
        <p>${project.summary}</p>
        <ul class="tag-list">
          ${project.tags.map((t) => `<li>${t}</li>`).join('')}
        </ul>
        <span class="featured-link mono">Read case study <i class="fa-solid fa-arrow-right"></i></span>
      </div>
    </${cardTag}>
  `;
}

function renderProjects() {
  if (!projectGrid) return;

  const gridProjects = projects.filter((p) => !p.featured);

  projectGrid.innerHTML = gridProjects
    .map(
      (project, i) => {
        const hasCaseStudy = !!project.caseStudy;
        const hasLink = !!project.link;

        const cardTag = hasCaseStudy ? 'button' : 'a';
        const cardAttrs = hasCaseStudy
          ? `type="button" class="work-card reveal-on-scroll${i === 0 ? ' work-card--wide' : ''}" data-case-study="${project.caseStudy}"`
          : `class="work-card reveal-on-scroll${i === 0 ? ' work-card--wide' : ''}" href="${project.link}"${
              project.link.startsWith('http') ? ' target="_blank" rel="noreferrer"' : ''
            }`;

        const viewProjectLink = (hasCaseStudy && hasLink)
          ? `<a href="${project.link}" target="_blank" rel="noreferrer" class="work-card-link mono">View Project <i class="fa-solid fa-external-link-alt"></i></a>`
          : '';

        return `
      <${cardTag} ${cardAttrs}>
        <div class="work-card-media">
          <img
            src="${project.image}"
            alt="${project.title}"
            loading="lazy"
            ${project.imagePosition ? `style="object-position: ${project.imagePosition}"` : ''}
          />
          <div class="work-card-overlay"></div>
        </div>
        <div class="work-card-body">
          <span class="work-card-cat mono">${project.categoryLabel}</span>
          <h3>${project.title}</h3>
          <p class="work-card-desc">${project.summary}</p>
          <ul class="tag-list tag-list--sm">
            ${project.tags.slice(0, 3).map((t) => `<li>${t}</li>`).join('')}
          </ul>
          ${viewProjectLink}
        </div>
      </${cardTag}>
    `;
      }
    )
    .join('');
}

/* Render a horizontal project slider and expose simple controls */
function renderProjectSlider() {
  const sliderTrack = document.querySelector('#project-slider-track');
  if (!sliderTrack) return;

  const sliderProjects = projects.filter((project) => !project.featured);
  if (!sliderProjects.length) return;

  const slides = sliderProjects.map((project) => {
    const cardTag = project.caseStudy ? 'button' : 'a';
    const cardAttrs = project.caseStudy
      ? `type="button" class="project-slide-card" data-case-study="${project.caseStudy}"`
      : `class="project-slide-card" href="${project.link}" target="_blank" rel="noreferrer"`;

    return `
      <article class="project-slide">
        <${cardTag} ${cardAttrs}>
          <img src="${project.image}" alt="${project.title}" loading="lazy" />
          <div class="project-slide-body">
            <span class="mono">${project.categoryLabel}</span>
            <h3>${project.title}</h3>
            <p>${project.summary}</p>
            <ul class="tag-list tag-list--sm">
              ${project.tags.slice(0, 3).map((t) => `<li>${t}</li>`).join('')}
            </ul>
          </div>
        </${cardTag}>
      </article>
    `;
  });

  sliderTrack.innerHTML = slides.join('');
}

function initProjectSlider() {
  const slider = document.querySelector('#project-slider');
  const track = document.querySelector('#project-slider-track');
  const prevBtn = document.querySelector('.slider-prev');
  const nextBtn = document.querySelector('.slider-next');
  const dotsWrap = document.querySelector('#project-slider-dots');
  if (!slider || !track) return;

  let pageIndex = 0;
  let startX = null;
  let dragDelta = 0;

  function slidesToShow() {
    const w = window.innerWidth;
    if (w >= 1100) return 3;
    if (w >= 700) return 2;
    return 1;
  }

  function pageCount() {
    const show = slidesToShow();
    return Math.max(1, Math.ceil(track.children.length / show));
  }

  function renderDots() {
    if (!dotsWrap) return [];
    const pages = pageCount();
    dotsWrap.innerHTML = Array.from({ length: pages })
      .map((_, i) => `<button data-dot="${i}" aria-label="Go to page ${i + 1}"></button>`)
      .join('');
    return Array.from(document.querySelectorAll('#project-slider-dots button'));
  }

  let dots = renderDots();

  function update() {
    const pages = pageCount();
    const maxPage = pages - 1;
    const sliderWidth = slider.clientWidth;

    if (pageIndex < 0) pageIndex = 0;
    if (pageIndex > maxPage) pageIndex = maxPage;

    track.style.transform = `translateX(${-pageIndex * sliderWidth}px)`;

    dots.forEach((d) => d.classList.remove('active'));
    const activeDot = dots[Math.min(pageIndex, dots.length - 1)];
    if (activeDot) activeDot.classList.add('active');
  }

  if (prevBtn) prevBtn.addEventListener('click', () => { pageIndex = Math.max(0, pageIndex - 1); update(); });
  if (nextBtn) nextBtn.addEventListener('click', () => { pageIndex = Math.min(pageCount() - 1, pageIndex + 1); update(); });

  function attachDotListeners() {
    dots.forEach((d) => {
      d.addEventListener('click', (e) => {
        const target = e.currentTarget;
        const i = Number(target.getAttribute('data-dot')) || 0;
        pageIndex = i;
        update();
      });
    });
  }

  attachDotListeners();

  function handlePointerDown(e) {
    const interactive = e.target.closest('a, button');
    if (interactive) return;
    startX = e.clientX;
    dragDelta = 0;
    slider.setPointerCapture(e.pointerId);
  }

  function handlePointerMove(e) {
    if (startX === null) return;
    dragDelta = e.clientX - startX;
  }

  function handlePointerUp() {
    if (startX === null) return;
    const threshold = 48;
    if (dragDelta < -threshold) {
      pageIndex = Math.min(pageCount() - 1, pageIndex + 1);
      update();
    } else if (dragDelta > threshold) {
      pageIndex = Math.max(0, pageIndex - 1);
      update();
    }
    startX = null;
    dragDelta = 0;
  }

  slider.addEventListener('pointerdown', handlePointerDown);
  slider.addEventListener('pointermove', handlePointerMove);
  slider.addEventListener('pointerup', handlePointerUp);
  slider.addEventListener('pointercancel', handlePointerUp);

  window.addEventListener('resize', () => {
    dots = renderDots();
    attachDotListeners();
    setTimeout(update, 120);
  });

  setTimeout(update, 60);
}

function renderExperience() {
  if (!experienceList) return;

  experienceList.innerHTML = experience
    .map(
      (job) => `
      <article class="job-card reveal-on-scroll">
        <div class="job-header">
          <div>
            <h3 class="job-role">${job.role}</h3>
            <p class="job-company mono">@ ${job.company}</p>
          </div>
          <span class="job-period mono">${job.period}</span>
        </div>
        <p class="job-location mono">${job.location}</p>
        <p class="job-desc">${job.description}</p>
        <ul class="tag-list">
          ${job.tools.map((t) => `<li>${t}</li>`).join('')}
        </ul>
      </article>
    `
    )
    .join('');
}

function renderEducation() {
  if (!educationList) return;

  educationList.innerHTML = education
    .map(
      (item) => `
      <article class="edu-item">
        <h4>${item.school}</h4>
        <p>${item.degree}</p>
        <p class="mono edu-period">${item.period}</p>
        <p class="edu-detail">${item.detail}</p>
      </article>
    `
    )
    .join('');
}

initCodeBackground();
initMobileNav();
initScrollReveal();
initActiveNav();
initScrollTop();
initCustomCursor();
initCaseStudyModal();
renderExpertise();
renderFeatured();
renderProjectSlider();
initProjectSlider();
renderExperience();
renderEducation();
