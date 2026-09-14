# AGENTS.md

## Commands

- `npm run dev` — start dev server
- `npm run build` — production build to `dist/`
- `npm run preview` — preview the production build
- No lint, typecheck, or test scripts exist — do not try to run them

## Architecture

- Single-page Astro site. Entry: `src/pages/index.astro` — imports all components and `global.css`.
- All content lives in `src/config.ts`. Sections auto-hide when their arrays are empty or missing.
- Tailwind CSS **v4** via the `@tailwindcss/vite` plugin in `astro.config.mjs` — not the old PostCSS approach.

## Conventions

- Use **Tabler Icons** (already a dependency). Do not import other icon libraries.
- Font is **IBM Plex Mono** loaded from Google Fonts. Keep the monospace aesthetic.
- Components map 1:1 to sections: Hero, About, Projects, Experience, Education, Header, Footer.

## Quirks

- A random SVG background is selected at page load from `/public/{android,kotlin,favicon}.svg` via inline script in `index.astro`. Changing or adding backgrounds means updating that list.
- `.nojekyll` exists at repo root — required for GitHub Pages with Astro's `dist/` output.
- `site` in `astro.config.mjs` is set to `https://philipjan.github.io` — update if deploying elsewhere.
- No CI/CD workflows are configured.
