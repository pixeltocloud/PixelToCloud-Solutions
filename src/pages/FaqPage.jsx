import { Link } from 'react-router-dom'
import Seo, { faqSchema } from '../components/seo/Seo'
import { FaqList, CtaBand } from '../components/site/blocks'
import { brand } from '../config/brand'
import { faqGroups } from '../data/catalog'

export default function FaqPage() {
  return (
    <div className="ag ag-page">
      <Seo
        title={`Questions about prices, timelines and ownership | ${brand.name}`}
        description="Answers about PixelToCloud services, prices, 7-day website delivery, payments, who owns the code, and working with clients outside India."
        path="/faq"
        schema={faqSchema(faqGroups.flatMap((group) => group.items))}
      />
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
        <div className="ag-wrap">
          <FaqList groups={faqGroups} />
        </div>
      </section>
      <CtaBand />
    </div>
  )
}
