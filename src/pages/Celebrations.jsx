import Seo from '../components/seo/Seo'
import { brand } from '../config/brand'
import { celebrationItems, celebrationOccasions } from '../data/offerings'
import { ContactBand, CurrencyToggle, Price, WhatsAppIcon, whatsappHref } from '../components/site/px'

const steps = [
  { title: 'Send the details', text: 'Names, dates, venues and a few photos on WhatsApp. Tell us a style you like.' },
  { title: 'See the first design', text: 'A first version usually arrives within 2 days.' },
  { title: 'Ask for changes', text: 'Two rounds of changes are included. Spelling and dates are checked twice.' },
  { title: 'Share with everyone', text: 'Get files ready for WhatsApp, Instagram and print.' },
]

export default function Celebrations() {
  return (
    <>
      <Seo
        title={`Wedding invitations, video invites and event websites | ${brand.name}`}
        description="Digital wedding cards, video invitations, caricature invites, wedding websites, memory videos and festival greetings. Delivered on WhatsApp, from ₹499."
        path="/celebrations"
      />
      <section className="px-celebrate-hero">
        <div className="px-wrap px-celebrate-grid">
          <div>
            <h1>Invitations and videos for your special day</h1>
            <p className="px-hero-lede">
              Digital cards, video invites and event websites, designed for your family and
              ready to share on WhatsApp. Hindi or English, traditional or modern.
            </p>
            <div className="px-actions">
              <a className="px-btn px-btn-maroon" href={whatsappHref('Hi PixelToCloud, I would like an invitation design for my event.')} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon /> Start on WhatsApp
              </a>
              <a className="px-btn px-btn-line" href="#designs">See designs and prices</a>
            </div>
            <ul className="px-occasions" aria-label="Occasions we design for">
              {celebrationOccasions.map((occasion) => <li key={occasion}>{occasion}</li>)}
            </ul>
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

      <section className="px-section" id="designs" aria-labelledby="designs-title">
        <div className="px-wrap">
          <div className="px-head-row">
            <div className="px-head">
              <h2 id="designs-title">What we make</h2>
              <p>Starting prices for one event. Bundles for the full wedding are cheaper; ask on WhatsApp.</p>
            </div>
            <CurrencyToggle />
          </div>
          <div className="px-products">
            {celebrationItems.map((item) => (
              <article className="px-product" key={item.id} id={item.id}>
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.line}</p>
                </div>
                <ul>
                  {item.includes.map((point) => <li key={point}>{point}</li>)}
                </ul>
                <div className="px-product-side">
                  <Price amount={item.from} />
                  <a className="px-link" href={whatsappHref(`Hi PixelToCloud, I am interested in ${item.name.toLowerCase()}.`)} target="_blank" rel="noopener noreferrer">
                    Ask on WhatsApp
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-section is-mist" aria-labelledby="how-title">
        <div className="px-wrap">
          <div className="px-head">
            <h2 id="how-title">How it works</h2>
            <p>Everything happens on WhatsApp. No need to visit or download anything.</p>
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

      <section className="px-section" aria-labelledby="partners-title">
        <div className="px-wrap">
          <div className="px-head">
            <h2 id="partners-title">For wedding planners, photographers and venues</h2>
            <p>
              Offer invitations and event websites to your clients under your name. We design, you
              deliver, with partner pricing and a fixed turnaround.
            </p>
          </div>
          <a className="px-link" href={whatsappHref('Hi PixelToCloud, I run an events business and would like to discuss partner pricing.')} target="_blank" rel="noopener noreferrer">
            Ask about partner pricing
          </a>
        </div>
      </section>

      <ContactBand title="Have a date coming up?" text="Send the names, date and venue on WhatsApp. We will reply with design options and the price the same day." />
    </>
  )
}
