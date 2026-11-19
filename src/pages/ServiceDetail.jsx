import { Link, useParams } from 'react-router-dom'
import Seo from '../components/seo/Seo'
import { brand } from '../config/brand'
import { getService } from '../data/catalog'
import { caseStudies } from '../data/caseStudies'
import { serviceMedia } from '../data/media'
import { findOffering } from '../data/offerings'
import { ContactBand, Price, WhatsAppIcon, whatsappHref } from '../components/site/px'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = getService(slug)
  const offering = findOffering(slug)

  if (!service) {
    return (
      <section className="px-detail-hero">
        <Seo title={`Service not found | ${brand.name}`} noindex />
        <div className="px-wrap">
          <h1>We could not find that service.</h1>
          <p className="px-hero-lede">It may have moved. See the full list, or tell us what you need.</p>
          <div className="px-actions">
            <Link className="px-btn px-btn-primary" to="/services">All services</Link>
            <Link className="px-btn px-btn-line" to="/contact">Contact us</Link>
          </div>
        </div>
      </section>
    )
  }

  const name = offering?.name || service.title
  const related = service.related
    .map((id) => caseStudies.find((item) => item.slug === id && item.listed !== false))
    .filter(Boolean)
  const photo = serviceMedia[service.slug]
  const siblings = offering ? offering.group.items.filter((item) => item.slug !== slug) : []

  return (
    <>
      <Seo title={`${service.title} | ${brand.name}`} description={service.lede} path={`/services/${service.slug}`} />
      <section className="px-detail-hero">
        <div className="px-wrap px-detail-grid">
          <div>
            <p className="px-crumbs"><Link to="/services">Services</Link> / {offering?.group.title || 'Service'}</p>
            <h1>{service.title}</h1>
            <p className="px-hero-lede">{service.lede}</p>
            {offering ? (
              <p className="px-detail-price">
                <Price amount={offering.from} unit={offering.unit} />
              </p>
            ) : null}
            <div className="px-actions">
              <a className="px-btn px-btn-whatsapp" href={whatsappHref(`Hi PixelToCloud, I would like a quote for ${name.toLowerCase()}.`)} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon /> Get a quote on WhatsApp
              </a>
              <Link className="px-btn px-btn-line" to="/pricing">All prices</Link>
            </div>
          </div>
          {photo ? (
            <figure className="px-detail-photo">
              <img src={photo.image} alt={photo.alt} width="1440" height="960" />
            </figure>
          ) : null}
        </div>
      </section>

      <section className="px-section">
        <div className="px-wrap">
          <div className="px-detail-cols">
            <div>
              <h2>When businesses call us</h2>
              <ul>{service.problems.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
            <div>
              <h2>What you get</h2>
              <ul>{service.deliverables.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          </div>
          <p className="px-note">{service.engagement}</p>
        </div>
      </section>

      {related.length ? (
        <section className="px-section is-mist is-tight">
          <div className="px-wrap">
            <div className="px-head"><h2>Related work</h2></div>
            <ul className="px-rows">
              {related.map((study) => (
                <li key={study.slug}>
                  <Link to={`/work/${study.slug}`}>
                    <strong>{study.shortTitle}</strong>
                    <span className="px-row-line">{study.timeline}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {siblings.length ? (
        <section className="px-section is-tight">
          <div className="px-wrap">
            <div className="px-head"><h2>Often taken together</h2></div>
            <ul className="px-rows">
              {siblings.map((item) => (
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
        </section>
      ) : null}

      <ContactBand />
    </>
  )
}
