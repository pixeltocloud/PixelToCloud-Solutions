import { Link } from 'react-router-dom'
import { contact } from '../../data/founders'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link to="/" className="footer-brand" aria-label="PixelToCloud home">
            <img src="/pixeltocloud-logo.svg" alt="" width="36" height="36" decoding="async" />
            <span>PixelToCloud</span>
          </Link>
          <p className="footer-desc">
            Website development agency crafting high-converting sites, custom business software, and AI
            automation—with 100% source-code ownership. {contact.location}.
          </p>
          <p className="footer-note">Registered under PixelToCloud Solutions.</p>
        </div>

        <div>
          <p className="footer-col-title">Explore</p>
          <div className="footer-links">
            <Link to="/services">Services</Link>
            <Link to="/work">Our Work</Link>
            <Link to="/about">About Us</Link>
            <Link to="/labs">Engineering Lab</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
        </div>

        <div>
          <p className="footer-col-title">Connect</p>
          <div className="footer-links">
            <a href={contact.whatsappLink} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <a href={contact.appointmentLink} target="_blank" rel="noreferrer">
              Request a 15-min call
            </a>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            <a href={contact.connectUrl}>Smart connect card</a>
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <div>© {new Date().getFullYear()} PixelToCloud Solutions. All rights reserved.</div>
        <div>Built by Pankaj Gupta & Rusmeen · This site is our proof of work</div>
      </div>
    </footer>
  )
}
