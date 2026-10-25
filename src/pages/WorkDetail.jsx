import { Link, useParams } from 'react-router-dom'
import Seo from '../components/seo/Seo'
import { CtaBand } from '../components/site/blocks'
import { brand } from '../config/brand'
import { caseStudies, getCaseStudy } from '../data/caseStudies'
import { lessons, workMeta } from '../data/catalog'
import { studyPhoto } from '../data/media'

export default function WorkDetail() {
  const { slug } = useParams()
  const study = getCaseStudy(slug)

  if (!study) {
    return (
      <div className="ag ag-page">
        <Seo title={`Case study not found | ${brand.name}`} noindex />
        <section className="ag-hero">
          <div className="ag-wrap ag-empty">
            <p className="ag-eye">Work</p>
            <h1>Case study not found</h1>
            <p className="ag-lead">That project is not published, or the link is outdated.</p>
            <div className="ag-actions">
              <Link className="ag-btn ag-btn-light" to="/work">Back to work</Link>
              <Link className="ag-btn ag-btn-ghost" to="/contact">Talk to us</Link>
            </div>
          </div>
        </section>
      </div>
    )
  }

  const related = caseStudies.filter((item) => item.slug !== study.slug && item.listed !== false).slice(0, 3)
  const meta = workMeta[study.slug]
  const photo = studyPhoto(study.slug)

  return (
    <div className="ag ag-page">
      <Seo title={`${study.shortTitle} | ${brand.name}`} description={study.outcome} path={`/work/${study.slug}`} />
      <section className="ag-hero-light">
        <div className="ag-wrap">
          <nav className="ag-crumbs" aria-label="Breadcrumb">
            <Link to="/work">Work</Link>
            <span aria-hidden="true">/</span>
            <span>{study.shortTitle}</span>
          </nav>
          <p className="ag-eye">{meta?.badge || 'Case study'}</p>
          <h1 className="ag-ink">{study.shortTitle}</h1>
          <p className="ag-lead">{study.outcome}</p>
          <dl className="ag-specs">
            <div><dt>Client</dt><dd>{study.client}</dd></div>
            <div><dt>Organization</dt><dd>{study.organization}</dd></div>
            <div><dt>Industry</dt><dd>{study.industry}</dd></div>
            <div><dt>Services</dt><dd>{study.systemType}</dd></div>
            <div><dt>Timeline</dt><dd>{study.timeline}</dd></div>
            <div><dt>Live</dt><dd>{study.liveUrl ? <a href={study.liveUrl} target="_blank" rel="noopener noreferrer">Visit site<span className="sr-only"> (opens in a new tab)</span></a> : 'Not public'}</dd></div>
          </dl>
        </div>
      </section>
      <section className="ag-sheet cream">
        {photo ? (
          <div className="ag-wrap study-cover">
            <figure className="detail-photo">
              <img src={photo.src} alt={photo.alt} width="1440" height="960" />
            </figure>
          </div>
        ) : null}
        <div className="ag-wrap ag-split">
          <div className="ag-prose">
            <h2>The challenge</h2>
            <p>{study.challenge}</p>
            <h2>What we built</h2>
            <p>{study.built}</p>
          </div>
          <div>
            <h2>Key features</h2>
            <ul>{study.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
            <h2>Stack</h2>
            <p>{study.techStack.join(', ')}</p>
          </div>
        </div>
      </section>
      <section className="ag-sheet alt">
        <div className="ag-wrap ag-prose">
          <h2>What changed</h2>
          <p>{study.outcome}</p>
          {lessons[study.slug] ? (
            <>
              <h2>What we would repeat</h2>
              <p>{lessons[study.slug]}</p>
            </>
          ) : null}
          {study.quote ? (
            <blockquote>
              <p>“{study.quote.text}”</p>
              <footer>{study.quote.author}, {study.quote.role}</footer>
            </blockquote>
          ) : null}
        </div>
      </section>
      <section className="ag-sheet">
        <div className="ag-wrap">
          <h2>Related projects</h2>
          <ul className="ag-list">
            {related.map((item) => (
              <li key={item.slug}>
                <Link to={`/work/${item.slug}`}><strong>{item.shortTitle}</strong><span>{item.timeline}</span></Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand />
    </div>
  )
}
