export const caseStudies = [
  {
    slug: 'easy-my-tax',
    title: 'Easy My Tax — High-Security Client Portal & Tax Calculation System',
    shortTitle: 'Easy My Tax',
    tag: 'Finance & CA Practice',
    client: 'CA Pradeep Agarwal',
    organization: 'Easy My Tax',
    industry: 'Chartered Accountancy & FinTech',
    systemType: 'Client Document Vault & Automated Tax Calculation Platform',
    timeline: '3–4 weeks',
    liveUrl: 'https://easymytax.com',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'AES encryption', 'REST APIs'],
    features: [
      'Automated ITR & GST calculation engine',
      'Encrypted client document vault',
      'Filing progress tracking',
      'Role-based access for staff and clients',
    ],
    challenge:
      'Sensitive financial records, ITR filings, and GST audits were being handled through email attachments and spreadsheets—slowing work during filing deadlines and creating avoidable security risk.',
    built:
      'A dedicated portal with automated GST and tax calculations, encrypted document storage, return tracking, and billing workflows.',
    outcome:
      'Automated return calculations and structured file vaults transformed multi-day email chains into same-day review turnarounds for client returns.',
    accent: '#0369a1',
    coverImage: '/image/work/easy-my-tax.svg',
    visual: { type: 'portal', primary: '#0369a1', secondary: '#047857' },
    mockup: {
      url: 'portal.easymytax.com/client-vault',
      kpis: [
        { value: 'Automated', label: 'ITR & GST Calculation Engine', color: '#0369a1' },
        { value: 'Encrypted', label: 'Role-Based Client File Vault', color: '#047857' },
      ],
      footer: 'Filing Progress Pipeline · Ready for Final Review',
    },
    quote: {
      text: 'PixelToCloud engineered our detailed CA servicing website with automated tax calculators, GST compliance modules, and secure client document lockers. Our clients love the clean speed and professionalism of Easy My Tax. Highly recommended!',
      author: 'CA Pradeep Agarwal',
      role: 'Founder, Easy My Tax',
    },
  },
  {
    slug: 'harish-renova',
    title: 'Harish Renova & Revital — Clinical Scheduling & Patient Guidance Platforms',
    shortTitle: 'Harish Renova',
    tag: 'Healthcare & Clinical Services',
    client: 'Dr. Neeraj Kumar Rathee & Dr. Archit Joshi',
    organization: 'Harish Renova Cancer Center & Revital Physiocare Lab',
    industry: 'Healthcare',
    systemType: 'Clinical Scheduling & Patient Guidance Platforms',
    timeline: '2–4 weeks',
    liveUrl: 'https://harishrenovacancer.com',
    techStack: ['React', 'Calendar sync', 'WhatsApp API', 'Cloudflare', 'Responsive CSS'],
    features: [
      'One-tap appointment booking',
      'WhatsApp confirmation dispatch',
      'Emergency contact routing',
      'Patient guidance libraries',
    ],
    challenge:
      'Patients seeking oncology consultations or rehabilitation needed a clear, fast route to an appointment—not hold times and complicated forms.',
    built:
      'Fast, accessible clinical platforms with clear guidance, calendar booking, WhatsApp confirmations, and recovery resources.',
    outcome:
      'Sub-second mobile loading speed ensures patients in urgent need can book a confirmed consultation in under 60 seconds with zero friction.',
    accent: '#047857',
    coverImage: '/image/work/harish-renova.svg',
    visual: { type: 'clinical', primary: '#047857', secondary: '#15803d' },
    mockup: {
      url: 'harishrenovacancer.com/consultation',
      kpis: [
        { value: '1-Tap Slot', label: 'Real-Time Calendar Sync', color: '#047857' },
        { value: 'Instant', label: 'WhatsApp Confirmation Dispatch', color: '#15803d' },
      ],
      footer: 'Emergency Clinical Helpline · 24/7 Available',
    },
    quote: {
      text: 'PixelToCloud built a specialized, highly responsive oncology website for Harish Renova Cancer Center. Patient consultation bookings, emergency contact routing, and medical information are presented seamlessly with sub-second mobile loading speed. Truly exceptional work!',
      author: 'Dr. Neeraj Kumar Rathee',
      role: 'Oncologist, Harish Renova Cancer Center',
    },
  },
  {
    slug: 'saini-handicrafts',
    title: 'Saini Handicrafts — Bespoke Artisanal Boutique & Multi-Currency Store',
    shortTitle: 'Saini Handicrafts',
    tag: 'Artisanal Retail & Commerce',
    client: 'Jyoti Saini (Founder)',
    organization: 'Saini Handicrafts',
    industry: 'Artisanal Retail',
    systemType: 'Bespoke Multi-Currency Storefront',
    timeline: '3–5 weeks',
    liveUrl: 'https://sainihandicrafts.com',
    techStack: ['Custom storefront', 'Multi-currency', 'High-res media', 'Inquiry workflows'],
    features: [
      'Editorial product storytelling',
      'High-resolution zoom inspection',
      'USD · INR · EUR · GBP pricing',
      'Custom commission inquiries',
    ],
    challenge:
      'Luxury handmade goods need their finish, texture, and provenance to come through online. A generic store template could not carry that experience.',
    built:
      'A bespoke storefront combining editorial storytelling, high-resolution zoom, multi-currency conversion, and commission inquiries.',
    outcome:
      'Direct commission workflows and interactive material inspection generated a measurable surge in overseas inquiries and custom orders.',
    accent: '#b45309',
    coverImage: '/image/work/saini-handicrafts.svg',
    visual: { type: 'commerce', primary: '#b45309', secondary: '#0369a1' },
    mockup: {
      url: 'sainihandicrafts.com/bespoke',
      kpis: [
        { value: '360° Zoom', label: 'High-Res Canvas Inspector', color: '#b45309' },
        { value: 'Multi-Currency', label: 'USD · INR · EUR · GBP Localized', color: '#0369a1' },
      ],
      footer: 'Custom Commission Studio & Artisan Sourcing',
    },
    quote: {
      text: 'PixelToCloud created a detailed, high-converting shopping website for Saini Handicrafts. Their creative visual ideas, custom product showcases, and crafting storytelling perfectly captured our artisanal brand. The smooth checkout experience has significantly boosted our sales!',
      author: 'Jyoti Saini',
      role: 'Founder, Saini Handicrafts',
    },
  },
  {
    slug: 'nebula-3d',
    title: 'Nebula3D — Hardware-Accelerated 2D/3D WebGL Configurator',
    shortTitle: 'Nebula3D',
    tag: '2D/3D & Graphics Software',
    client: 'Industrial & Spatial Design Initiative',
    organization: 'PixelToCloud Graphics Lab',
    industry: '3D Spatial Software & WebGL Engineering',
    systemType: 'Interactive Browser 3D CAD & Model Visualizer',
    timeline: '4–8 weeks',
    liveUrl: '/labs',
    techStack: ['Three.js', 'WebGL', 'Custom shaders', 'PBR materials'],
    features: [
      '60 FPS browser rendering',
      'PBR material controls',
      'Orbit, pan, and zoom',
      'Zero-plugin compatibility',
    ],
    challenge:
      'Traditional web-based product configurators and 3D visualizers often struggle with sluggish frame rates, heavy asset download sizes, and clunky mobile touch interaction.',
    built:
      'A WebGL and Three.js engine with 60 FPS rendering, PBR materials, studio lighting, and CAD-like orbit, pan, and zoom—zero plugins required.',
    outcome:
      'Buttery-smooth 60 FPS product visualization across desktop and mobile with zero-plugin browser compatibility.',
    accent: '#4338ca',
    coverImage: '/image/work/nebula-3d.svg',
    visual: { type: 'webgl', primary: '#4338ca', secondary: '#0369a1' },
    mockup: {
      url: 'lab.pixeltocloud.com/nebula3d',
      kpis: [
        { value: '60 FPS', label: 'Hardware-Accelerated WebGL', color: '#4338ca' },
        { value: 'PBR', label: 'Real-Time Material Shaders', color: '#0369a1' },
      ],
      footer: 'Orbit · Pan · Zoom · Wireframe Toggle',
    },
    quote: null,
  },
]

export const trustClients = [
  'Harish Renova Cancer Center',
  'Easy My Tax',
  'Saini Handicrafts',
  'Revital Physiocare Lab',
]

export function getCaseStudy(slug) {
  return caseStudies.find((study) => study.slug === slug)
}
