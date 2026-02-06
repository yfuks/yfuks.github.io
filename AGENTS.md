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

## Visual design primaries

- **Overall feel**: Clean, soft, focused on readability; large hero with central card and subtle geometric background lines.
- **Layout**:
  - **Hero**: Centered card with avatar at top, greeting pill, bold headline, short supporting copy, and primary CTA button.
  - **Navigation**: Top horizontal bar with left-aligned logo pill and right-aligned links (`About`, `Portfolio`, `Skills`, `Blog`) plus a prominent `My resume` button.
  - **Card**: Light surface on a colored background, with rounded corners and soft shadows; content width kept narrow for focus.
- **Color palette** (approximate hex values):
  - **Background**: Soft peach `#FFD9CC` (outer background).
  - **Card background**: Off‑white `#FFFFFF` with very subtle grey line art.
  - **Primary accent**: Warm orange `#FF6B3D` (logo pill, small accents).
  - **Primary text**: Very dark grey / almost black `#111111` for headings.
  - **Secondary text**: Medium grey `#6B6B6B` for body copy.
  - **CTA button**: Black `#111111` background with white `#FFFFFF` text and soft radius.
- **Typography**:
  - **Headline**: Bold, large sans‑serif with emphasized words in heavier weight (e.g. “full‑stack” / “stuff” / “actually works!”).
  - **Body**: Clean sans‑serif with comfortable line height for readability.
  - **Microcopy**: Smaller caps / pill labels for greetings and small descriptors.
- **Cards and buttons**:
  - **Buttons**: Medium rounded (not full pill), clear hover states (slightly lighter background, subtle elevation).
  - **Avatar**: Illustrated or simple portrait inside a rounded container above the headline.
- **Border radius**: A single CSS variable `--radius` (in `src/index.css`, currently `8px`) is used for consistent medium rounding site‑wide: card, top bar, pills, buttons, avatar, project cards. Do not use full pill (`999px`); keep corners medium-rounded for consistency.

### CI and GitHub Pages deployment

- **Workflow**: `.github/workflows/deploy-pages.yml` builds and deploys the site on every push to `main` (and can be run manually via “Run workflow”).
- **Requirement**: In the repo **Settings > Pages**, set **Source** to **GitHub Actions** (not “Deploy from a branch”). The workflow uses the `github-pages` environment and `actions/deploy-pages`.
- **Build**: CI runs `pnpm install --frozen-lockfile` and `pnpm build`, then uploads the `dist/` folder as the Pages artifact.
- **Branch**: The workflow triggers on pushes to `main` and `portfolio`; adjust `on.push.branches` in the workflow if you use other branch names.

## Guidelines for agents

1. **Prioritize projects**: When adding or editing content, favor project showcases over resume-style content. Resume is secondary and linked, not the main narrative.
2. **Respect i18n**: Any user-facing text should exist in French and English (or be clearly marked for translation).
3. **GitHub Pages**: Avoid patterns that break GitHub Pages (e.g. client-side routing must be compatible with the chosen setup, e.g. `basename` or hash router if using a project site).
4. **Resume area**: The `resume/` directory contains CV/resume assets (RenderCV, PDF, etc.). Link to these from the site; don’t duplicate full resume content as the main page content.
5. **Accessibility**: Aim for WCAG‑friendly contrasts, semantic HTML, keyboard navigability, and ARIA only where needed.
6. **SEO**: Use descriptive titles, meta tags, structured headings, and meaningful alt text so the portfolio is easily discoverable.
7. **Responsive design**: The site must work well on mobile, tablet, and desktop with layouts and typography adapting gracefully.
8. **Keep this file updated**: Whenever you introduce or discover repo‑wide conventions, design decisions, or recurring patterns that are useful for future work, update `AGENTS.md` with that information without needing an explicit user request.
