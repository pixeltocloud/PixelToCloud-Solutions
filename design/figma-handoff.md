# Figma handoff

No Figma connection is available in this workspace. This file is the specification. An editable Figma document has not been created.

Earlier static frames are in `design/frames.html`. They predate this implementation and are not the source of truth. The site is.

## Suggested file

1. Cover
2. Foundations
3. Components
4. Marketing, desktop 1440
5. Marketing, mobile 390
6. Authentication
7. Client portal
8. Admin (empty, with a note that roles are not implemented)
9. Prototypes
10. Handoff

## Frames

Desktop 1440 with a 1240 content column and 72px side inset. Tablet 768. Mobile 390 and 360. Also check 1024 and 1920. The column does not grow past 1240, so 1920 is the same layout with more margin.

Name frames `Marketing / Home / Desktop`.

## Components and variants

- Button: Solid, Light, Ghost, Line. Properties: state = default, hover, focus, disabled.
- Nav: Default, Scrolled, On night, Menu open.
- Text field: Default, Focus, Error.
- Project row: Default.
- FAQ item: Closed, Open.
- Chip: Off, On.
- Portal empty: One component, text overridden per page.

Use auto layout. Gap 8, 16, 24, 48, 72. Hug text on buttons. Fill container on fields.

## Prototype map

- Nav “Start a project” → Start a project, step 1.
- Continue → next step. Back → previous step, answers intact.
- Submit → success frame.
- Work filter → filtered list, including the empty mobile and AI frames.
- Sign in → Google or phone. Phone → six-digit code.
- Signed-out visit to `/dashboard` → `/login?redirect=/dashboard`.

## Assets still manual

- Founder photos already on the site: `/image/pankaj-profile.jpg`, `/image/rusmeen-profile.jpg`.
- Do not draw client logos. The site uses names.
- Replace the portal sketch with real product screenshots only when a client approves the image.
- Counsel should review privacy, terms, and cookies before those frames are treated as final legal pages.
