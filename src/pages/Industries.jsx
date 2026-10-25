import { Link } from 'react-router-dom'
import IndustrySlider from '../components/about/IndustrySlider'
import Seo from '../components/seo/Seo'
import { CtaBand } from '../components/site/blocks'
import { brand } from '../config/brand'
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

      <section className="ag-sheet">
        <div className="ag-wrap">
          <IndustrySlider />
        </div>
      </section>

      <CtaBand />
    </div>
  )
}
