export const servicePages = [
  {
    slug: 'web-development',
    title: 'Website design and development',
    lede: 'Business sites, corporate sites, and redesigns that load quickly on a phone and make the next step obvious.',
    problems: [
      'The current site is slow, hard to update, or unclear about what the business sells.',
      'Campaign pages do not match the offer in the ad.',
      'Search and accessibility were left for later.',
    ],
    deliverables: [
      'A custom layout, not a theme with the logo swapped.',
      'SEO-friendly structure and a fast phone experience.',
      'Inquiry, booking, or store paths where the business needs them.',
      'CMS or content editing when the team will publish after launch.',
      'Handover of the code, plus a 30-day warranty on a focused build.',
    ],
    engagement: 'A focused site with the scope fixed first can launch within 7 days. Larger redesigns are scheduled in milestones.',
    related: ['pixeltocloud-agency', 'saini-handicrafts', 'harish-renova'],
  },
  {
    slug: 'web-applications',
    title: 'Web applications and SaaS',
    lede: 'Portals, dashboards, and products shaped around the way a team already works. You keep the code.',
    problems: [
      'The work lives in spreadsheets and email.',
      'Off-the-shelf software charges per seat and still does not fit.',
      'Customers need a login, not another brochure.',
    ],
    deliverables: [
      'Authenticated portals and role-based access.',
      'Internal dashboards and operational workflows.',
      'API integrations with the tools you already pay for.',
      'A staging environment you can review before launch.',
      'Maintenance after launch, scoped separately from the build.',
    ],
    engagement: 'Applications are quoted as milestones. They are not covered by the 7-day website promise.',
    related: ['easy-my-tax'],
  },
  {
    slug: 'mobile-app-development',
    title: 'Mobile application development',
    lede: 'iOS and Android products, including cross-platform builds, when a phone app is the right surface.',
    problems: [
      'Customers expect to book, pay, or check status from a phone.',
      'A responsive site is not enough for the workflow.',
      'An MVP needs a backend, not only screens.',
    ],
    deliverables: [
      'Product discovery before engineering spend.',
      'iOS, Android, or a cross-platform app, chosen for the product.',
      'API and backend integration.',
      'A release plan and a maintenance option after the store listing.',
    ],
    engagement: 'We have not published a client mobile app as a case study. This page describes the engagement, not a shipped app store product.',
    related: [],
  },
  {
    slug: 'ai-automation',
    title: 'AI and automation',
    lede: 'Workflows that answer the common question first, then hand the rest to a person. No claim that a model replaces your team.',
    problems: [
      'The same questions arrive all day on WhatsApp or email.',
      'Invoices and forms are retyped into another system.',
      'A feature needs a language model, with a person still accountable for the answer.',
    ],
    deliverables: [
      'WhatsApp or support flows with a human handoff.',
      'Document and invoice extraction with a review step.',
      'API connections into the system of record.',
      'A written limit on what the automation is allowed to do.',
    ],
    engagement: 'We describe the workflow and the handoff. We do not promise accuracy rates we have not measured on your documents.',
    related: ['harish-renova'],
  },
  {
    slug: 'ecommerce',
    title: 'E-commerce',
    lede: 'A catalog, a checkout, and a clear way to inquire or pay. Built so the store is yours after launch.',
    problems: [
      'Products are hard to understand on a phone.',
      'Checkout or inquiry drops off.',
      'Payments, shipping, or analytics are bolted on later.',
    ],
    deliverables: [
      'Store design and a product catalog.',
      'Checkout or a structured inquiry, depending on how you sell.',
      'Payment integration when you are ready to take money on the site.',
      'Analytics that show which pages lead to an order or an inquiry.',
    ],
    engagement: 'Saini Handicrafts is a published store-style site with inquiries. A full cart is scoped as its own project.',
    related: ['saini-handicrafts'],
  },
  {
    slug: 'cloud-devops',
    title: 'Cloud, DevOps, and performance',
    lede: 'Deployment, monitoring, and a path to undo a bad release. Hosting you can explain to someone else.',
    problems: [
      'Deploys are manual and hard to reverse.',
      'The site slows down, and nobody can see why.',
      'Certificates, backups, or access are held by a previous vendor.',
    ],
    deliverables: [
      'Cloud or VPS deployment with CI.',
      'Monitoring and a rollback path.',
      'Caching and CDN setup where it helps.',
      'Credentials handed to you, not kept as leverage.',
    ],
    engagement: 'Infrastructure work is scoped from an audit. It is separate from the 7-day website launch.',
    related: ['pixeltocloud-agency'],
  },
  {
    slug: 'digital-marketing',
    title: 'Digital marketing',
    lede: 'Landing pages, search and social campaigns, and clear attribution so ad spend has a place to go.',
    problems: [
      'Ads send traffic to a slow or unclear page.',
      'Leads arrive, but nobody can tell which campaign produced them.',
      'WhatsApp and form inquiries are not tracked as conversions.',
    ],
    deliverables: [
      'Campaign landing pages that load on a phone and state the offer clearly.',
      'Google Ads or Meta campaign structure with high-intent keywords and audiences.',
      'GA4, Tag Manager, and conversion tracking for forms, calls, and WhatsApp.',
      'A short CRO loop on headlines, CTAs, and offer framing after launch.',
    ],
    engagement: 'Marketing work is scoped separately from a website build. We measure inquiry volume, not vanity traffic.',
    related: ['saini-handicrafts', 'harish-renova'],
  },
]

export const industries = [
  {
    slug: 'healthcare',
    title: 'Healthcare',
    image: '/image/industries/healthcare.jpg',
    lede: 'Clinic sites where a person can request a visit and get a confirmation without a phone tag.',
    experience: 'Published work includes Harish Renova. Revital Physiocare is a client with a public quote and no separate case study.',
    challenges: ['Patients need a clear way to book.', 'Emergency and routine paths should not look the same.', 'The site has to stay fast on a phone.'],
    solutions: ['Appointment and WhatsApp confirmation flows.', 'A page structure a clinic manager can explain.', 'Hosting with a rollback if a release looks wrong.'],
    related: ['harish-renova'],
  },
  {
    slug: 'professional-services',
    title: 'Professional services',
    image: '/image/industries/professional-services.jpg',
    lede: 'Practices that handle client files, billing, and a public site. The sensitive work does not stay in an inbox.',
    experience: 'Easy My Tax is a published client portal for a chartered accountancy practice.',
    challenges: ['Client documents move through email.', 'Staff and clients need different access.', 'Deadlines pile up when the system is a spreadsheet.'],
    solutions: ['A portal with roles.', 'Calculations and tracking where the practice needs them.', 'Ownership of the repository and the server.'],
    related: ['easy-my-tax'],
  },
  {
    slug: 'retail-and-makers',
    title: 'Retail and makers',
    image: '/image/industries/retail-and-makers.jpg',
    lede: 'A catalog that shows the work clearly and gives a buyer a way to inquire or check out.',
    experience: 'Saini Handicrafts is a published project.',
    challenges: ['Products look better in person than on the old site.', 'Overseas buyers need a clear next step.', 'The brand and the page disagree.'],
    solutions: ['Product storytelling and a consistent layout.', 'Inquiry or checkout, matched to how you sell.', 'A site the maker can keep after handover.'],
    related: ['saini-handicrafts'],
  },
  {
    slug: 'saas',
    title: 'SaaS and startups',
    image: '/image/industries/saas.jpg',
    lede: 'An application with accounts, a dashboard, and a release you can undo.',
    experience: 'We have not published a venture-backed SaaS case study. The application service is how this work is scoped.',
    challenges: ['The product needs auth before it needs a marketing site.', 'The first version has to be small enough to ship.', 'Investors ask who owns the code.'],
    solutions: ['A fixed first milestone.', 'Authentication, roles, and an API boundary.', 'Repository handover. No seat license on our framework.'],
    related: ['easy-my-tax'],
  },
  {
    slug: 'real-estate',
    title: 'Real estate',
    image: '/image/industries/real-estate.jpg',
    lede: 'Listing and inquiry sites. We have not published a real-estate case study.',
    experience: 'No published project in this industry. The notes below are typical problems, not a claim of specialization.',
    challenges: ['Listings go stale.', 'Inquiries land in a personal inbox.', 'The site is slow on the photos that matter.'],
    solutions: ['A catalog with a clear inquiry.', 'WhatsApp or email notification to the person on duty.', 'Image delivery that does not block the page.'],
    related: [],
  },
  {
    slug: 'education',
    title: 'Education',
    image: '/image/industries/education.jpg',
    lede: 'Course, clinic, and enrollment sites. We have not published an education case study.',
    experience: 'No published project in this industry.',
    challenges: ['Enrollment is a form that nobody checks.', 'Schedules live in a PDF.', 'Parents and students see the same screen.'],
    solutions: ['A structured application or booking flow.', 'A schedule the staff can update.', 'Separate views only when the workflow needs them.'],
    related: [],
  },
  {
    slug: 'hospitality',
    title: 'Hospitality',
    image: '/image/industries/hospitality.jpg',
    lede: 'Property and booking sites. We have not published a hospitality case study.',
    experience: 'No published project in this industry.',
    challenges: ['The booking path and the photos disagree.', 'Questions repeat on WhatsApp.', 'The site was built by a vendor who still holds the login.'],
    solutions: ['A booking or inquiry path that matches the offer.', 'A first reply on WhatsApp, then a person.', 'Handover of the domain, host, and repository.'],
    related: [],
  },
]

export const articles = [
  {
    slug: 'what-a-7-day-launch-includes',
    title: 'What a 7-day launch includes',
    date: '2026-10-03',
    author: 'Pankaj Gupta and Rusmeen',
    minutes: 4,
    topic: 'Delivery',
    summary: 'The 7-day promise covers a focused build with the scope written down first. It does not cover every application.',
    sections: [
      {
        heading: 'The clock starts after the scope',
        paragraphs: [
          'A focused website can launch within 7 days when the pages, the offer, and the handover are agreed before build. If that date is missed, the payment for that build is returned.',
          'A portal, a mobile app, or a multi-system integration is estimated in milestones. Those projects are not squeezed into the same promise.',
        ],
      },
      {
        heading: 'What you review',
        paragraphs: [
          'You see a private staging link before the public launch. The last step is the repository, the domain, and the server access, plus 30 days of warranty on the launched work.',
        ],
      },
    ],
  },
  {
    slug: 'what-you-receive-at-handover',
    title: 'What you receive at handover',
    date: '2026-10-03',
    author: 'Rusmeen',
    minutes: 3,
    topic: 'Ownership',
    summary: 'Launch includes the code, the domain, and the server credentials. The site should not depend on us staying.',
    sections: [
      {
        heading: 'Ownership is part of the delivery',
        paragraphs: [
          'You receive the Git repository, domain access, and server credentials. There is no seat fee to keep the site online.',
          'Optional maintenance covers security updates, backups, and fixes after the warranty. It is a separate agreement.',
        ],
      },
    ],
  },
  {
    slug: 'when-whatsapp-should-hand-off',
    title: 'When a WhatsApp flow should hand off',
    date: '2026-10-03',
    author: 'Pankaj Gupta',
    minutes: 4,
    topic: 'Automation',
    summary: 'An automated reply is useful for the question you can answer every time. Everything else goes to a person.',
    sections: [
      {
        heading: 'Write the limit first',
        paragraphs: [
          'Booking confirmations, opening hours, and a link to a form are safe to automate. Medical, legal, or payment advice is not, unless a person reviews it.',
          'Harish Renova uses WhatsApp as a confirmation path for visit requests. The automation does not replace the clinic.',
        ],
      },
    ],
  },
]

export const workFilters = [
  { id: 'all', label: 'All' },
  { id: 'website', label: 'Websites' },
  { id: 'application', label: 'Web applications' },
  { id: 'ecommerce', label: 'E-commerce' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'ai', label: 'AI and automation' },
]

export const workMeta = {
  'pixeltocloud-agency': { category: 'website', badge: 'Our own site', line: 'This site, designed and run by the same team.' },
  'easy-my-tax': { category: 'application', badge: 'Client project', line: 'Clients file and share documents without an email chain.' },
  'harish-renova': { category: 'website', badge: 'Client project', line: 'Patients request a visit and get a WhatsApp confirmation.' },
  'saini-handicrafts': { category: 'ecommerce', badge: 'Client project', line: 'Handmade work, shown clearly, with a way to inquire.' },
  'nebula-3d': { category: 'application', badge: 'Lab project, not a client engagement', line: 'A browser tool from the lab. Not a client engagement.' },
}

export const lessons = {
  'pixeltocloud-agency': 'The agency site has to be something we can hand to a client as proof, including the code.',
  'easy-my-tax': 'Client files for a practice should not live in an email thread.',
  'harish-renova': 'A clinic page is doing its job when a visit request ends in a confirmation.',
  'saini-handicrafts': 'The product and the inquiry path have to look like the same brand.',
  'nebula-3d': 'A browser tool is a lab exercise until a client project uses it. This one is not a client engagement.',
}

export const deliveryStages = [
  { id: 'Discover', summary: 'We write down the offer, the users, and what is out of scope.', deliverable: 'A short brief you can correct.' },
  { id: 'Define', summary: 'Pages or screens, data, and the milestone dates.', deliverable: 'A scope you approve before build.' },
  { id: 'Design', summary: 'A layout you can click, before the full build.', deliverable: 'A prototype or a page system.' },
  { id: 'Develop', summary: 'Working software on a private staging link.', deliverable: 'A review at each milestone.' },
  { id: 'Launch', summary: 'Production, then the repository and credentials.', deliverable: 'Handover and a 30-day warranty.' },
  { id: 'Improve', summary: 'Fixes and optional maintenance after launch.', deliverable: 'A separate support agreement, if you want one.' },
]

export const faqGroups = [
  {
    id: 'services',
    title: 'Services',
    items: [
      {
        q: 'What do you take on?',
        a: 'Websites, web applications, e-commerce, AI and automation workflows, cloud and DevOps, and mobile applications. Mobile work is offered. We have not published a client app as a case study.',
      },
    ],
  },
  {
    id: 'pricing',
    title: 'Pricing',
    items: [
      {
        q: 'How much does a project cost?',
        a: 'A focused website starts at $100 USD for the first 100 customers. Custom applications are quoted as fixed milestones, often from ₹75,000 upward, and are not the same offer. Budget bands on the project form are a starting point, not a quote.',
      },
    ],
  },
  {
    id: 'timelines',
    title: 'Timelines',
    items: [
      {
        q: 'Is every project delivered in 7 days?',
        a: 'No. A focused build with the scope fixed first launches within 7 days, or that payment is returned. Applications, mobile products, and infrastructure work use their own schedule. Published case studies took longer than 7 days because their scope was larger.',
      },
    ],
  },
  {
    id: 'communication',
    title: 'Communication',
    items: [
      {
        q: 'Who do we talk to?',
        a: 'Pankaj Gupta and Rusmeen. A reply usually comes the same business day, India time. Clients in the United States and the United Arab Emirates work with us across that time difference.',
      },
    ],
  },
  {
    id: 'revisions',
    title: 'Revisions',
    items: [
      {
        q: 'How do reviews work?',
        a: 'You review staging before launch. The number of revision rounds is written into the scope. A new feature after approval is a change, not a revision.',
      },
    ],
  },
  {
    id: 'payments',
    title: 'Payments',
    items: [
      {
        q: 'How are payments structured?',
        a: 'Milestones. A typical split is 30% to start, 40% at the staging review, and 30% at handover. You see working software before the next payment.',
      },
    ],
  },
  {
    id: 'ownership',
    title: 'Ownership',
    items: [
      {
        q: 'Who owns the code?',
        a: 'You do, at handover: repository, domain, and server access. We can sign a mutual NDA before a detailed discussion.',
      },
    ],
  },
  {
    id: 'maintenance',
    title: 'Maintenance',
    items: [
      {
        q: 'What happens after launch?',
        a: 'A focused launch includes 30 days of warranty. Ongoing hosting, backups, and fixes are optional and quoted separately.',
      },
    ],
  },
  {
    id: 'international',
    title: 'International collaboration',
    items: [
      {
        q: 'Do you work outside India?',
        a: 'Yes. The studio is in Gurugram and Alwar, and we take work from the United States, the United Arab Emirates, India, and other countries. Calls are scheduled against India time.',
      },
    ],
  },
]

export const techGroups = [
  { title: 'Interfaces', items: ['React', 'Responsive CSS', 'Accessible markup'] },
  { title: 'Applications', items: ['Node.js', 'PostgreSQL', 'Authentication and roles'] },
  { title: 'Delivery', items: ['Linux and Docker', 'CI', 'Cloudflare', 'Backups'] },
  { title: 'Automation', items: ['WhatsApp flows', 'Document extraction with a review step'] },
]

export function getService(slug) {
  return servicePages.find((item) => item.slug === slug)
}

export function getIndustry(slug) {
  return industries.find((item) => item.slug === slug)
}

export function getArticle(slug) {
  return articles.find((item) => item.slug === slug)
}
