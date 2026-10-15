import Seo from '../components/seo/Seo'
import { LegalNotice } from '../components/site/blocks'
import { brand } from '../config/brand'

export default function Cookies() {
  return (
    <article className="ag ag-page">
      <Seo title={`Cookies | ${brand.name}`} description="How this site uses cookies and local storage." path="/cookies" />
      <section className="ag-hero-light">
        <div className="ag-wrap ag-prose">
          <p className="ag-eye">Legal</p>
          <h1 className="ag-ink">Cookies</h1>
          <LegalNotice />
          <p className="ag-lead">Last updated: October 13, 2026.</p>
        </div>
      </section>
      <section className="ag-sheet">
        <div className="ag-wrap ag-prose">
          <h2>What we store</h2>
          <ul>
            <li>A session flag so the opening offer is not shown again in the same visit.</li>
            <li>An authentication session, if you sign in, kept by the account provider in the browser.</li>
            <li>A theme preference, if you switch light and dark.</li>
            <li>Analytics only when the analytics setting is enabled for the deployment.</li>
          </ul>
          <h2>What we do not do</h2>
          <p>We do not sell browsing data. We do not run an advertising cookie network from this site.</p>
          <h2>Your choices</h2>
          <p>You can block cookies in the browser. Sign-in will not work without the session cookie from the account provider.</p>
        </div>
      </section>
    </article>
  )
}
