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
        title: 'B2B SaaS & Web Platforms',
        to: '/services/custom-software',
        startups: {
          desc: 'Sub-second demo, multi-tenant billing & self-serve user onboarding.',
          metric: '10–14d MVP',
        },
        enterprises: {
          desc: 'SOC2 / SAML SSO, RBAC permissions & high-throughput API gateways.',
          metric: '99.99% SLA',
        },
      },
      {
        id: 'ai-automation',
        icon: 'ai',
        title: 'Artificial Intelligence',
        to: '/services/ai-automation',
        startups: {
          desc: 'Custom LLM agents, ChatGPT & Claude autonomous customer workflows.',
          metric: 'Instant AI Flow',
        },
        enterprises: {
          desc: 'Private fine-tuned models, automated document extraction & OCR pipelines.',
          metric: '100k+ Docs/Hr',
        },
      },
      {
        id: 'web3',
        icon: 'web3',
        title: 'Web3 & Next-Gen Tech',
        to: '/services/web-development',
        startups: {
          desc: 'Interactive 3D WebGL interfaces, wallet connect & mint portals.',
          metric: 'Sub-Sec RPC',
        },
        enterprises: {
          desc: 'Audited institutional smart contract frontends & multisig UI.',
          metric: 'Security Audited',
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
        title: 'E-Commerce & D2C Stores',
        to: '/services/web-development',
        startups: {
          desc: 'High-speed headless storefront, friction-free checkout funnels.',
          metric: '+38% Checkout',
        },
        enterprises: {
          desc: 'Multi-currency global scale, ERP inventory sync & edge CDN caching.',
          metric: '< 0.3s LCP',
        },
      },
      {
        id: 'growth-marketing',
        icon: 'growth',
        title: 'Growth & High-Intent Funnels',
        to: '/services/growth-funnels',
        startups: {
          desc: 'Viral referral funnels, high-converting paid ad landing pages.',
          metric: '+45% ROAS',
        },
        enterprises: {
          desc: 'Omnichannel attribution, multivariate A/B testing & CRO audits.',
          metric: 'Data-Driven CRO',
        },
      },
      {
        id: 'real-estate',
        icon: 'realestate',
        title: 'Real Estate & Hospitality',
        to: '/services/web-development',
        startups: {
          desc: 'Virtual property showcase, instant WhatsApp lead capture engine.',
          metric: '3x Lead Speed',
        },
        enterprises: {
          desc: 'Multi-property MLS/IDX integration & automated booking systems.',
          metric: 'Live MLS Sync',
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
        title: 'Financial Services & FinTech',
        to: '/services/custom-software',
        startups: {
          desc: 'High-trust investor demos, Stripe Connect & secure user intake.',
          metric: 'Bank-Grade Crypto',
        },
        enterprises: {
          desc: 'Audit-ready compliance, wealth management & M&A client vaults.',
          metric: 'SOC2 Type II',
        },
      },
      {
        id: 'healthcare',
        icon: 'healthcare',
        title: 'Healthcare & MedTech',
        to: '/services/custom-software',
        startups: {
          desc: 'Telehealth scheduling, patient intake & interactive diagnostics.',
          metric: 'HIPAA Ready',
        },
        enterprises: {
          desc: 'EMR/EHR data bridges, encrypted patient records & 24/7 SLA.',
          metric: '100% Compliant',
        },
      },
      {
        id: 'cloud-it',
        icon: 'cloud',
        title: 'IT & Cloud Infrastructure',
        to: '/services/cloud-devops',
        startups: {
          desc: 'Hardened Linux VPS, Docker setup & CI/CD deployment pipelines.',
          metric: 'Zero DevOps Debt',
        },
        enterprises: {
          desc: 'Multi-cloud architecture, autoscaling clusters & DDoS protection.',
          metric: 'Zero Downtime',
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
    headline: 'Zero-Downtime Infrastructure & Refactor',
    lede: 'Eliminate technical debt, harden multi-cloud architecture, and scale to millions of users.',
    specs: [
      { icon: '🛡️', title: '99.99% Uptime SLA', desc: 'High availability clustering & automated failover' },
      { icon: '🔒', title: 'SOC2 & HIPAA Ready', desc: 'Hardened security audit & role-based controls' },
      { icon: '⚡', title: 'Zero Downtime Refactor', desc: 'Seamless database & platform stack upgrades' },
    ],
    statusText: 'Architecture Audit Slots: Open',
    ctaText: 'Request Enterprise Audit',
    ctaLink: '/contact?type=enterprise',
  },
}
