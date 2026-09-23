import { Link, useParams } from 'react-router-dom'
import { getCaseStudy } from '../data/caseStudies'
import Button from '../components/ui/Button'
import FinalCTA from '../components/sections/FinalCTA'
import Seo from '../components/seo/Seo'
import './WorkDetail.css'

export default function WorkDetail() {
  const { slug } = useParams()
  const study = getCaseStudy(slug)

  if (!study) {
    return (
      <section className="section page-enter">
        <Seo title="Case study not found | PixelToCloud" noindex />
        <div className="container">
          <h1>Case study not found</h1>
          <Button to="/work" variant="secondary">
            Back to Work
          </Button>
        </div>
      </section>
    )
  }

  return (
    <div className="page-enter">
      <Seo
        title={`${study.shortTitle} Case Study | PixelToCloud`}
        description={study.outcome}
        path={`/work/${study.slug}`}
      />
      <section className="work-detail-hero">
        <div className="container">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/work">Work</Link>
            <span>/</span>
            <span>{study.shortTitle}</span>
          </nav>
          <p className="page-kicker">{study.tag}</p>
          <h1>{study.title}</h1>
          <p className="lead">{study.outcome}</p>
          <dl className="spec-grid">
            <div>
              <dt>Client</dt>
              <dd>{study.client}</dd>
            </div>
            <div>
              <dt>Organization</dt>
              <dd>{study.organization}</dd>
            </div>
            <div>
              <dt>Industry</dt>
              <dd>{study.industry}</dd>
            </div>
            <div>
              <dt>System Type</dt>
              <dd>{study.systemType}</dd>
            </div>
            <div>
              <dt>Timeline</dt>
              <dd>{study.timeline}</dd>
            </div>
            <div>
              <dt>Live</dt>
              <dd>
                {study.liveUrl?.startsWith('http') ? (
                  <a href={study.liveUrl} target="_blank" rel="noreferrer">
                    Visit site
                  </a>
                ) : (
                  <Link to={study.liveUrl || '/labs'}>View in Labs</Link>
                )}
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="section">
        <div className="container detail-layout">
          <div className="narrative-grid">
            <article>
              <h2>The Challenge</h2>
              <p>{study.challenge}</p>
            </article>
            <article>
              <h2>What PixelToCloud Built</h2>
              <p>{study.built}</p>
            </article>
          </div>
          <div className="detail-cover">
            <img
              src={study.coverImage}
              alt={`${study.shortTitle} product preview`}
              width="960"
              height="640"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container meta-panels">
          <article>
            <h2>Tech stack</h2>
            <div className="chip-row">
              {study.techStack.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </article>
          <article>
            <h2>Key features</h2>
            <ul>
              {study.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      {study.quote ? (
        <section className="section quote-section">
          <div className="container">
            <blockquote>
              <p>“{study.quote.text}”</p>
              <footer>
                <strong>{study.quote.author}</strong>
                <span>{study.quote.role}</span>
              </footer>
            </blockquote>
          </div>
        </section>
      ) : null}

      <FinalCTA />
    </div>
  )
}
