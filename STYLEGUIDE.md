# Style Guide

## Visual identity

Archival folio meets museum catalogue meets academic publication. Warm, credible, editorial — intellectually serious and timeless. Not a tech portfolio, startup landing page, or generic faculty template.

## Tone

- Elegant and restrained
- Warm paper, deep ink, quiet gold
- Generous whitespace over decorative density
- Numbered sections and catalogue details over card-grid clutter
- Scholarly credibility over personal branding flash

## Color palette

| Token | Value | Usage |
|-------|-------|-------|
| `paper` | `#faf6ef` | Page background |
| `surface` | `#ffffff` | Cards, panels on paper |
| `ink` | `#1c1917` | Primary text, ink-band sections |
| `ink-muted` | `#57534e` | Body secondary, descriptions |
| `ink-faint` | `#78716c` | Dates, meta, catalogue labels |
| `oxblood` | `#7c2d12` | Links, primary buttons, active nav |
| `oxblood-hover` | `#9a3412` | Link/button hover |
| `gold` | `#a68b5b` | Rules, folio markers, epigraph borders only |
| `border` | `#e7e0d4` | Dividers, card borders |
| `border-strong` | `#d6cfc3` | Emphasized borders, outline buttons |

**Rules:** One ink-band section per page maximum. Gold is never a primary CTA color.

## Typography

| Role | Font | Utility / variable |
|------|------|-------------------|
| Display / headings | Fraunces | `font-display`, `--text-display`, `--text-section` |
| Body / UI | Work Sans | `font-sans`, default body |

### Scale

| Element | Size |
|---------|------|
| Display (h1) | `clamp(2.25rem, 4vw, 3.5rem)` |
| Section (h2) | `clamp(1.75rem, 3vw, 2.5rem)` |
| Subsection (h3) | `1.25rem–1.5rem` |
| Body | `1rem`, line-height `1.7` |
| Kicker | `0.75rem`, `.text-kicker` |

## Spacing

| Token | Value | Usage |
|-------|-------|-------|
| `py-section` | `4rem` | Section vertical padding (mobile) |
| `py-section-lg` | `6rem` | Section vertical padding (desktop) |
| Container | `max-w-6xl` (72rem) | Default page width |
| Container narrow | `max-w-3xl` | Prose, page headers |

Horizontal padding: `1.5rem` (`px-6`) on all containers.

## Component usage

### Layout

- `Container` — wraps all page content; use `narrow` for prose blocks
- `SiteShell` — root layout wrapper with skip link, header, footer
- `Header` — wordmark `P. Valladares-Ruiz`, nav, CV button
- `Footer` — full nav labels, ink background

### Editorial

- `Kicker` — small-caps section label above titles
- `Rule` — thin divider; `variant="gold"` for page headers only
- `PageHeader` — top-of-page title block with optional folio marker
- `Section` — numbered sections; `variant="ink"` for dark bands
- `FolioMarker` — marginal catalogue page labels
- `Epigraph` — quoted text with gold left rule
- `CatalogCaption` — image catalogue entries

### Content

- `ProjectCard` — flagship/applied project preview
- `ThemeIndexItem` — numbered research theme row
- `PublicationEntry` — hanging-indent bibliography citation
- `NewsItem` — dated ledger-style news row
- `BookCard` — cover placeholder + catalogue caption

## Links and buttons

- Text links: `.text-link` (oxblood, understated underline)
- Primary CTA: `.btn.btn-primary`
- Secondary CTA: `.btn.btn-outline`
- Do not use gold buttons

## Accessibility

- WCAG AA contrast on all text/background pairs
- `:focus-visible` oxblood outline on all interactive elements
- Skip link (`.skip-link`) as first focusable element
- `aria-current="page"` on active nav links
- `aria-expanded` on mobile menu toggle
- Semantic landmarks: `header`, `nav`, `main`, `footer`, `section`
- Meaningful link text; no "click here"
- `prefers-reduced-motion` disables scroll smoothing and transitions

## What not to do

- Generic faculty photo + bullet CV layout
- Startup hero with gradient blobs
- Corporate consulting sans-serif minimalism
- WordPress sidebar widgets aesthetic
- AI/tech branding (neon, circuit patterns, robot icons)
- Excessive shadows, rounded pills, card grids
- Dark mode toggle in v1
- Gold as primary accent or button fill
- Decorative animation before content is finalized

## Internal preview

Visit `/design-system` during development to review all tokens and components. This route is excluded from search indexing and not linked in navigation.
