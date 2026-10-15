# Component inventory

Shared marketing pieces live in `src/components/site/blocks.jsx` and `src/styles/agency.css`. Navigation, footer, buttons, auth, and the dashboard layout stay in their existing files.

| Component | Variants | States | Notes |
| --- | --- | --- | --- |
| Navbar | Desktop, mobile drawer, on-night | Open menu, open services menu, scrolled, signed in | Escape closes the drawer and returns focus. Services menu is a list, not a mega-grid of cards. |
| Footer | One | — | Services, work, industries, legal, email, WhatsApp. |
| Button | Solid accent, light, ghost, line | Hover, focus-visible, disabled | `Button` in `src/components/ui/Button.jsx` for chrome. `ag-btn` for new pages. |
| Page hero | Night | — | Used on marketing landings. Pulls under the transparent nav. |
| Product sketch | Browser plus phone | — | Decorative. Caption is for screen readers. Not a client screenshot. |
| Project row | Linked | Focus | Title and one sentence. Timeline is a separate line. |
| Filter chips | Pressed or not | Keyboard | Work categories and insight topics. |
| FAQ | `details` | Open, closed | Summary is the question. |
| Form fields | Text, email, select, textarea, radio | Invalid via `role="alert"`, loading, success | Labels are visible. Honeypot is not in the tab order. |
| Country select | Auth and profile | Searchable | Existing component. Default India on the phone sign-in. |
| Alert | Status paragraph | Success, error | Form result uses `role="status"` or `role="alert"`. |
| Empty state | Portal | — | Says the record is absent. Does not invent rows. |
| Dashboard nav | Horizontal, scrolls on small screens | Current link | Overview, projects, proposals, invoices, messages, files, enquiries, profile, settings. |
| User menu | Signed in | Open | Existing component. |
| Legal notice | Privacy, terms, cookies | — | Flags that counsel should review the page. |

## Accessibility

- One h1 per page.
- Focus rings use the accent blue.
- Filter buttons expose `aria-pressed`.
- The project wizard exposes the current step with `aria-current="step"`.
- The phone code field already supports paste. It stays on `/login`.
- Color is not the only status signal. Empty and error copy says what happened.

## Do not duplicate

Service, industry, and article pages read `src/data/catalog.js`. Case studies stay in `src/data/caseStudies.js`.
