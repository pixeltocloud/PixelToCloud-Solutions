import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'
import { pricingTiers, pricingNote } from '../../data/pricing'
import './Pricing.css'

export default function Pricing() {
  return (
    <section className="section pricing" id="pricing-table">
      <div className="container">
        <Reveal>
          <SectionHeading tag="Pricing" title="Clear investment ranges" description={pricingNote} />
        </Reveal>
        <div className="pricing-grid">
          {pricingTiers.map((tier, i) => (
            <Reveal
              key={tier.id}
              delay={i * 90}
              as="article"
              className={`pricing-card interactive-card ${tier.highlighted ? 'is-hot' : ''}`}
            >
              <h3>{tier.name}</h3>
              <p className="pricing-range">{tier.range}</p>
              <p className="pricing-blurb">{tier.blurb}</p>
              <ul>
                {tier.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <Button to="/contact" variant={tier.highlighted ? 'primary' : 'secondary'}>
                {tier.cta}
              </Button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
