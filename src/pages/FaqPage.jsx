import { Link } from 'react-router-dom'
import Seo from '../components/seo/Seo'
import { FaqList, CtaBand } from '../components/site/blocks'
import { brand } from '../config/brand'
import { faqGroups } from '../data/catalog'

export default function FaqPage() {
  return (
    <div className="ag ag-page">
      <Seo title={`FAQ | ${brand.name}`} description="Services, pricing, timelines, ownership, and working across countries." path="/faq" />
      <section className="ag-hero" aria-labelledby="faq-title">
        <div className="ag-wrap">
          <p className="ag-eye">FAQ</p>
          <h1 id="faq-title">Questions worth answering clearly.</h1>
          <p className="ag-lead">Prices and dates below are for the offers we actually make. They are not a fixed fee for every project.</p>
          <div className="ag-actions">
            <Link className="ag-btn ag-btn-light" to={brand.primaryHref}>{brand.primaryCta}</Link>
            <Link className="ag-btn ag-btn-ghost" to="/contact">Talk to us</Link>
          </div>
        </div>
      </section>
      <section className="ag-sheet cream">
        <div className="ag-wrap ag-prose">
          <FaqList groups={faqGroups} />
        </div>
      </section>
      <CtaBand />
    </div>
  )
}
