import { Link } from 'react-router-dom'
import Seo from '../components/seo/Seo'
import { CtaBand } from '../components/site/blocks'
import { brand } from '../config/brand'
import { labs } from '../data/labs'
import './Labs.css'

function statusLabel(status) {
  if (status === 'case-study') return 'Lab study'
  if (status === 'prototype') return 'Prototype'
  if (status === 'interactive') return 'Interactive'
  return 'Capability'
}

export default function Labs() {
  return (
    <div className="ag ag-page labs-page">
      <Seo
        title={`Labs | ${brand.name}`}
        description="Capabilities the studio applies on client work, plus one labeled lab project."
        path="/labs"
      />

      <section className="ag-hero labs-hero" aria-labelledby="labs-title">
        <div className="ag-wrap">
          <p className="ag-eye">Lab</p>
          <h1 id="labs-title">Capabilities we apply on client work</h1>
          <p className="ag-lead">
            Nebula3D is a lab project, not a client engagement. The other notes describe how we deliver on production builds.
          </p>
          <div className="ag-actions">
            <Link className="ag-btn ag-btn-light" to={brand.primaryHref}>{brand.primaryCta}</Link>
            <Link className="ag-btn ag-btn-ghost" to="/work">Explore Our Work</Link>
          </div>
        </div>
      </section>

      <section className="ag-sheet labs-body" aria-labelledby="labs-list-title">
        <div className="ag-wrap">
          <header className="labs-body-head">
            <p className="ag-kicker">In the lab</p>
            <h2 id="labs-list-title">Experiments and delivery notes</h2>
            <p>
              Each card is labeled so a demo or capability note is never confused with a shipped client engagement.
            </p>
          </header>

          <ul className="labs-grid">
            {labs.map((lab) => (
              <li key={lab.id}>
                <article
                  className="lab-card"
                  style={{ '--lab': lab.accent }}
                >
                  <div className="lab-accent" aria-hidden="true" />
                  <div className="lab-top">
                    <span className="lab-tag">{lab.tag}</span>
                    <span className={`lab-status is-${lab.status}`}>{statusLabel(lab.status)}</span>
                  </div>
                  <h3>{lab.title}</h3>
                  <p>{lab.description}</p>
                  <div className="lab-visual" aria-hidden="true">
                    <span className="lab-pulse" />
                    <span className="lab-pulse delay" />
                  </div>
                  <Link className="lab-cta" to={lab.href}>
                    {lab.cta}
                    <svg viewBox="0 0 16 16" aria-hidden="true">
                      <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </div>
  )
}
