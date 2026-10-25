import { Link } from 'react-router-dom'
import WhatsAppIcon from '../ui/WhatsAppIcon'
import { brand } from '../../config/brand'
import { contact } from '../../data/founders'

export function CtaBand() {
  return (
    <section className="ag-close" aria-labelledby="site-cta-title">
      <div className="ag-wrap ag-close-row">
        <div>
          <p className="ag-eye">Next step</p>
          <h2 id="site-cta-title">Have a challenge worth solving?</h2>
          <p>Let&apos;s explore what the right website, software, or automation could do for your business.</p>
        </div>
        <div className="ag-close-actions">
          <div className="ag-close-pair">
            <Link className="ag-btn ag-btn-light" to={brand.primaryHref}>{brand.primaryCta}</Link>
            <Link className="ag-btn ag-btn-ghost" to="/contact">Talk to us</Link>
          </div>
          <a
            className="ag-btn ag-btn-whatsapp"
            href={contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon />
            Connect on WhatsApp
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </div>
    </section>
  )
}
