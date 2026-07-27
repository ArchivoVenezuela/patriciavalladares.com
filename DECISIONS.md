# Design & Architecture Decisions

## 2026-07-26 — Manuscript as prose authority; TypeScript as structure authority

### Decision

Establish a single editorial architecture:

1. **`manuscript/`** is the authority for substantial website prose (hero, research narrative, project narratives, publications records, biography, teaching, contact-page copy).
2. **TypeScript content modules** (`content/*.ts`, `lib/content/constants.ts`) are the authority for structure and metadata (navigation, site identity, slugs/tiers/filters, section labels, SEO defaults).
3. **`lib/content/loader.ts`** reads only from `manuscript/` (`CONTENT_ROOT`).
4. Retain thin **compatibility bridges** under `content/*.ts` where existing pages still import them; new code should prefer `@/lib/content` directly.
5. Remove verified unused duplicate MDX under `content/**/*.mdx` and unused zero-import stubs (`content/contact.ts`, `content/research.ts`, `content/digitalScholarship.ts`, `content/research-program-narrative.md`).
6. Remove unused manuscript twins that duplicated canonical paths (`manuscript/home/methods.mdx`, `home/biography.mdx`, `home/contact.mdx`).
7. Keep identity fields (name, title line, affiliation, email, phone, CV, domain) in `content/site.ts`; keep contact-page prose in `manuscript/contact/contact.mdx`.
8. Canonical professional title is **“Professor of Latin American and Caribbean Literature and Film”** across `siteConfig.titleLine`, SEO description, hero MDX, and biography; research specializations remain in biography prose (owner-approved 2026-07-26).
9. Teaching remains in `manuscript/teaching/overview.mdx` with a short neutral placeholder; the `/teaching` route is kept but hidden from primary navigation until approved course/mentorship copy exists.

### Why

The site had parallel trees (`manuscript/` and `content/**/*.mdx`) plus legacy TypeScript prose, creating ambiguous sources of truth. Consolidation preserves the approved visual system and scholarly language while making future edits maintainable.

### Alternatives considered

- Immediate deletion of all `content/*.ts` bridges (rejected — would require a broad import refactor in this phase)
- Inventing teaching/contact prose to eliminate TODOs (rejected — violates content authority)
- Auto-choosing one professional title string (rejected — factual conflict needs owner approval)

### Status

Accepted

### Files removed in this phase

- Entire unused `content/**/*.mdx` mirror tree
- `content/contact.ts`, `content/research.ts`, `content/digitalScholarship.ts`
- `content/research-program-narrative.md`
- `manuscript/home/methods.mdx`, `manuscript/home/biography.mdx`, `manuscript/home/contact.mdx`

### Files retained as bridges

- `content/draft.ts`, `homeDesign.ts`, `projects.ts`, `publications.ts`, `themes.ts`, `teaching.ts`, `publicHumanities.ts`, `about.ts`, `home.ts`

---

## 2026-07-05 — Static Next.js site

### Decision

Build a static Next.js site with typed content files rather than a CMS or database-driven platform.

### Why

The site must be fast, maintainable, Vercel-ready, and credible for academic audiences. Static generation avoids operational overhead and keeps focus on research presentation.

### Alternatives considered

- Headless CMS (Sanity, Contentful)
- Database-backed publication system
- Markdown-only site generator (Astro, Hugo)

### Status

Accepted

---

## 2026-07-05 — Projects-centered information architecture

### Decision

Organize the site around flagship projects and applied platforms, with Projects as the centerpiece rather than a chronological CV layout.

### Why

Search committees and grant reviewers need to understand research infrastructure and intellectual program quickly. Project pages demonstrate scholarly impact more effectively than publication lists alone.

### Alternatives considered

- CV-style chronological layout
- Publications-first architecture
- Single long-scroll portfolio

### Status

Accepted

---

## 2026-07-05 — AI as humanities infrastructure extension

### Decision

Frame AI as part of a broader interdisciplinary humanities research program — archives, metadata, multilingual knowledge infrastructures — not as computer science or engineering expertise.

### Why

Accurate representation of scholarly identity. Overstating technical AI credentials would misrepresent the research program and undermine credibility with humanities audiences.

### Alternatives considered

- Prominent "AI researcher" positioning
- Separate AI/tech portfolio section
- Omitting AI entirely

### Status

Accepted

---

## 2026-07-05 — Archival folio visual direction

### Decision

Adopt an archival folio / museum catalogue / academic publication aesthetic: warm paper palette, editorial typography, numbered sections, catalogue captions.

### Why

Distinguishes the site from generic faculty pages. Aligns visually with archives, cultural memory, and public humanities work. Supports bilingual and multilingual scholarly identity.

### Alternatives considered

- Minimal tech portfolio aesthetic
- Standard university faculty template
- Dark-mode developer portfolio

### Status

Accepted

---

## 2026-07-05 — August deadline over platform complexity

### Decision

Prioritize job applications and August deadlines over long-term platform features (full i18n, CMS, advanced filtering).

### Why

The immediate audience is search committees and grant reviewers. A polished static site with clear project narratives delivers more value than an extensible platform built too slowly.

### Alternatives considered

- Full bilingual site before launch
- CMS integration from day one
- Feature-complete publication database

### Status

Accepted

---

## 2026-07-05 — Local development path

### Decision

Develop the project at `/home/pat/Projects/pvr-site` on local disk rather than Google Drive (rclone mount).

### Why

The rclone/Google Drive mount caused hung shell commands and unreliable `npm`/`npx` operations. Local disk ensures fast, reliable development.

### Alternatives considered

- Continue on `/home/pat/Drive/_Coding/websites/pvr-site`
- Cloud development environment

### Status

Accepted

---

## 2026-07-05 — Typography: Fraunces + Work Sans

### Decision

Use Fraunces (serif display) for headings and citations, Work Sans (humanist sans) for body and UI, loaded via `next/font/google`.

### Why

Fraunces offers editorial warmth with optical-size variation suited to folio-style headings. Work Sans is highly readable, pairs well with Fraunces, and handles UI/navigation cleanly. Both are distinct from generic academic site defaults (Georgia, Times, system sans).

### Alternatives considered

- Cormorant Garamond + Work Sans (used in Vite prototype)
- Libre Baskerville + Source Sans 3
- Playfair Display + Inter

### Status

Accepted

---

## 2026-07-05 — Phase 2 color palette refinement

### Decision

Retain the Phase 1 palette with two additions: `--color-ink-faint` for tertiary text and `--color-oxblood-hover` for interactive states. No new accent colors.

### Why

Keeps the system simple while supporting catalogue captions, dates, and accessible hover contrast without introducing decorative color proliferation.

### Alternatives considered

- Expanding to a 12-step neutral scale
- Adding a second accent (teal, navy)

### Status

Accepted

---

## 2026-07-05 — Header wordmark and compact nav labels

### Decision

Use "P. Valladares-Ruiz" as the header wordmark. Desktop header may use optional `shortLabel` for long nav items (e.g. "Digital Scholarship"); full labels remain on pages, footer, and mobile nav.

### Why

Preserves approved page title "Digital Scholarship & Research Infrastructure" while keeping the header readable on laptop viewports. Does not change routes or information architecture.

### Alternatives considered

- Full labels in desktop header (crowded)
- Abbreviating page titles themselves

### Status

Accepted

---

## 2026-07-05 — Native mobile nav without shadcn/ui

### Decision

Implement responsive navigation with a client-side toggle button and panel. Defer shadcn/ui Sheet component.

### Why

A simple accessible toggle meets Phase 2 needs without adding component library dependencies, configuration, or CSS variable overrides.

### Alternatives considered

- shadcn/ui Sheet
- CSS-only details/summary (limited aria-expanded control)

### Status

Accepted

---

## 2026-07-05 — No animations in Phase 2

### Decision

Do not install Framer Motion or add scroll animations during the design-system phase.

### Why

Motion is deferred until page composition (Phase 3+) so typography, color, and component rhythm are established first. Respects `prefers-reduced-motion` in CSS from the start.

### Alternatives considered

- Subtle fade-up on all sections now
- CSS-only transitions on every component

### Status

Accepted

---

## 2026-07-05 — Fraunces + Work Sans confirmed

### Decision

Keep Fraunces (display) and Work Sans (body/UI) from Phase 1. No font change.

### Why

The pairing already supports the archival-editorial direction. Changing fonts mid-foundation would delay Phase 3 without clear benefit.

### Alternatives considered

- Cormorant Garamond + Work Sans (Vite prototype)
- Libre Baskerville + Source Sans 3

### Status

Accepted

---

## 2026-07-05 — Phase 3 project tier model

### Decision

Reorganize projects into `flagship` and `infrastructure` tiers. FieldScholar and Current Book Project are flagship; MARACAS, AREPA, and AVOCADO are supporting infrastructure.

### Why

Aligns with Phase 3 intellectual architecture: six flagship initiatives define the research identity; workflow tools support them without competing for narrative prominence.

### Alternatives considered

- Previous model: FieldScholar as applied tool, book under Research Program only
- Flat list without tiers

### Status

Accepted

---

## 2026-07-05 — ProjectDetail content model

### Decision

Extend `Project` with full `ProjectDetail` fields (problem, methodology, outcomes, related content IDs) in a single `content/projects.ts` file. Pages consume structured objects via `ProjectDetailTemplate`.

### Why

Avoids hard-coded JSX blocks, supports static generation, and prepares for bilingual expansion without a CMS.

### Alternatives considered

- Separate JSON files per project
- Markdown files per project

### Status

Accepted

---

## 2026-07-05 — Homepage deferred to Phase 4

### Decision

Build core intellectual pages (Research Program, Projects, Digital Scholarship) before the homepage curated entry point.

### Why

The homepage should synthesize existing content architecture rather than precede it. Reduces placeholder duplication and ensures consistent narrative.

### Alternatives considered

- Homepage first (original roadmap)

### Status

Accepted

---

## 2026-07-05 — Digital Scholarship evolution timeline

### Decision

Present the archives → metadata → multilingual → infrastructure → AI trajectory as a semantic ordered list (`EvolutionTimeline`), not animation or diagram-heavy UI.

### Why

Accessible, printable, intellectually clear. Reinforces AI as terminal extension of humanities infrastructure without tech-branding visuals.

### Alternatives considered

- Mermaid/flowchart diagram
- Animated pipeline graphic

### Status

Accepted

---

## 2026-07-05 — Homepage as curated entry point (Phase 4)

### Decision

Build the homepage after core intellectual pages, as a curated introduction (~1,200 words) linking to Research Program, Projects, Digital Scholarship, Publications, Teaching, Public Humanities, and Contact.

### Why

Avoids duplicating full narratives on the homepage; rewards exploration of distinct pages with non-repetitive content.

### Alternatives considered

- Homepage first with duplicated long-form copy
- Single-page scroll site

### Status

Accepted

---

## 2026-07-05 — Digital Scholarship evolution sequence (Phase 4)

### Decision

Present evolution as: Archives → Knowledge Infrastructures → Multilingual Metadata → Public Humanities → AI (not metadata-first from Phase 3).

### Why

Aligns with approved Phase 4 narrative emphasizing public humanities before AI, keeping AI as terminal extension.

### Alternatives considered

- Phase 3 sequence ending with AI immediately after digital infrastructures

### Status

Accepted

---

## 2026-07-05 — Content distribution over verbatim narrative

### Decision

Extract ideas from the approved Research Program Narrative (Working Draft) and distribute across pages; no page copies the narrative verbatim.

### Why

Each page contributes a distinct piece of the overall story; reduces redundancy for search committees reading multiple sections.

### Status

Accepted

---

## 2026-07-05 — Three-layer project model (Design · Content · Architecture)

### Decision

Treat three sources as authoritative with distinct responsibilities, merged at implementation time — never allowing one layer to overwrite another:

1. **Claude Design prototype** — primary design authority (layout, composition, typography, interactions, visual rhythm).
2. **Author draft** (`content/draft.ts`, from `Texto para la web.md`) — primary content authority (voice, claims, scholarly tone).
3. **Approved website plan** — primary information architecture (navigation, section order, project grouping, research questions, page hierarchy).

### Why

A wireframe-style homepage was mistakenly substituted for the Claude Design homepage, replacing both the approved visual design and the author's draft text with generic marketing copy. This decision prevents silent layout replacement and documents the merge rule: Design + Content + Architecture = final site.

### Alternatives considered

- Plan wireframe as sole homepage spec (rejected — overwrites design)
- Generic `content/themes.ts` copy as homepage text (rejected — overwrites author draft)
- Design-only implementation without structural plan (rejected — loses IA requirements)

### Status

Accepted

---

## 2026-07-05 — Claude Design homepage restored

### Decision

Restore the Claude Design homepage (`Masthead` through `CorrespondenceFooter`) as the live `/` route. Integrate the approved **Current Research Questions** section (`CurrentResearchQuestions`) between `CriticalAI` and `InstrumentsIndex` without altering the prototype's visual language. Use `HomeHeader` + `CorrespondenceFooter` on the homepage; standard `Header`/`Footer` on interior pages.

### Why

The Claude Design prototype is the approved visual source of truth. The plan's research-questions requirement is structural and was added as a new section in the prototype's editorial rhythm — not as a replacement layout.

### Alternatives considered

- Plan wireframe homepage (`HomeHero`, `LinesOfInquiry`, etc.)
- Dropping interactive sections (graph, archive drawer, migration map) for simplicity

### Status

Accepted

---

## 2026-07-05 — Interior pages use author draft where applicable

### Decision

Research Program page sources vision, themes, and book project copy from `content/draft.ts`. Approved structural elements (research questions, navigation labels, project tiers) come from the plan via `content/themes.ts` and filtered `content/projects.ts`.

### Why

Separates content authority (author draft) from architecture (plan) while preserving interior page structure required for search committees and grant reviewers.

### Status

Accepted
