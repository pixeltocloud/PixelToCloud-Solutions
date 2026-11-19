import { Link } from 'react-router-dom'
import { contact } from '../../data/founders'
import { businessPages } from '../../data/businessPages'
import { serviceGroups } from '../../data/offerings'
import { whatsappHref } from '../site/px'

const popular = ['web-development', 'google-business-profile', 'whatsapp-automation', 'social-media-management', 'web-applications', 'branding']
const services = serviceGroups.flatMap((group) => group.items).filter((item) => popular.includes(item.slug))

export default function Footer() {
  return (
    <footer className="px-footer">
      <div className="px-wrap px-footer-grid">
        <div className="px-footer-about">
          <Link to="/" className="px-brand" aria-label="PixelToCloud home">
            <img src="/logo-icon.svg" alt="" width="40" height="40" />
            <span>PixelToCloud</span>
          </Link>
          <p>PixelToCloud Solutions. Websites, software, WhatsApp automation, marketing and design for businesses in India and worldwide.</p>
          <p>GSTIN 08CSRPA1400M1ZS</p>
        </div>

        <div>
          <h2>Services</h2>
          <ul>
            {services.map((item) => (
              <li key={item.slug}><Link to={`/services/${item.slug}`}>{item.name}</Link></li>
            ))}
            <li><Link to="/services">All services</Link></li>
          </ul>
        </div>

        <div>
          <h2>Who we work with</h2>
          <ul>
            <li><Link to="/clinics">Clinics and doctors</Link></li>
            {businessPages.map((page) => (
              <li key={page.slug}><Link to={`/${page.slug}`}>{page.navLabel}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h2>Company</h2>
          <ul>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/celebrations">Celebrations</Link></li>
            <li><Link to="/work">Our work</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/faq">Questions</Link></li>
            <li><Link to="/login">Client login</Link></li>
          </ul>
        </div>

        <div>
          <h2>Contact</h2>
          <ul>
            <li><a href={whatsappHref('Hi PixelToCloud, I would like to discuss my requirement.')} target="_blank" rel="noopener noreferrer">WhatsApp +91 82193 52124</a></li>
            <li><a href={`tel:${contact.whatsapp}`}>Call +91 82193 52124</a></li>
            <li><a href={`mailto:${contact.email}`}>{contact.email}</a></li>
            <li>Ram Mandir, 30 Beegha, Shalimar, Alwar, Rajasthan 301001</li>
          </ul>
        </div>
      </div>

      <div className="px-wrap px-footer-bottom">
        <span>© {new Date().getFullYear()} PixelToCloud Solutions</span>
        <nav aria-label="Legal">
          <Link to="/privacy">Privacy</Link>
          <Link to="/terms">Terms</Link>
          <Link to="/cookies">Cookies</Link>
        </nav>
      </div>
    </footer>
  )
}
