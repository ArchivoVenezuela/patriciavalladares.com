# Content Architecture

Last updated: 2026-07-26

## Canonical rule

- **`manuscript/`** is the authority for substantial website prose.
- **`content/*.ts`** (and `lib/content/constants.ts`) are the authority for structure, metadata, navigation labels, IDs/slugs, and small UI strings.
- **React components** handle presentation. They should not own essay-length copy.

Never invent achievements, courses, or biography claims. Use restrained `TODO` placeholders until approved manuscript text exists (`DESIGN_AUTHORITY.md`, `EDITORIAL_STYLE_GUIDE.md`).

---

## What belongs in `manuscript/`

| Area | Path |
|---|---|
| Homepage hero | `manuscript/home/hero.mdx` |
| Research program (home) | `manuscript/home/research-program.mdx` |
| Research themes | `manuscript/home/research-themes.mdx` |
| Research questions | `manuscript/home/research-questions.mdx` |
| Projects overview (orphan loader) | `manuscript/home/projects-overview.mdx` |
| Research page | `manuscript/research/overview.mdx` |
| Methods / digital scholarship | `manuscript/research/methods.mdx` |
| Project narratives | `manuscript/projects/*.mdx` |
| Publications catalog + intro | `manuscript/publications/overview.mdx` |
| Biography / about | `manuscript/biography/biography.mdx` |
| Teaching | `manuscript/teaching/overview.mdx` |
| Contact-page prose | `manuscript/contact/contact.mdx` |
| Editorial index (docs only) | `manuscript/Research_Program_Master.mdx` |

---

## What belongs in `content/*.ts`

| File | Role |
|---|---|
| `site.ts` | Name, title line, affiliation, email, phone, domain, CV URL, social links, SEO description |
| `navigation.ts` | Primary site navigation labels and hrefs |
| `home-nav.ts` | Homepage section anchors |
| `projects.ts` | Bridge: filters/tiers over manuscript projects |
| `publications.ts` | Bridge: featured/selected views over publications MDX |
| `homeDesign.ts` | Bridge: homepage section assembly from loaders |
| `draft.ts` | Legacy bridge still imported by several interior pages |
| `themes.ts` | Bridge: typed theme/question arrays |
| `teaching.ts` | Bridge: teaching MDX + structured mentorship/course shells |
| `publicHumanities.ts` | Bridge: derives page copy from themes/projects |
| `about.ts` / `home.ts` | Bridges retained for unused alternate home components |
| `news.ts` | Empty structural placeholder |

---

## How MDX is loaded

1. `lib/content/loader.ts` sets `CONTENT_ROOT` to `manuscript/`.
2. `loadMdx(relativePath)` reads frontmatter + body with `gray-matter`.
3. `lib/content/index.ts` exposes typed getters (`getLandingHero`, `getAllProjects`, …).
4. Pages/components import getters directly or through `content/*.ts` bridges.

No runtime code reads MDX from `content/`. A former mirror tree under `content/**/*.mdx` was removed after import analysis confirmed it was unused.

---

## Bridge files — why they remain

Bridges exist so existing `app/` and `components/` imports keep working while prose stays in manuscript. Prefer new code importing `@/lib/content` directly. Bridges may be deleted only after every importer is migrated and the site still builds.

---

## Adding a new page or project

### New project

1. Add `manuscript/projects/<slug>.mdx` with required frontmatter (`slug`, `title`, `subtitle`, `tier`, `status`, …).
2. Add the slug to the order list in `lib/content/index.ts` (`manuscriptOrder`) if it should appear in a fixed sequence.
3. Link from navigation or homepage only when intentionally public.

### New prose page

1. Add `manuscript/<section>/overview.mdx` (or a clear path).
2. Add a getter in `lib/content/index.ts`.
3. Create `app/<route>/page.tsx` that renders via existing editorial components.
4. Add a nav item in `content/navigation.ts` only when ready to expose the route.
5. Document the path in `manuscript/Research_Program_Master.mdx`.

---

## Is a file safe to remove?

A file is safe to remove only when **all** are true:

1. `rg` shows no imports/references from `app/`, `components/`, `lib/`, or `content/`.
2. It is not the active path used by `loadMdx` / `listMdxFiles`.
3. Removing it does not delete the only copy of approved prose (prefer manuscript).
4. It is not category **F** (ambiguous / human decision) in the consolidation audit.

When unsure, leave the file and document it here.

---

## Source-of-truth matrix (summary)

| Surface | Canonical text source | Notes |
|---|---|---|
| `/` hero | `manuscript/home/hero.mdx` | Via `Masthead` |
| `/` themes / questions | `manuscript/home/research-themes.mdx`, `research-questions.mdx` | |
| `/` projects / archive / pubs strip | manuscript projects + publications | Assembled in `homeDesign.ts` |
| `/` footer identity | `content/site.ts` | |
| `/research` | `manuscript/research/overview.mdx` + themes + book project | |
| `/projects` | research-program MDX + project MDX | Tool section still TODO |
| `/projects/[slug]` | `manuscript/projects/*.mdx` | Detail fields often TODO |
| `/publications` | `manuscript/publications/overview.mdx` | Intro TODO |
| `/about` | `manuscript/biography/biography.mdx` | Languages/education TODO |
| `/contact` | prose: contact MDX; identity: `site.ts` | |
| `/teaching` | `manuscript/teaching/overview.mdx` | Neutral placeholder; route kept, hidden from primary nav |
| `/digital-scholarship` | `manuscript/research/methods.mdx` | |
| `/public-humanities` | themes + archivo project MDX | |
| Navigation / SEO | `navigation.ts`, `site.ts` | |

---

## Unresolved editorial TODOs (owner input needed)

1. **Teaching** — approved statement, mentorship statement, course list, mentorship metrics (page currently uses a short neutral placeholder and is hidden from primary nav).
2. **Contact-page prose** — body copy beyond identity block.
3. **Publications page intro** — still TODO in publications frontmatter.
4. **Project detail fields** — problem, methodology, outcomes, role (many still TODO in loader mapping).
5. **Infrastructure tools** — MARACAS / AREPA / AVOCADO summaries (hardcoded stubs in `lib/content/index.ts`).
6. **Critical AI homepage demo** — computational/humanistic/note strings in `homeDesign.ts`.
7. **About** — languages and education structured data.
8. **`manuscript/home/projects-overview.mdx`** — content exists; `getHomeProjectsOverview()` is unused (category F).
9. **Unused alternate homepage components** under `components/home/` — retained; not wired to `app/page.tsx`.
10. **News** — no manuscript source; `content/news.ts` empty.
11. **Social profile URLs** — Google Scholar / ORCID / LinkedIn still `#` in `site.ts`.

**Resolved:** Canonical professional title is “Professor of Hispanic Studies” (`siteConfig.titleLine`, hero MDX). Research specializations remain in biography prose.

---

## Related documents

- `DESIGN_AUTHORITY.md`
- `EDITORIAL_STYLE_GUIDE.md`
- `PRINCIPLES.md`
- `PROJECT.md`
- `ROADMAP.md`
- `DECISIONS.md`
