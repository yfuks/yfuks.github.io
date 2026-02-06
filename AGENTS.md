# Agent context: yfuks.github.io

This document gives AI agents and contributors enough context to work effectively on this repo.

## What this project is

- **Portfolio website** for **Yoann Fuks**, hosted at [https://yfuks.github.io](https://yfuks.github.io).
- **Primary goal**: showcase **projects** Yoann has worked on. The site is project-focused, not a resume.
- **Resume**: Links to the resume/CV are available for visitors who want them; the resume content lives under `resume/` (e.g. PDF, HTML, RenderCV output).

## Links

- **GitHub**: [https://github.com/yfuks](https://github.com/yfuks)
- **LinkedIn**: [https://www.linkedin.com/in/yoann-fuks/](https://www.linkedin.com/in/yoann-fuks/)
- **Site**: [https://yfuks.github.io](https://yfuks.github.io)

## Tech and deployment

- **Stack**: React + Vite (manually scaffolded, not CRA).
- **Package manager**: pnpm (`packageManager` is set in `package.json`; use `pnpm` for all installs and scripts).
- **Scripts**: `pnpm dev` (local dev), `pnpm build` (builds to `dist/`), `pnpm preview` (serve built site locally).
- **Entry points**: `index.html` at repo root, React app under `src/` (`main.jsx`, `App.jsx`, global styles in `index.css`).
- **Hosting**: GitHub Pages (deploy/hosting via GitHub Pages; Vite `base` is `/` because this is a user site `yfuks.github.io`).
- **i18n**: French and English are supported; keep both languages in mind for copy and UI.

## Guidelines for agents

1. **Prioritize projects**: When adding or editing content, favor project showcases over resume-style content. Resume is secondary and linked, not the main narrative.
2. **Respect i18n**: Any user-facing text should exist in French and English (or be clearly marked for translation).
3. **GitHub Pages**: Avoid patterns that break GitHub Pages (e.g. client-side routing must be compatible with the chosen setup, e.g. `basename` or hash router if using a project site).
4. **Resume area**: The `resume/` directory contains CV/resume assets (RenderCV, PDF, etc.). Link to these from the site; don’t duplicate full resume content as the main page content.
