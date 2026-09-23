import React, { useState, useEffect } from 'react';
import { Icon } from '../ui/Icons';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <div className="nav-wrap">
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
        <a href="#" className="nav-brand" aria-label="PixelToCloud Home" onClick={closeMenu}>
          {/* Master P-Cloud Icon Mark SVG */}
          <svg className="nav-logo-svg" viewBox="0 0 252 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="navPCloudGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1e3a8a" />
                <stop offset="25%" stopColor="#1d4ed8" />
                <stop offset="60%" stopColor="#0284c7" />
                <stop offset="100%" stopColor="#38bdf8" />
              </linearGradient>
            </defs>
            <path
              d="M 72 145 L 42 145 C 16 145, -2 122, -2 92 C -2 64, 18 42, 46 40 C 58 10, 88 -8, 124 -8 C 160 -8, 190 10, 202 40 C 230 42, 250 64, 250 92 C 250 122, 230 145, 198 145 L 128 145"
              fill="none"
              stroke="url(#navPCloudGrad)"
              strokeWidth="16"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M 66 44 C 78 22, 98 12, 124 12 C 150 12, 168 22, 180 44"
              fill="none"
              stroke="url(#navPCloudGrad)"
              strokeWidth="13"
              strokeLinecap="round"
            />
            <path
              d="M 102 145 L 102 44 L 118 44 C 144 44, 154 56, 154 74 C 154 92, 142 104, 118 104 L 102 104"
              fill="none"
              stroke="url(#navPCloudGrad)"
              strokeWidth="16"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="nav-title">PixelTo<span>Cloud</span></span>
        </a>

        <nav>
          <ul className="nav-links">
            <li><a href="#solutions" className="nav-link">Capabilities</a></li>
            <li><a href="#work" className="nav-link">Selected Work</a></li>
            <li><a href="#pillars" className="nav-link">3 Pillars</a></li>
            <li><a href="#guarantees" className="nav-link">Why Us</a></li>
            <li>
              <a
                href="connect"
                className="nav-link"
                style={{ color: 'var(--brand-blue)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
              >
                Smart Card <span style={{ fontSize: '0.65rem', background: '#e0f2fe', padding: '2px 6px', borderRadius: '9999px' }}>Live</span>
              </a>
            </li>
          </ul>
        </nav>

        <div className="nav-actions">
          {/* Direct WhatsApp Action */}
          <a
            href="https://wa.me/918629008768?text=Hi%20Pankaj%2C%20I%20visited%20pixeltocloud.com%20and%20would%20like%20to%20discuss%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp-icon"
            title="Chat on WhatsApp (+91 86290 08768)"
            aria-label="Chat on WhatsApp"
          >
            <Icon name="whatsapp" size={18} color="#10b981" />
          </a>

          {/* Book Call CTA */}
          <a href="#contact" className="btn-cta-pill">
            <span>Book an Intro Call</span>
            <Icon name="arrowRight" size={14} color="#ffffff" />
          </a>

          {/* Mobile Toggle Button */}
          <button
            className="nav-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <Icon name={mobileMenuOpen ? 'close' : 'bars'} size={20} color="var(--text-main)" />
          </button>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="mobile-menu-drawer">
            <a href="#solutions" className="nav-link" onClick={closeMenu}>Capabilities</a>
            <a href="#work" className="nav-link" onClick={closeMenu}>Selected Work</a>
            <a href="#pillars" className="nav-link" onClick={closeMenu}>3 Brand Pillars</a>
            <a href="#guarantees" className="nav-link" onClick={closeMenu}>Why PixelToCloud</a>
            <a href="connect" className="nav-link" onClick={closeMenu} style={{ color: 'var(--brand-blue)' }}>
              Smart Digital Profile ↗
            </a>
            <a href="#contact" className="btn-cta-pill" onClick={closeMenu} style={{ justifyContent: 'center', marginTop: '6px' }}>
              <span>Book an Intro Call</span>
              <Icon name="arrowRight" size={14} color="#ffffff" />
            </a>
          </div>
        )}
      </header>
    </div>
  );
};
