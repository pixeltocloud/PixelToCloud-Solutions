import { Link } from 'react-router-dom'
import { contact } from '../../data/founders'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-brand">PixelToCloud</div>
          <p className="footer-desc">
            Websites and custom software for startups and growing businesses—built with full ownership and direct
            engineer access.
          </p>
          <p className="footer-note">Full IP ownership · Fixed-scope milestones</p>
        </div>

        <div>
          <p className="footer-col-title">Services</p>
          <div className="footer-links">
            <Link to="/services#business-websites">Business websites</Link>
            <Link to="/services#custom-software">Custom web applications</Link>
            <Link to="/services#ecommerce">E-commerce experiences</Link>
            <Link to="/services#cloud-devops">Cloud & DevOps</Link>
          </div>
        </div>

        <div>
          <p className="footer-col-title">Selected work</p>
          <div className="footer-links">
            <Link to="/work/easy-my-tax">Easy My Tax</Link>
            <Link to="/work/harish-renova">Harish Renova</Link>
            <Link to="/work/saini-handicrafts">Saini Handicrafts</Link>
            <Link to="/work/nebula-3d">Nebula3D</Link>
            <Link to="/labs">Engineering lab</Link>
          </div>
        </div>

        <div>
          <p className="footer-col-title">Company</p>
          <div className="footer-links">
            <Link to="/about">About</Link>
            <Link to="/contact">Start a project</Link>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <div>© {new Date().getFullYear()} PixelToCloud Solutions. All rights reserved.</div>
        <div>Built by Pankaj Gupta & Tushar Singhal</div>
      </div>
    </footer>
  )
}
