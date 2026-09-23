export const services = [
  {
    id: 'business-websites',
    title: 'Business websites',
    positioning: 'A clear, fast site that explains what you do and helps people take the next step.',
    description:
      'Professional marketing and service websites for clinics, practices, and growing businesses—designed around your offers, bookings, and inquiries.',
    deliverables: [
      'Clear service storytelling and calls to action',
      'Mobile-first layouts that load quickly',
      'Inquiry, booking, or WhatsApp flows',
    ],
    stack: ['React', 'Responsive CSS', 'SEO basics', 'Analytics', 'Hosting setup'],
    outcomes: [
      'Visitors understand your offer quickly',
      'Easier booking and inquiry conversion',
      'A site you own and can extend',
    ],
    process: [
      'Clarify offers, audiences, and conversion goals',
      'Design and build a focused site structure',
      'Launch with tracking and handover',
    ],
    accent: 'cyan',
    cta: 'Discuss a website',
    priority: 'primary',
  },
  {
    id: 'custom-software',
    title: 'Custom web applications',
    positioning: 'Software designed around the way your organization actually works.',
    description:
      'Replace inflexible spreadsheets and bolted-on tools with client portals, internal workflows, and business applications you own.',
    deliverables: [
      'Client portals and secure document access',
      'Operational dashboards and workflow automation',
      'Role-based access, APIs, and databases',
    ],
    stack: ['React', 'Node.js', 'PostgreSQL', 'REST/GraphQL', 'Auth & RBAC'],
    outcomes: [
      'Fewer manual hand-offs between teams and clients',
      'Systems you own—no recurring seat lock-in',
      'Clear audit trails for sensitive workflows',
    ],
    process: [
      'Map the real operational workflow and data rules',
      'Ship a fixed-scope architecture with milestones',
      'Iterate in staging with working reviews',
    ],
    accent: 'cyan',
    cta: 'Discuss an application',
    priority: 'primary',
  },
  {
    id: 'ecommerce',
    title: 'E-commerce & product experiences',
    positioning: 'Storefronts and product journeys built for how you sell.',
    description:
      'Custom storefronts, multi-currency catalogs, and product storytelling for brands that need more than a generic theme.',
    deliverables: [
      'Editorial product presentation',
      'Inquiry and commission workflows',
      'Multi-currency pricing where needed',
    ],
    stack: ['Custom storefront', 'Media-heavy UX', 'Inquiry flows', 'Integrations'],
    outcomes: [
      'Stronger product storytelling',
      'Clearer path from browse to inquiry or order',
      'A storefront shaped around your brand',
    ],
    process: [
      'Define catalog, pricing, and conversion goals',
      'Design product presentation and flows',
      'Launch, measure, and refine',
    ],
    accent: 'cyan',
    cta: 'Discuss a storefront',
    priority: 'primary',
  },
  {
    id: 'interactive-3d',
    title: 'Interactive 2D/3D experiences',
    positioning: 'Immersive product tools that go beyond a standard website.',
    description:
      'Browser-based configurators and inspection tools so customers can explore complex products in real time.',
    deliverables: [
      'High-performance WebGL and Three.js rendering',
      'Interactive product configurators',
      'Browser-based inspection and design tools',
    ],
    stack: ['Three.js', 'WebGL', 'Custom shaders', 'PBR materials', 'Touch controls'],
    outcomes: [
      'Higher engagement than static product pages',
      'Fewer support questions about fit and finish',
      'Works in-browser—no plugin installs',
    ],
    process: [
      'Define interaction goals and asset constraints',
      'Prototype performance budgets on target devices',
      'Polish lighting, materials, and mobile gestures',
    ],
    accent: 'cyan',
    cta: 'Discuss a 3D experience',
    priority: 'advanced',
  },
  {
    id: 'cloud-devops',
    title: 'Cloud infrastructure & DevOps',
    positioning: 'Reliable hosting and delivery for the software we build.',
    description:
      'Hardened servers, containerized deployments, automated delivery, and ongoing maintenance so launches stay stable.',
    deliverables: [
      'Hardened Linux servers and access security',
      'Docker deployments and automated delivery',
      'SSL, backups, monitoring, and maintenance',
    ],
    stack: ['Linux VPS', 'Docker', 'Nginx', 'CI/CD', 'SSL & backups'],
    outcomes: [
      'Predictable deploys with less downtime risk',
      'Hardened access and routine patching',
      'Backups and monitoring you can rely on',
    ],
    process: [
      'Audit hosting, secrets, and failure modes',
      'Containerize and wire reverse proxy + SSL',
      'Automate delivery, backups, and alerts',
    ],
    accent: 'cyan',
    cta: 'Discuss infrastructure',
    priority: 'advanced',
  },
]

export const homepageServices = services.filter((s) => s.priority === 'primary')

export const processSteps = [
  {
    step: '01',
    title: 'Discovery',
    description:
      'We learn how your business works today—offers, workflows, data, and pain points—before proposing a build plan.',
  },
  {
    step: '02',
    title: 'Fixed-scope plan',
    description:
      'You get a clear architecture outline, milestones, timeline, and fixed deliverables so pricing stays predictable.',
  },
  {
    step: '03',
    title: 'Build & review',
    description:
      'We ship in structured iterations. You review working software in staging at each milestone.',
  },
  {
    step: '04',
    title: 'Launch & support',
    description:
      'We deploy, harden, and hand over repositories and credentials. Optional maintenance covers the months after launch.',
  },
]

export const whyUs = [
  {
    title: 'Built around real workflows',
    description:
      'We shape the system around how your team and clients work—not a template or a stack of plugins.',
  },
  {
    title: 'Full source-code & IP ownership',
    description:
      'You retain your repository, documentation, and server credentials at handover. No vendor lock-in.',
  },
  {
    title: 'Direct senior engineer access',
    description:
      'You work with the engineers designing and maintaining the system—without a sales layer in between.',
  },
  {
    title: 'Committed long-term support',
    description:
      'After launch, we can maintain infrastructure, backups, security patches, and iterative improvements.',
  },
]
