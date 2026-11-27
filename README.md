# kolibrika.com

Static marketing website for **Kolibrika Consultores** (market intelligence, data engineering, BI, and applied AI consulting, Bogotá, Colombia).

## Tech Stack

- **Framework:** SvelteKit 3 + Svelte 5 + Vite 8
- **Output:** Fully prerendered static site (`@sveltejs/adapter-static`, `prerender = true` in `src/routes/+layout.ts`)
- **Styling:** Tailwind CSS 4 (`@tailwindcss/vite`, `@tailwindcss/typography`) + DaisyUI 5 (`light` theme, custom `wasabi`, `seance`, and warm-ivory neutral tokens in `src/app.css`, `Newsreader` display + `Manrope` body + `IBM Plex Mono` mono fonts)
- **Language & Quality:** TypeScript 6, `svelte-check`, ESLint 10, Prettier 3
- **CMS:** Decap CMS 3 (`/admin/`) with Netlify Identity + Git Gateway
- **Runtime:** Node.js 26 (`.nvmrc`, `engines.node >=26`)

## Local Development

```bash
nvm use
npm install
npm run dev
```

### Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start Vite dev server |
| `npm run build` | Build static site to `build/` |
| `npm run preview` | Preview the production build locally |
| `npm run cms` | Run local Decap CMS proxy (`npx decap-server`) |
| `npm run check` | Run `svelte-kit sync` and `svelte-check` |
| `npm run check:watch` | Run `svelte-check` in watch mode |
| `npm run lint` | Check formatting (`prettier`) and lint (`eslint`) |
| `npm run format` | Format files with Prettier |

## Project Structure

```text
.
├── src/
│   ├── app.css                     # Tailwind 4 + DaisyUI 5 + brand theme tokens
│   ├── app.html                    # HTML shell (lang="es", Google Fonts)
│   ├── routes/
│   │   ├── +layout.ts              # Global prerender = true
│   │   ├── +layout.svelte          # Head + Navbar + main + Footer
│   │   ├── +page.svelte            # Landing page sections + Netlify Identity widget
│   │   └── +error.svelte           # Branded 404 page
│   └── lib/
│       ├── assets/                 # SVG logos
│       ├── components/             # Navbar, Hero, Services, Methodology, SellingPoints, Partners, Faq, Contact, Footer, Head, AboutUs
│       │   └── style/              # Reusable UI primitives (Button, SectionContainer, SectionTitle, inputs)
│       ├── data/
│       │   ├── site.ts             # Site metadata (title, company, description, email, LinkedIn, location)
│       │   ├── services/           # JSON entries loaded via import.meta.glob
│       │   ├── sellingPoints/      # JSON entries loaded via import.meta.glob
│       │   ├── partners/           # JSON entries loaded via import.meta.glob
│       │   └── people/             # JSON entries loaded via import.meta.glob
│       └── types/collections.ts    # TypeScript types for CMS collections
└── static/
    ├── admin/
    │   ├── index.html              # Decap CMS + Netlify Identity loader
    │   └── config.yml              # Decap CMS collections and Git Gateway config
    ├── img/                        # Static & CMS-uploaded images (served at /img)
    ├── favicon.svg
    └── d9159c4660b0a1bf22dcf76bef0508a1.html  # Brevo (Sendinblue) domain verification
```

Path alias `#lib/*` maps to `./src/lib/*` (configured in `package.json` `imports`).

## Content Management (Decap CMS)

Content is stored as JSON files in `src/lib/data/` and bundled at build time with Vite's `import.meta.glob(..., { eager: true })`. Site-wide metadata (name, description, contact email, LinkedIn, location) lives in `src/lib/data/site.ts`.

- **Production CMS:** `https://kolibrika.com/admin/` (authenticates via Netlify Identity + Git Gateway and commits to `master`, triggering a Netlify rebuild).
- **Local CMS:** `local_backend: true` is enabled in `static/admin/config.yml`. Run `npm run dev` and `npm run cms` in two terminals, then open `http://localhost:5173/admin/`.
- **Media:** Uploaded files go to `static/img` and are referenced under `/img`.

## Deployment & Infrastructure

### Build & Hosting — Netlify

- **Config:** `netlify.toml`
- **Branch:** `master` (`cazdlt/kolibrika.com`)
- **Build command:** `npm run build`
- **Publish directory:** `build`
- **Node version:** `26` (`.nvmrc` and `netlify.toml`)
- **Auth for CMS:** Netlify Identity + Git Gateway enabled in the Netlify site dashboard

### DNS — Cloudflare

- DNS for `kolibrika.com` is managed in **Cloudflare** (not Netlify DNS) and points to `kolibrika.netlify.app`:
  - `CNAME` `kolibrika.com` → `kolibrika.netlify.app` (DNS-only / `proxied: false`, Cloudflare apex flattening)
  - `CNAME` `www.kolibrika.com` → `kolibrika.netlify.app` (DNS-only / `proxied: false`)
- **SSL/TLS note:** Keep records DNS-only (grey cloud) so Netlify provisions/renews its Let's Encrypt certificate cleanly, or use Cloudflare **Full (strict)** mode if proxied.

## Known Notes / Current State

- `AboutUs.svelte` is currently not rendered in `src/routes/+page.svelte`.
- `Contact.svelte` is wired for **Netlify Forms** (`name="contact"`, `method="POST"`, `data-netlify="true"`, `data-netlify-honeypot="bot-field"`) with client-side validation and inline loading/success/error states.
- Services, selling points, and partners are populated from JSON files under `src/lib/data/` and editable via Decap CMS (`/admin/`).

## Design & Inspiration

- https://app.haikei.app/
- https://www.shapedivider.app/
- https://fireship.io/lessons/wavy-backgrounds/
- https://www.dataknow.io/
- https://www.datalytics.com/
- https://www.loom.com/?ref=godly
