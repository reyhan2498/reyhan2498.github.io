import { projects, projectFilters } from './projects.js';
import { expertise, experience, education } from './site-data.js';
import {
  initCodeBackground,
  initMobileNav,
  initScrollReveal,
  initActiveNav,
  initScrollTop
} from './ui.js';

const expertiseGrid = document.querySelector('#expertise-grid');
const featuredProjectEl = document.querySelector('#featured-project');
const projectGrid = document.querySelector('#project-grid');
const projectFiltersEl = document.querySelector('#project-filters');
const experienceList = document.querySelector('#experience-list');
const educationList = document.querySelector('#education-list');

let activeFilter = 'all';

function renderExpertise() {
  if (!expertiseGrid) return;

  expertiseGrid.innerHTML = expertise
    .map(
      (item) => `
      <article class="expertise-card reveal-on-scroll">
        <h3 class="expertise-title">${item.title}</h3>
        <p class="expertise-sub mono">${item.subtitle}</p>
        <p class="expertise-desc">${item.description}</p>
        <ul class="expertise-tools">
          ${item.tools.map((t) => `<li>${t}</li>`).join('')}
        </ul>
      </article>
    `
    )
    .join('');
}

function renderFeatured() {
  if (!featuredProjectEl) return;

  const project = projects.find((p) => p.featured) || projects[0];
  if (!project) return;

  featuredProjectEl.innerHTML = `
    <p class="featured-label mono">Featured Project</p>
    <a class="featured-card" href="${project.link}" ${
      project.link.startsWith('http') ? 'target="_blank" rel="noreferrer"' : ''
    }>
      <div class="featured-media">
        <img src="${project.image}" alt="${project.title}" loading="eager" />
      </div>
      <div class="featured-info">
        <h3>${project.title}</h3>
        <p>${project.summary}</p>
        <ul class="tag-list">
          ${project.tags.map((t) => `<li>${t}</li>`).join('')}
        </ul>
        <span class="featured-link mono">View project <i class="fa-solid fa-arrow-right"></i></span>
      </div>
    </a>
  `;
}

function filterCounts() {
  return projectFilters.map((f) => {
    const count =
      f.id === 'all' ? projects.length : projects.filter((p) => p.category === f.id).length;
    return { ...f, count };
  });
}

function renderFilters() {
  if (!projectFiltersEl) return;

  projectFiltersEl.innerHTML = filterCounts()
    .map(
      (filter) => `
      <button
        type="button"
        class="filter-btn${filter.id === activeFilter ? ' active' : ''}"
        data-filter="${filter.id}"
        role="tab"
        aria-selected="${filter.id === activeFilter}"
      >
        <span class="mono">/</span> ${filter.label}
        <span class="filter-count mono">${String(filter.count).padStart(2, '0')}</span>
      </button>
    `
    )
    .join('');

  projectFiltersEl.querySelectorAll('.filter-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      activeFilter = btn.dataset.filter;
      projectFiltersEl.querySelectorAll('.filter-btn').forEach((b) => {
        const on = b.dataset.filter === activeFilter;
        b.classList.toggle('active', on);
        b.setAttribute('aria-selected', String(on));
      });
      renderProjects();
    });
  });
}

function renderProjects() {
  if (!projectGrid) return;

  const filtered =
    activeFilter === 'all' ? projects : projects.filter((p) => p.category === activeFilter);

  const gridProjects = activeFilter === 'all' ? filtered.filter((p) => !p.featured) : filtered;

  if (!gridProjects.length) {
    projectGrid.innerHTML = `<p class="empty-state mono">// No projects in this category</p>`;
    return;
  }

  projectGrid.innerHTML = gridProjects
    .map(
      (project, i) => `
      <a
        class="work-card reveal-on-scroll${i === 0 && activeFilter === 'all' ? ' work-card--wide' : ''}"
        href="${project.link}"
        ${project.link.startsWith('http') ? 'target="_blank" rel="noreferrer"' : ''}
      >
        <div class="work-card-media">
          <img src="${project.image}" alt="${project.title}" loading="lazy" />
          <div class="work-card-overlay"></div>
        </div>
        <div class="work-card-body">
          <span class="work-card-cat mono">${project.categoryLabel}</span>
          <h3>${project.title}</h3>
          <ul class="tag-list tag-list--sm">
            ${project.tags.slice(0, 3).map((t) => `<li>${t}</li>`).join('')}
          </ul>
        </div>
      </a>
    `
    )
    .join('');
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
renderExpertise();
renderFeatured();
renderFilters();
renderProjects();
renderExperience();
renderEducation();
