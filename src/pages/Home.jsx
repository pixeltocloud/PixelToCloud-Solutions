import { Link } from 'react-router-dom'
import Seo from '../components/seo/Seo'
import { brand } from '../config/brand'
import { clientSites } from '../data/clientSites'
import { testimonials } from '../data/testimonials'
import { packages } from '../data/pricing'
import { celebrationItems, needs, serviceGroups } from '../data/offerings'
import SoftwareList from '../components/site/SoftwareList'
import { ContactBand, CurrencyToggle, Price, WhatsAppIcon, whatsappHref } from '../components/site/px'

const featuredWork = ['dr-archit-joshi', 'shridaa-arts', 'dr-janki-choudhary']
  .map((id) => clientSites.find((site) => site.id === id))
  .filter(Boolean)

const steps = [
  { title: 'Tell us what you need', text: 'A WhatsApp message or a 15-minute call. We ask about your business, not about technology.' },
  { title: 'Get a fixed quote', text: 'You get the scope, price and delivery date in writing before any work starts.' },
  { title: 'Review before launch', text: 'You see the work on a preview link and ask for changes. Nothing goes live until you approve.' },
  { title: 'Launch and support', text: 'We put it live, hand over the logins and stay on call for help and monthly care.' },
]

export default function Home() {
  const quote = testimonials[0]
  return (
    <>
      <Seo
        title={`${brand.name}: websites, software, WhatsApp automation and marketing`}
        description="PixelToCloud builds websites, custom software, WhatsApp automation, Google profiles, social media and design for businesses in India and worldwide. Websites from ₹9,999."
        path="/"
      />

      <section className="px-hero">
        <div className="px-wrap px-hero-grid">
          <div>
            <h1>Everything your business needs online, from one team.</h1>
            <p className="px-hero-lede">
              We build websites and software, set up WhatsApp and Google so customers reach you,
              and handle your social media and design. Clear prices, written quotes and one team to call.
            </p>
            <div className="px-actions">
              <a className="px-btn px-btn-whatsapp" href={whatsappHref('Hi PixelToCloud, I would like a quote for my business.')} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon /> Get a quote on WhatsApp
              </a>
              <Link className="px-btn px-btn-line" to="/pricing">See prices</Link>
            </div>
            <ul className="px-facts">
              <li>Websites from ₹9,999</li>
              <li>Launch in 7 days or your money back</li>
              <li>You own the website and the domain</li>
            </ul>
          </div>

          <nav className="px-needs" aria-labelledby="needs-title">
            <h2 id="needs-title">What do you need help with?</h2>
            <ul>
              {needs.map((need) => (
                <li key={need.text}>
                  <Link to={need.to}><span>{need.text}</span><span>See how</span></Link>
                </li>
              ))}
            </ul>
            <p className="px-needs-foot">Something else? <Link className="px-link" to="/contact">Ask us</Link></p>
          </nav>
        </div>
      </section>

      <section className="px-section is-mist" aria-labelledby="work-title">
        <div className="px-wrap">
          <div className="px-head-row">
            <div className="px-head">
              <h2 id="work-title">Recent websites</h2>
              <p>Live sites we built for doctors and makers. Open any of them on your phone.</p>
            </div>
            <Link className="px-link" to="/work">All our work</Link>
          </div>
          <div className="px-work">
            {featuredWork.map((site) => (
              <figure key={site.id}>
                <a href={site.url} target="_blank" rel="noopener noreferrer">
                  <div className="px-work-shot">
                    <img src={`/image/work/thumbs/${site.id}.webp`} alt={`Home page of ${site.name}`} loading="lazy" width="800" height="500" />
                  </div>
                  <figcaption>
                    <strong>{site.name}</strong>
                    <span>{site.host}</span>
                  </figcaption>
                </a>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="px-section" aria-labelledby="software-title">
        <div className="px-wrap">
          <div className="px-head-row">
            <div className="px-head">
              <h2 id="software-title">Software we have built</h2>
              <p>Beyond websites: billing, records and marketing software that runs real work.</p>
            </div>
            <Link className="px-link" to="/work">See all our work</Link>
          </div>
          <SoftwareList />
        </div>
      </section>

      <section className="px-section is-mist" aria-labelledby="services-title">
        <div className="px-wrap">
          <div className="px-head-row">
            <div className="px-head">
              <h2 id="services-title">What we do</h2>
              <p>Pick one service or let us handle all of it. Every price below is a starting price for a typical small business.</p>
            </div>
            <CurrencyToggle />
          </div>
          <div className="px-groups">
            {serviceGroups.map((group) => (
              <div className="px-group" key={group.id}>
                <h3>{group.title}</h3>
                <p>{group.text}</p>
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
          </div>
        </div>
      </section>

      <section className="px-section" aria-labelledby="plans-title">
        <div className="px-wrap">
          <div className="px-head-row">
            <div className="px-head">
              <h2 id="plans-title">Website packages</h2>
              <p>Fixed prices for the most common website. Monthly plans for Google, social media and WhatsApp are on the pricing page.</p>
            </div>
            <Link className="px-link" to="/pricing">All prices</Link>
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

      <section className="px-section is-mist" aria-labelledby="steps-title">
        <div className="px-wrap">
          <div className="px-head">
            <h2 id="steps-title">How we work with you</h2>
            <p>No technical knowledge needed on your side. You always know the price and the date.</p>
          </div>
          <ol className="px-steps">
            {steps.map((step) => (
              <li key={step.title}>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-section px-celebrate-band" aria-labelledby="celebrate-title">
        <div className="px-wrap px-celebrate-grid">
          <div>
            <div className="px-head">
              <h2 id="celebrate-title">Invitations and videos for your celebrations</h2>
              <p>Wedding cards, video invites, event websites and festival greetings, designed by the same team and delivered on WhatsApp.</p>
            </div>
            <ul className="px-celebrate-list">
              {celebrationItems.slice(0, 4).map((item) => (
                <li key={item.id}><span>{item.name}</span><Price amount={item.from} /></li>
              ))}
            </ul>
            <Link className="px-btn px-btn-light" to="/celebrations">See celebration designs</Link>
          </div>
          <div className="px-invite" aria-hidden="true">
            <div className="px-invite-inner">
              <p className="px-invite-small">Together with their families</p>
              <p className="px-invite-names">Aarav<span className="px-invite-amp">and</span>Meera</p>
              <div className="px-invite-rule" />
              <p className="px-invite-date">Saturday, 14 February</p>
              <p className="px-invite-place">Shalimar Gardens, Alwar</p>
            </div>
          </div>
        </div>
      </section>

      {quote ? (
        <section className="px-section" aria-label="What a client says">
          <div className="px-wrap">
            <figure className="px-quote">
              <blockquote><p>{quote.text}</p></blockquote>
              <figcaption><strong>{quote.name}</strong>, {quote.role}</figcaption>
            </figure>
          </div>
        </section>
      ) : null}

      <ContactBand />
    </>
  )
}
