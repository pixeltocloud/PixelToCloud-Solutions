import { Link } from 'react-router-dom'
import Seo from '../components/seo/Seo'
import { CtaBand } from '../components/site/blocks'
import StageLine from '../components/site/StageLine'
import WorkPortfolio from '../components/work/WorkPortfolio'
import { brand } from '../config/brand'
import { deliveryStages } from '../data/catalog'
import './WorkPage.css'

const studies = [
  {
    title: 'Easy My Tax',
    problem: 'Tax return review depended on multi-day email chains.',
    built: 'A portal for GST and tax calculations, an encrypted document vault, return tracking, and billing.',
    outcome: 'Review of client returns moved to same-day turnaround.',
    to: '/work/easy-my-tax',
  },
  {
    title: 'Harish Renova',
    problem: 'Patients needed a clear path to book a consultation on a clinical site.',
    built: 'A clinical site with booking, WhatsApp confirmation, and emergency routing.',
    outcome: 'A confirmed consultation can be requested in under a minute on a phone.',
    to: '/work/harish-renova',
  },
  {
    title: 'Saini Handicrafts',
    problem: 'Handmade work needed an editorial catalog that could reach overseas buyers.',
    built: 'An editorial catalog with multi-currency pricing and commission inquiries.',
    outcome: 'Commission inquiries from overseas jumped after launch.',
    to: '/work/saini-handicrafts',
  },
]

export default function Work() {
  return (
    <div className="ag ag-page work-page">
      <Seo title={`Work | ${brand.name}`} description="Live client sites, plus the engagements we can describe in detail." path="/work" />
      <section className="ag-hero">
        <div className="ag-wrap">
          <p className="ag-eye">Work</p>
          <h1>Sites we have shipped, and the studies we can document.</h1>
          <p className="ag-lead">
            The grid is live client sites. The studies are the engagements we can describe from brief to outcome.
          </p>
          <div className="ag-actions">
            <Link className="ag-btn ag-btn-light" to={brand.primaryHref}>Discuss a similar project</Link>
            <Link className="ag-btn ag-btn-ghost" to="/contact">Talk to us</Link>
          </div>
        </div>
      </section>

      <section className="ag-sheet cream">
        <div className="ag-wrap-wide">
          <WorkPortfolio />
        </div>
      </section>

      <StageLine
        id="engagement"
        kicker="How an engagement runs"
        title="The path from brief to handover"
        titleId="journey-title"
        lead="You approve the scope before the build. You review staging before launch. You receive the code at the end."
        steps={deliveryStages.map((stage) => ({
          title: stage.id,
          text: stage.summary,
          detail: stage.deliverable,
        }))}
        note="A focused website with a fixed scope launches within 7 days, or that payment is returned. Applications, mobile products, and infrastructure use their own milestone schedule. Published case studies took between 2 and 8 weeks because the scope was larger."
      />

      <section className="ag-sheet" aria-labelledby="work-studies-title">
        <div className="ag-wrap">
          <header className="ag-section-head">
            <p className="ag-kicker">Documented studies</p>
            <h2 id="work-studies-title">Evidence from shipped client work</h2>
            <p>Outcomes below are the ones already documented for each engagement.</p>
          </header>
          <ul className="work-studies">
            {studies.map((study) => (
              <li key={study.to}>
                <h3>{study.title}</h3>
                <p><b>Problem</b> {study.problem}</p>
                <p><b>Built</b> {study.built}</p>
                <p><b>Outcome</b> {study.outcome}</p>
                <Link className="ag-btn ag-btn-line" to={study.to}>Read the case study</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand />
    </div>
  )
}
