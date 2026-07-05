# Style Guide

## Visual identity

Archival folio meets museum catalogue. Warm, credible, editorial — not a tech portfolio or generic faculty template.

## Color palette

| Token | Value | Usage |
|-------|-------|-------|
| `--color-paper` | `#faf6ef` | Page background |
| `--color-ink` | `#1c1917` | Primary text |
| `--color-ink-muted` | `#57534e` | Secondary text |
| `--color-oxblood` | `#7c2d12` | Links, accents, CTAs |
| `--color-gold` | `#a68b5b` | Rules, marginalia only — use sparingly |
| `--color-surface` | `#ffffff` | Cards on paper |
| `--color-border` | `#e7e0d4` | Dividers, borders |

One dark "ink band" section per page maximum (Phase 2).

## Typography

| Role | Font | CSS variable |
|------|------|--------------|
| Display / headings | Fraunces | `--font-display` |
| Body / UI | Work Sans | `--font-sans` |

### Scale

- Display (h1): `clamp(2.25rem, 4vw, 3.5rem)`
- Section (h2): `clamp(1.75rem, 3vw, 2.5rem)`
- Subsection (h3): `1.25rem–1.5rem`
- Body: `1rem`, line-height `1.7`
- Kicker / label: `0.75rem`, small-caps, letter-spacing `0.12em`

## Editorial devices

- **Kicker** — small-caps label above section titles
- **Rule** — thin horizontal line, gold or border color
- **Numbered sections** — `01`, `02` in margins or before titles
- **Catalogue captions** — small text under images (Phase 2)
- **Hanging-indent citations** — publications list (Phase 2)

## Spacing

Generous whitespace. Section padding: `4rem–6rem` vertical on desktop, `3rem` on mobile. Max content width: `72rem` (1152px).

## Motion

None in Phase 1. Phase 4 may add subtle Framer Motion: fade-up on scroll, hero stagger. Always respect `prefers-reduced-motion`.

## Accessibility

- WCAG AA contrast minimum
- Visible focus states
- Skip link to main content
- Semantic landmarks (`header`, `main`, `footer`, `nav`)
- Meaningful link text (no "click here")

## Do not

- Use gold as a primary accent
- Add dark mode toggle in v1
- Use stock academic clipart or generic university imagery
- Overuse borders, shadows, or card grids
