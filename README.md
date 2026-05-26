# Reyhan Al-katiri Portfolio

This repository contains the static portfolio website for `reyhan2498.github.io`.

## Structure

- `index.html` — Main portfolio landing page
- `story.html` — Project story / case study page
- `style.css` — Global stylesheet for typography, layout, and responsive design
- `main.js` — JavaScript for the mobile menu, scroll reveal animation, and project rendering
- `projects.js` — Data-driven project card definitions
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

- Add or update project entries in `projects.js`.
- Keep image references inside `images/`.
- Update navigation, content, or layout in `index.html`, `story.html`, and `style.css`.
- Copy updated site files into `docs/` before pushing if your Pages workflow is configured from `docs/`.

## Notes

The site is built as a lightweight, static HTML/CSS/JS portfolio suitable for GitHub Pages and easy maintenance.
