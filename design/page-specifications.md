# Page specifications

## Home `/`

Intent: understand the offer and start a project, or open the work.
Order: night hero with headline and product sketch, client names, services, three projects, why teams stay, four-step focused build, quotes, technology, FAQ, close.
CTA: Start a project. Secondary: Explore our work.
Mobile: sketch stacks under the headline. Buttons go full width under 390px.
No metric row. Client results are not invented. The opening offer stays in the popup and on the contact form.

## Services `/services` and `/services/:slug`

Intent: choose a service.
Each service page has problems, deliverables, an engagement note, related work or an empty note, and FAQ.
Mobile app and some industries state that no case study is published.

## Work `/work` and `/work/:slug`

Intent: judge the work.
Filters: All, Websites, Web applications, E-commerce, Mobile, AI and automation.
Empty categories say no project is published there.
Case study: badge, client, industry, timeline, challenge, build, features, outcome, a lesson drawn from that project, related work.
Nebula3D is labeled a lab project.

## About `/about`

Founders only: Pankaj Gupta and Rusmeen. No extra staff profiles.

## Process `/process`

Discover, Define, Design, Develop, Launch, Improve. The 7-day line is limited to a focused website.

## Industries `/industries` and `/industries/:slug`

Healthcare, professional services, and makers point at real projects. Real estate, education, hospitality, and SaaS say there is no published specialty.

## Insights `/insights` and `/insights/:slug`

Three founder notes. Search and topic filters. No newsletter form.

## Contact `/contact`

Real delivery through the existing form endpoint. Loading, success, and error states. Budget bands are labeled as a starting point.

## Start a project `/start-project`

Six steps. Back keeps the answers. Review, then the same form endpoint. Success replaces the form. Failure keeps the answers.

## FAQ `/faq`

Grouped questions. Does not promise 7 days or one price for every project.

## Legal

Privacy, terms, and cookies. Each page says it needs legal review.

## Sign in `/login`

Google and phone code. Country list defaults to India. OTP paste and resend stay in the existing card. `/auth/callback` completes Google. `/auth/error` explains a failed or unconfigured sign-in. No password reset.

## Portal

Signed-in routes require the existing auth gate. Lists are empty until a backend exists. Messages cannot be sent. Files cannot be uploaded. Invoices are never marked paid. A proposal page says it is not a signed contract. Project and proposal ids that are not on the account show an empty state. There is no admin.
