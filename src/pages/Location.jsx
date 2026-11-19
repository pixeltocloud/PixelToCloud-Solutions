import { Link, useParams } from 'react-router-dom'
import Seo, { breadcrumb, faqSchema } from '../components/seo/Seo'
import { ContactBand, Price, WhatsAppIcon, whatsappHref } from '../components/site/px'
import { findPlace, sectors } from '../data/places'
import { findOffering } from '../data/offerings'
import NotFound from './NotFound'

const mainServices = [
  'web-development', 'ecommerce', 'google-business-profile', 'seo', 'social-media-management',
  'digital-marketing', 'whatsapp-automation', 'web-applications', 'mobile-app-development', 'branding', 'video-production',
].map(findOffering).filter(Boolean)

const visitable = new Set(['alwar', 'khairthal-tijara', 'kotputli-behror', 'deeg', 'bharatpur', 'jaipur', 'dausa'])

function placeLabel(place) {
  if (place.type === 'district') return `${place.name}, Rajasthan`
  return place.name
}

function faqFor(place) {
  const where = place.name
  const intl = place.type === 'country'
  const items = [
    {
      q: `Do you work with businesses in ${where}?`,
      a: intl
        ? `Yes. We work with businesses in ${where} fully online, by WhatsApp, email and video calls. ${place.hours}`
        : `Yes. We work with businesses in ${where} online, by WhatsApp, phone and video calls, in Hindi or English.${visitable.has(place.slug) ? ' We can also meet you in person.' : ''}`,
    },
    {
      q: `How much does a website cost in ${where}?`,
      a: intl
        ? 'Business websites start at $299, launched in 7 days once the content is ready. You get a fixed written quote first and you own the website and domain.'
        : 'Business websites start at ₹9,999, launched in 7 days once the content is ready. Online stores start at ₹24,999 and custom software at ₹49,999. You get a fixed written quote first.',
    },
    {
      q: `Can you help my business show up on Google in ${where}?`,
      a: `Yes. We set up and improve your Google Business Profile, build pages for the searches people in ${where} make, and send a short monthly report. We never buy or write fake reviews and we do not promise a fixed ranking.`,
    },
    {
      q: 'Do you also do WhatsApp automation, social media and design?',
      a: 'Yes. Along with websites and software we set up WhatsApp replies and reminders, run Instagram and Facebook pages, design logos and posters, edit reels and make digital invitations.',
    },
  ]
  return items
}

export default function Location() {
  const { slug } = useParams()
  const place = findPlace(slug)
  if (!place) return <NotFound />

  const label = placeLabel(place)
  const faqs = faqFor(place)
  const path = `/locations/${place.slug}`
  const near = (place.near || []).map(findPlace).filter(Boolean)
  const title = place.type === 'country'
    ? `Website and software development company for ${place.name} businesses | PixelToCloud`
    : `Website design, software and digital marketing in ${place.name} | PixelToCloud`
  const description = place.type === 'country'
    ? `PixelToCloud builds websites, custom software, apps and WhatsApp automation for businesses in ${place.name}. Websites from $299, fixed quotes, ${place.currency} invoicing.`
    : `Website design, SEO, Google Business Profile, social media, WhatsApp automation and software for businesses in ${label}. Websites from ₹9,999, launched in 7 days.`

  return (
    <>
      <Seo
        title={title}
        description={description}
        path={path}
        schema={[
          {
            '@type': 'Service',
            '@id': `https://pixeltocloud.com${path}#service`,
            name: `Website design, software and digital marketing in ${place.name}`,
            serviceType: 'Website design and development',
            provider: { '@id': 'https://pixeltocloud.com/#organization' },
            areaServed: {
              '@type': place.type === 'country' ? 'Country' : place.type === 'state' ? 'State' : 'AdministrativeArea',
              name: label,
            },
            offers: place.type === 'country'
              ? { '@type': 'Offer', priceCurrency: 'USD', price: 299 }
              : { '@type': 'Offer', priceCurrency: 'INR', price: 9999 },
          },
          faqSchema(faqs),
          breadcrumb([
            { name: 'Home', path: '/' },
            { name: 'Locations', path: '/locations' },
            { name: place.name, path },
          ]),
        ]}
      />

      <section className="px-detail-hero">
        <div className="px-wrap">
          <p className="px-crumbs"><Link to="/locations">Locations</Link> / {label}</p>
          <h1>
            {place.type === 'country'
              ? `Websites and software for businesses in ${place.name}`
              : `Website design, software and digital marketing in ${place.name}`}
          </h1>
          <p className="px-hero-lede">
            {place.note}{' '}
            {place.slug === 'alwar'
              ? 'Our studio is in Shalimar, Alwar, so you can meet us in person.'
              : place.type === 'country'
                ? `PixelToCloud works with ${place.name} businesses online from India, with invoices in ${place.currency}.`
                : `PixelToCloud works with businesses across ${place.name} online from Alwar, Rajasthan.`}
          </p>
          <div className="px-actions">
            <a className="px-btn px-btn-whatsapp" href={whatsappHref(`Hi PixelToCloud, I have a business in ${place.name} and would like a quote.`)} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon /> Get a quote on WhatsApp
            </a>
            <Link className="px-btn px-btn-line" to="/pricing">See prices</Link>
          </div>
        </div>
      </section>

      <section className="px-section">
        <div className="px-wrap">
          <div className="px-head">
            <h2>What we build for businesses in {place.name}</h2>
            <p>Ideas for the kinds of businesses most common in {place.name}. Every project starts with what you need, not a template.</p>
          </div>
          <div className="px-detail-cols px-sector-cols">
            {place.sectors.map((key) => (
              <div key={key}>
                <h3>{sectors[key].name}</h3>
                <p>{sectors[key].idea.replace('<place>', place.name).replace('<specialty>', 'specialist')}</p>
              </div>
            ))}
          </div>
          <div className="px-searches">
            <h3>Searches we help {place.name} businesses show up for</h3>
            <ul className="px-occasions">
              {place.sectors.flatMap((key) => sectors[key].searches || []).map((phrase) => (
                <li key={phrase}>{phrase.replace('<place>', place.name)}</li>
              ))}
            </ul>
          </div>
          {place.cities ? (
            <p className="px-note">
              We work with businesses in {place.cities.join(', ')} and every other city and town in {place.name}.
            </p>
          ) : null}
        </div>
      </section>

      <section className="px-section is-mist">
        <div className="px-wrap">
          <div className="px-head">
            <h2>Services and starting prices</h2>
            <p>The same prices everywhere{place.type === 'country' ? '' : ' in India'}. You get a fixed written quote before work starts.</p>
          </div>
          <ul className="px-rows">
            {mainServices.map((item) => (
              <li key={item.slug}>
                <Link to={`/services/${item.slug}`}>
                  <strong>{item.name}{place.type === 'country' ? '' : ` in ${place.name}`}</strong>
                  <Price amount={item.from} unit={item.unit} />
                  <span className="px-row-line">{item.line}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-section">
        <div className="px-wrap px-detail-cols">
          <div>
            <h2>How we work with you</h2>
            <ul>
              <li>Tell us what you need on WhatsApp or a short call{place.type === 'country' ? '' : ', in Hindi or English'}.</li>
              <li>Get a fixed quote with the price and delivery date in writing.</li>
              <li>See the work on a preview link and ask for changes before anything goes live.</li>
              <li>We launch it, hand over the logins, and stay available for support.</li>
              {place.hours ? <li>{place.hours}</li> : null}
            </ul>
          </div>
          <div>
            <h2>Common questions</h2>
            <ul>
              {faqs.map((item) => (
                <li key={item.q}><strong>{item.q}</strong><br />{item.a}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {near.length ? (
        <section className="px-section is-mist is-tight">
          <div className="px-wrap">
            <div className="px-head"><h2>Nearby districts</h2></div>
            <ul className="px-occasions px-near">
              {near.map((item) => (
                <li key={item.slug}><Link to={`/locations/${item.slug}`}>{item.name}</Link></li>
              ))}
              <li><Link to="/locations">All locations</Link></li>
            </ul>
          </div>
        </section>
      ) : null}

      <ContactBand title={`Have a business in ${place.name}?`} text="Send a WhatsApp message with what you need. You will get a clear answer on price and time, usually the same day." />
    </>
  )
}
