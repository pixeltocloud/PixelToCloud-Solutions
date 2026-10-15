import { Link } from 'react-router-dom'
import Seo from '../components/seo/Seo'
import { CtaBand } from '../components/site/blocks'
import WorkPortfolio, { padIndex } from '../components/work/WorkPortfolio'
import { brand } from '../config/brand'
import { clientSites } from '../data/clientSites'

export default function Work() {
  const total = clientSites.length

  return (
    <div className="ag ag-page">
      <Seo title={`Work | ${brand.name}`} description="Published projects and one lab study, labeled so a demo is never presented as a client." path="/work" />
      <section className="ag-hero">
        <div className="ag-wrap">
          <p className="ag-eye">
            Selected work
            <span aria-hidden="true">
              {' '}
              /
              {' '}
              {padIndex(1)}
              —
              {padIndex(total)}
            </span>
          </p>
          <h1>
            Good work starts with
            <br />
            understanding the business.
          </h1>
          <p className="ag-lead">
            From specialist practices and handcrafted brands to security and technology businesses,
            we create digital experiences that make what you do easier to discover, understand, and choose.
          </p>
          <p className="work-page-aside">
            Real businesses. Distinct challenges. Thoughtful digital solutions.
          </p>
          <div className="ag-actions">
            <Link className="ag-btn ag-btn-light" to={brand.primaryHref}>Discuss a similar project</Link>
            <Link className="ag-btn ag-btn-ghost" to="/contact">Talk to us</Link>
          </div>
        </div>
      </section>

      <section className="ag-sheet">
        <div className="ag-wrap-wide">
          <WorkPortfolio />
        </div>
      </section>
      <CtaBand />
    </div>
  )
}
