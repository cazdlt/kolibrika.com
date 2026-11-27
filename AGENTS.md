# AGENTS.md

Project guidance for AI coding agents working on `kolibrika.com`.

## Overview

Static marketing website in Spanish (`lang="es"`) for Kolibrika Consultores, built with SvelteKit 3, Svelte 5, Vite 8, Tailwind CSS 4, DaisyUI 5, TypeScript 6, and Decap CMS 3.

## Runtime & Commands

- Node.js 26 (`.nvmrc`, `engines.node >=26`).
- `npm run dev` — local dev server.
- `npm run cms` — local Decap CMS proxy (`npx decap-server`, pairs with `npm run dev` at `/admin/`).
- `npm run check` — `svelte-kit sync && svelte-check --tsconfig ./tsconfig.json`.
- `npm run lint` — `prettier --check . && eslint .`.
- `npm run format` — `prettier --write .`.
- `npm run build` — static build to `build/` via `@sveltejs/adapter-static`.

Run `npm run check`, `npm run lint`, and `npm run build` after code changes.

## Architecture & Conventions

- **Static output:** `export const prerender = true` in `src/routes/+layout.ts`. Do not introduce server-only runtime routes or endpoints.
- **Imports:** Use `#lib/*` (mapped to `./src/lib/*` in `package.json`) for library imports.
- **Styling:** Tailwind CSS 4 + DaisyUI 5 (`light` theme default) configured in `src/app.css` with `Newsreader` (display) + `Manrope` (body) + `IBM Plex Mono` (mono) typography, brand color scales (`--color-wasabi-*`, `--color-seance-*`), and warm-ivory neutral tokens (`--color-ink*`, `--color-surface*`, `--color-line`).
- **Content collections:** JSON files under `src/lib/data/{services,sellingPoints,partners,people}/` are managed by Decap CMS (`static/admin/config.yml`) and imported eagerly at build time via `import.meta.glob`. Keep `static/admin/config.yml`, `src/lib/types/collections.ts`, and component globs in sync when changing schemas or folder names.
- **Prettier ignores:** `src/lib/data/**/*.json`, `static/admin/config.yml`, and `README.md` are ignored in `.prettierignore`.

## Deployment & Infrastructure

- **Hosting / CI:** Netlify (`netlify.toml`, `master` branch, `npm run build` -> `build/`). Netlify Identity + Git Gateway power `/admin/`.
- **DNS:** Managed in Cloudflare, pointing to Netlify.
- **Verification:** `static/d9159c4660b0a1bf22dcf76bef0508a1.html` is used for Brevo (Sendinblue) domain verification — do not delete it.
