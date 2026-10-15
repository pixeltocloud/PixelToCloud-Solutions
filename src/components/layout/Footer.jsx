import { Link } from 'react-router-dom'
import { contact } from '../../data/founders'
import { useTheme } from '../../context/useTheme'
import './Footer.css'

export default function Footer() {
  const { theme, toggleTheme } = useTheme()
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link to="/" className="footer-brand" aria-label="PixelToCloud home">
            <img src="/pixeltocloud-logo.svg" alt="" width="36" height="36" decoding="async" />
            <span>PixelToCloud</span>
          </Link>
          <p className="footer-desc">
            Websites, custom software, and automation, handed over with the code.
            Offices in {contact.location}.
          </p>
        </div>

        <div>
          <p className="footer-col-title">Explore</p>
          <div className="footer-links">
            <Link to="/services">Services</Link>
            <Link to="/work">Work</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        <div>
          <p className="footer-col-title">Connect</p>
          <div className="footer-links">
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            <a href={contact.whatsappLink} target="_blank" rel="noreferrer">WhatsApp</a>
            <a href={contact.appointmentLink} target="_blank" rel="noreferrer">Book an intro call</a>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <div>© {new Date().getFullYear()} PixelToCloud Solutions. All rights reserved.</div>
        <div className="footer-legal">
          <Link to="/privacy">Privacy</Link>
          <Link to="/terms">Terms</Link>
          <Link to="/cookies">Cookies</Link>
          <button type="button" className="footer-theme" onClick={toggleTheme}>
            {theme === 'dark' ? 'Light theme' : 'Dark theme'}
          </button>
        </div>
      </div>
    </footer>
  )
}
