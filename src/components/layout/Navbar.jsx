import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Button from '../ui/Button'
import { contact } from '../../data/founders'
import { useTheme } from '../../context/useTheme'
import BuiltForMegaMenu from './BuiltForMegaMenu'
import { domainData } from '../../data/domains'
import './Navbar.css'

const otherLinks = [
  { to: '/work', label: 'Work', matchPrefix: true },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

function BrandMark() {
  return (
    <>
      <img src="/pixeltocloud-logo.svg" alt="PixelToCloud" width="52" height="52" decoding="async" className="nav-mark" />
      <span className="nav-wordmark">PixelToCloud</span>
    </>
  )
}

function ThemeIcon({ dark }) {
  return dark ? (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M12 2v2.2M12 19.8V22M4.2 12H2M22 12h-2.2M5.6 5.6l1.6 1.6M16.8 16.8l1.6 1.6M5.6 18.4l1.6-1.6M16.8 7.2l1.6-1.6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  ) : (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M20.5 13.4A7.8 7.8 0 0 1 10.6 3.5 8.2 8.2 0 1 0 20.5 13.4Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ServiceIcon({ type }) {
  switch (type) {
    case 'layout':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="9" y1="9" x2="9" y2="21" />
        </svg>
      )
    case 'code':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      )
    case 'arrow-right-left':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="4" y1="7" x2="16" y2="7" />
          <polyline points="12 3 16 7 12 11" />
          <line x1="20" y1="17" x2="8" y2="17" />
          <polyline points="12 21 8 17 12 13" />
        </svg>
      )
    case 'server':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
          <line x1="6" y1="6" x2="6.01" y2="6" />
          <line x1="6" y1="18" x2="6.01" y2="18" />
        </svg>
      )
    case 'shield-check':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 12 11 14 15 10" />
        </svg>
      )
    case 'puzzle':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 11h-4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1zM9 11H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1zM19 21h-4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1zM9 21H5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1z" />
        </svg>
      )
    case 'trending-up':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
          <polyline points="17 6 23 6 23 12" />
        </svg>
      )
    case 'filter':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
        </svg>
      )
    case 'sparkles':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      )
    case 'bot':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="10" rx="2" />
          <circle cx="12" cy="5" r="2" />
          <path d="M12 7v4" />
          <line x1="8" y1="16" x2="8.01" y2="16" />
          <line x1="16" y1="16" x2="16.01" y2="16" />
        </svg>
      )
    case 'terminal':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="4 17 10 11 4 5" />
          <line x1="12" y1="19" x2="20" y2="19" />
        </svg>
      )
    default:
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
        </svg>
      )
  }
}

const servicePillars = [
  {
    id: 'build',
    number: '01',
    name: 'BUILD',
    subtitle: 'Engineering & Platforms',
    accent: '#0284c7',
    items: [
      {
        slug: 'ui-ux-design',
        title: 'Web Design (UI/UX)',
        tag: 'Figma System',
        desc: 'Interactive Figma design systems & wireframes.',
        icon: 'layout',
      },
      {
        slug: 'web-development',
        title: 'React & Web Platforms',
        tag: 'Sub-Second Speed',
        desc: 'Zero-bloat React code & 95+ Core Web Vitals.',
        icon: 'code',
      },
      {
        slug: 'custom-software',
        title: 'Custom Web Apps & CRMs',
        tag: 'Full-Stack SaaS',
        desc: 'Bespoke client portals & operational dashboards.',
        icon: 'terminal',
      },
      {
        slug: 'web-migration',
        title: 'Web Platform Migration',
        tag: 'Zero Downtime',
        desc: 'Upgrade from legacy stacks with 100% SEO preserved.',
        icon: 'arrow-right-left',
      },
    ],
  },
  {
    id: 'grow',
    number: '02',
    name: 'GROW',
    subtitle: 'Traffic & Infrastructure',
    accent: '#f97316',
    items: [
      {
        slug: 'growth-funnels',
        title: 'Growth Marketing & Funnels',
        tag: 'High-Intent Leads',
        desc: 'High-converting ad flows & targeted landing pages.',
        icon: 'trending-up',
      },
      {
        slug: 'conversion-rate-optimization',
        title: 'Conversion Rate (CRO)',
        tag: 'Friction Audits',
        desc: 'Frictionless checkouts & data-driven UX testing.',
        icon: 'filter',
      },
      {
        slug: 'cloud-devops',
        title: 'Cloud Infrastructure & DevOps',
        tag: 'Docker & VPS',
        desc: 'Hardened Linux VPS, Docker & automated CI/CD.',
        icon: 'server',
      },
      {
        slug: 'maintenance-support',
        title: 'Maintenance & Support',
        tag: '24/7 SLA',
        desc: 'Continuous uptime monitoring & proactive security.',
        icon: 'shield-check',
      },
    ],
  },
  {
    id: 'automate',
    number: '03',
    name: 'AUTOMATE',
    subtitle: 'AI & System Intelligence',
    accent: '#10b981',
    items: [
      {
        slug: 'ai-automation',
        title: 'WhatsApp AI & AEO',
        tag: 'ChatGPT & Bots',
        desc: '24/7 WhatsApp AI agents & LLM citations on ChatGPT/Gemini.',
        icon: 'bot',
      },
      {
        slug: 'api-integrations',
        title: 'API & Systems Integration',
        tag: 'Stripe · CRMs',
        desc: 'Connect payment gateways, webhooks & CRM flows.',
        icon: 'puzzle',
      },
      {
        slug: 'brand-identity',
        title: 'Branding & Design Systems',
        tag: 'Tokens & Assets',
        desc: 'Cohesive visual identity, typography & vector tokens.',
        icon: 'sparkles',
      },
    ],
  },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeMega, setActiveMega] = useState(null) // null | 'services' | 'builtFor'
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [mobileBuiltForOpen, setMobileBuiltForOpen] = useState(false)
  const [mobilePerspective, setMobilePerspective] = useState('startups')
  const { theme, toggleTheme } = useTheme()
  const location = useLocation()
  const drawerRef = useRef(null)
  const toggleRef = useRef(null)
  const servicesDropdownRef = useRef(null)
  const builtForDropdownRef = useRef(null)

  const isServicesActive = location.pathname.startsWith('/services')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    setOpen(false)
    setActiveMega(null)
  }, [location.pathname])

  // Close mega menus on Escape or click outside
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setActiveMega(null)
    }
    const onPointerDown = (e) => {
      const inServices = servicesDropdownRef.current && servicesDropdownRef.current.contains(e.target)
      const inBuiltFor = builtForDropdownRef.current && builtForDropdownRef.current.contains(e.target)
      if (!inServices && !inBuiltFor) {
        setActiveMega(null)
      }
    }
    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('pointerdown', onPointerDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('pointerdown', onPointerDown)
    }
  }, [])

  const closeTimerRef = useRef(null)

  const handleOpenMega = (name) => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current)
      closeTimerRef.current = null
    }
    setActiveMega(name)
  }

  const handleCloseMega = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current)
    closeTimerRef.current = setTimeout(() => {
      setActiveMega(null)
    }, 220)
  }

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current)
    }
  }, [])

  const closeAll = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current)
    setOpen(false)
    setActiveMega(null)
  }

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <header className={`navbar ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="navbar-inner container">
          <Link to="/" className="nav-brand" aria-label="PixelToCloud home" onClick={closeAll}>
            <BrandMark />
          </Link>

          <nav className="nav-links" aria-label="Primary">
            {/* Services with Bespoke Mega Menu Dropdown */}
            <div
              className="nav-dropdown-wrapper"
              ref={servicesDropdownRef}
              onMouseEnter={() => handleOpenMega('services')}
              onMouseLeave={handleCloseMega}
            >
              <button
                type="button"
                className={`nav-dropdown-trigger ${activeMega === 'services' || isServicesActive ? 'is-active' : ''}`}
                onClick={(e) => {
                  e.stopPropagation()
                  if (closeTimerRef.current) clearTimeout(closeTimerRef.current)
                  setActiveMega((v) => (v === 'services' ? null : 'services'))
                }}
                aria-expanded={activeMega === 'services'}
                aria-haspopup="true"
              >
                <span>Services</span>
                <svg
                  className={`nav-chevron ${activeMega === 'services' ? 'is-open' : ''}`}
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  aria-hidden="true"
                >
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {/* Bespoke Mega Menu Dropdown Panel */}
              <div
                className={`services-mega-menu ${activeMega === 'services' ? 'is-open' : ''}`}
                role="region"
                aria-label="Services Menu"
                onMouseEnter={() => handleOpenMega('services')}
                onMouseLeave={handleCloseMega}
              >
                <div className="mega-menu-inner">
                  {/* Top Header Ribbon */}
                  <div className="mega-top-ribbon">
                    <div className="mega-top-left">
                      <span className="mega-status-dot" aria-hidden="true" />
                      <span className="mega-ribbon-tag">CAPABILITY ARCHITECTURE</span>
                      <span className="mega-ribbon-sep">/</span>
                      <span className="mega-ribbon-sub">11 Specialized Services Across 3 Core Pillars</span>
                    </div>
                    <Link to="/services" className="mega-top-link" onClick={closeAll}>
                      View Complete Services Matrix <span className="arrow-glyph">→</span>
                    </Link>
                  </div>

                  {/* Split Layout: 3 Pillars Grid + Right Command Card */}
                  <div className="mega-body-split">
                    {/* Left: 3 Pillars */}
                    <div className="mega-pillars-row">
                      {servicePillars.map((pillar) => (
                        <div key={pillar.id} className={`mega-pillar-card pillar-${pillar.id}`}>
                          <div className="mega-pillar-header">
                            <span className="pillar-num">{pillar.number}</span>
                            <div className="pillar-title-block">
                              <span className="pillar-heading">{pillar.name}</span>
                              <span className="pillar-tagline">{pillar.subtitle}</span>
                            </div>
                          </div>

                          <div className="mega-pillar-list">
                            {pillar.items.map((item) => (
                              <Link
                                key={item.slug}
                                to={`/services/${item.slug}`}
                                className="mega-card-item"
                                onClick={closeAll}
                              >
                                <div className="mega-card-icon">
                                  <ServiceIcon type={item.icon} />
                                </div>
                                <div className="mega-card-body">
                                  <div className="mega-card-title">{item.title}</div>
                                  <p className="mega-card-desc">{item.desc}</p>
                                </div>
                                <span className="mega-card-arrow" aria-hidden="true">→</span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Right: Founder Sprint Command Showcase */}
                    <aside className="mega-command-showcase">
                      <div className="command-inner-card">
                        <div className="command-header">
                          <span className="command-badge">
                            <span className="badge-glow-dot" />
                            FOUNDER-LED GUARANTEE
                          </span>
                          <h4 className="command-headline">10–14 Day MVP Delivery</h4>
                          <p className="command-lede">
                            Direct engineering with Pankaj &amp; Rusmeen. No junior handoffs, no agency bloat.
                          </p>
                        </div>

                        <div className="command-specs">
                          <div className="command-spec-row">
                            <div className="spec-icon-box">⚡</div>
                            <div className="spec-info">
                              <span className="spec-title">10–14 Day Sprints</span>
                              <span className="spec-desc">Agile milestone deployment with live private staging</span>
                            </div>
                          </div>
                          <div className="command-spec-row">
                            <div className="spec-icon-box">🛡️</div>
                            <div className="spec-info">
                              <span className="spec-title">100% IP Ownership</span>
                              <span className="spec-desc">Source code, repos &amp; cloud credentials 100% yours</span>
                            </div>
                          </div>
                          <div className="command-spec-row">
                            <div className="spec-icon-box">💎</div>
                            <div className="spec-info">
                              <span className="spec-title">Milestone Payments</span>
                              <span className="spec-desc">No retainers. Pay on verifiable, demonstrated milestones</span>
                            </div>
                          </div>
                        </div>

                        <div className="command-cta-wrap">
                          <div className="command-live-status">
                            <span className="status-live-pulse" />
                            <span className="status-text">Monthly Sprint Slots: <strong>Open</strong></span>
                          </div>
                          <Link to="/contact" className="command-action-button" onClick={closeAll}>
                            <span>Book Architecture Call</span>
                            <span className="action-arrow">→</span>
                          </Link>
                        </div>
                      </div>
                    </aside>
                  </div>
                </div>
              </div>
            </div>

            {/* Built For (Who We Serve) with Bespoke Mega Menu Dropdown */}
            <div
              className="nav-dropdown-wrapper"
              ref={builtForDropdownRef}
              onMouseEnter={() => handleOpenMega('builtFor')}
              onMouseLeave={handleCloseMega}
            >
              <button
                type="button"
                className={`nav-dropdown-trigger nav-builtfor-trigger ${activeMega === 'builtFor' ? 'is-active' : ''}`}
                onClick={(e) => {
                  e.stopPropagation()
                  if (closeTimerRef.current) clearTimeout(closeTimerRef.current)
                  setActiveMega((v) => (v === 'builtFor' ? null : 'builtFor'))
                }}
                aria-expanded={activeMega === 'builtFor'}
                aria-haspopup="true"
              >
                <span>Who We Serve</span>
                <svg
                  className={`nav-chevron ${activeMega === 'builtFor' ? 'is-open' : ''}`}
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  aria-hidden="true"
                >
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <div
                onMouseEnter={() => handleOpenMega('builtFor')}
                onMouseLeave={handleCloseMega}
              >
                <BuiltForMegaMenu
                  isOpen={activeMega === 'builtFor'}
                  onClose={closeAll}
                />
              </div>
            </div>

            {/* Other standard nav links */}
            {otherLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => (isActive ? 'is-active' : undefined)}
                end={!link.matchPrefix}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="nav-actions">
            <button
              type="button"
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            >
              <ThemeIcon dark={theme === 'dark'} />
            </button>
            <Button to="/contact" variant="primary" className="nav-cta">
              Book a call
            </Button>
            <button
              ref={toggleRef}
              className={`nav-toggle ${open ? 'is-open' : ''}`}
              type="button"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`mobile-overlay ${open ? 'is-open' : ''}`} onClick={closeAll} />
      <aside
        ref={drawerRef}
        className={`mobile-drawer ${open ? 'is-open' : ''}`}
        aria-hidden={!open}
        inert={!open ? true : undefined}
      >
        <div className="drawer-top">
          <Link to="/" className="nav-brand" onClick={closeAll}>
            <BrandMark />
          </Link>
          <button type="button" className="drawer-close" onClick={closeAll} aria-label="Close menu">
            Close
          </button>
        </div>
        <nav className="drawer-links" aria-label="Mobile">
          {/* Mobile Services Accordion */}
          <div className="drawer-services-group">
            <button
              type="button"
              className="drawer-services-toggle"
              onClick={() => setMobileServicesOpen((v) => !v)}
            >
              <span>Services</span>
              <svg
                className={`drawer-chevron ${mobileServicesOpen ? 'is-open' : ''}`}
                width="12"
                height="8"
                viewBox="0 0 10 6"
                fill="none"
              >
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {mobileServicesOpen && (
              <div className="drawer-sublinks">
                <Link to="/services" onClick={closeAll} className="drawer-sublink hub-link">
                  ✦ All Services Overview →
                </Link>
                <Link to="/services/ui-ux-design" onClick={closeAll} className="drawer-sublink">
                  Web Design (UI/UX)
                </Link>
                <Link to="/services/web-development" onClick={closeAll} className="drawer-sublink">
                  Web Development
                </Link>
                <Link to="/services/web-migration" onClick={closeAll} className="drawer-sublink">
                  Webflow / Web Migration
                </Link>
                <Link to="/services/cloud-devops" onClick={closeAll} className="drawer-sublink">
                  Cloud Infrastructure &amp; DevOps
                </Link>
                <Link to="/services/maintenance-support" onClick={closeAll} className="drawer-sublink">
                  Maintenance &amp; Support
                </Link>
                <Link to="/services/api-integrations" onClick={closeAll} className="drawer-sublink">
                  API &amp; Systems Integration
                </Link>
                <Link to="/services/growth-funnels" onClick={closeAll} className="drawer-sublink">
                  Growth Marketing &amp; Funnels
                </Link>
                <Link to="/services/conversion-rate-optimization" onClick={closeAll} className="drawer-sublink">
                  Conversion Rate Optimization
                </Link>
                <Link to="/services/brand-identity" onClick={closeAll} className="drawer-sublink">
                  Branding &amp; Design Systems
                </Link>
                <Link to="/services/ai-automation" onClick={closeAll} className="drawer-sublink featured-sublink">
                  ✦ AEO / AIO / WhatsApp AI Agents
                </Link>
                <Link to="/services/custom-software" onClick={closeAll} className="drawer-sublink featured-sublink">
                  &lt;/&gt; Custom Web Apps &amp; CRMs
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Built For (Who We Serve) Accordion */}
          <div className="drawer-services-group">
            <button
              type="button"
              className="drawer-services-toggle"
              onClick={() => setMobileBuiltForOpen((v) => !v)}
            >
              <span>Who We Serve</span>
              <svg
                className={`drawer-chevron ${mobileBuiltForOpen ? 'is-open' : ''}`}
                width="12"
                height="8"
                viewBox="0 0 10 6"
                fill="none"
              >
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {mobileBuiltForOpen && (
              <div className="drawer-sublinks">
                <div className="drawer-perspective-toggle">
                  <button
                    type="button"
                    className={`drawer-p-btn ${mobilePerspective === 'startups' ? 'is-active' : ''}`}
                    onClick={() => setMobilePerspective('startups')}
                  >
                    ⚡ Startups
                  </button>
                  <button
                    type="button"
                    className={`drawer-p-btn ${mobilePerspective === 'enterprises' ? 'is-active' : ''}`}
                    onClick={() => setMobilePerspective('enterprises')}
                  >
                    🛡️ Enterprises
                  </button>
                </div>

                {domainData.map((d) => {
                  const spec = mobilePerspective === 'startups' ? d.startups : d.enterprises
                  return (
                    <Link
                      key={d.id}
                      to={d.to}
                      onClick={closeAll}
                      className="drawer-sublink"
                    >
                      <div className="drawer-domain-row">
                        <span className="drawer-domain-name">{d.name}</span>
                        <span className="drawer-domain-metric">{spec.metric}</span>
                      </div>
                      <span className="drawer-domain-desc">{spec.desc}</span>
                    </Link>
                  )
                })}

                <div className="drawer-archetype-links">
                  <Link to="/contact?type=startup" onClick={closeAll} className="drawer-archetype-card startup">
                    <span className="d-arch-badge">⚡ 10–14 DAY SPRINT</span>
                    <span className="d-arch-title">For Startups →</span>
                  </Link>
                  <Link to="/contact?type=enterprise" onClick={closeAll} className="drawer-archetype-card enterprise">
                    <span className="d-arch-badge">🛡️ 99.99% SLA</span>
                    <span className="d-arch-title">For Enterprises →</span>
                  </Link>
                </div>
              </div>
            )}
          </div>

          {otherLinks.map((link) => (
            <NavLink key={link.to} to={link.to} onClick={closeAll}>
              {link.label}
            </NavLink>
          ))}
          <NavLink to="/labs" onClick={closeAll}>
            Labs
          </NavLink>
        </nav>
        <div className="drawer-footer">
          <Button to="/contact" className="drawer-cta" onClick={closeAll}>
            Start a project
          </Button>
          <Button href={contact.whatsappLink} target="_blank" rel="noreferrer" variant="secondary" className="drawer-wa">
            WhatsApp
          </Button>
        </div>
      </aside>
    </>
  )
}
