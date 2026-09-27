export const sectorGroups = [
  {
    id: 'saas-ai',
    name: 'SaaS & AI',
    line: 'Multi-tenant products, grounded agents, and wallet interfaces.',
  },
  {
    id: 'commerce-growth',
    name: 'Commerce',
    line: 'Headless commerce, conversion funnels, and listing systems.',
  },
  {
    id: 'cloud-compliance',
    name: 'Ops & trust',
    line: 'Role-based access, care workflows, and CI/CD.',
  },
]

export const sectors = [
  {
    id: 'b2b-saas',
    group: 'saas-ai',
    title: 'B2B SaaS & platforms',
    kicker: 'The product you can show',
    headline: 'A first version your customers can actually use.',
    lede: 'We design the login, the first screen, and the bill. Then we build the app around how your team already works. Each customer can have their own space.',
    image: '/image/showcase/mockup-macbook-saas.jpg',
    imageAlt: 'Laptop showing a calm SaaS workspace on a desk',
    scene: 'orbit',
    accent: '#0284c7',
    ideas: [
      {
        title: 'A link you can send in a meeting',
        text: 'The first screen is the product itself. You can share a link and let someone click around.',
      },
      {
        title: 'Each customer has their own space',
        text: 'Moving from one customer to another should feel like opening another folder, not a technical chore.',
      },
      {
        title: 'A bill people can read',
        text: 'Plans and usage are written in plain words. Card payments stay with a payment company you already trust. You keep the product.',
      },
    ],
    beats: [
      { label: 'Morning', text: 'A new signup lands in the right place, ready to use.' },
      { label: 'Midday', text: 'A teammate invites a client. The client only sees their own work.' },
      { label: 'Evening', text: 'The bill matches what the product just did. No extra spreadsheet.' },
    ],
    audiences: [
      {
        label: 'First product',
        text: 'A small first version you can show in two weeks: one job, a login, and a way to pay.',
      },
      {
        label: 'Already live',
        text: 'Clearer access for the team, and screens that still make sense when more people join.',
      },
    ],
    services: [
      { slug: 'custom-software', label: 'Custom web apps' },
      { slug: 'ui-ux-design', label: 'Product design' },
      { slug: 'api-integrations', label: 'Connecting your tools' },
    ],
  },
  {
    id: 'ai-automation',
    group: 'saas-ai',
    title: 'AI agents',
    kicker: 'Help that knows when to stop',
    headline: 'Replies from your own business, then a person takes over.',
    lede: 'We connect a helper to your pages, your prices, and your calendar. It answers, books, and files. It does not make up a rule you never wrote.',
    image: '/image/showcase/mockup-ai-automation.jpg',
    imageAlt: 'Abstract view of an automation workspace with soft light',
    scene: 'pulse',
    accent: '#10b981',
    ideas: [
      {
        title: 'A person still gets the full chat',
        text: 'When the helper is unsure, someone on your team sees the question and what was already said.',
      },
      {
        title: 'Paperwork turned into fields',
        text: 'Invoices and forms become details you can check, not another folder of PDFs.',
      },
      {
        title: 'Answers from your own pages',
        text: 'If your site does not say it, the helper should not say it either.',
      },
    ],
    beats: [
      { label: 'Inquiry', text: 'WhatsApp asks the one question that decides fit, then offers a time.' },
      { label: 'Paper', text: 'A vendor invoice is read into the fields your books already use.' },
      { label: 'Review', text: 'You see what the agent said this week, and where it stepped aside.' },
    ],
    audiences: [
      {
        label: 'A small team',
        text: 'One channel, one knowledge set, one human fallback. Live before you build a platform around it.',
      },
      {
        label: 'A busy back office',
        text: 'Private workflows for documents and routing, with logs a manager can actually open.',
      },
    ],
    services: [
      { slug: 'ai-automation', label: 'AI & WhatsApp agents' },
      { slug: 'api-integrations', label: 'Systems integration' },
      { slug: 'custom-software', label: 'Internal tools' },
    ],
  },
  {
    id: 'web3',
    group: 'saas-ai',
    title: 'Web3 interfaces',
    kicker: 'The screen before you confirm',
    headline: 'Screens a careful person can finish without guessing.',
    lede: 'Wallet and launch pages are easy to make confusing. We build the part people see, and a clear way back if something fails. A specialist still checks the contract itself.',
    image: '/image/showcase/mockup-tablet-cyber.jpg',
    imageAlt: 'Tablet on a dark surface showing a technical interface',
    scene: 'lattice',
    accent: '#8b5cf6',
    ideas: [
      {
        title: 'A mint a non-crypto friend can finish',
        text: 'Connect, confirm, wait, done. Each state has a sentence, not a spinner with no ending.',
      },
      {
        title: 'Intent before the signature',
        text: 'What will move, to whom, and what it costs — visible before anyone approves.',
      },
      {
        title: 'A quiet failure',
        text: 'Rejected, dropped, or wrong network. The screen says which, and what to do next.',
      },
    ],
    beats: [
      { label: 'Arrive', text: 'The page explains the action in one line before it asks for a wallet.' },
      { label: 'Confirm', text: 'The review shows the exact intent. No buried approval.' },
      { label: 'After', text: 'A receipt state you can share, or a clear retry if the network stalls.' },
    ],
    audiences: [
      {
        label: 'A new drop',
        text: 'A focused public flow: connect, act, confirm. Fast enough for a launch day.',
      },
      {
        label: 'A desk that reviews',
        text: 'Screens for people who approve together, with a record of what was proposed.',
      },
    ],
    services: [
      { slug: 'web-development', label: 'Web platforms' },
      { slug: 'ui-ux-design', label: 'Interface design' },
      { slug: 'cloud-devops', label: 'Cloud & deploy' },
    ],
  },
  {
    id: 'ecommerce',
    group: 'commerce-growth',
    title: 'E-commerce & D2C',
    kicker: 'A shop people can finish',
    headline: 'A store that remembers the bag and tells the truth about stock.',
    lede: 'We build shops that load quickly, explain shipping on the product page, and stop offering a size you do not have.',
    image: '/image/showcase/mockup-storefront.jpg',
    imageAlt: 'A phone on a wooden desk showing a clothing shop, next to a paper bag',
    scene: 'shelf',
    accent: '#ea580c',
    ideas: [
      {
        title: 'Shipping, right under the price',
        text: 'Fit, delivery, and returns sit on the product page, not three clicks away.',
      },
      {
        title: 'One bag, two screens',
        text: 'Someone can start on a phone and pay on a laptop without filling the bag again.',
      },
      {
        title: 'Stock that matches the shelf',
        text: 'When the last item sells, the buy button goes away.',
      },
    ],
    beats: [
      { label: 'Browse', text: 'The product page leads with the thing, the price, and the one reason to trust it.' },
      { label: 'Hesitate', text: 'Shipping and returns are already on screen. The tab can stay open.' },
      { label: 'Pay', text: 'Checkout asks for less, and the confirmation says what happens next.' },
    ],
    audiences: [
      {
        label: 'A first collection',
        text: 'A clear product list, a simple checkout, and photos that make the product feel cared for.',
      },
      {
        label: 'More than one country',
        text: 'Prices and products set up so the shop stays fast as it grows.',
      },
    ],
    services: [
      { slug: 'web-development', label: 'Online shops' },
      { slug: 'conversion-rate-optimization', label: 'Making checkout easier' },
      { slug: 'api-integrations', label: 'Stock and payments' },
    ],
  },
  {
    id: 'growth-marketing',
    group: 'commerce-growth',
    title: 'Growth funnels',
    kicker: 'One offer, one page',
    headline: 'A page that says the same thing as the ad.',
    lede: 'We do not send every ad to the homepage. Each offer gets its own page, a short form, and a simple way to see what worked.',
    image: '/image/showcase/mockup-campaign.jpg',
    imageAlt: 'A monitor at dusk showing a simple campaign page made of color blocks',
    scene: 'funnel',
    accent: '#ff5722',
    ideas: [
      {
        title: 'The ad and the page agree',
        text: 'Headline, proof, and next step repeat the promise that earned the click. Nothing else competes.',
      },
      {
        title: 'The next useful question',
        text: 'Forms ask what you need to reply, not a biography. Mobile thumbs can finish it.',
      },
      {
        title: 'A number you can defend',
        text: 'Events are named in plain language, so a founder can see which page actually brought the call.',
      },
    ],
    beats: [
      { label: 'Click', text: 'The first screen repeats the offer. No menu hunt.' },
      { label: 'Commit', text: 'The form is short. The thank-you says when a person will reply.' },
      { label: 'Learn', text: 'You can tell which page, which offer, and which week moved.' },
    ],
    audiences: [
      {
        label: 'A launch',
        text: 'One campaign page, one tracking setup, and a form that reaches a real inbox.',
      },
      {
        label: 'A channel that already spends',
        text: 'Cleaner pages and a measurement pass so the next test is about the offer, not a broken pixel.',
      },
    ],
    services: [
      { slug: 'growth-funnels', label: 'Funnels' },
      { slug: 'conversion-rate-optimization', label: 'Conversion audits' },
      { slug: 'web-development', label: 'Landing builds' },
    ],
  },
  {
    id: 'real-estate',
    group: 'commerce-growth',
    title: 'Real estate & hospitality',
    kicker: 'The room, before the visit',
    headline: 'A listing that feels like walking in, and a lead that does not wait until Monday.',
    lede: 'Property and stay decisions are visual and impatient. We build the tour, the inquiry, and the booking so a person can act while the tab is still open.',
    image: '/image/showcase/mockup-interior-luxury.jpg',
    imageAlt: 'A considered interior, the kind a listing should feel like',
    scene: 'rooms',
    accent: '#0284c7',
    ideas: [
      {
        title: 'The walk, on a phone',
        text: 'Photos, plan, and the three facts that matter — light, location, price — in an order a thumb can follow.',
      },
      {
        title: 'The lead while the tour is open',
        text: 'WhatsApp or a short form captures the property, the question, and a way back. No “we will email you.”',
      },
      {
        title: 'A calendar, not a second website',
        text: 'Viewings and stays book against real availability, on the same page as the place.',
      },
    ],
    beats: [
      { label: 'Look', text: 'The first image is the room. The price is not hiding.' },
      { label: 'Ask', text: 'One tap opens a thread that already names the property.' },
      { label: 'Book', text: 'A time is held. Both sides get the same confirmation.' },
    ],
    audiences: [
      {
        label: 'A single asset',
        text: 'A showcase and a fast way to enquire. Enough to look established on day one.',
      },
      {
        label: 'A portfolio',
        text: 'Many properties, shared components, and a booking path that does not fork into five tools.',
      },
    ],
    services: [
      { slug: 'web-development', label: 'Property sites' },
      { slug: 'ui-ux-design', label: 'Listing design' },
      { slug: 'ai-automation', label: 'WhatsApp capture' },
    ],
  },
  {
    id: 'fintech',
    group: 'cloud-compliance',
    title: 'FinTech platforms',
    kicker: 'Trust before the form',
    headline: 'Explain it first. Ask for details second.',
    lede: 'Money products feel risky when the screen is vague. An advisor and a client should not see the same things. Payments stay with a company you already trust.',
    image: '/image/showcase/mockup-phone-wealth.jpg',
    imageAlt: 'Phone showing a quiet wealth-style interface',
    scene: 'ledger',
    accent: '#0369a1',
    ideas: [
      {
        title: 'The ask comes after the explanation',
        text: 'What this product is, who it is for, and what happens to the information — before a form field.',
      },
      {
        title: 'Two people, two views',
        text: 'An advisor sees the book. A client sees their own. The difference is a role, not a separate app you forget to update.',
      },
      {
        title: 'A record you can open later',
        text: 'Actions leave a trail a human can read. We do not invent a certification. We build the controls your counsel asks for.',
      },
    ],
    beats: [
      { label: 'Arrive', text: 'The page states the offer in one calm paragraph.' },
      { label: 'Enter', text: 'Intake collects only what the next step needs.' },
      { label: 'Return', text: 'The client comes back to a view that matches what they were promised.' },
    ],
    audiences: [
      {
        label: 'A product in demo',
        text: 'A credible walkthrough with real roles and a payment path through a known processor.',
      },
      {
        label: 'A desk with clients',
        text: 'Separated views, careful logs, and an architecture review before anything sensitive moves.',
      },
    ],
    services: [
      { slug: 'custom-software', label: 'Client portals' },
      { slug: 'api-integrations', label: 'Payment & data links' },
      { slug: 'cloud-devops', label: 'Hardened hosting' },
    ],
  },
  {
    id: 'healthcare',
    group: 'cloud-compliance',
    title: 'Healthcare systems',
    kicker: 'The waiting room, on a phone',
    headline: 'Forms a patient can finish before their name is called.',
    lede: 'Booking and follow-up should be obvious on a phone. Staff and patients only see what they need. We follow the privacy rules you give us. We do not put a compliance badge on the homepage.',
    image: '/image/office-space.jpg',
    imageAlt: 'A quiet studio workspace with soft daylight',
    scene: 'care',
    accent: '#0f766e',
    ideas: [
      {
        title: 'The next open slot, not a spreadsheet',
        text: 'Patients see a time. Staff see the day. Both are the same calendar.',
      },
      {
        title: 'Forms that respect a thumb and a hurry',
        text: 'Short steps, saved progress, and language a person can read without a clinician beside them.',
      },
      {
        title: 'Visibility by role',
        text: 'Front desk, clinician, and patient do not share one login with everything exposed. Access follows the job.',
      },
    ],
    beats: [
      { label: 'Book', text: 'A slot is chosen. A reminder goes out without a manual text.' },
      { label: 'Arrive', text: 'Intake is already done, or can be finished in the chair.' },
      { label: 'After', text: 'The note and the next step live where the right person can find them.' },
    ],
    audiences: [
      {
        label: 'A clinic getting online',
        text: 'Booking plus intake, with a human still able to override the day.',
      },
      {
        label: 'A product beside the record',
        text: 'Bridges and views designed with your privacy requirements written down first.',
      },
    ],
    services: [
      { slug: 'custom-software', label: 'Care workflows' },
      { slug: 'ui-ux-design', label: 'Patient-facing design' },
      { slug: 'maintenance-support', label: 'Ongoing care of the system' },
    ],
  },
  {
    id: 'cloud-it',
    group: 'cloud-compliance',
    title: 'Cloud & DevOps',
    kicker: 'An update you can undo',
    headline: 'Hosting you can explain, and an update you can undo.',
    lede: 'We move sites off fragile hosting onto a setup a small team can run: backups, a simple way to publish, and an alert when something is actually down.',
    image: '/image/showcase/mockup-tablet-cyber.jpg',
    imageAlt: 'A tablet showing a technical operations view',
    scene: 'nodes',
    accent: '#0284c7',
    ideas: [
      {
        title: 'One path from git to the live site',
        text: 'Push, build, release. If the release is wrong, the previous one is still there.',
      },
      {
        title: 'A machine with a name',
        text: 'What it runs, where the data lives, and who can log in — written down, not remembered.',
      },
      {
        title: 'Alerts with a verb',
        text: '“The site is down” beats a chart that moved. Backups are tested, not just scheduled.',
      },
    ],
    beats: [
      { label: 'Map', text: 'We list what is running now, and what should survive a bad afternoon.' },
      { label: 'Move', text: 'The new setup runs beside the old one until the cut is boring.' },
      { label: 'Keep', text: 'Deploys, backups, and a person to call when the light goes red.' },
    ],
    audiences: [
      {
        label: 'Leaving shared hosting',
        text: 'A single well-set server, HTTPS, and a deploy that does not need a hero.',
      },
      {
        label: 'More than one service',
        text: 'Separated apps, clearer environments, and a pipeline the next engineer can read.',
      },
    ],
    services: [
      { slug: 'cloud-devops', label: 'Cloud & DevOps' },
      { slug: 'maintenance-support', label: 'Maintenance' },
      { slug: 'web-migration', label: 'Migrations' },
    ],
  },
]

export function getSector(id) {
  return sectors.find((sector) => sector.id === id)
}

export function sectorsInGroup(groupId) {
  return sectors.filter((sector) => sector.group === groupId)
}
