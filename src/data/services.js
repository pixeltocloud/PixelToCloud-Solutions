export const services = [
  {
    slug: 'ui-ux-design',
    id: 'ui-ux-design',
    title: 'Web Design (UI/UX)',
    shortDescription: 'Intuitive UI/UX for seamless user experience and high conversion.',
    positioning: 'User-centered design that turns visitors into high-intent inquiries.',
    category: 'Design & Build',
    pillar: 'BUILD',
    accent: '#0284c7',
    icon: 'layout',
    heroHeadline: 'High-Impact UI/UX Design & Conversion-Focused Interfaces',
    heroSub:
      'We craft bespoke Figma design systems, responsive web prototypes, and user experiences engineered for clarity, speed, and business conversion.',
    deliverables: [
      'Interactive Figma design systems & UI component kits',
      'Mobile-first responsive layouts & journey wireframes',
      'High-fidelity clickable prototypes for user testing',
      'Design tokens & developer handover documentation',
      'Usability audits and conversion friction reduction',
    ],
    stack: ['Figma', 'Design Tokens', 'Tailwind', 'CSS Grid', 'Motion UI'],
    outcomes: [
      'Visitors understand your value proposition in under 3 seconds',
      'Reduced user drop-off across sign-up and inquiry funnels',
      'Design system ready for direct engineering implementation',
    ],
    process: [
      { step: '01', title: 'User Research & Wireframing', days: 'Days 1–3', desc: 'Define audience needs, competitor gaps, and conversion goals.' },
      { step: '02', title: 'Visual Direction & UI Kit', days: 'Days 4–7', desc: 'Craft typography, color systems, and modern component kits in Figma.' },
      { step: '03', title: 'Interactive Prototyping', days: 'Days 8–11', desc: 'Build clickable flows and test with real stakeholders.' },
      { step: '04', title: 'Developer Specs & Handover', days: 'Days 12–14', desc: 'Production-ready asset exports, tokens, and engineering handover.' },
    ],
    faqs: [
      { q: 'Do you design in Figma?', a: 'Yes, 100% of our design work is done in organized Figma files with components, autolayout, and design tokens that you fully own.' },
      { q: 'Can you also build the site after designing?', a: 'Absolutely. PixelToCloud is a full-cycle design and engineering agency—the team designing your interface is the team building your code.' },
    ],
  },
  {
    slug: 'web-development',
    id: 'business-websites',
    title: 'Custom React & Web Platforms',
    shortDescription: 'Modern, scalable web applications with clean React code and sub-second speed.',
    positioning: 'Custom React & web platforms built for speed, SEO, and zero technical debt.',
    category: 'Design & Build',
    pillar: 'BUILD',
    accent: '#0284c7',
    icon: 'code',
    heroHeadline: 'Bespoke React Web Platforms Engineered for Maximum Performance',
    heroSub:
      'Zero-bloat architecture, 95+ Core Web Vitals, and 100% source code ownership. We build web platforms that scale effortlessly without vendor lock-in.',
    deliverables: [
      'Custom React / Vite / Next-gen frontend architecture',
      'Sub-second first contentful paint (Core Web Vitals 95+)',
      'Clean SEO-optimized semantic HTML & meta schema',
      'Fluid animations and responsive mobile adaptation',
      'Full Git repository handover and deployment setup',
    ],
    stack: ['React', 'TypeScript', 'Vite', 'Modern CSS', 'Cloudflare Edge'],
    outcomes: [
      'Top-tier Google ranking signals with instant page load speeds',
      'Zero monthly builder subscription fees or template lock-in',
      'You own 100% of the intellectual property and code',
    ],
    process: [
      { step: '01', title: 'Architecture Blueprint', days: 'Days 1–2', desc: 'Define component architecture, state management, and performance budgets.' },
      { step: '02', title: 'Component Engineering', days: 'Days 3–6', desc: 'Build modular, accessible UI components from verified Figma mockups.' },
      { step: '03', title: 'Integration & Staging', days: 'Days 7–10', desc: 'Wire analytics, contact forms, and review working build on private staging.' },
      { step: '04', title: 'Edge Deploy & Handover', days: 'Days 11–14', desc: 'Cloudflare edge caching, SSL, DNS setup, and Git repository transfer.' },
    ],
    faqs: [
      { q: 'Do you use WordPress or generic builders?', a: 'No. We engineer clean custom React and modern web platforms. This eliminates the vulnerability, speed lag, and plugin bloat of WordPress.' },
      { q: 'Will I be able to update content easily?', a: 'Yes. We structure code with clean configuration files or headless CMS integrations so updating team members, services, and copy takes seconds.' },
    ],
  },
  {
    slug: 'web-migration',
    id: 'web-migration',
    title: 'Web Migration & Modernization',
    shortDescription: 'Smooth migration to modern React from WordPress, Wix, or legacy platforms.',
    positioning: 'Upgrade legacy sites to high-speed modern tech without losing SEO or rankings.',
    category: 'Design & Build',
    pillar: 'BUILD',
    accent: '#06b6d4',
    icon: 'arrow-right-left',
    heroHeadline: 'Zero-Downtime Migration from WordPress to Modern React',
    heroSub:
      'Preserve your hard-earned SEO rankings while cutting load times in half. We seamlessly migrate legacy websites to fast, secure, modern web architectures.',
    deliverables: [
      'Comprehensive 301 URL redirect map & SEO preservation',
      'Database and asset extraction from old CMS',
      'Clean rebuild with modern React and performance benchmarks',
      'Google Search Console re-indexing and schema verification',
      'Security hardening and removal of vulnerable legacy plugins',
    ],
    stack: ['React', 'Node.js', 'Headless CMS', 'Redirect Engines', 'SEO Auditing'],
    outcomes: [
      'Load time drops from 4-8s down to under 600ms',
      'Zero drop in organic search traffic during transition',
      'Elimination of recurring plugin subscription costs',
    ],
    process: [
      { step: '01', title: 'Audit & URL Mapping', days: 'Days 1–3', desc: 'Crawl all existing URLs, backlinks, meta descriptions, and ranking keywords.' },
      { step: '02', title: 'Modern Stack Rebuild', days: 'Days 4–9', desc: 'Recreate layouts and content cleanly on high-performance React.' },
      { step: '03', title: 'Redirect & Staging QA', days: 'Days 10–12', desc: 'Verify every link, form, and mobile page on a private staging link.' },
      { step: '04', title: 'Zero-Downtime Cutover', days: 'Days 13–14', desc: 'Seamless DNS switchover with 24/7 post-launch monitoring.' },
    ],
    faqs: [
      { q: 'Will we lose our Google rankings?', a: 'No. We map exact 1-to-1 301 redirects, preserve canonical tags, and retain your existing URL structure so your rankings stay protected.' },
      { q: 'Can we keep our blog posts?', a: 'Yes. We can export and migrate all legacy blog articles and images into a structured markdown or headless CMS setup.' },
    ],
  },
  {
    slug: 'cloud-devops',
    id: 'cloud-devops',
    title: 'Cloud Infrastructure & DevOps',
    shortDescription: 'Hardened Linux VPS, Docker containers, zero-downtime CI/CD and 99.9% uptime.',
    positioning: 'Rock-solid hosting infrastructure that stays fast when traffic surges.',
    category: 'Cloud & Systems',
    pillar: 'GROW',
    accent: '#0284c7',
    icon: 'server',
    heroHeadline: 'Hardened Cloud Infrastructure, Docker & Automated CI/CD',
    heroSub:
      'We configure, harden, and monitor Linux servers, Dockerized containers, and automated delivery pipelines so your web apps stay online 24/7/365.',
    deliverables: [
      'Hardened Linux VPS setup (Ubuntu / Debian / AlmaLinux)',
      'Docker containerization & reverse proxy with Nginx / Caddy',
      'Automated SSL certificates & Cloudflare DDoS mitigation',
      'GitHub Actions CI/CD for push-to-deploy automation',
      'Automated off-site encrypted database backups',
    ],
    stack: ['Docker', 'Linux VPS', 'Nginx', 'GitHub Actions', 'Cloudflare'],
    outcomes: [
      'High-traffic resilience with zero unexpected downtime',
      'Automated deployment pipelines—no manual FTP uploads',
      'Hardened SSH keys, firewall rules, and intrusion defense',
    ],
    process: [
      { step: '01', title: 'Infrastructure Audit', days: 'Days 1–2', desc: 'Assess resource needs, database concurrency, and security requirements.' },
      { step: '02', title: 'Containerization & VPS Config', days: 'Days 3–6', desc: 'Setup isolated Docker services, reverse proxy, and SSL certificates.' },
      { step: '03', title: 'CI/CD Pipeline Wireup', days: 'Days 7–9', desc: 'Automate build, test, and zero-downtime deployment on git push.' },
      { step: '04', title: 'Backups & Health Alerts', days: 'Days 10–12', desc: 'Configure automated daily S3 backups and uptime alerts.' },
    ],
    faqs: [
      { q: 'Who owns the cloud accounts?', a: 'You do. We configure everything directly in your AWS, DigitalOcean, Hetzner, or VPS account so you maintain 100% control.' },
      { q: 'Do you provide ongoing server monitoring?', a: 'Yes, our maintenance plans include automated uptime monitoring, security patching, and emergency response.' },
    ],
  },
  {
    slug: 'maintenance-support',
    id: 'maintenance-support',
    title: 'Maintenance & Support',
    shortDescription: '24×7 reliable support, proactive security updates, and performance tuning.',
    positioning: 'Keep your web platform secure, updated, and lightning-fast year-round.',
    category: 'Cloud & Systems',
    pillar: 'GROW',
    accent: '#10b981',
    icon: 'shield-check',
    heroHeadline: '24/7 Proactive Web Platform Maintenance & Engineer Support',
    heroSub:
      'Direct access to senior engineers for updates, security hardening, bug fixes, and continuous performance monitoring with zero bureaucracy.',
    deliverables: [
      '24/7 automated uptime and latency monitoring',
      'Weekly security patching & dependency upgrades',
      'Automated off-site database backups with tested restore plans',
      'Dedicated engineering hours for content updates and tweaks',
      'Direct WhatsApp and Slack emergency support channel',
    ],
    stack: ['Uptime Kuma', 'S3 Backups', 'Security Scanners', 'Git CI/CD'],
    outcomes: [
      'Zero downtime surprises or unnoticed website outages',
      'Fast turnaround on routine feature requests and updates',
      'Peace of mind knowing dedicated engineers maintain your stack',
    ],
    process: [
      { step: '01', title: 'Onboarding & Stack Audit', days: 'Day 1', desc: 'Audit codebase, repository access, and server credentials.' },
      { step: '02', title: 'Automated Monitors', days: 'Day 2', desc: 'Install 60-second health checks, SSL expiration alerts, and error tracking.' },
      { step: '03', title: 'Backup Schedules', days: 'Day 3', desc: 'Establish daily encrypted snapshots and automated redundancy.' },
      { step: '04', title: 'Continuous Support', days: 'Ongoing', desc: 'Regular updates, priority hotfixes, and direct founder communication.' },
    ],
    faqs: [
      { q: 'How fast do you respond to urgent issues?', a: 'For critical outages, our response time is under 30 minutes with instant WhatsApp founder access.' },
      { q: 'Can we roll over unused hours?', a: 'Yes, monthly maintenance hours can be used for new feature development, landing pages, or copy tweaks.' },
    ],
  },
  {
    slug: 'api-integrations',
    id: 'api-integrations',
    title: 'API & Systems Integration',
    shortDescription: 'Connect your web platforms with payment gateways, CRMs, and marketing tools.',
    positioning: 'Unify your business tools so data flows automatically without manual copy-paste.',
    category: 'Cloud & Systems',
    pillar: 'GROW',
    accent: '#8b5cf6',
    icon: 'puzzle',
    heroHeadline: 'Seamless API Integrations, Payment Gateways & CRM Pipelines',
    heroSub:
      'Eliminate manual data entry by connecting your website directly to Stripe, Razorpay, Zoho, HubSpot, ERPs, and custom webhook workflows.',
    deliverables: [
      'Payment gateway integration (Stripe, Razorpay, PayPal, UPI)',
      'CRM synchronization (HubSpot, Zoho, Salesforce, Notion)',
      'Automated email notifications via Resend, SendGrid, or Postmark',
      'Custom webhook listeners and secure data transformers',
      'Error retry logic and transaction audit logs',
    ],
    stack: ['REST APIs', 'Webhooks', 'Node.js', 'Stripe', 'PostgreSQL'],
    outcomes: [
      'Payments deposit instantly with automated invoice generation',
      'Leads flow directly into your CRM with zero manual handling',
      'Reduced administrative overhead and eliminated bookkeeping errors',
    ],
    process: [
      { step: '01', title: 'Integration Mapping', days: 'Days 1–2', desc: 'Document endpoints, required payloads, and authorization keys.' },
      { step: '02', title: 'Sandbox Development', days: 'Days 3–6', desc: 'Implement webhooks, handle error edge cases, and run test transactions.' },
      { step: '03', title: 'End-to-End Testing', days: 'Days 7–9', desc: 'Verify live webhook events, receipt deliveries, and database updates.' },
      { step: '04', title: 'Production Rollout', days: 'Days 10–12', desc: 'Live deployment with automated failure alerts and audit logging.' },
    ],
    faqs: [
      { q: 'Can you integrate custom ERP systems?', a: 'Yes. We have built integrations with proprietary database systems, legacy SOAP/REST endpoints, and modern cloud CRMs.' },
      { q: 'What happens if a third-party API goes down?', a: 'We build resilient queues with exponential backoff retries so transactions are never lost even during external downtime.' },
    ],
  },
  {
    slug: 'growth-funnels',
    id: 'lead-growth',
    title: 'Growth Marketing & Funnels',
    shortDescription: 'Skyrocket website performance, conversions, and ROI with targeted funnels.',
    positioning: 'Landing pages and ad campaigns engineered to turn ad spend into paying clients.',
    category: 'Growth & Marketing',
    pillar: 'GROW',
    accent: '#ff5722',
    icon: 'trending-up',
    heroHeadline: 'High-Intent Search Funnels, Landing Pages & Ad Optimization',
    heroSub:
      'Stop burning money on ad clicks that bounce. We design and build ultra-fast landing pages paired with Google Ads architectures that maximize conversion rates.',
    deliverables: [
      'Laser-targeted landing pages with under 1s load times',
      'Google Ads campaign structure & high-intent keyword strategy',
      'Full GA4, Google Tag Manager & conversion attribution setup',
      'Direct WhatsApp & form capture conversion funnels',
      'A/B testing of headlines, CTAs, and offer positioning',
    ],
    stack: ['Landing UX', 'Google Ads', 'GA4', 'GTM', 'Copywriting'],
    outcomes: [
      'Higher Quality Score in Google Ads leading to cheaper CPCs',
      'Measurable increase in qualified inbound inquiries',
      'Clear visibility into exactly which keywords produce customers',
    ],
    process: [
      { step: '01', title: 'Offer & Keyword Blueprint', days: 'Days 1–3', desc: 'Audit buyer search intent, competitor ads, and high-margin offers.' },
      { step: '02', title: 'Frictionless Funnel Build', days: 'Days 4–8', desc: 'Design and code ultra-fast landing pages with sticky mobile CTAs.' },
      { step: '03', title: 'Attribution Tracking', days: 'Days 9–11', desc: 'Install server-side tracking, GTM triggers, and conversion goals.' },
      { step: '04', title: 'Launch & CRO Iteration', days: 'Days 12–14+', desc: 'Monitor live ad traffic, review click heatmaps, and optimize CVR.' },
    ],
    faqs: [
      { q: 'Do you write the marketing copy?', a: 'Yes. We craft value-driven, concise conversion copy tailored specifically to your target customers pain points.' },
      { q: 'Can we track WhatsApp clicks as conversions?', a: 'Yes, we track WhatsApp click-throughs, form submissions, and phone clicks with precise attribution in Google Ads and GA4.' },
    ],
  },
  {
    slug: 'conversion-rate-optimization',
    id: 'conversion-rate-optimization',
    title: 'Conversion Rate Optimization (CRO)',
    shortDescription: 'Drastic CVR increase with conversion-focused landing page engineering.',
    positioning: 'Systematic audits and optimizations to convert more existing visitors into leads.',
    category: 'Growth & Marketing',
    pillar: 'GROW',
    accent: '#ff5722',
    icon: 'filter',
    heroHeadline: 'Scientific Conversion Rate Optimization & Funnel Tuning',
    heroSub:
      'Turn existing traffic into higher revenue. We analyze user friction points, overhaul landing page copy, streamline checkout forms, and test improvements with data.',
    deliverables: [
      'Comprehensive UX audit of user drop-offs and friction points',
      'Mobile checkout & inquiry form simplification',
      'Speed optimization to eliminate bounce rates under 1 second',
      'Compelling social proof and trust signal placement',
      'Hypothesis-driven A/B testing and performance tracking',
    ],
    stack: ['Analytics', 'Heatmaps', 'Speed Audits', 'A/B Testing', 'Copywriting'],
    outcomes: [
      'Higher conversion percentage without spending more on ad traffic',
      'Lower cost per lead across all inbound marketing channels',
      'Streamlined user journey with zero checkout confusion',
    ],
    process: [
      { step: '01', title: 'Friction Audit', days: 'Days 1–3', desc: 'Review session recordings, drop-off analytics, and mobile UX bottlenecks.' },
      { step: '02', title: 'CRO Redesign', days: 'Days 4–7', desc: 'Redesign forms, above-the-fold value hooks, and trust badges.' },
      { step: '03', title: 'Speed & Code Tune', days: 'Days 8–10', desc: 'Strip out render-blocking scripts and optimize critical asset delivery.' },
      { step: '04', title: 'Measurement & Results', days: 'Days 11–14', desc: 'Compare pre/post conversion data and lock in proven gains.' },
    ],
    faqs: [
      { q: 'How much can CRO improve our conversions?', a: 'Typical clients see a 20% to 50% increase in lead inquiries simply by removing form friction and clarifying offer headlines.' },
      { q: 'Does speed really impact conversion?', a: 'Every 1-second delay in page load time reduces conversions by up to 20%. Speed is the most powerful CRO lever.' },
    ],
  },
  {
    slug: 'brand-identity',
    id: 'brand-identity',
    title: 'Branding & Design Systems',
    shortDescription: 'Memorable branding which includes logo, typography, color and assets.',
    positioning: 'Premium brand identity that makes your business look established from day one.',
    category: 'Growth & Marketing',
    pillar: 'BUILD',
    accent: '#0284c7',
    icon: 'sparkles',
    heroHeadline: 'Modern Digital Brand Identity & Design Guidelines',
    heroSub:
      'Stand out in crowded markets with clean typography, cohesive color palettes, responsive logo marks, and comprehensive design tokens for digital products.',
    deliverables: [
      'Primary, secondary, and responsive favicon logo marks',
      'Digital-first color system with verified contrast ratios',
      'Curated typography hierarchy for web and mobile interfaces',
      'Brand guideline handbook for consistent internal usage',
      'High-resolution vector SVG, PNG, and WebP asset package',
    ],
    stack: ['Vector Design', 'Typography', 'Figma', 'SVG Optimization'],
    outcomes: [
      'Professional visual presence that commands higher pricing authority',
      'Unified brand consistency across website, social, and client decks',
      'Ready-to-use vector assets for developers and designers',
    ],
    process: [
      { step: '01', title: 'Brand Discovery', days: 'Days 1–2', desc: 'Explore brand personality, market positioning, and aesthetic references.' },
      { step: '02', title: 'Concept Directions', days: 'Days 3–6', desc: 'Present 3 distinct visual directions with logo marks and typography.' },
      { step: '03', title: 'Refinement & Systems', days: 'Days 7–10', desc: 'Lock in chosen concept, build color palettes, and test contrast standards.' },
      { step: '04', title: 'Asset Delivery', days: 'Days 11–12', desc: 'Package vector files, icon sets, and comprehensive brand guide PDF.' },
    ],
    faqs: [
      { q: 'Do we get full copyright to the logo and brand?', a: 'Yes. You receive 100% full commercial ownership and raw vector source files with zero restrictions.' },
      { q: 'Can you update our existing logo without starting over?', a: 'Yes, we frequently modernize existing logos to look crisp, modern, and ready for digital screens.' },
    ],
  },
  {
    slug: 'ai-automation',
    id: 'whatsapp-ai',
    title: 'AEO / AIO / WhatsApp AI Agents',
    shortDescription: 'Dominate AI Search (ChatGPT, Gemini, Perplexity) & deploy 24/7 WhatsApp AI agents.',
    positioning: 'Autonomous AI pipelines that qualify leads and optimize visibility in AI search.',
    category: 'Featured Solutions',
    pillar: 'AUTOMATE',
    accent: '#10b981',
    icon: 'bot',
    isFeatured: true,
    heroHeadline: '24/7 WhatsApp AI Agents & Answer Engine Optimization (AEO)',
    heroSub:
      'Be cited on ChatGPT, Perplexity, Gemini, and Google AI Overview while deploying intelligent WhatsApp AI agents that book appointments and qualify leads around the clock.',
    deliverables: [
      '24/7 WhatsApp Cloud API conversational agent',
      'Instant lead qualification and calendar meeting booking',
      'Answer Engine Optimization (AEO / LLM SEO) for AI citations',
      'Structured entity markup (JSON-LD) for Perplexity and Gemini',
      'CRM integration with instant alert triggers for hot leads',
    ],
    stack: ['WhatsApp Cloud API', 'LLM RAG', 'JSON-LD', 'Node.js', 'Vector DB'],
    outcomes: [
      'Zero missed leads when inquiries arrive after business hours',
      'Immediate sub-2s responses while prospective clients are hot',
      'Featured citation placement when users search AI assistants for recommendations',
    ],
    process: [
      { step: '01', title: 'Knowledge Base & Prompts', days: 'Days 1–3', desc: 'Index your services, pricing guidelines, and FAQ responses into vector memory.' },
      { step: '02', title: 'WhatsApp Flow Configuration', days: 'Days 4–7', desc: 'Build conversational pathways, qualification logic, and human handoff rules.' },
      { step: '03', title: 'AEO Entity Architecture', days: 'Days 8–10', desc: 'Implement structured schema and entity citations across the site.' },
      { step: '04', title: 'Live Testing & Monitoring', days: 'Days 11–14', desc: 'Simulate edge conversations, verify CRM syncing, and launch production bot.' },
    ],
    faqs: [
      { q: 'Can the WhatsApp bot hand off to a human?', a: 'Yes. If a user asks for a human or asks an unusual question, the bot immediately pings your phone and hands over the chat.' },
      { q: 'What is AEO / AI SEO?', a: 'Answer Engine Optimization formats your content and schema so large language models (ChatGPT, Gemini, Claude, Perplexity) cite your company as the top recommendation.' },
    ],
  },
  {
    slug: 'custom-software',
    id: 'custom-software',
    title: 'Custom Web Apps & Internal CRMs',
    shortDescription: 'Full-stack software, client portals, and billing engines with 100% IP ownership.',
    positioning: 'Tailor-made software shaped around how your business actually operates.',
    category: 'Featured Solutions',
    pillar: 'BUILD',
    accent: '#0284c7',
    icon: 'terminal',
    isFeatured: true,
    heroHeadline: 'Tailor-Made Full-Stack Web Applications & Client Portals',
    heroSub:
      'Escape recurring SaaS seat subscriptions and messy spreadsheets. We build secure client document vaults, internal billing engines, and role-based operational dashboards.',
    deliverables: [
      'Secure client portals with encrypted file storage',
      'Role-based authentication (Admin, Staff, Client, Auditor)',
      'Automated billing, invoice generation & payment tracking',
      'Relational PostgreSQL database architecture with daily backups',
      '100% full source code ownership with zero monthly seat fees',
    ],
    stack: ['React', 'Node.js', 'PostgreSQL', 'AES Encryption', 'REST APIs'],
    outcomes: [
      'Eliminate thousands of dollars in monthly SaaS user licensing costs',
      'Save 15+ hours weekly by replacing manual email and spreadsheet workflows',
      'Full data sovereignty with systems you own and control completely',
    ],
    process: [
      { step: '01', title: 'Data Modeling & Workflow Map', days: 'Days 1–3', desc: 'Map roles, database tables, and exact user permission matrices.' },
      { step: '02', title: 'Database & API Engine', days: 'Days 4–8', desc: 'Build secure REST endpoints, PostgreSQL schemas, and encrypted vaults.' },
      { step: '03', title: 'Interface & Dashboard Build', days: 'Days 9–12', desc: 'Ship intuitive responsive dashboards and test with sample data.' },
      { step: '04', title: 'Security Audit & Deploy', days: 'Days 13–14', desc: 'Run vulnerability scans, configure automated backups, and hand over source code.' },
    ],
    faqs: [
      { q: 'Who owns the software and source code?', a: 'You own 100% of the intellectual property, database, and source code upon final milestone completion.' },
      { q: 'Can we add new features later?', a: 'Yes. Because the code is clean, modular, and well-documented, any qualified developer or our team can extend it easily.' },
    ],
  },
]

export const homepageServices = services.slice(0, 6)

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
      'You work with Pankaj and Rusmeen—the engineers shipping the product—not a sales layer.',
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

