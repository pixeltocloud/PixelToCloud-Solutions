import { useState } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../ui/Reveal'
import './SolutionsGrid.css'

const categories = [
  { id: 'all', label: 'All', count: 6 },
  { id: 'web', label: 'Websites & apps', count: 2 },
  { id: 'ai', label: 'Helpers', count: 2 },
  { id: 'cloud', label: 'Hosting & pages', count: 2 },
]

const capabilities = [
  {
    id: 'custom-software',
    category: 'web',
    categoryLabel: 'Websites & apps',
    accent: '#0284c7',
    image: '/image/showcase/mockup-macbook-saas.jpg',
    title: 'Apps and client portals',
    subtitle: 'Logins, dashboards, and bills',
    description: 'Software shaped around the way your team already works. You keep the code.',
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
    categoryLabel: 'Websites & apps',
    accent: '#0ea5e9',
    image: '/image/showcase/mockup-storefront.jpg',
    title: 'Websites and online shops',
    subtitle: 'Clear pages and a simple checkout',
    description: 'A site that opens fast on a phone and makes the next step obvious.',
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
    categoryLabel: 'Helpers',
    accent: '#8b5cf6',
    image: '/image/showcase/mockup-ai-automation.jpg',
    title: 'WhatsApp that replies for you',
    subtitle: 'Answers, bookings, and a person when needed',
    description: 'Common questions get a reply. A person steps in when the helper is unsure.',
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
    categoryLabel: 'Helpers',
    accent: '#a855f7',
    image: '/image/hero-workspace.jpg',
    title: 'Invoices read for you',
    subtitle: 'PDFs turned into details you can check',
    description: 'Bills and forms become fields, instead of another folder nobody opens.',
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
    categoryLabel: 'Hosting & pages',
    accent: '#10b981',
    image: '/image/showcase/mockup-tablet-cyber.jpg',
    title: 'Hosting you can trust',
    subtitle: 'A server, a backup, and safe updates',
    description: 'Move off fragile hosting. Updates can be undone if something looks wrong.',
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
    categoryLabel: 'Hosting & pages',
    accent: '#ea580c',
    image: '/image/showcase/mockup-campaign.jpg',
    title: 'Pages for your ads',
    subtitle: 'One offer, one short form',
    description: 'The page says the same thing as the ad, and you can see which one brought the call.',
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
            Start here
          </span>
          <h2 className="section-title">Pick the job. We’ll show you the page.</h2>
          <p className="section-desc">
            Six things we build often. Open a card to see what’s included.
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
              <Link to={cap.link} className="cap-media" tabIndex={-1} aria-hidden="true">
                <img src={cap.image} alt="" width="800" height="500" loading="lazy" decoding="async" />
              </Link>

              <div className="cap-copy">
                <span className="cap-category-pill">{cap.categoryLabel}</span>
                <h3 className="cap-title">
                  <Link to={cap.link} className="cap-title-link">
                    <span>{cap.title}</span>
                    <span className="cap-arrow-glyph" aria-hidden="true">→</span>
                  </Link>
                </h3>
                <p className="cap-desc">{cap.description}</p>
                <Link to={cap.link} className="cap-action-link">
                  See what’s included <span>→</span>
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
              <h4 className="banner-headline">Not sure which one fits?</h4>
              <p className="banner-sub">Talk with Pankaj and Rusmeen. You speak with the people who build it.</p>
            </div>
          </div>
          <Link to="/contact" className="banner-action-button">
            <span>Book a short call</span>
            <span className="banner-arrow">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
