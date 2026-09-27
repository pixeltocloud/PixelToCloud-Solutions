export const domainPillars = [
  {
    id: 'saas-ai',
    number: '01',
    name: 'SAAS & AI',
    subtitle: 'Scalable Digital Products',
    items: [
      {
        id: 'b2b-saas',
        icon: 'saas',
        title: 'B2B SaaS & platforms',
        image: '/image/showcase/mockup-macbook-saas.jpg',
        to: '/serve/b2b-saas',
        startups: {
          desc: 'Multi-tenant MVP with auth, billing, and a demo a buyer can use.',
          metric: 'Multi-tenant MVP',
        },
        enterprises: {
          desc: 'SSO-ready access, RBAC, and an API that holds as usage grows.',
          metric: 'RBAC & SSO',
        },
      },
      {
        id: 'ai-automation',
        icon: 'ai',
        title: 'AI agents',
        image: '/image/showcase/mockup-ai-automation.jpg',
        to: '/serve/ai-automation',
        startups: {
          desc: 'A grounded LLM on the WhatsApp Cloud API, with human handoff.',
          metric: 'Grounded LLM',
        },
        enterprises: {
          desc: 'OCR pipelines and retrieval over your own document set.',
          metric: 'OCR & RAG',
        },
      },
      {
        id: 'web3',
        icon: 'web3',
        title: 'Web3 interfaces',
        image: '/image/showcase/mockup-tablet-cyber.jpg',
        to: '/serve/web3',
        startups: {
          desc: 'Wallet connect, mint state, and explicit paths when a transaction fails.',
          metric: 'Wallet UX',
        },
        enterprises: {
          desc: 'Multisig review UI that shows intent before a signature.',
          metric: 'Intent preview',
        },
      },
    ],
  },
  {
    id: 'commerce-growth',
    number: '02',
    name: 'COMMERCE',
    subtitle: 'Revenue Engines & D2C',
    items: [
      {
        id: 'ecommerce',
        icon: 'ecommerce',
        title: 'E-commerce & D2C',
        image: '/image/showcase/mockup-storefront.jpg',
        to: '/serve/ecommerce',
        startups: {
          desc: 'Headless storefront, persistent cart, and a checkout built for LCP.',
          metric: 'Headless checkout',
        },
        enterprises: {
          desc: 'Inventory webhooks, multi-currency catalog, and edge caching.',
          metric: 'Inventory sync',
        },
      },
      {
        id: 'growth-marketing',
        icon: 'growth',
        title: 'Growth funnels',
        image: '/image/showcase/mockup-campaign.jpg',
        to: '/serve/growth-marketing',
        startups: {
          desc: 'One landing page per offer, with named conversion events.',
          metric: 'Event tracking',
        },
        enterprises: {
          desc: 'Server-side conversion events and CRO tests on the pages that spend.',
          metric: 'Server-side events',
        },
      },
      {
        id: 'real-estate',
        icon: 'realestate',
        title: 'Real estate & hospitality',
        image: '/image/showcase/mockup-interior-luxury.jpg',
        to: '/serve/real-estate',
        startups: {
          desc: 'Listing UX, WhatsApp lead capture, and viewing slots on one page.',
          metric: 'Lead capture',
        },
        enterprises: {
          desc: 'Multi-property catalog with bookings synced to one calendar.',
          metric: 'Booking sync',
        },
      },
    ],
  },
  {
    id: 'cloud-compliance',
    number: '03',
    name: 'OPS & TRUST',
    subtitle: 'High-Trust & Cloud Infra',
    items: [
      {
        id: 'fintech',
        icon: 'fintech',
        title: 'FinTech platforms',
        image: '/image/showcase/mockup-phone-wealth.jpg',
        to: '/serve/fintech',
        startups: {
          desc: 'Client intake, separated roles, and payments through a processor.',
          metric: 'Role separation',
        },
        enterprises: {
          desc: 'Audit logs, advisor vs client RBAC, and processor-backed payments.',
          metric: 'Audit logs',
        },
      },
      {
        id: 'healthcare',
        icon: 'healthcare',
        title: 'Healthcare systems',
        image: '/image/office-space.jpg',
        to: '/serve/healthcare',
        startups: {
          desc: 'Scheduling, patient intake, and reminder flows on one calendar.',
          metric: 'Intake flow',
        },
        enterprises: {
          desc: 'Role-based access for staff and patients, with records split by role.',
          metric: 'Role-based access',
        },
      },
      {
        id: 'cloud-it',
        icon: 'cloud',
        title: 'Cloud & DevOps',
        image: '/image/hero-workspace.jpg',
        to: '/serve/cloud-it',
        startups: {
          desc: 'Linux VPS, Docker, CI/CD, and backups you can actually restore.',
          metric: 'CI/CD',
        },
        enterprises: {
          desc: 'Separated environments, rollback deploys, and uptime alerts.',
          metric: 'Rollback deploys',
        },
      },
    ],
  },
]

// Flattened list for mobile drawer compatibility
export const domainData = domainPillars.flatMap((pillar) => pillar.items)

export const archetypeSpecs = {
  startups: {
    badge: '10–14 DAY FOUNDER SPRINT',
    headline: 'From 0 to Live Product in 14 Days',
    lede: 'Turn your vision into an investor-ready MVP with direct code ownership and zero agency bloat.',
    specs: [
      { icon: '⚡', title: '10–14 Day Sprints', desc: 'Rapid milestone deployment with live private staging' },
      { icon: '🛡️', title: '100% IP Ownership', desc: 'Source code, git repos & credentials 100% yours' },
      { icon: '🚀', title: 'Investor-Ready UI', desc: 'Sub-second speed & demo polish for pitch decks' },
    ],
    statusText: 'Monthly Sprint Slots: Open',
    ctaText: 'Launch Startup Sprint',
    ctaLink: '/contact?type=startup',
  },
  enterprises: {
    badge: '99.99% ENTERPRISE SLA',
    headline: 'Controls that scale with the product',
    lede: 'Environments, access, and deploys written so the next engineer can run them.',
    specs: [
      { icon: '🛡️', title: 'Rollback deploys', desc: 'A previous release stays available if the new one fails' },
      { icon: '🔒', title: 'RBAC', desc: 'Staff, clients, and admins see different surfaces' },
      { icon: '⚡', title: 'Uptime alerts', desc: 'A message when the service is down, not when a chart moves' },
    ],
    statusText: 'Architecture Audit Slots: Open',
    ctaText: 'Request Enterprise Audit',
    ctaLink: '/contact?type=enterprise',
  },
}
