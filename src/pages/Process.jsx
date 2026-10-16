import { Link } from 'react-router-dom'
import Seo from '../components/seo/Seo'
import { CtaBand } from '../components/site/blocks'
import { brand } from '../config/brand'
import { deliveryStages } from '../data/catalog'

export default function Process() {
  return (
    <div className="ag ag-page">
      <Seo title={`Process | ${brand.name}`} description="Discover, define, design, develop, launch, and improve. A focused website can launch in 7 days." path="/process" />
      <section className="ag-hero" aria-labelledby="process-title">
        <div className="ag-wrap">
          <p className="ag-eye">How an engagement runs</p>
          <h1 id="process-title">From the first conversation to a solution that works.</h1>
          <p className="ag-lead">You approve the scope before the build. You review staging before launch. You receive the code at the end.</p>
          <div className="ag-actions">
            <Link className="ag-btn ag-btn-light" to={brand.primaryHref}>{brand.primaryCta}</Link>
            <Link className="ag-btn ag-btn-ghost" to="/contact">Talk to us</Link>
          </div>
        </div>
      </section>
      <section className="ag-sheet cream" aria-labelledby="process-stages-title">
        <div className="ag-wrap">
          <header className="ag-section-head">
            <p className="ag-kicker">Stages</p>
            <h2 id="process-stages-title">The path from brief to handover</h2>
          </header>
          <ol className="ag-steps">
            {deliveryStages.map((stage, index) => (
              <li key={stage.id}>
                <b>0{index + 1}</b>
                <h3>{stage.id}</h3>
                <p>{stage.summary} Deliverable: {stage.deliverable}</p>
              </li>
            ))}
          </ol>
          <p className="ag-note">A focused website with a fixed scope launches within 7 days, or that payment is returned. Applications, mobile products, and infrastructure use their own milestone schedule. Published case studies took between 2 and 8 weeks because the scope was larger.</p>
        </div>
      </section>
      <section className="ag-sheet alt">
        <div className="ag-wrap ag-prose">
          <h2>How we communicate</h2>
          <p>You work with the two founders. Reviews happen on the staging link. A reply usually comes the same business day, India time. International clients book calls against that clock.</p>
          <p>Quality checks cover the agreed pages or flows, a phone pass, and the handover list: repository, domain, and server access. Support after the 30-day warranty is optional.</p>
          <div className="ag-actions">
            <Link className="ag-btn ag-btn-solid" to="/start-project">Start a project</Link>
            <Link className="ag-btn ag-btn-line" to="/contact">Contact us</Link>
          </div>
        </div>
      </section>
      <CtaBand />
    </div>
  )
}
