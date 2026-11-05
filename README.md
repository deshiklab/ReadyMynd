# ReadyMynd — Website

Modern, production-ready marketing + enquiry site for **ReadyMynd**, a Bangladesh-based
professional service initiative helping textile and apparel manufacturers understand their
digital readiness for emerging EU Textile Digital Product Passport (DPP) expectations.

Built from the approved **Website Content v1.8** and **Master Menu v1.8** specifications
(see `docs/`), replacing the earlier single-page prototype.

## Stack

| Concern      | Choice                                                         |
| ------------ | -------------------------------------------------------------- |
| Framework    | Next.js 15 (App Router, React 19, TypeScript strict)            |
| Styling      | Tailwind CSS v4 (CSS-first config, custom `@theme` tokens)      |
| Fonts        | `@fontsource-variable/inter` + `@fontsource-variable/sora` + `@fontsource-variable/noto-sans-bengali` (self-hosted, no external requests) |
| Icons        | `lucide-react`                                                  |
| Deployment   | GitHub Pages (static export) or any Node host. Vercel-ready.    |

## Deployment

### GitHub Pages (live)

<https://deshiklab.github.io/ReadyMynd/>

Pushing to `arena/4bb7d9fd-readymynd` runs `.github/workflows/deploy-pages.yml`,
which builds a static export and publishes it. GitHub Pages can only serve
files, so `GITHUB_PAGES=true` switches the build into that mode:

| Setting                       | Why                                                        |
| ----------------------------- | ---------------------------------------------------------- |
| `output: 'export'`            | Pages cannot run Node or Route Handlers                    |
| `basePath` / `assetPrefix`    | the site is served from `/ReadyMynd`, not the domain root   |
| `images.unoptimized`          | no `/_next/image` endpoint on a static host                |
| `NEXT_PUBLIC_STATIC_SITE`     | the contact form falls back to a `mailto:` hand-off        |

Gotchas worth knowing before editing:

- **`asset()` (`lib/site.ts`) is required for raw `<img src>` and `<a href>`.**
  `next/link` and `next/image` apply `basePath` themselves, but plain tags do
  not — and `next/image` skips it entirely when `unoptimized: true`. Anything
  under `public/` referenced outside a `Link`/`Image` must go through
  `asset()` or it will 404 on Pages while working fine locally.
- `app/api` is moved aside for the export build, so server-only code must not
  live where page code imports it. The enquiry types and validation are in
  `lib/enquiry.ts` for exactly this reason.
- `robots.ts` and `sitemap.ts` declare `dynamic = 'force-static'`; route
  handlers must opt in under `output: 'export'`.
- `.nojekyll` is written into `out/` so Pages does not skip the `_next/` folder.

### Node hosting (Vercel, container, `npm start`)

The default build keeps the `/api/enquiries` route, image optimisation and the
security headers, so the contact form posts normally and no `basePath` is
applied.

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run start   # serve the production build
npm run typecheck
```

## Appearance, language and quick actions

### Themes
The site ships a **light theme (default)** derived from the corporate image palette — near-white
canvas, cool blue-grey surfaces and a deep blue-ink heading colour — plus the original dark theme.
Visitors switch with the sun/moon control in the header utility bar or the labelled switch in the
mobile drawer.

* Choice is stored in `localStorage['readymynd-theme']` and re-applied by an inline pre-paint
  script (`NoFlashScript` in `components/providers.tsx`), so there is no flash of the wrong theme.
* Everything is driven by theme-aware CSS custom properties in `app/globals.css`
  (`--color-surface`, `--color-heading`, `--color-body`, `--color-line`, `--color-accent`, …).
  The dark theme simply re-declares those variables under `.dark`.
* By default only the page hero and the closing CTA band are dark; all body sections are light or
  mist, so the site reads light-first.

### Languages
English (default) and Bengali (`বাংলা`). The EN / বাং control sits next to the theme switch.

* Choice is stored in `localStorage['readymynd-locale']`; the same pre-paint script sets
  `documentElement.lang`, so no flash of the wrong language.
* UI catalogues live in `lib/i18n/messages/{common,home,services,company,legal}.ts`.
* Editorial content is bilingual via the `Bi` type (`{ en, bn }`) and resolved with `tx()` / `tl()` /
  `tr()` from `useI18n()`:
  * `lib/content.ts` — pages, sections, and the six insight articles (title, excerpt, topic,
    read time, full body and key takeaways).
  * `lib/content/legal/` — the privacy, cookie and terms clauses, built with the `bi` / `p` /
    `list` / `note` helpers in `lib/content/legal/types.ts`.
* Dates format per locale. All content on the site is available in both languages.

### Quick actions
A floating action button (bottom-right, above the footer) expands into:

| Action            | Behaviour                                                              |
| ----------------- | ---------------------------------------------------------------------- |
| Chat to ReadyMynd | Opens an inline chat panel with quick-reply prompts                    |
| WhatsApp          | `https://wa.me/8801755628272` with a prefilled message                 |
| Call us           | `tel:+8801755628272`                                                   |
| Send an enquiry   | Jumps to `/contact/#assessment-enquiry`                                |
| Back to top       | Appears once the page is scrolled; smooth-scrolls to the top           |

## Routes (approved v1.8 URL map)

| #  | Page                                      | URL                                            |
| -- | ----------------------------------------- | ---------------------------------------------- |
| 01 | Home                                      | `/`                                            |
| 02 | EU Textile Digital Product Passport       | `/textile-digital-product-passport/`           |
| 03 | Textile DPP Digital Readiness Assessment  | `/textile-dpp-digital-readiness-assessment/`   |
| 04 | Assessment Methodology & Process          | `/assessment-methodology/`                     |
| 05 | Digital Advisory Services                 | `/digital-advisory/`                           |
| 06 | About ReadyMynd                           | `/about/`                                      |
| 07 | Textile DPP Resources & Insights          | `/insights/` + `/insights/<slug>/`             |
| 08 | Contact ReadyMynd                         | `/contact/`                                    |
| —  | Privacy Policy / Cookie Policy / Terms    | `/privacy-policy/`, `/cookie-policy/`, `/terms-of-use/` |

Trailing slashes are enforced (`trailingSlash: true`) to match the approved URL map.
`/sitemap.xml` and `/robots.txt` are generated automatically.

## Structure (theme / i18n / quick actions)

```
app/globals.css                      theme tokens, .dark overrides, Bengali font stack
components/providers.tsx             NoFlashScript + Providers (Theme → I18n → children → QuickActions)
lib/theme.tsx                        ThemeProvider / useTheme
lib/i18n/index.tsx                   I18nProvider / useI18n (t, tl, tr, tx)
lib/i18n/messages/*.ts               bilingual catalogues
components/theme/controls.tsx        ThemeToggle + LanguageToggle
components/quick-actions/            FAB, action stack, chat panel, back-to-top
components/pages/*.tsx               client page bodies (need useI18n)
lib/content/legal/                   bilingual legal clauses (privacy, cookies, terms)
```

## Structure

```
app/
  layout.tsx              Root shell: fonts, header, footer, SEO, JSON-LD
  globals.css             Design tokens (Tailwind v4 @theme) + utilities
  page.tsx                Home (sections 1.1–1.4)
  <route>/page.tsx        One file per main page
  insights/[slug]/        Insight article pages (generateStaticParams)
  api/enquiries/route.ts  Enquiry endpoint (validation + honeypot)
components/
  layout/                 Header (scroll state + mobile drawer), Footer
  blocks/                 PageHero, CtaBand, BrochureCta, Notice
  ui/                     Button, Card, Section/SectionHeading, Reveal
  interactive/            DimensionsExplorer (ARIA tabs)
  insights/               InsightsBrowser (topic filter)
  contact/                EnquiryForm (multi-purpose, client-validated)
  legal/                  LegalPage renderer
lib/
  site.ts                 Brand constants, navigation, contact details
  content.ts              Shared v1.8 content fragments
public/
  images/pages|brand|generated/
  downloads/              Corporate brochure PDF
docs/                     Source .docx specifications (v1.8)
legacy/                   Previous one-page prototype (v1.7) — kept for reference
```

## Contact form

- Three purposes: **Request Digital Readiness Assessment**, **Download Service Brochure**,
  **General Business Enquiry** — each with its own required-field set per the v1.8 spec.
- `?purpose=brochure` preselects the brochure option; the PDF is offered immediately after a
  successful submission.
- Privacy acknowledgment is mandatory on every submission. Marketing consent is separate and
  optional.
- Client-side validation mirrors server-side validation in `app/api/enquiries/route.ts`.
- To deliver enquiries, wire the mailbox/CRM call at the `// Delivery point` comment in
  `app/api/enquiries/route.ts`.

## Content notes

- All copy is taken verbatim from the v1.8 documents in `docs/`. Shared fragments live in
  `lib/content.ts`; page-specific copy sits in each route file.
- Legal pages are published as the **v1.8 working draft** and carry a visible banner noting
  that effective dates and some operational details await legal review.
- Service boundary notices ("not a certification", "advisory requires a completed paid
  assessment") appear on every page that describes deliverables.
