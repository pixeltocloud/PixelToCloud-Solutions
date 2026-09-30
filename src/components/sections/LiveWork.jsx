import { Link } from 'react-router-dom'
import { portfolioStudies } from '../../data/portfolioStudies'
import './LiveWork.css'

function Card({ study }) {
  return (
    <article className="live-work-card" style={{ '--card': study.accent }}>
      <div className="live-work-frame" aria-hidden="true">
        <div className="live-work-chrome">
          <span />
          <span />
          <span />
          <small>Client work</small>
        </div>
        <div className="live-work-screen">
          <strong>{study.shortTitle}</strong>
          <em>{study.tag}</em>
        </div>
      </div>
      <div className="live-work-body">
        <h3>{study.shortTitle}</h3>
        <p>{study.outcome}</p>
        <div className="live-work-actions">
          <Link to={`/work/${study.slug}`}>Read the note</Link>
        </div>
      </div>
    </article>
  )
}

export default function LiveWork() {
  const featured = portfolioStudies.filter((study) => study.featured)

  return (
    <section className="section live-work" id="selected-work">
      <div className="container">
        <div className="live-work-head">
          <div>
            <p className="section-tag">Selected work</p>
            <h2 className="section-title">Sites and tools we shipped</h2>
            <p className="section-desc">
              Names and what we built. Client website addresses are not shown.
            </p>
          </div>
          <Link to="/work" className="text-link">
            All work
          </Link>
        </div>
        <div className="live-work-grid">
          {featured.map((study) => (
            <Card key={study.slug} study={study} />
          ))}
        </div>
      </div>
    </section>
  )
}
