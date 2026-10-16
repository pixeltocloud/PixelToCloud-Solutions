import { Link, useParams } from 'react-router-dom'
import Seo from '../components/seo/Seo'
import { CtaBand, FaqList } from '../components/site/blocks'
import { WorkFrame, frameKind } from '../components/site/Stage'
import { brand } from '../config/brand'
import { getIndustry, servicePages, faqGroups } from '../data/catalog'
import { caseStudies } from '../data/caseStudies'
import './Industries.css'

export default function IndustryDetail() {
  const { slug } = useParams()
  const industry = getIndustry(slug)

  if (!industry) {
    return (
      <div className="ag ag-page">
        <Seo title={`Industry not found | ${brand.name}`} noindex />
        <section className="ag-hero">
          <div className="ag-wrap ag-empty">
            <p className="ag-eye">Industries</p>
            <h1>That industry page is not listed.</h1>
            <p className="ag-lead">Browse the full list, or tell us about your sector.</p>
            <div className="ag-actions">
              <Link className="ag-btn ag-btn-light" to="/industries">All industries</Link>
              <Link className="ag-btn ag-btn-ghost" to="/contact">Talk to us</Link>
            </div>
          </div>
        </section>
      </div>
    )
  }

  const related = industry.related.map((id) => caseStudies.find((item) => item.slug === id)).filter(Boolean)

  return (
    <div className="ag ag-page industries-page">
      <Seo title={`${industry.title} | ${brand.name}`} description={industry.lede} path={`/industries/${industry.slug}`} />

      <section className="ag-hero industries-hero" aria-labelledby="industry-title">
        <div className="ag-wrap ag-hero-grid">
          <div>
            <p className="ag-crumbs">
              <Link to="/industries">Industries</Link>
              {' '}
              <span aria-hidden="true">/</span>
              {' '}
              <span>{industry.title}</span>
            </p>
            <p className="ag-eye">Industry</p>
            <h1 id="industry-title">{industry.title}</h1>
            <p className="ag-lead">{industry.lede}</p>
            <div className="ag-actions">
              <Link className="ag-btn ag-btn-light" to={brand.primaryHref}>{brand.primaryCta}</Link>
              <Link className="ag-btn ag-btn-ghost" to="/work">Explore Our Work</Link>
            </div>
          </div>
          <WorkFrame kind={frameKind(industry.slug)} />
        </div>
      </section>

      <section className="ag-sheet cream">
        <div className="ag-wrap">
          <p className="ag-note">{industry.experience}</p>
          <div className="ag-split industry-detail-split">
            <div>
              <h2>Typical problems</h2>
              <ul>{industry.challenges.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
            <div>
              <h2>How we approach them</h2>
              <ul>{industry.solutions.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          </div>
        </div>
      </section>

      <section className="ag-sheet alt">
        <div className="ag-wrap">
          <header className="ag-section-head">
            <p className="ag-kicker">Related</p>
            <h2>Services and projects</h2>
          </header>
          <h3 className="industry-subhead">Services</h3>
          <ul className="ag-list">
            {servicePages.slice(0, 4).map((service) => (
              <li key={service.slug}>
                <Link to={`/services/${service.slug}`}>
                  <strong>{service.title}</strong>
                  <span>{service.lede}</span>
                </Link>
              </li>
            ))}
          </ul>
          <h3 className="industry-subhead">Projects</h3>
          {related.length ? (
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
          ) : (
            <p className="ag-note">No published project in this industry.</p>
          )}
        </div>
      </section>

      <section className="ag-sheet cream">
        <div className="ag-wrap ag-prose">
          <FaqList groups={faqGroups.filter((group) => group.id === 'international' || group.id === 'timelines')} />
        </div>
      </section>

      <CtaBand />
    </div>
  )
}
