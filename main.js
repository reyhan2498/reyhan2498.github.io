import { projects } from './projects.js';

const mobileToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
const projectGrid = document.querySelector('#project-grid');

if (mobileToggle) {
  mobileToggle.addEventListener('click', () => {
    nav.classList.toggle('show');
  });
}

function renderProjects() {
  if (!projectGrid) return;

  projectGrid.innerHTML = projects
    .map(
      (project) => `
      <article class="project-card">
        <img src="${project.image}" alt="${project.title} preview" />
        <div class="project-card-body">
          <span class="project-meta">${project.category}</span>
          <h3>${project.title}</h3>
          <p>${project.summary}</p>
        </div>
        <div class="project-card-footer">
          <a href="${project.link}" target="_blank" rel="noreferrer">
            View Project <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </div>
      </article>
    `
    )
    .join('');
}

function animateOnScroll() {
  const revealElements = document.querySelectorAll('section, .project-card, .contact-card, .cta-panel');
  const threshold = window.innerHeight * 0.85;

  revealElements.forEach((element) => {
    const top = element.getBoundingClientRect().top;
    if (top < threshold) {
      element.classList.add('reveal-visible');
    }
  });
}

renderProjects();
animateOnScroll();
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('resize', animateOnScroll);
