# Homepage Review & Refactor Report

Date: 2026-07-05

## ✅ What is excellent

- **Section composition** — All 12 Claude design sections implemented in correct order with matching visual rhythm (masthead → interlude → instruments → archive → migration → critical AI → index → timeline → publications → about → correspondence).
- **Typography system** — Newsreader / IBM Plex Mono / IBM Plex Sans loaded via `next/font` with design-accurate scale (`hero-title`, `section-title`, `plate-kicker` utilities).
- **Interactive fidelity** — Knowledge graph hover/focus, specimen drawer, migration map, and AI reading toggle all match prototype behavior.
- **Content integrity** — Publications strip uses verified CV data; fabricated design stats remain as `—` placeholders.
- **Performance** — Removed `framer-motion`; scroll reveals use CSS + `IntersectionObserver` (~40KB bundle savings).
- **SEO foundation** — `sitemap.xml`, `robots.txt`, Open Graph, Twitter cards, canonical URLs via `lib/seo/metadata.ts`.
- **Accessibility improvements** — `aria-live` on dynamic panels, `aria-pressed` on toggles, keyboard support on graph nodes and specimens, `sr-only` section headings where kicker-only, escape key on mobile menu.

## ⚠ What should be improved (remaining)

- **OG image** — Add `/public/images/og-default.jpg` (1200×630) before production deploy.
- **Archive statistics** — Replace `—` placeholders with verified Archivo Venezuela metrics.
- **Migration city counts** — Replace `TODO: collections` with verified diaspora network data.
- **Timeline dates** — Verify 1998 / 2017 / 2026 milestones against project history.
- **Interior pages** — Apply new editorial utilities to `/research`, `/projects`, etc.
- **Portrait & assets** — Book covers, CV PDF, project images still missing.
- **JSON-LD** — Add `Person` / `WebSite` structured data in a follow-up pass.

## ❌ Design differences (intentional vs restored)

| Element | Claude prototype | Implementation | Status |
|---------|------------------|----------------|--------|
| Masthead headline | Short poetic question (19ch) | Draft academic question with italic emphasis | **Intentional** — content draft overrides |
| Masthead footer | Design tagline | Restored design tagline | **Restored** |
| Archive stats | 14,200 / 40+ / etc. | `—` placeholders | **Intentional** — no verified data |
| Publications | Fabricated titles | Real CV publications | **Intentional** — verified data |
| Email | `pvalladares@example.edu` | `pat.valladares@uc.edu` | **Intentional** — verified contact |
| About "Who she works with" | "Six partner institutions…" | Generic partners text | **Intentional** — avoid unverified count |
| Specimens / Critical AI | Full demo catalog | Restored design demonstrative content | **Restored** — pedagogical UI |
| Instrument index copy | Design punchy labels | Restored design descriptions | **Restored** |
| Timeline | Design years 1998–2026 | Restored with TODO note on verification | **Restored** (pending verification) |

## Refactors performed

### Architecture
- `components/ui/` — `HomeSection`, `PlateKicker`, `SectionTitle`, `EditorialRow`, `Reveal`
- `hooks/` — `useSectionObserver`, `useReveal`
- `lib/home/` — `graphLayout.ts`, `migrationData.ts`
- `lib/seo/metadata.ts` — shared metadata factory
- `app/sitemap.ts`, `app/robots.ts`

### Code quality
- Extracted duplicated section padding → `.section-x`, `.section-y` utilities
- Extracted kicker typography → `.plate-kicker` utilities
- Split graph coordinates from `InstrumentsGraph.tsx` → `lib/home/graphLayout.ts`
- Split migration data → `lib/home/migrationData.ts`
- Unified list rows → `EditorialRow` component
- Fixed scroll-spy to only track nav-linked sections
- Replaced `h4` catalog title with `h3` + semantic `dl` for metadata
- Archive specimen grid: `grid-cols-3 sm:grid-cols-5` for 320px
- Critical AI: restored side-by-side panels with opacity dimming (not tab hide)
- Removed `framer-motion` dependency
- Updated `Container` max-width to match editorial `81.25rem`
- ESLint ignore for `Text and prototype/**`

### Accessibility fixes
- Mobile menu: `aria-label`, `aria-controls`, Escape key
- Graph nodes: keyboard Enter/Space activation
- Migration cities: `tabIndex` + keyboard selection
- Critical AI: `aria-pressed` toggle group
- Specimens: `role="listbox"` / `role="option"`, arrow key navigation
- Dynamic content: `aria-live="polite"` on graph panel, map header, catalog record, AI caption
- Heading hierarchy: `sr-only` h2 for timeline and publications sections

## Remaining technical debt

1. `content/home.ts` — legacy Phase 4 homepage content, unused; safe to delete
2. `lib/design/tokens.ts` — duplicates CSS variables, unused; safe to delete
3. Demonstrative specimen / AI content needs verification labels in UI (currently in code comments only)
4. `createPageMetadata` OG image path references missing asset
5. Interior `NavLinks` still uses Work Sans sizing conventions; not yet aligned to mono nav style
6. No visual regression tests against Claude HTML
