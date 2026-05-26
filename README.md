# Reyhan Al-katiri Portfolio

This repository contains the static portfolio website for `reyhan2498.github.io`.

## Structure

- `index.html` — Main portfolio landing page
- `story.html` — MegaBliss case study page
- `style.css` — Global stylesheet, animations, and responsive layout
- `main.js` — Renders projects, skills, experience, and education on the home page
- `ui.js` — Shared mobile menu, scroll reveal, and active nav
- `story.js` — Lightweight script for the case study page only
- `projects.js` — Project card data and filter categories
- `site-data.js` — Skills, experience, education, and stats (aligned with CV)
- `assets/CV.pdf` — Downloadable resume
- `images/` — Static image assets used across the site
- `docs/` — Deployment copy for GitHub Pages

## Local preview

Open `index.html` directly in your browser, or serve the site locally with a simple static server.

Example using Python:

```powershell
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## GitHub Pages deployment

This repository is set up for GitHub Pages with the `docs/` folder as the published site.

1. Ensure GitHub Pages is configured to publish from the `main` branch and the `docs/` folder.
2. Keep the contents of `docs/` synced with the root site files.
3. Push changes to the repository.

## Updating the site

Edit files in the repository root, then copy them into `docs/` before pushing (HTML, CSS, JS, and `assets/`). Images live in `images/` at the root and in `docs/images/` for deployment.

- Add or update project entries in `projects.js`.
- Update CV content in `site-data.js` and static copy in `index.html` / `story.html`.

## Notes

The site is built as a lightweight, static HTML/CSS/JS portfolio suitable for GitHub Pages and easy maintenance.
