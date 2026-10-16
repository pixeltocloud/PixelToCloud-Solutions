import { Link } from 'react-router-dom'
import Seo from '../components/seo/Seo'
import { brand } from '../config/brand'

export default function NotFound() {
  return (
    <div className="ag ag-page">
      <Seo title={`Page not found | ${brand.name}`} description="The page you requested does not exist." noindex />
      <section className="ag-hero" aria-labelledby="not-found-title">
        <div className="ag-wrap ag-empty">
          <p className="ag-eye">404</p>
          <h1 id="not-found-title">This page isn’t here.</h1>
          <p className="ag-lead">
            The link may be outdated, or the page moved. Head back home or browse selected work.
          </p>
          <div className="ag-actions">
            <Link className="ag-btn ag-btn-light" to="/">Go home</Link>
            <Link className="ag-btn ag-btn-ghost" to="/work">View work</Link>
            <Link className="ag-btn ag-btn-ghost" to="/contact">Contact</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
