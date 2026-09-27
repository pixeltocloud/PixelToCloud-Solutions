import { Link } from 'react-router-dom'
import { sectorGroups, sectorsInGroup } from '../data/sectors'
import Seo from '../components/seo/Seo'
import './SectorPages.css'

export default function ServeIndex() {
  return (
    <div className="page-enter sector-index">
      <Seo
        title="Who we serve | PixelToCloud"
        description="SaaS, commerce, property, fintech, healthcare, and cloud — a page for each kind of work PixelToCloud builds."
        path="/serve"
      />
      <section className="sector-hero">
        <div className="container">
          <nav className="service-breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="crumb-sep">/</span>
            <span className="crumb-current">Who we serve</span>
          </nav>
          <p className="sector-kicker">Industries</p>
          <h1>A page for the work, not a menu blurb.</h1>
          <p className="sector-lede">
            Pick the closest room. Each page shows the idea, how a day in the product feels, and which services usually come with it.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container sector-index-groups">
          {sectorGroups.map((group) => (
            <div key={group.id}>
              <div className="who-group-label">
                <h2>{group.name}</h2>
                <p>{group.line}</p>
              </div>
              <div className="serve-index-grid">
                {sectorsInGroup(group.id).map((sector) => (
                  <Link key={sector.id} to={`/serve/${sector.id}`} className="serve-index-card">
                    <img src={sector.image} alt="" width="800" height="520" loading="lazy" decoding="async" />
                    <span>
                      <strong>{sector.title}</strong>
                      <em>{sector.kicker}</em>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
