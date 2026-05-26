# Reyhan Al-katiri Portfolio

Static portfolio for [reyhan2498.github.io](https://reyhan2498.github.io) — dark IDE-inspired layout (inspired by [tamalsen.dev](https://tamalsen.dev)).

## Structure

- `index.html` — Home (hero, expertise, work, experience, contact)
- `story.html` — MegaBliss case study
- `style.css` — IDE theme (navy + teal accent, JetBrains Mono)
- `main.js` — Renders dynamic sections on the home page
- `ui.js` — Code background, nav, scroll reveal, scroll-to-top
- `story.js` — Case study page scripts
- `projects.js` — Project data and filters
- `site-data.js` — Expertise, experience, education
- `assets/CV.pdf` — Downloadable resume
- `images/` — Screenshots and logo
- `docs/` — GitHub Pages deployment copy

## Local preview

```powershell
cd "d:\Users\reyha\Documents\Github\reyhan2498.github.io"
python -m http.server 8000
```

Open http://localhost:8000

## Deploy

GitHub Pages should publish from the `main` branch, `/docs` folder. After editing root files, copy HTML, CSS, JS, and `assets/` into `docs/` before pushing.
