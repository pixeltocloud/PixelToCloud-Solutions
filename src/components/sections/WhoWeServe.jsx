import { Link } from 'react-router-dom'
import { sectorGroups, sectorsInGroup } from '../../data/sectors'
import './WhoWeServe.css'

export default function WhoWeServe() {
  return (
    <section className="section who-serve" id="who-we-serve" aria-label="Who we serve">
      <div className="container">
        <div className="who-serve-head">
          <p className="who-kicker">Who we serve</p>
          <h2>Where a brief usually starts.</h2>
          <p>
            These verticals are written up because we know them well. If yours sits beside them, or somewhere else, we still scope and build it.
          </p>
        </div>

        {sectorGroups.map((group) => (
          <div key={group.id} className="who-group">
            <div className="who-group-label">
              <h3>{group.name}</h3>
              <p>{group.line}</p>
            </div>
            <div className="who-grid">
              {sectorsInGroup(group.id).map((sector) => (
                <Link key={sector.id} to={`/serve/${sector.id}`} className="who-card">
                  <img src={sector.image} alt="" width="800" height="520" loading="lazy" decoding="async" />
                  <span className="who-card-shade" aria-hidden="true" />
                  <span className="who-card-copy">
                    <span className="who-card-kicker">{sector.kicker}</span>
                    <strong>{sector.title}</strong>
                    <span className="who-card-line">{sector.headline}</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
