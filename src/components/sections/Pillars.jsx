import Reveal from '../ui/Reveal'
import { pillars } from '../../data/services'
import './Pillars.css'

function PillarIcon({ id }) {
  if (id === 'build') {
    return (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    )
  }
  if (id === 'grow') {
    return (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    )
  }
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  )
}

export default function Pillars() {
  return (
    <section className="section pillars surface-ink" id="pillars">
      <div className="container">
        <Reveal>
          <h2 className="section-title">How we structure every build</h2>
          <p className="section-desc">
            Clear pillars so your website, growth systems, and automation stay aligned from kickoff to handover.
          </p>
        </Reveal>
        <div className="pillars-grid">
          {pillars.map((pillar, index) => (
            <Reveal key={pillar.id} delay={index * 80} as="article" className="pillar-card hover-lift">
              <span className="pillar-label">{pillar.label}</span>
              <h3 className="pillar-title">{pillar.title}</h3>
              <ul className="pillar-tags">
                {pillar.items.map((item) => (
                  <li key={item} className="pillar-tag">
                    <span className={`pillar-tag-icon is-${pillar.id}`} aria-hidden="true">
                      <PillarIcon id={pillar.id} />
                    </span>
                    <span className="pillar-tag-text">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
