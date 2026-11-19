import { Link } from 'react-router-dom'
import Seo from '../components/seo/Seo'
import { brand } from '../config/brand'
import { packages } from '../data/pricing'
import { celebrationItems, monthlyPlans, serviceGroups } from '../data/offerings'
import { ContactBand, CurrencyToggle, Price, whatsappHref } from '../components/site/px'

export default function Pricing() {
  return (
    <>
      <Seo
        title={`Prices and packages | ${brand.name}`}
        description="Website packages from ₹9,999, monthly plans for Google, social media, WhatsApp and website care, and starting prices for every service."
        path="/pricing"
      />
      <section className="px-detail-hero">
        <div className="px-wrap">
          <h1>Prices and packages</h1>
          <p className="px-hero-lede">
            Starting prices for a typical small business. You get a fixed quote in writing before
            work starts, and the price does not change unless you ask for more.
          </p>
          <CurrencyToggle />
        </div>
      </section>

      <section className="px-section" aria-labelledby="web-plans">
        <div className="px-wrap">
          <div className="px-head">
            <h2 id="web-plans">Website packages</h2>
            <p>One-time price. Launch in 7 days or your money back, once the content is ready.</p>
          </div>
          <div className="px-plans">
            {packages.map((plan) => (
              <div key={plan.id} className={`px-plan${plan.badge ? ' is-featured' : ''}`}>
                <div className="px-plan-top">
                  <h3>{plan.name}</h3>
                  {plan.badge ? <span className="px-tag">{plan.badge}</span> : null}
                </div>
                <p className="px-plan-price"><Price amount={plan.price} prefix="" /></p>
                <p>{plan.summary.replace('{business}', 'Business')}</p>
                <ul>
                  {plan.features.map((feature) => <li key={feature}>{feature.replace('{business}', 'Business')}</li>)}
                </ul>
                <a className={`px-btn ${plan.badge ? 'px-btn-primary' : 'px-btn-line'}`} href={whatsappHref(`Hi PixelToCloud, I am interested in the ${plan.name} website package.`)} target="_blank" rel="noopener noreferrer">
                  Ask about {plan.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-section is-mist" aria-labelledby="monthly-plans">
        <div className="px-wrap">
          <div className="px-head">
            <h2 id="monthly-plans">Monthly plans</h2>
            <p>Cancel any month with 30 days’ notice. No long contracts.</p>
          </div>
          <ul className="px-monthly">
            {monthlyPlans.map((plan) => (
              <li key={plan.id}>
                <strong>{plan.name}</strong>
                <Price amount={plan.price} unit="/month" prefix="" />
                <p>{plan.text}{plan.note ? ` ${plan.note}` : ''}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-section" aria-labelledby="all-prices">
        <div className="px-wrap">
          <div className="px-head">
            <h2 id="all-prices">Every service</h2>
            <p>Starting prices. Open a service to see what is included.</p>
          </div>
          <div className="px-groups">
            {serviceGroups.map((group) => (
              <div className="px-group" key={group.id}>
                <h3>{group.title}</h3>
                <ul className="px-rows">
                  {group.items.map((item) => (
                    <li key={item.slug}>
                      <Link to={`/services/${item.slug}`}>
                        <strong>{item.name}</strong>
                        <Price amount={item.from} unit={item.unit} />
                        <span className="px-row-line">{item.line}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="px-group">
              <h3>Celebrations</h3>
              <ul className="px-rows">
                {celebrationItems.map((item) => (
                  <li key={item.id}>
                    <Link to={`/celebrations#${item.id}`}>
                      <strong>{item.name}</strong>
                      <Price amount={item.from} />
                      <span className="px-row-line">{item.line}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="px-fineprint">
            Prices do not include GST. For clients in India, 18% GST is added on the invoice. Ad spend, domain,
            paid themes, WhatsApp message charges and printing are paid at cost. A typical payment split is
            30% to start, 40% at preview and 30% at launch.
          </p>
        </div>
      </section>

      <ContactBand title="Want an exact price?" text="Send us a WhatsApp message with what you need. You will get a written quote, usually the same day." />
    </>
  )
}
