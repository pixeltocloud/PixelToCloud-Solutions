import { Link, useParams } from 'react-router-dom'
import Seo from '../components/seo/Seo'
import { CtaBand, FaqList } from '../components/site/blocks'
import { WorkFrame, frameKind } from '../components/site/Stage'
import { brand } from '../config/brand'
import { getService, faqGroups, workMeta } from '../data/catalog'
import { caseStudies } from '../data/caseStudies'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = getService(slug)

  if (!service) {
    return (
      <section className="ag-sheet">
        <div className="ag-wrap">
          <Seo title={`Service not found | ${brand.name}`} noindex />
          <h1 className="ag-ink">That service is not listed.</h1>
          <Link className="ag-btn ag-btn-line" to="/services">All services</Link>
        </div>
      </section>
    )
  }

  const related = service.related.map((id) => caseStudies.find((item) => item.slug === id)).filter(Boolean)

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
            </div>
          </div>
          <WorkFrame kind={frameKind(service.slug)} />
        </div>
      </section>
      <section className="ag-sheet">
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
            {related.map((study) => (
              <article key={study.slug} className="show">
                <WorkFrame kind={frameKind(study.slug)} />
                <div>
                  <p className="ag-kicker">{workMeta[study.slug]?.badge || 'Project'}</p>
                  <h3>{study.shortTitle}</h3>
                  <p>{study.timeline}</p>
                  <Link className="ag-btn ag-btn-line" to={`/work/${study.slug}`} style={{ marginTop: 16 }}>Read the case study</Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      ) : (
        <section className="ag-sheet alt">
          <div className="ag-wrap">
            <h2>Related work</h2>
            <p>No published case study in this service yet.</p>
          </div>
        </section>
      )}
      <section className="ag-sheet">
        <div className="ag-wrap ag-prose">
          <FaqList groups={faqGroups.filter((group) => ['timelines', 'ownership', 'maintenance'].includes(group.id))} />
        </div>
      </section>
      <CtaBand />
    </div>
  )
}
