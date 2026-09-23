import Reveal from '../ui/Reveal'
import { pillars } from '../../data/services'
import './Pillars.css'

export default function Pillars() {
  return (
    <section className="section pillars surface-ink" id="pillars">
      <div className="container">
        <Reveal>
          <p className="section-tag">Build · Grow · Automate</p>
          <h2 className="section-title">The philosophy behind every engagement</h2>
          <p className="section-desc">
            Designed to move your business from first concept to a live system you fully own.
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
