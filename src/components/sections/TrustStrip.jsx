import { trustClients } from '../../data/caseStudies'
import './TrustStrip.css'

const signals = [
  { label: '100% IP ownership', detail: 'Code, docs, credentials' },
  { label: 'Fixed-scope delivery', detail: 'Clear milestones' },
  { label: 'Direct founder access', detail: 'No sales layer' },
  { label: '30-day warranty', detail: 'Post-launch support' },
]

export default function TrustStrip() {
  return (
    <section className="trust-strip" aria-label="Trust and clients">
      <div className="container trust-layout">
        <div className="trust-signals">
          {signals.map((item) => (
            <div key={item.label} className="trust-signal hover-lift">
              <strong>{item.label}</strong>
              <span>{item.detail}</span>
            </div>
          ))}
        </div>
        <div className="trust-clients">
          <p>Selected work &amp; clients</p>
          <ul>
            {trustClients.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
