import { Link } from 'react-router-dom'
import Seo from '../components/seo/Seo'
import { CtaBand } from '../components/site/blocks'
import { WorkFrame, frameKind } from '../components/site/Stage'
import { brand } from '../config/brand'
import { industries } from '../data/catalog'
import './Industries.css'

export default function Industries() {
  return (
    <div className="ag ag-page industries-page">
      <Seo
        title={`Industries | ${brand.name}`}
        description="Industries we have shipped for, and industries we will scope without claiming a specialty."
        path="/industries"
      />

      <section className="ag-hero industries-hero" aria-labelledby="industries-title">
        <div className="ag-wrap">
          <p className="ag-eye">Industries</p>
          <h1 id="industries-title">Where we have shipped, and where we will scope carefully.</h1>
          <p className="ag-lead">
            Healthcare, professional services, and makers have published work. The other pages do not claim a specialty.
          </p>
          <div className="ag-actions">
            <Link className="ag-btn ag-btn-light" to={brand.primaryHref}>{brand.primaryCta}</Link>
            <Link className="ag-btn ag-btn-ghost" to="/work">Explore Our Work</Link>
          </div>
        </div>
      </section>

      <section className="ag-sheet cream industries-body" aria-labelledby="industries-list-title">
        <div className="ag-wrap">
          <header className="ag-section-head">
            <p className="ag-kicker">Sectors</p>
            <h2 id="industries-list-title">Published experience and careful scoping</h2>
            <p>
              Each card is labeled with what we have shipped. Where there is no case study, the page describes typical problems—not a specialty claim.
            </p>
          </header>

          <ul className="industries-grid">
            {industries.map((item) => {
              const hasProjects = item.related?.length > 0
              return (
                <li key={item.slug}>
                  <article className="industry-card">
                    <div className="industry-card-media" aria-hidden="true">
                      <WorkFrame kind={frameKind(item.slug)} />
                    </div>
                    <div className="industry-card-body">
                      <div className="industry-card-top">
                        <span className={`industry-status ${hasProjects ? 'is-shipped' : 'is-scope'}`}>
                          {hasProjects ? 'Published work' : 'Scoped carefully'}
                        </span>
                      </div>
                      <h3>
                        <Link to={`/industries/${item.slug}`}>{item.title}</Link>
                      </h3>
                      <p>{item.lede}</p>
                      <p className="industry-meta">{item.experience}</p>
                      <Link className="industry-cta" to={`/industries/${item.slug}`}>
                        View industry
                        <svg viewBox="0 0 16 16" aria-hidden="true">
                          <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </Link>
                    </div>
                  </article>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      <CtaBand />
    </div>
  )
}
