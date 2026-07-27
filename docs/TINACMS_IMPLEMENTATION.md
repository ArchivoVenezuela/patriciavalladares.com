# TinaCMS Implementation (Stage 1 Spike)

Last updated: 2026-07-26  
Branch: `feat/tinacms-stage-1-spike`

## Selected versions

| Package | Version | Reason |
|---|---|---|
| `tinacms` | **3.11.0** | Current 3.x line; React peer `>=16.14.0`; App Router + visual editing |
| `@tinacms/cli` | **2.5.6** | Matching CLI; React peer `>=18.3.1 <20.0.0` (includes React 19.2.4) |
| Next.js | 16.2.10 | Existing project |
| React | 19.2.4 | Existing project |

### Compatibility findings

- TinaCMS 3.x supports Next.js App Router and React 19.
- Nested peer warnings (`@headlessui/react@2.1.8` wants React 18) appear during install but do not block build or local admin.
- No `middleware.ts` / `proxy.ts` conflicts.
- Local builds require `tinacms build --local --skip-cloud-checks` until Tina Cloud credentials exist.
- `next build` must run as a child of `tinacms build -c …` so the local GraphQL server is available while `/about` is statically generated.
- Tina may set a non-standard `NODE_ENV` when spawning Next; the build script forces `NODE_ENV=production`.

## Architecture

- **Canonical prose:** `manuscript/**/*.mdx` (unchanged location).
- **Structural config:** `content/*.ts` remains outside Tina.
- **Layout:** React components only — no page-builder blocks.
- **Spike collection:** Biography only → `manuscript/biography/biography.mdx`.
- **Public `/about`:** Server page queries Tina client → `AboutPageClient` uses `useTina` for edit-mode hydration.
- **Other routes:** Still use existing `lib/content` loaders (gray-matter).

## Collection path and field map

Collection: `biography`  
Path: `manuscript/biography`  
Format: `mdx`  
File: `biography.mdx` (not renamed)

| Tina field | MDX | Type |
|---|---|---|
| `title` | frontmatter `title` | plain string |
| `kicker` | frontmatter `kicker` | plain string |
| `folioLabel` | frontmatter `folioLabel` | plain string |
| `body` | MDX body | constrained rich-text (`toolbarOverride`: heading, bold, italic, link, ul, ol) |

UI locks: `allowedActions.create/delete = false`.  
Preview router: Biography → `/about`.

## Visual editing on `/about`

| Field | Contextual (`data-tina-field`) | Sidebar form |
|---|---|---|
| title | Yes | Yes |
| kicker | Yes | Yes |
| folioLabel | Yes | Yes |
| body | Annotated for click-to-edit; rich-text reliability varies | Primary editing surface |

Body is rendered with `TinaMarkdown`. True inline rich-text editing may be less reliable than string fields in this spike; treat the sidebar as the authoritative body editor.

## Commands

```bash
# Ordinary Next.js development (no Tina GraphQL / admin editing)
npm run dev

# Tina-enabled development (admin + local GraphQL + Next)
npm run dev:tina

# Production build (local Tina mode — no Cloud credentials required)
npm run build

# Future: production build against Tina Cloud (requires env vars)
npm run build:tina-cloud
```

Admin UI: `http://localhost:3000/admin` (redirects to `/admin/index.html`).

## Environment variables

See `.env.example`:

- `NEXT_PUBLIC_TINA_CLIENT_ID` — Tina Cloud project id (optional for local spike)
- `TINA_TOKEN` — Tina Cloud token (optional for local spike)
- Branch overrides optional (`GITHUB_BRANCH` / Vercel git ref)

Do not commit `.env.local`.

## GitHub / Tina Cloud / Vercel

| Topic | Stage 1 spike | Next |
|---|---|---|
| Tina Cloud | Not required locally (`--local`) | Connect GitHub repo; add env vars |
| GitHub | Content commits stay in git | Cloud writes commits/PRs on save |
| Vercel | Use `npm run build`; set Cloud env when ready | Prefer `build:tina-cloud` with credentials |

## Rollback

1. Delete `tina/`, `public/admin/`, `app/about/AboutPageClient.tsx`, `lib/tina/`, `.env.example` Tina vars.
2. Restore `app/about/page.tsx` to `getBiographyContent()` + `MdxBody`.
3. Restore `package.json` scripts and remove `tinacms` / `@tinacms/cli`.
4. Revert `next.config.ts` admin redirect and eslint ignores if desired.
5. `npm install` to refresh lockfile.

Or: `git revert` / discard the feature branch.

## Known limitations

1. **Only Biography** is in the CMS; no projects/publications/home collections yet.
2. **Local GraphQL URL** is baked into the generated client under `--local` (localhost:4001). Cloud build replaces this when credentials exist.
3. **Partial GraphQL mutations** (updating one field without the rest) can wipe MDX body — always save full documents via the admin UI.
4. **`/admin` without `index.html`** 404s unless the redirect in `next.config.ts` is present.
5. **Admin assets** are generated at build/dev time (`public/admin/`); large bundles are eslint-ignored.
6. Nested React 18 peer warnings from Tina UI deps remain unresolved upstream.

## Recommended next step

If this spike is approved:

1. Connect Tina Cloud to the GitHub repo (no secrets in git).
2. Switch production build to `build:tina-cloud` with Vercel env vars.
3. Expand Stage 1 collections: hero, research overview, contact, teaching — still no page builder.
4. Defer projects/publications to Stage 2.
