import { projects, projectFilters } from './projects.js';
import { stats, skills, experience, education } from './site-data.js';
import { initMobileNav, initScrollReveal, initActiveNav } from './ui.js';

const projectGrid = document.querySelector('#project-grid');
const projectFiltersEl = document.querySelector('#project-filters');
const statsGrid = document.querySelector('#stats-grid');
const skillsGrid = document.querySelector('#skills-grid');
const experienceTimeline = document.querySelector('#experience-timeline');
const educationStack = document.querySelector('#education-stack');

let activeFilter = 'all';

function renderStats() {
  if (!statsGrid) return;

  statsGrid.innerHTML = stats
    .map(
      (stat) => `
      <article class="stat-card">
        <div class="stat-icon"><i class="fa-solid ${stat.icon}"></i></div>
        <p class="stat-value" data-target="${stat.value}" data-suffix="${stat.suffix}">0${stat.suffix}</p>
        <p class="stat-label">${stat.label}</p>
      </article>
    `
    )
    .join('');
}

function renderSkills() {
  if (!skillsGrid) return;

  skillsGrid.innerHTML = skills
    .map(
      (skill) => `
      <article class="skill-card" style="--skill-level: ${skill.level}%">
        <div class="skill-card-head">
          <span class="skill-icon"><i class="${skill.icon}"></i></span>
          <div>
            <h3>${skill.name}</h3>
            <p>${skill.years}</p>
          </div>
        </div>
        <div class="skill-bar" aria-hidden="true"><span></span></div>
      </article>
    `
    )
    .join('');
}

function renderEducation() {
  if (!educationStack) return;

  educationStack.innerHTML = education
    .map(
      (item) => `
      <article class="edu-card">
        <span class="edu-icon"><i class="${item.icon}"></i></span>
        <div>
          <h3>${item.school}</h3>
          <p class="edu-degree">${item.degree}</p>
          <p class="edu-meta">${item.period} · ${item.detail}</p>
        </div>
      </article>
    `
    )
    .join('');
}

function renderExperience() {
  if (!experienceTimeline) return;

  experienceTimeline.innerHTML = experience
    .map(
      (job) => `
      <article class="timeline-item">
        <div class="timeline-marker"><i class="${job.icon}"></i></div>
        <div class="timeline-body">
          <div class="timeline-head">
            <div>
              <h3>${job.role}</h3>
              <p class="timeline-company">${job.company} · ${job.location}</p>
            </div>
            <span class="timeline-period">${job.period}</span>
          </div>
          <ul class="timeline-highlights">
            ${job.highlights.map((h) => `<li>${h}</li>`).join('')}
          </ul>
          <div class="tag-row">
            ${job.tools.map((t) => `<span class="tag">${t}</span>`).join('')}
          </div>
        </div>
      </article>
    `
    )
    .join('');
}

function renderFilters() {
  if (!projectFiltersEl) return;

  projectFiltersEl.innerHTML = projectFilters
    .map(
      (filter) => `
      <button
        type="button"
        class="filter-btn${filter.id === activeFilter ? ' active' : ''}"
        data-filter="${filter.id}"
        role="tab"
        aria-selected="${filter.id === activeFilter}"
      >
        ${filter.label}
      </button>
    `
    )
    .join('');

  projectFiltersEl.querySelectorAll('.filter-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      activeFilter = btn.dataset.filter;
      projectFiltersEl.querySelectorAll('.filter-btn').forEach((b) => {
        const isActive = b.dataset.filter === activeFilter;
        b.classList.toggle('active', isActive);
        b.setAttribute('aria-selected', String(isActive));
      });
      renderProjects();
    });
  });
}

function renderProjects() {
  if (!projectGrid) return;

  const filtered =
    activeFilter === 'all' ? projects : projects.filter((p) => p.category === activeFilter);

  if (!filtered.length) {
    projectGrid.innerHTML = `<p class="empty-state">No projects in this category yet.</p>`;
    return;
  }

  projectGrid.innerHTML = filtered
    .map(
      (project, index) => `
      <article class="project-card reveal-on-scroll" data-category="${project.category}" style="--stagger: ${index * 0.08}s">
        <div class="project-card-media">
          <img src="${project.image}" alt="${project.title} preview" loading="lazy" />
          ${project.featured ? '<span class="featured-badge"><i class="fa-solid fa-star"></i> Featured</span>' : ''}
          <div class="project-card-overlay"></div>
        </div>
        <div class="project-card-body">
          <span class="project-meta">${project.categoryLabel}</span>
          <h3>${project.title}</h3>
          <p>${project.summary}</p>
          <div class="tag-row">
            ${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join('')}
          </div>
        </div>
        <div class="project-card-footer">
          <a href="${project.link}" ${project.link.startsWith('http') ? 'target="_blank" rel="noreferrer"' : ''}>
            View project <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </div>
      </article>
    `
    )
    .join('');
}

initMobileNav();
initScrollReveal();
initActiveNav();
renderStats();
renderSkills();
renderEducation();
renderExperience();
renderFilters();
renderProjects();
