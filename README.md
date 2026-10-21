# Reyhan Al-katiri Portfolio

Static portfolio for [reyhan2498.github.io](https://reyhan2498.github.io): a hand-built "lab notebook" design with an interactive case file, project gallery, experience timeline and terminal.

## Structure

GitHub Pages publishes from `docs/` on `main`:

- `docs/index.html` - page markup, SEO and social-preview tags
- `docs/style.css` - all styles (light and dark themes)
- `docs/app.js` - project data, case-study modals, filters, terminal, theme toggle
- `docs/images/portfolio/` - optimised project screenshots
- `docs/assets/` - CV and DailyStreaks demo video

## Add or edit a project

Edit the `PJ` array at the bottom of `docs/app.js` (title, summary, tags, gallery, link). Drop the image into `docs/images/portfolio/` and reference it in the `IMG` map.

## Local preview

```
cd docs
python -m http.server 8000
```

Open http://localhost:8000

## Deploy

Settings > Pages > Deploy from a branch > `main` / `/docs`. Push to `main` and the site updates in about a minute.
