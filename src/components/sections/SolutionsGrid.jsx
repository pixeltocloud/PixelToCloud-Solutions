import { useState } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../ui/Reveal'
import './SolutionsGrid.css'

const categories = [
  { id: 'all', label: 'All Capabilities', count: 6, icon: '✦' },
  { id: 'web', label: 'Web Platforms & Apps', count: 2, icon: '💻' },
  { id: 'ai', label: 'AI & Automation', count: 2, icon: '🤖' },
  { id: 'cloud', label: 'Cloud & Infrastructure', count: 2, icon: '☁️' },
]

const capabilities = [
  {
    id: 'custom-software',
    category: 'web',
    categoryLabel: 'Web Platforms & Apps',
    accent: '#0284c7',
    title: 'Bespoke Web Apps & Client Portals',
    subtitle: 'Full-Stack SaaS · Custom Dashboards · Stripe Billing',
    description:
      'Tailored operational portals, high-security client dashboards, and billing engines built specifically for your business workflows. Zero template builders, full Git repository handover.',
    techStack: ['React', 'TypeScript', 'Node.js', 'Stripe', 'PostgreSQL'],
    metricBadge: '100% IP Code Handover',
    slaBadge: 'Sub-Second Latency · Zero Seat Tax',
    link: '/services/custom-software',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    id: 'web-platforms',
    category: 'web',
    categoryLabel: 'Web Platforms & Apps',
    accent: '#0ea5e9',
    title: 'High-Converting Websites & E-Commerce',
    subtitle: 'Sub-Second Speed · Core Web Vitals · Headless',
    description:
      'High-converting web platforms and headless digital storefronts engineered with modern React. Zero-bloat code that turns high-intent visitors into paying clients.',
    techStack: ['React 19', 'Vite', 'Tailwind', 'Next-Gen SPA', 'SEO Schema'],
    metricBadge: '< 0.4s Global LCP',
    slaBadge: '95+ PageSpeed · 100% SEO Retention',
    link: '/services/web-development',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    id: 'whatsapp-agents',
    category: 'ai',
    categoryLabel: 'AI & Automation',
    accent: '#8b5cf6',
    title: '24/7 WhatsApp AI Agents & Chatbots',
    subtitle: 'Autonomous Qualification · Real-Time Booking · 24/7',
    description:
      'Intelligent conversational bots deployed directly onto the official WhatsApp Cloud API. Automatically qualifies inbound leads, answers client questions, and syncs appointments.',
    techStack: ['WhatsApp Cloud API', 'ChatGPT / Claude', 'Webhooks', 'CRM Sync'],
    metricBadge: 'Instant < 2s Response',
    slaBadge: '24/7/365 Autonomous Qualification',
    link: '/services/ai-automation',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
  {
    id: 'document-ocr',
    category: 'ai',
    categoryLabel: 'AI & Automation',
    accent: '#a855f7',
    title: 'Intelligent Document OCR & Data Extraction',
    subtitle: 'Invoice OCR · Contract Parsing · Automated DB Sync',
    description:
      'Eliminate manual data entry and human error. Automatically parse incoming vendor invoices, financial receipts, and legal PDFs straight into your database with structured validation.',
    techStack: ['Computer Vision OCR', 'Python', 'LLM Parsing', 'REST Webhooks'],
    metricBadge: '100k+ Documents / Mo',
    slaBadge: '99.2% Accuracy · Zero Human Latency',
    link: '/services/ai-automation',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    id: 'cloud-devops',
    category: 'cloud',
    categoryLabel: 'Cloud & Infrastructure',
    accent: '#10b981',
    title: 'Hardened Cloud VPS, Docker & CI/CD',
    subtitle: 'Private Linux VPS · Containerization · Zero-Downtime',
    description:
      'Graduate from fragile shared hosting to hardened dedicated cloud servers. Dockerized microservices, automated daily backups, and seamless push-to-deploy CI/CD pipelines.',
    techStack: ['Docker', 'Ubuntu Linux', 'Nginx', 'GitHub Actions', 'SSL / DDoS'],
    metricBadge: '99.99% Uptime SLA',
    slaBadge: 'Automated Failover · Encrypted Backups',
    link: '/services/cloud-devops',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    ),
  },
  {
    id: 'growth-funnels',
    category: 'cloud',
    categoryLabel: 'Cloud & Infrastructure',
    accent: '#ea580c',
    title: 'Conversion Rate (CRO) & High-Intent Funnels',
    subtitle: 'Friction Audits · Precision Ad Landing Pages · ROAS Tracking',
    description:
      'Stop wasting traffic on leaky funnels. We conduct deep UX friction audits, build targeted conversion-focused campaign flows, and set up end-to-end attribution tracking.',
    techStack: ['GA4 Telemetry', 'Hotjar Heatmaps', 'Meta CAPI', 'A/B Testing'],
    metricBadge: '+38% Conversion Lift',
    slaBadge: 'Full Event Attribution · Friction-Free Flows',
    link: '/services/growth-funnels',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
]

export default function SolutionsGrid() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredCapabilities =
    activeCategory === 'all'
      ? capabilities
      : capabilities.filter((cap) => cap.category === activeCategory)

  return (
    <section className="section solutions-grid-section" id="solutions" aria-label="Technical Capabilities Matrix">
      <div className="container solutions-wide-container">
        {/* Intro Header */}
        <Reveal className="solutions-intro">
          <span className="solutions-badge">
            <span className="solutions-badge-sparkle">✦</span>
            FULL-STACK ARCHITECTURE &amp; DELIVERABLES
          </span>
          <h2 className="section-title">Engineered Capabilities. Zero Fluff.</h2>
          <p className="section-desc">
            Explore our specialized technical solutions with real architecture stacks, measurable performance SLAs,
            and direct code ownership.
          </p>

          {/* Interactive Category Filter Pills */}
          <div className="solutions-filter-bar" role="tablist" aria-label="Capability categories">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id
              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`solutions-filter-pill ${isActive ? 'is-active' : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  <span className="filter-pill-icon">{cat.icon}</span>
                  <span className="filter-pill-label">{cat.label}</span>
                  <span className="filter-pill-count">{cat.count}</span>
                </button>
              )
            })}
          </div>
        </Reveal>

        {/* 6 Capabilities Matrix Grid */}
        <div className="capabilities-matrix-grid">
          {filteredCapabilities.map((cap) => (
            <div
              key={cap.id}
              className={`capability-card category-${cap.category}`}
              style={{ '--cap-accent': cap.accent }}
            >
              {/* Top Header Row */}
              <div className="cap-card-top">
                <div className="cap-icon-box">{cap.icon}</div>
                <div className="cap-badges-row">
                  <span className="cap-category-pill">{cap.categoryLabel}</span>
                  <span className="cap-metric-pill">{cap.metricBadge}</span>
                </div>
              </div>

              {/* Title & Subtitle */}
              <div className="cap-card-header">
                <h3 className="cap-title">
                  <Link to={cap.link} className="cap-title-link">
                    <span>{cap.title}</span>
                    <span className="cap-arrow-glyph" aria-hidden="true">→</span>
                  </Link>
                </h3>
                <span className="cap-subtitle">{cap.subtitle}</span>
              </div>

              {/* Description */}
              <p className="cap-desc">{cap.description}</p>

              {/* Tech Stack Pills */}
              <div className="cap-tech-row" aria-label="Technology Stack">
                {cap.techStack.map((tech) => (
                  <span key={tech} className="cap-tech-token">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Bottom SLA Bar */}
              <div className="cap-sla-bar">
                <span className="cap-sla-dot" aria-hidden="true" />
                <span className="cap-sla-text">{cap.slaBadge}</span>
                <Link to={cap.link} className="cap-action-link">
                  Specs <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Technical Architecture Ribbon */}
        <div className="capabilities-footer-banner">
          <div className="banner-left-info">
            <span className="banner-pulse-dot" aria-hidden="true" />
            <div className="banner-text-block">
              <h4 className="banner-headline">Need a Custom Technical Architecture?</h4>
              <p className="banner-sub">Direct 1-on-1 sprint review with Pankaj &amp; Rusmeen. No junior account managers.</p>
            </div>
          </div>
          <Link to="/contact" className="banner-action-button">
            <span>Book Technical Architecture Call</span>
            <span className="banner-arrow">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
