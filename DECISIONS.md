# Design & Architecture Decisions

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
