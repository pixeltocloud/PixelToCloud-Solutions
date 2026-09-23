import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Button from '../ui/Button'
import { contact } from '../../data/founders'
import { useTheme } from '../../context/useTheme'
import './Navbar.css'

const links = [
  { to: '/work', label: 'Work' },
  { to: '/services', label: 'Services' },
  { to: '/labs', label: 'Labs' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

function ThemeIcon({ dark }) {
  return dark ? (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M12 2v2.2M12 19.8V22M4.2 12H2M22 12h-2.2M5.6 5.6l1.6 1.6M16.8 16.8l1.6 1.6M5.6 18.4l1.6-1.6M16.8 7.2l1.6-1.6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  ) : (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M20.5 13.4A7.8 7.8 0 0 1 10.6 3.5 8.2 8.2 0 1 0 20.5 13.4Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const closeMenu = () => setOpen(false)

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <header className={`navbar ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="navbar-inner container">
          <Link to="/" className="nav-brand" aria-label="PixelToCloud home" onClick={closeMenu}>
            <img
              src={theme === 'dark' ? '/logo-wordmark-dark.svg' : '/logo-wordmark.svg'}
              alt="PixelToCloud"
              width="168"
              height="30"
              decoding="async"
              className="nav-logo"
            />
          </Link>

          <nav className="nav-links" aria-label="Primary">
            {links.map((link) => (
              <NavLink key={link.to} to={link.to} className={({ isActive }) => (isActive ? 'is-active' : undefined)}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="nav-actions">
            <button
              type="button"
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            >
              <ThemeIcon dark={theme === 'dark'} />
            </button>
            <Button to="/contact" className="nav-cta">
              Start a project
            </Button>
            <button
              className={`nav-toggle ${open ? 'is-open' : ''}`}
              type="button"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-overlay ${open ? 'is-open' : ''}`} onClick={closeMenu} />
      <aside
        className={`mobile-drawer ${open ? 'is-open' : ''}`}
        aria-hidden={!open}
        inert={!open ? true : undefined}
      >
        <div className="drawer-top">
          <Link to="/" className="nav-brand" onClick={closeMenu}>
            <img
              src={theme === 'dark' ? '/logo-wordmark-dark.svg' : '/logo-wordmark.svg'}
              alt="PixelToCloud"
              width="160"
              height="28"
              decoding="async"
              className="nav-logo"
            />
          </Link>
          <button type="button" className="drawer-close" onClick={closeMenu} aria-label="Close menu">
            Close
          </button>
        </div>
        <nav className="drawer-links" aria-label="Mobile">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} onClick={closeMenu}>
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="drawer-footer">
          <Button to="/contact" className="drawer-cta" onClick={closeMenu}>
            Start a project
          </Button>
          <Button href={contact.whatsappLink} target="_blank" rel="noreferrer" variant="secondary" className="drawer-wa">
            WhatsApp
          </Button>
        </div>
      </aside>
    </>
  )
}
