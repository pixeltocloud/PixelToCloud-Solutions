import { Link, useParams } from 'react-router-dom'
import Seo from '../components/seo/Seo'
import { CtaBand, FaqList } from '../components/site/blocks'
import { WorkFrame, frameKind } from '../components/site/Stage'
import { brand } from '../config/brand'
import { getIndustry, servicePages, faqGroups } from '../data/catalog'
import { caseStudies } from '../data/caseStudies'

export default function IndustryDetail() {
  const { slug } = useParams()
  const industry = getIndustry(slug)

  if (!industry) {
    return (
      <section className="ag-sheet">
        <div className="ag-wrap">
          <Seo title={`Industry not found | ${brand.name}`} noindex />
          <h1 className="ag-ink">That industry page is not listed.</h1>
          <Link to="/industries">All industries</Link>
        </div>
      </section>
    )
  }

  const related = industry.related.map((id) => caseStudies.find((item) => item.slug === id)).filter(Boolean)

  return (
    <div className="ag ag-page">
      <Seo title={`${industry.title} | ${brand.name}`} description={industry.lede} path={`/industries/${industry.slug}`} />
      <section className="ag-hero">
        <div className="ag-wrap ag-hero-grid">
          <div>
            <p className="ag-crumbs"><Link to="/industries">Industries</Link> <span aria-hidden="true">/</span> <span>{industry.title}</span></p>
            <p className="ag-eye">Industry</p>
            <h1>{industry.title}</h1>
            <p className="ag-lead">{industry.lede}</p>
          </div>
          <WorkFrame kind={frameKind(industry.slug)} />
        </div>
      </section>
      <section className="ag-sheet">
        <div className="ag-wrap">
          <p className="ag-note">{industry.experience}</p>
          <div className="ag-split">
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
          <h2>Services</h2>
          <ul className="ag-list">
            {servicePages.slice(0, 4).map((service) => (
              <li key={service.slug}>
                <Link to={`/services/${service.slug}`}><strong>{service.title}</strong><span>{service.lede}</span></Link>
              </li>
            ))}
          </ul>
          <h2>Projects</h2>
          {related.length ? (
            <ul className="ag-list">
              {related.map((study) => (
                <li key={study.slug}><Link to={`/work/${study.slug}`}><strong>{study.shortTitle}</strong><span>{study.timeline}</span></Link></li>
              ))}
            </ul>
          ) : <p>No published project in this industry.</p>}
        </div>
      </section>
      <section className="ag-sheet">
        <div className="ag-wrap ag-prose">
          <FaqList groups={faqGroups.filter((group) => group.id === 'international' || group.id === 'timelines')} />
        </div>
      </section>
      <CtaBand />
    </div>
  )
}
