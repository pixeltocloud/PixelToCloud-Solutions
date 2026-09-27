import { useState } from 'react'
import { Link } from 'react-router-dom'
import { domainPillars, archetypeSpecs } from '../../data/domains'
import './BuiltForMegaMenu.css'

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
            <span className="mega-ribbon-tag">WHO WE SERVE</span>
            <span className="mega-ribbon-sep" aria-hidden="true">/</span>
            <span className="mega-ribbon-sub">Documented verticals. Adjacent products are scoped the same way.</span>
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
                <span>Startups</span>
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
                <span>Enterprise</span>
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
                        <img className="mega-card-thumb" src={item.image} alt="" width="72" height="72" />
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
