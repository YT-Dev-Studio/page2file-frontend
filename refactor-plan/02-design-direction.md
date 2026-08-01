# Design direction

## Subject and visual language

Page2File is a focused conversion tool, not a generic SaaS dashboard. The
interface should make the transformation from a source page or conversation to
an ordered file immediately understandable.

- Preserve Manrope, cool paper/white surfaces, navy/cobalt emphasis, semantic
  borders, restrained shadows, and the current home page spacing rhythm.
- Use one meaningful structural motif: source structure becoming ordered
  pages/slides. Apply it only where it explains the workflow.
- Prefer task-first composition, readable documents, numbered procedures, and
  editorial hierarchy over equal promotional card grids.
- Reuse existing controls and icon/glyph primitives. Do not add packages,
  gradients, glass effects, glow, fake metrics, decorative badges, or emoji
  icons.

## Design dials

- Visual variance: 5/10.
- Motion: 2/10, with reduced-motion support.
- Information density: 5–6/10.
- Corners, borders, and focus treatment follow existing tokens.

## Responsive behavior

- 375 px: one column, wrapped navigation, reachable primary action, no hover-only
  behavior.
- 768 px: preserve reading hierarchy; use two columns only when both remain
  useful.
- 1440 px: constrain text measure and use extra width for supporting workflow
  information, not stretched prose.

## Accessibility

Use semantic headings and landmarks, persistent form labels, nearby recovery
messages, visible keyboard focus, semantic disabled/loading states, active-link
semantics, sufficient touch targets, and no status conveyed through color alone.
