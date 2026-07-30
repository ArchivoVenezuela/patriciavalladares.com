# TinaCMS Implementation (Stage II)

Last updated: 2026-07-30  
Branch: `feat/tinacms-stage-1-spike` (Stage II work uncommitted)

## Architecture

- **Canonical prose:** `manuscript/**/*.mdx` only — no parallel content tree, no database.
- **Structural identity:** `content/site.ts`, `content/home-nav.ts`, `content/navigation.ts` remain outside Tina.
- **Presentation:** React components; visual editing via `useTina` + `tinaField` (+ `TinaMarkdown` for bodies).
- **Admin:** `/admin` → `public/admin/index.html`.

## Collections

| Collection | Path | Preview route |
|---|---|---|
| `biography` | `manuscript/biography` | `/about` |
| `homeHero` | `manuscript/home` (`hero`) | `/` |
| `homeThemes` | `manuscript/home` (`research-themes`) | `/` |
| `homeQuestions` | `manuscript/home` (`research-questions`) | `/` |
| `homeProgram` | `manuscript/home` (`research-program`) | `/research` |
| `homeProjectsOverview` | `manuscript/home` (`projects-overview`) | `/projects` |
| `researchOverview` | `manuscript/research` (`overview`) | `/research` |
| `researchMethods` | `manuscript/research` (`methods`) | `/digital-scholarship` |
| `project` | `manuscript/projects` | `/projects/[slug]` |
| `publications` | `manuscript/publications` | `/publications` |
| `publicHumanities` | `manuscript/public-humanities` | `/public-humanities` |
| `teaching` | `manuscript/teaching` | `/teaching` |
| `contact` | `manuscript/contact` | `/contact` |

## Commands

```bash
npm run dev:tina   # admin + local GraphQL + Next
npm run lint
npm run build      # tinacms build --local --skip-cloud-checks + next build
```

## Notes

- Full-document saves recommended (partial GraphQL updates can wipe MDX body).
- Public Humanities intro is the Research Themes entry matching `introThemeId` (no duplicated prose).
- Featured Public Humanities item is the project matching `featuredProjectSlug`.
- Contact identity values (email, affiliation, etc.) stay in `content/site.ts`; labels and external link list are Tina-editable.
- Not migrated: `/design-system` (technical), `Research_Program_Master.mdx` (editorial index, no public route).
