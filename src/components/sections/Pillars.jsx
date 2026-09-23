import Reveal from '../ui/Reveal'
import { pillars } from '../../data/services'
import './Pillars.css'

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
              <h3>{pillar.title}</h3>
              <ul>
                {pillar.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
