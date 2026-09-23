import { trustClients } from '../../data/caseStudies'
import './TrustStrip.css'

const signals = [
  { label: 'Full IP ownership', detail: 'Code, docs, credentials' },
  { label: 'Fixed-scope delivery', detail: 'Clear milestones' },
  { label: 'Direct engineer access', detail: 'No sales layer' },
]

export default function TrustStrip() {
  return (
    <section className="trust-strip" aria-label="Trust and clients">
      <div className="container">
        <div className="trust-signals">
          {signals.map((item) => (
            <div key={item.label}>
              <strong>{item.label}</strong>
              <span>{item.detail}</span>
            </div>
          ))}
        </div>
        <div className="trust-clients">
          <p>Selected clients</p>
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
