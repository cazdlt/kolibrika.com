# AGENTS.md

Project guidance and historical context for AI coding agents working on `kolibrika.com`.

## Overview & Business Context

- **Company:** Kolibrika Consultores (Bogotá, Colombia; serving Colombia and LATAM).
- **Team & positioning:** Family/partner practice combining **Nancy de la Torre** (strategic market intelligence & pharma expertise) and **Andrés Zamora** (data engineering, BI platforms, and applied AI/LLMs). Public tagline: _"Inteligencia de mercados, datos, BI e IA aplicada"_.
- **Audience:** Prior client track record is in pharma and veterinary health (**Humax Pharmaceutical**, **Weiss Pharma | Lefko**), but the offering generalizes to any B2B operation.
- **Privacy boundary:** Never expose private client implementation details (e.g., from local client repos or Obsidian notes) in public site copy.
- **Primary conversion goal:** Contact form submissions via **Netlify Forms** (`#contact`).
- **Language:** Spanish (`lang="es"`), neutral/Colombian register with proper orthography.

## Runtime & Commands

- **Node.js 26 Active LTS** (`.nvmrc`, `engines.node >=26`), managed via `nvm`. Keep `npm` (chosen over `pnpm`/`bun` for minimal dependency footprint and zero extra CI setup).
- **Non-interactive shells / sandboxes:** `npm` may not be on default `PATH`. Source `nvm` first:
  ```bash
  export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" && nvm use
  ```
- `npm run dev` — local Vite dev server.
- `npm run cms` — local Decap CMS proxy (`npx decap-server`, pairs with `npm run dev` at `/admin/`).
- `npm run check` — `svelte-kit sync && svelte-check --tsconfig ./tsconfig.json`.
- `npm run lint` — `prettier --check . && eslint .`.
- `npm run format` — `prettier --write .`.
- `npm run build` — static build to `build/` via `@sveltejs/adapter-static`.

Run `npm run check`, `npm run lint`, and `npm run build` after code changes.

## Design System & Visual Direction

Established through iterative visual reviews with the owner — follow these rules strictly:

- **Aesthetic:** Editorial + technical restraint. Warm-ivory neutral surfaces (`--color-surface: #faf9f6`, `--color-surface-alt: #f2f0ea`, `--color-surface-card: #ffffff`, `--color-line: #e2dfd7`), ink neutrals (`#19161d`, `#56505e`), brand scales (`--color-wasabi-*`, `--color-seance-*`), hairline dividers, and smooth full-bleed transitions.
- **Typography:** `Newsreader` (serif display for headings), `Manrope` (body/UI), `IBM Plex Mono` (eyebrows and indices `01`–`04`). Configured in `src/app.html` and `src/app.css`.
- **Hummingbirds are core to the brand:** Keep them prominent and unobstructed — never bury them behind heavy dark overlays or push hero copy down to the bottom of the viewport.
- **Explicit anti-patterns (rejected by the owner):**
  - Generic "AI-slop" SaaS templates: pill badges, `rounded-2xl` card grids, faded decorative watermarks, verbose generic hero copy, or wave SVG dividers (`footerWaves.svg` was intentionally dropped).
  - Framed / "copy-pasted" rectangular images placed beside text — prefer full-bleed photography with seamless gradient transitions (as in `SellingPoints.svelte`) or `mix-blend-multiply` integration (as in `Services.svelte`).
- **Key visual assets:**
  - `static/img/main/hero-extended.jpg` — active hero image (AI-outpainted from `herox.jpg`: green bokeh on the left for crisp white copy, hovering hummingbird + violet salvia flowers on the right).
  - `static/img/main/hero3.jpg` — used horizontally mirrored (`-scale-x-100`) as the full-bleed dark forest backdrop (`bg-[#141f11]`) in `SellingPoints.svelte`.
  - `static/img/main/hero-cutout.jpg` — currently unused, **explicitly kept on disk** by the owner for possible future use; do not delete.
  - `static/favicon.svg` — `256 × 256` warm-ivory squircle (`#faf9f6`, `rx="56"`, subtle `#e2dfd7` border) framing the hummingbird for light/dark browser tabs. Main logos (`logo.svg`, `logoWhite.svg`) are intentionally unchanged.
  - `static/img/content/weiss.png` — Weiss Pharma logo processed so white text is `#19161d` for light backgrounds while preserving brand marks.

## Architecture & Technical Gotchas

- **Static output:** `export const prerender = true` in `src/routes/+layout.ts`. Do not introduce server-only runtime routes or endpoints.
- **SvelteKit 3 + Vite 8:** `svelte.config.js` was removed; SvelteKit + `@sveltejs/adapter-static` are configured directly inside `vite.config.ts`. Keep `tailwindcss()` registered **before** `sveltekit(...)`.
- **Imports:** Use `#lib/*` (mapped to `./src/lib/*` in `package.json`, replacing `$lib`). Native subpath imports require explicit file extensions (e.g. `#lib/data/site.ts`, `#lib/types/collections.ts`).
- **TypeScript 6 pin:** `typescript` is pinned to `^6.0.3` because `@sveltejs/kit`, `svelte-check`, and `typescript-eslint` do not yet support TS 7 peer ranges. `tsconfig.json` extends `$app/tsconfig` and excludes `["build", ".svelte-kit", "node_modules"]` so `svelte-check` does not scan build output.
- **Tailwind CSS 4 + DaisyUI 5:**
  - Configured CSS-first in `src/app.css` (`light --default` DaisyUI theme; no `tailwind.config.cjs` or `postcss.config.cjs`).
  - Keep `@custom-variant dark (&:where(.dark, .dark *));` in `src/app.css`; without it, Tailwind v4's `prefers-color-scheme` default breaks light-surface inputs under OS dark mode.
  - DaisyUI 5 removed `.form-control`'s column flex behavior — use `flex flex-col` explicitly.
- **Root-relative navigation (404 safe):** `Navbar.svelte` and `Footer.svelte` use `resolve('/')` from `$app/paths` (`href={resolve('/')}` and `{resolve('/')}#<section>`) so clicking the logo or section links from `+error.svelte` (404) navigates back to `/`.
- **External links & ESLint:** Dynamic external URLs (e.g. `site.social.linkedin` in `Footer.svelte`) require `rel="external noopener noreferrer"` and `<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->`.
- **Contact form (Netlify Forms):** `Contact.svelte` uses `name="contact"`, `method="POST"`, `data-netlify="true"`, `data-netlify-honeypot="bot-field"`, client-side Spanish validation, and submits `application/x-www-form-urlencoded` via `fetch('/')` with fields `form-name`, `bot-field`, `name`, `mail`, `company`, `message`.
- **Content collections (Decap CMS 3):** JSON files under `src/lib/data/{services,sellingPoints,partners,people}/` are managed via `static/admin/config.yml` and imported eagerly with `import.meta.glob`. Keep `static/admin/config.yml`, `src/lib/types/collections.ts`, and component globs in sync when changing schemas or folder names.
- **Prettier ignores:** `src/lib/data/**/*.json`, `static/admin/config.yml`, and `README.md` are ignored in `.prettierignore`.

## Deployment & Infrastructure

- **Hosting / CI — Netlify:**
  - Site hostname: `kolibrika.netlify.app` (repo `cazdlt/kolibrika.com`, `master` branch).
  - Config: `netlify.toml` (`npm run build` → `build/`, `NODE_VERSION = "26"`).
  - Services: Netlify Identity + Git Gateway power `/admin/`; Netlify Forms handles `#contact`.
- **DNS — Cloudflare:**
  - Zone: `kolibrika.com` (`zone_id: 29f898292780125a5789964daa80c093`, account `cazdlt@gmail.com`, SSL mode `full`).
  - `CNAME kolibrika.com` → `kolibrika.netlify.app` (`proxied: false`, DNS-only).
  - `CNAME www.kolibrika.com` → `kolibrika.netlify.app` (`proxied: false`, DNS-only).
  - `CNAME strtchy.kolibrika.com` → Cloudflare Tunnel (`proxied: true`) — unrelated app on subdomain; **do not modify**.
  - **SSL/TLS rule:** Keep `kolibrika.com` and `www` DNS-only (`proxied: false`) so Netlify provisions/renews Let's Encrypt cleanly. If proxied later, Cloudflare SSL/TLS must be **Full (strict)** (never Flexible).
- **Domain verification:** `static/d9159c4660b0a1bf22dcf76bef0508a1.html` is used for Brevo (Sendinblue) domain verification — do not delete it.

## Known Gaps & Pending Items

- **Netlify Forms live check:** Form submission (`name="contact"`, including the `company` field) has not been verified end-to-end on deployed production yet.
- **Partners testimonials:** `Partners.svelte` renders logos only (no testimonials yet).
