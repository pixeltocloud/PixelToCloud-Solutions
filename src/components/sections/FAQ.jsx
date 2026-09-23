import { useState } from 'react'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'
import { faqs } from '../../data/faqs'
import { pricingTiers, pricingNote } from '../../data/pricing'
import './FAQ.css'

export default function FAQ({ showPricing = true }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="section investment" id="pricing">
      <div className="container investment-grid">
        <Reveal className="investment-aside">
          <p className="section-tag">Investment</p>
          <h2 className="section-title">Transparent ranges before you commit</h2>
          <p className="section-desc">{pricingNote}</p>

          {showPricing ? (
            <div className="investment-tiers">
              {pricingTiers.map((tier) => (
                <article key={tier.id} className={tier.highlighted ? 'is-hot' : undefined}>
                  <h3>{tier.name}</h3>
                  <p className="tier-range">{tier.range}</p>
                  <p>{tier.blurb}</p>
                </article>
              ))}
            </div>
          ) : null}

          <Button to="/contact">Discuss scope and timeline</Button>
        </Reveal>

        <Reveal className="investment-faq" delay={80}>
          <div className="faq-panel">
            <h3 className="faq-panel-title">Frequently asked</h3>
            <div className="faq-list">
              {faqs.map((item, index) => {
                const open = openIndex === index
                const panelId = `faq-panel-${index}`
                const buttonId = `faq-button-${index}`
                return (
                  <div key={item.question} className={`faq-item ${open ? 'is-open' : ''}`}>
                    <button
                      type="button"
                      id={buttonId}
                      className="faq-question"
                      aria-expanded={open}
                      aria-controls={panelId}
                      onClick={() => setOpenIndex(open ? -1 : index)}
                    >
                      <span>{item.question}</span>
                      <span className="faq-chevron" aria-hidden="true">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                        </svg>
                      </span>
                    </button>
                    <div className="faq-answer" id={panelId} role="region" aria-labelledby={buttonId}>
                      <div>
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
