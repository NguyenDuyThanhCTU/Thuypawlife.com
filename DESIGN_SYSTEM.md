# PawLife UI Foundation

## Color tokens

- `primary`: Ocean blue `#0284C7`
- `primary-hover`: Deep ocean blue `#0369A1`
- `primary-subtle`: Pale blue `#F0F9FF`
- `cyan-soft`: Soft cyan `#CFFAFE`
- `foreground`: Slate `#0F172A`
- `muted`: Muted slate `#475569`
- `border`: Light slate `#CBD5E1`
- `surface` / `surface-subtle`: White and soft neutral surfaces
- `accent-warm`: Restrained warm accent for secondary callouts only

Tokens are defined as RGB channels in `app/globals.css` and mapped to semantic
Tailwind names in `tailwind.config.ts`.

## Typography

The site uses Be Vietnam Pro through `next/font`, with Vietnamese glyph support
and weights 400, 500, 600, and 700. Responsive display, heading, and lead scales
are available as Tailwind utilities and semantic `.type-*` component classes.

## Layout and spacing

- Use `Container` for a centered layout capped at 1200px.
- Horizontal gutters are 16px on mobile, 24px on tablet, and 32px on desktop.
- Use `.section` for standard sections and `.section-compact` where less vertical
  space is appropriate.

## Primitives

- `Button`: primary, secondary, outline, and ghost variants; sm, md, and lg sizes.
- `Card`: white or subtle tone, consistent radius/padding/shadow, and optional
  restrained interactive hover state.
- `SectionHeader`: reusable eyebrow, heading, and description grouping.

Import primitives from `components/ui`. Keep feature-specific content and section
composition outside these foundation components.
