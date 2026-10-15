# PixelToCloud design direction

The public name is **PixelToCloud**. The brief used “Nexora” as a placeholder. Change the name in `src/config/brand.js` only.

## Positioning

A technology partner for ambitious businesses in the United States, the United Arab Emirates, India, and other markets. The studio is Pankaj Gupta and Rusmeen, with offices in Gurugram and Alwar.

Core line: “We build digital products that move businesses forward.”

Primary action: Start a project (`/start-project`). Secondary: Explore our work (`/work`).

## Principles

- Dark opening, light pages after it.
- One accent, `#5B6CFF`, on the main action. Most of the page is ink, paper, and a night field.
- Real clients stay labeled as clients. Lab work is labeled as lab work. Industries without a published project say so.
- No invented performance numbers. The 7-day promise applies only to a focused website with the scope fixed first.
- Type is Space Grotesk for headings and Plus Jakarta Sans for reading.

## Page inventory

Public: Home, Services and six service pages, Work, case studies, About, Process, Industries and seven industry pages, Insights and three notes, Contact, Start a project, FAQ, Privacy, Terms, Cookies, Labs, Connect.

Account: Sign in, auth callback, auth error. Password reset is not offered. Phone codes are entered on `/login`.

Portal (signed in): Overview, Projects, project detail, Proposals, proposal detail, Invoices, Messages, Files, Enquiries, Profile, Settings.

Admin is not built. There is no server-side role. Hiding a link would not make an admin panel safe.

## Deferred

- Editable Figma file. No Figma integration is connected. See `figma-handoff.md`.
- Live messaging, file storage, invoices, and proposals. The portal explains that those stores are not connected.
- Newsletter. No subscription service exists.
- Admin routes.
