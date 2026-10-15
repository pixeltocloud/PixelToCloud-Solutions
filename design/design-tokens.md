# Design tokens

Source of truth in the app: `src/styles/tokens.css` and `src/styles/agency.css`.

## Color

| Token | Hex | Use |
| --- | --- | --- |
| Paper | `#FFFFFF` | Cards, form fields |
| Canvas | `#F6F7F9` | Page background |
| Night | `#0B0D12` | Hero and closing band |
| Ink | `#111318` | Text |
| Muted | `#626875` | Secondary text |
| Accent | `#5B6CFF` | Primary button on light pages |
| Violet | `#8B5CF6` | Reserved. Not used as a fill on every card |
| Line | `#E6E8ED` | Borders |
| Night text | `#FFFFFF` | Text on night |
| Night muted | `#A5AAB5` | Secondary text on night |

## Type

- Display: Space Grotesk, weight 500, tracking about -0.045em.
- Body: Plus Jakarta Sans, 16px, line-height 1.6.
- Display size: `clamp(2.6rem, 5.6vw, 4.6rem)` on the home hero.
- Section heading: `clamp(1.8rem, 3vw, 2.4rem)`.
- Card heading: 1.25–1.35rem.

## Spacing

8px base. Section padding 72px desktop, less under 900px. Content width 1240px. Page gutter 20px, 16px under 390px.

## Radius

Buttons and fields 8px. Browser sketch 12px. Phone sketch 16px.

## Shadow

Marketing sections do not use a card shadow. The scrolled navigation uses a hairline, not a drop shadow stack.

## Breakpoints

360, 390, 768, 900 (layout stacks), 1024, 1440, 1920. The content column stops at 1240px.

## Motion

One 500ms fade on the home hero copy. Disabled when `prefers-reduced-motion: reduce`. Hover darkens the accent button. No scroll-jacking.

## Controls

Buttons are at least 46px tall. Filter chips are 40px. Mobile actions stretch to the full content width under 390px.

## Z-index

Skip link 10000. Navigation stays above the page. Drawers use the existing navbar layer.
