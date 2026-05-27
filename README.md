# Reyhan Al-katiri Portfolio

Static portfolio for [reyhan2498.github.io](https://reyhan2498.github.io) — dark IDE-inspired layout.

## Structure

All site files live in `docs/` (GitHub Pages publishes from this folder):

- `docs/index.html` — Home (hero, expertise, work, experience, contact)
- `docs/case-studies.js` — MegaBliss case study content
- `docs/case-study-modal.js` — Case study popup
- `docs/style.css` — Global styles
- `docs/main.js` — Renders dynamic sections on the home page
- `docs/ui.js` — Code background, nav, scroll reveal, scroll-to-top
- `docs/projects.js` — Project data
- `docs/site-data.js` — Expertise, experience, education
- `docs/assets/CV.pdf` — Downloadable resume
- `docs/images/` — Screenshots and favicon

## Local preview

```powershell
cd "d:\Users\reyha\Documents\Github\reyhan2498.github.io\docs"
python -m http.server 8000
```

Open http://localhost:8000

## Deploy

GitHub Pages: `main` branch, **`/docs`** folder. Edit files under `docs/` and push.
