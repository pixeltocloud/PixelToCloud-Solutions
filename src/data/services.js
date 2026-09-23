export const services = [
  {
    id: 'business-websites',
    title: 'High-converting websites & stores',
    positioning: 'Marketing sites and storefronts built to load fast and convert.',
    description:
      'Ultra-fast, mobile-perfect marketing websites and e-commerce storefronts. Tailored design, clean React code, and SEO architecture so customers find you and take action.',
    deliverables: [
      'Custom UI/UX and conversion-focused layouts',
      'Technical SEO and Core Web Vitals',
      'Inquiry, booking, or WhatsApp flows',
      'Sub-second mobile experience targets',
    ],
    stack: ['React', 'Responsive CSS', 'SEO', 'Analytics', 'Hosting'],
    outcomes: [
      'Visitors understand your offer quickly',
      'Higher inquiry and booking conversion',
      'A site you own and can extend',
    ],
    process: [
      'Clarify offers, audiences, and conversion goals',
      'Design and build a focused site structure',
      'Launch with tracking and full handover',
    ],
    accent: 'cyan',
    cta: 'Discuss a website',
    priority: 'primary',
    pillar: 'BUILD',
  },
  {
    id: 'custom-software',
    title: 'Custom software, billing & CRM',
    positioning: 'Software shaped around how your business actually operates.',
    description:
      'Client portals, invoice generators, inventory trackers, and role-based dashboards—built so you stop wrestling Excel and SaaS seat fees.',
    deliverables: [
      'Client portals and secure document access',
      'Operational dashboards and workflows',
      'Role-based access, APIs, and databases',
      'Billing and CRM-style modules when needed',
    ],
    stack: ['React', 'Node.js', 'PostgreSQL', 'REST/GraphQL', 'Auth'],
    outcomes: [
      'Fewer manual hand-offs',
      'Systems you own—no seat lock-in',
      'Clear audit trails for sensitive work',
    ],
    process: [
      'Map workflows and data rules',
      'Ship fixed-scope milestones',
      'Iterate in staging with live reviews',
    ],
    accent: 'cyan',
    cta: 'Discuss an application',
    priority: 'primary',
    pillar: 'BUILD',
  },
  {
    id: 'lead-growth',
    title: 'Google Ads & lead funnels',
    positioning: 'Landing pages and ads that turn spend into conversations.',
    description:
      'Laser-targeted landing pages and search funnels with conversion tracking and copy that maximizes marketing spend.',
    deliverables: [
      'High-intent landing pages',
      'Keyword and campaign structure guidance',
      'Conversion tracking setup',
      'WhatsApp / form capture paths',
    ],
    stack: ['Landing UX', 'GA4', 'Ads tracking', 'CRO copy'],
    outcomes: ['More qualified inquiries', 'Clearer attribution', 'Faster payback on ad spend'],
    process: ['Define offers and keywords', 'Build landing + tracking', 'Launch and iterate'],
    accent: 'orange',
    cta: 'Discuss lead growth',
    priority: 'primary',
    pillar: 'GROW',
  },
  {
    id: 'cloud-devops',
    title: 'Speed, cloud & security',
    positioning: 'Hosting that stays fast when traffic spikes.',
    description:
      'Hardened Linux servers, CDN caching, SSL, automated backups, and monitoring so launches stay stable.',
    deliverables: [
      'Hardened Linux / VPS setup',
      'Docker deploys and reverse proxy',
      'SSL, backups, and monitoring',
      'Performance and security hardening',
    ],
    stack: ['Linux VPS', 'Docker', 'Nginx', 'CI/CD', 'Cloudflare'],
    outcomes: ['Predictable deploys', 'Hardened access', 'Backups you can rely on'],
    process: ['Audit hosting and failure modes', 'Containerize and wire SSL', 'Automate delivery and alerts'],
    accent: 'cyan',
    cta: 'Discuss infrastructure',
    priority: 'primary',
    pillar: 'GROW',
  },
  {
    id: 'whatsapp-ai',
    title: 'WhatsApp booking & AI support',
    positioning: 'Turn WhatsApp into your hardest-working salesperson.',
    description:
      'Bots and flows that qualify leads, book appointments, send payment links, and trigger reminders on the channel your customers already use.',
    deliverables: [
      'WhatsApp chat and booking flows',
      'Lead qualification scripts',
      'Reminder and follow-up automation',
      'Handoff to human chat when needed',
    ],
    stack: ['WhatsApp API', 'Automation', 'CRM hooks'],
    outcomes: ['Fewer missed leads', '24/7 first response', 'Cleaner booking pipelines'],
    process: ['Map conversation goals', 'Build and test flows', 'Launch with monitoring'],
    accent: 'emerald',
    cta: 'Discuss WhatsApp automation',
    priority: 'advanced',
    pillar: 'AUTOMATE',
  },
  {
    id: 'ai-docs',
    title: 'AI document & invoice extraction',
    positioning: 'Pull structured data out of PDFs and paperwork.',
    description:
      'Intelligent parsers that extract financial data from PDFs, tax forms, receipts, and invoices into your systems.',
    deliverables: [
      'Document OCR and extraction pipelines',
      'Structured exports to sheets/DB',
      'Validation and review steps',
      'Integration into existing tools',
    ],
    stack: ['OCR', 'LLM/RAG', 'APIs', 'PostgreSQL'],
    outcomes: ['Less manual data entry', 'Faster back-office cycles', 'Fewer transcription errors'],
    process: ['Sample documents and fields', 'Prototype accuracy', 'Production integration'],
    accent: 'violet',
    cta: 'Discuss document AI',
    priority: 'advanced',
    pillar: 'AUTOMATE',
  },
  {
    id: 'interactive-3d',
    title: 'Interactive 2D/3D experiences',
    positioning: 'Browser-based product tools beyond a static brochure.',
    description:
      'WebGL/Three.js configurators and inspection tools so customers explore complex products in real time.',
    deliverables: [
      'High-performance WebGL rendering',
      'Interactive product configurators',
      'Touch-friendly controls',
      'Performance budgets for mobile',
    ],
    stack: ['Three.js', 'WebGL', 'Custom shaders'],
    outcomes: ['Higher engagement', 'Fewer fit/finish questions', 'Works in-browser'],
    process: ['Define interaction goals', 'Prototype performance', 'Polish materials and gestures'],
    accent: 'violet',
    cta: 'Discuss a 3D experience',
    priority: 'advanced',
    pillar: 'BUILD',
  },
]

export const homepageServices = services.filter((s) => s.priority === 'primary')

export const processSteps = [
  {
    step: '01',
    title: 'Discovery & blueprint',
    days: 'Days 1–2',
    description:
      'Technical blueprint, data model outline, and milestone timeline—so scope and ownership are clear before build.',
  },
  {
    step: '02',
    title: 'Prototype & design',
    days: 'Days 3–5',
    description: 'Clickable prototype and component system you can react to before full engineering spend.',
  },
  {
    step: '03',
    title: 'Build & review',
    days: 'Days 6–12',
    description: 'Private staging URL with milestone demos. You review working software at every step.',
  },
  {
    step: '04',
    title: 'Launch & handover',
    days: 'Days 13–14+',
    description: 'Production deploy, Git handover, credentials, and 30-day post-launch warranty.',
  },
]

export const whyUs = [
  {
    title: '100% code & asset ownership',
    description:
      'You keep repositories, schemas, domains, and server credentials. No hostage clauses or seat lock-in.',
  },
  {
    title: 'Direct founder access',
    description:
      'You work with Pankaj and Tushar—the engineers shipping the product—not a sales layer.',
  },
  {
    title: 'Rapid milestone delivery',
    description:
      '10–14 day MVP sprints for focused websites and portals, with fixed-scope pricing.',
  },
  {
    title: 'This site is the proof',
    description:
      'pixeltocloud.com is our live agency site—designed, engineered, and deployed by the same team that will build yours.',
  },
]

export const pillars = [
  {
    id: 'build',
    label: 'BUILD',
    title: 'Websites & custom software',
    items: ['High-converting websites & stores', 'Custom CRM, billing & portals'],
  },
  {
    id: 'grow',
    label: 'GROW',
    title: 'Leads, speed & reliability',
    items: ['Google Ads & lead funnels', 'Cloud performance & security'],
  },
  {
    id: 'automate',
    label: 'AUTOMATE',
    title: 'WhatsApp & AI workflows',
    items: ['24/7 WhatsApp booking bots', 'AI document & invoice extraction'],
  },
]

export const marqueeLabels = [
  'Websites that convert',
  'Full source-code ownership',
  '10–14 day MVP sprints',
  'WhatsApp booking flows',
  'Custom CRM portals',
  'Cloud & DevOps',
  'Direct founder access',
  'Fixed-scope milestones',
  'Alwar · Worldwide',
  'Zero vendor lock-in',
]
