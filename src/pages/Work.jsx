import { Link } from 'react-router-dom'
import Seo from '../components/seo/Seo'
import { CtaBand } from '../components/site/blocks'
import StageLine from '../components/site/StageLine'
import WorkPortfolio from '../components/work/WorkPortfolio'
import SoftwareList from '../components/site/SoftwareList'
import { brand } from '../config/brand'
import { deliveryStages } from '../data/catalog'
import './WorkPage.css'

const studies = [
  {
    title: 'RegisterBizTax',
    problem: 'Tax return review depended on multi-day email chains.',
    built: 'A portal for GST and tax calculations, an encrypted document vault, return tracking, and billing.',
    outcome: 'Review of client returns moved to same-day turnaround.',
    to: '/work/registerbiztax',
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
      <Seo title={`Our work: websites and software we have built | ${brand.name}`} description="Live websites for doctors, CA firms, shops and teachers, plus software products like PharmaOS pharmacy billing, AccreditOS for colleges and GrowthOS marketing." path="/work" />
      <section className="ag-hero">
        <div className="ag-wrap">
          <p className="ag-eye">Work</p>
          <h1>Websites and software we have built.</h1>
          <p className="ag-lead">
            Live client websites first, then software products, then the projects we can describe from brief to result.
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

      <section className="px-section" aria-labelledby="software-title">
        <div className="px-wrap">
          <div className="px-head">
            <h2 id="software-title">Software we have built</h2>
            <p>Business software and our own products. Some are private builds shown with sample data; we can show any of them on a call.</p>
          </div>
          <SoftwareList />
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
