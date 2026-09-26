import { useState } from 'react'
import { Link } from 'react-router-dom'
import { domainPillars, archetypeSpecs } from '../../data/domains'
import './BuiltForMegaMenu.css'

function DomainIcon({ type }) {
  switch (type) {
    case 'saas':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      )
    case 'ai':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      )
    case 'ecommerce':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
      )
    case 'fintech':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <line x1="12" y1="1" x2="12" y2="23" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      )
    case 'healthcare':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      )
    case 'realestate':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M3 21h18M5 21V7l8-4 8 4v14M9 10h1M9 14h1M9 18h1M14 10h1M14 14h1M14 18h1" />
        </svg>
      )
    case 'cloud':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
          <line x1="6" y1="6" x2="6.01" y2="6" />
          <line x1="6" y1="18" x2="6.01" y2="18" />
        </svg>
      )
    case 'web3':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      )
    case 'growth':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
          <polyline points="17 6 23 6 23 12" />
        </svg>
      )
    default:
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
        </svg>
      )
  }
}

export default function BuiltForMegaMenu({ isOpen, onClose }) {
  const [perspective, setPerspective] = useState('startups')
  const currentArchetype = archetypeSpecs[perspective]

  return (
    <div
      className={`services-mega-menu built-for-mega-panel ${isOpen ? 'is-open' : ''}`}
      role="region"
      aria-label="Built For Menu"
    >
      <div className="mega-menu-inner">
        {/* Top Header Ribbon with Perspective Switcher */}
        <div className="mega-top-ribbon">
          <div className="mega-top-left">
            <span className="mega-status-dot built-for-dot" aria-hidden="true" />
            <span className="mega-ribbon-tag">DOMAIN ARCHITECTURE</span>
            <span className="mega-ribbon-sep" aria-hidden="true">/</span>
            <span className="mega-ribbon-sub">9 Specialized Verticals Tailored To Your Growth Stage</span>
          </div>

          {/* Perspective Toggle Switcher */}
          <div className="built-for-toggle-pill">
            <span className="toggle-label">Perspective:</span>
            <div className="toggle-switch-btns" role="tablist" aria-label="Perspective selector">
              <button
                type="button"
                role="tab"
                aria-selected={perspective === 'startups'}
                className={`toggle-btn ${perspective === 'startups' ? 'is-active' : ''}`}
                onClick={(e) => {
                  e.stopPropagation()
                  setPerspective('startups')
                }}
              >
                <span className="btn-icon">⚡</span>
                <span>High-Velocity Startups</span>
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={perspective === 'enterprises'}
                className={`toggle-btn ${perspective === 'enterprises' ? 'is-active' : ''}`}
                onClick={(e) => {
                  e.stopPropagation()
                  setPerspective('enterprises')
                }}
              >
                <span className="btn-icon">🛡️</span>
                <span>Scaling Enterprises</span>
              </button>
            </div>
          </div>
        </div>

        {/* Split Layout: 3 Pillars Grid + Right Command Card (Matching Services) */}
        <div className="mega-body-split">
          {/* Left: 3 Pillars */}
          <div className="mega-pillars-row">
            {domainPillars.map((pillar) => (
              <div key={pillar.id} className={`mega-pillar-card pillar-${pillar.id}`}>
                <div className="mega-pillar-header">
                  <span className="pillar-num">{pillar.number}</span>
                  <div className="pillar-title-block">
                    <span className="pillar-heading">{pillar.name}</span>
                    <span className="pillar-tagline">{pillar.subtitle}</span>
                  </div>
                </div>

                <div className="mega-pillar-list">
                  {pillar.items.map((item) => {
                    const spec = perspective === 'startups' ? item.startups : item.enterprises
                    return (
                      <Link
                        key={item.id}
                        to={item.to}
                        className="mega-card-item built-for-card-item"
                        onClick={onClose}
                      >
                        <div className="mega-card-icon">
                          <DomainIcon type={item.icon} />
                        </div>
                        <div className="mega-card-body">
                          <div className="built-for-card-title-row">
                            <span className="mega-card-title">{item.title}</span>
                            <span className="built-for-metric-pill">{spec.metric}</span>
                          </div>
                          <p className="mega-card-desc">{spec.desc}</p>
                        </div>
                        <span className="mega-card-arrow" aria-hidden="true">→</span>
                      </Link>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Right: Dynamic Archetype Command Showcase */}
          <aside className="mega-command-showcase">
            <div className={`command-inner-card is-${perspective}`}>
              <div className="command-header">
                <span className="command-badge">
                  <span className="badge-glow-dot" />
                  {currentArchetype.badge}
                </span>
                <h4 className="command-headline">{currentArchetype.headline}</h4>
                <p className="command-lede">{currentArchetype.lede}</p>
              </div>

              <div className="command-specs">
                {currentArchetype.specs.map((spec) => (
                  <div key={spec.title} className="command-spec-row">
                    <div className="spec-icon-box">{spec.icon}</div>
                    <div className="spec-info">
                      <span className="spec-title">{spec.title}</span>
                      <span className="spec-desc">{spec.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="command-cta-wrap">
                <div className="command-live-status">
                  <span className="status-live-pulse" />
                  <span className="status-text">{currentArchetype.statusText}</span>
                </div>
                <Link to={currentArchetype.ctaLink} className="command-action-button" onClick={onClose}>
                  <span>{currentArchetype.ctaText}</span>
                  <span className="action-arrow">→</span>
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
