import { Link, useParams } from 'react-router-dom'
import Seo from '../components/seo/Seo'
import { CtaBand, FaqList } from '../components/site/blocks'
import { brand } from '../config/brand'
import { getService, faqGroups } from '../data/catalog'
import { caseStudies } from '../data/caseStudies'
import { serviceMedia } from '../data/media'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = getService(slug)

  if (!service) {
    return (
      <div className="ag ag-page">
        <Seo title={`Service not found | ${brand.name}`} noindex />
        <section className="ag-hero">
          <div className="ag-wrap ag-empty">
            <p className="ag-eye">Services</p>
            <h1>That service is not listed.</h1>
            <p className="ag-lead">Browse the full services list, or tell us what you need.</p>
            <div className="ag-actions">
              <Link className="ag-btn ag-btn-light" to="/services">All services</Link>
              <Link className="ag-btn ag-btn-ghost" to="/contact">Talk to us</Link>
            </div>
          </div>
        </section>
      </div>
    )
  }

  const related = service.related
    .map((id) => caseStudies.find((item) => item.slug === id && item.listed !== false))
    .filter(Boolean)
  const photo = serviceMedia[service.slug]
  const ownership = faqGroups.filter((group) => group.id === 'ownership')

  return (
    <div className="ag ag-page">
      <Seo title={`${service.title} | ${brand.name}`} description={service.lede} path={`/services/${service.slug}`} />
      <section className="ag-hero">
        <div className="ag-wrap ag-hero-grid">
          <div>
            <p className="ag-crumbs"><Link to="/services">Services</Link> <span aria-hidden="true">/</span> <span>{service.title}</span></p>
            <p className="ag-eye">Service</p>
            <h1>{service.title}</h1>
            <p className="ag-lead">{service.lede}</p>
            <div className="ag-actions">
              <Link className="ag-btn ag-btn-light" to={brand.primaryHref}>{brand.primaryCta}</Link>
              <Link className="ag-btn ag-btn-ghost" to="/work">See the work</Link>
            </div>
          </div>
          {photo ? (
            <figure className="detail-photo">
              <img src={photo.image} alt={photo.alt} width="1440" height="960" />
            </figure>
          ) : null}
        </div>
      </section>
      <section className="ag-sheet cream">
        <div className="ag-wrap ag-split">
          <div>
            <h2>Problems we are hired for</h2>
            <ul>{service.problems.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
          <div>
            <h2>What you receive</h2>
            <ul>{service.deliverables.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
        </div>
        <div className="ag-wrap">
          <p className="ag-note">{service.engagement}</p>
        </div>
      </section>
      {related.length ? (
        <section className="ag-sheet alt">
          <div className="ag-wrap">
            <h2>Related work</h2>
            <ul className="ag-list">
              {related.map((study) => (
                <li key={study.slug}>
                  <Link to={`/work/${study.slug}`}>
                    <strong>{study.shortTitle}</strong>
                    <span>{study.timeline}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}
      <section className="ag-sheet">
        <div className="ag-wrap ag-prose">
          <FaqList groups={ownership} />
          <p><Link to="/faq">More questions</Link></p>
        </div>
      </section>
      <CtaBand />
    </div>
  )
}
