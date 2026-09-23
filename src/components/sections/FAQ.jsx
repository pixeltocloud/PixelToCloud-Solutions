import { useState } from 'react'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import { faqs } from '../../data/faqs'
import { pricingTiers, pricingNote } from '../../data/pricing'
import './FAQ.css'

export default function FAQ({ showPricing = true, home = false, mode = 'combined' }) {
  const [openIndex, setOpenIndex] = useState(-1)
  const items = home ? faqs.slice(0, 4) : faqs
  const showInvestment = mode === 'combined' || mode === 'investment'
  const showFaq = mode === 'combined' || mode === 'faq'

  const faqList = (
    <div className={`faq-panel ${mode === 'faq' ? 'is-wide' : ''}`}>
      {mode === 'faq' ? null : <h3 className="faq-panel-title">Frequently asked</h3>}
      <div className={`faq-list ${mode === 'faq' ? 'is-wide' : ''}`}>
        {items.map((item, index) => {
          const open = openIndex === index
          const panelId = `faq-panel-${mode}-${index}`
          const buttonId = `faq-button-${mode}-${index}`
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
              <div className="faq-answer" id={panelId} role="region" aria-labelledby={buttonId} hidden={!open}>
                <div>
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )

  if (mode === 'faq') {
    return (
      <section className="section faq-section" id="faq">
        <div className="container">
          <Reveal>
            <SectionHeading
              title="Frequently asked questions"
              description="Clear answers on ownership, pricing, timelines, and how we work together."
            />
          </Reveal>
          <Reveal delay={60}>{faqList}</Reveal>
        </div>
      </section>
    )
  }

  if (mode === 'investment') {
    return (
      <section className="section investment" id="pricing">
        <div className="container">
          <Reveal>
            <SectionHeading
              title="Transparent ranges before you commit"
              description={pricingNote}
            />
          </Reveal>
          {showPricing ? (
            <div className="investment-tiers is-wide">
              {pricingTiers.map((tier, index) => (
                <Reveal key={tier.id} delay={index * 60} as="article" className={tier.highlighted ? 'is-hot' : undefined}>
                  <h3>{tier.name}</h3>
                  <p className="tier-range">{tier.range}</p>
                  <p>{tier.blurb}</p>
                </Reveal>
              ))}
            </div>
          ) : null}
          <Reveal delay={120} className="investment-cta">
            <Button to="/contact">Start a project</Button>
          </Reveal>
        </div>
      </section>
    )
  }

  return (
    <section className="section investment" id="pricing">
      <div className="container investment-grid">
        {showInvestment ? (
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

            <Button to="/contact">Start a project</Button>
          </Reveal>
        ) : null}

        {showFaq ? (
          <Reveal className="investment-faq" delay={80}>
            {faqList}
          </Reveal>
        ) : null}
      </div>
    </section>
  )
}
