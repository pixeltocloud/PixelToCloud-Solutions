import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import UserMenu from '../auth/UserMenu'
import './Navbar.css'

const links = [
  { to: '/services', label: 'Services', matchPrefix: true },
  { to: '/work', label: 'Work', matchPrefix: true },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

function suppressMouseFocus(event) {
  if (event.button !== 0) return
  const node = event.target.closest('a, button, summary')
  if (!node || !event.currentTarget.contains(node)) return
  event.preventDefault()
}

function BrandMark() {
  return (
    <>
      <img
        src="/logo-icon.svg"
        alt=""
        width="56"
        height="56"
        decoding="async"
        className="nav-mark"
      />
      <span className="nav-wordmark">PixelToCloud</span>
    </>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { user } = useAuth()
  const location = useLocation()
  const drawerRef = useRef(null)
  const toggleRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
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

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (!open) return undefined
    const drawer = drawerRef.current
    const focusable = drawer?.querySelectorAll('a, button')
    focusable?.[0]?.focus()

    const onKey = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
        return
      }
      if (event.key !== 'Tab' || !focusable?.length) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  const closeMenu = () => setOpen(false)
  /* Transparent nav over dark editorial heroes only — not light FAQ/insights/legal pages */
  const isHome = [
    '/',
    '/services',
    '/work',
    '/about',
    '/process',
    '/industries',
    '/contact',
    '/labs',
    '/start-project',
    '/login',
    '/faq',
    '/insights',
    '/privacy',
    '/terms',
    '/cookies',
  ].includes(location.pathname)
    || location.pathname.startsWith('/services/')
    || location.pathname.startsWith('/industries/')
    || location.pathname.startsWith('/work/')
    || location.pathname.startsWith('/insights/')

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <header
        className={`navbar ${scrolled ? 'is-scrolled' : ''} ${isHome ? 'is-home' : ''}`}
        onMouseDown={suppressMouseFocus}
      >
        <div className="navbar-inner container">
          <Link to="/" className="nav-brand" aria-label="PixelToCloud home" onClick={closeMenu}>
            <BrandMark />
          </Link>

          <nav className="nav-links" aria-label="Primary">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => (isActive ? 'is-active' : undefined)}
                end={!link.matchPrefix}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="nav-actions">
            {user ? (
              <UserMenu />
            ) : (
              <Link className="nav-cta nav-cta--ghost" to="/login">
                Sign In
              </Link>
            )}
            <Link className="nav-cta" to="/contact">
              Let&apos;s Talk
            </Link>
            <button
              ref={toggleRef}
              className={`nav-toggle ${open ? 'is-open' : ''}`}
              type="button"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-menu"
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
        id="mobile-menu"
        ref={drawerRef}
        className={`mobile-drawer ${open ? 'is-open' : ''}`}
        aria-hidden={!open}
        inert={!open ? true : undefined}
        onMouseDown={suppressMouseFocus}
      >
        <div className="drawer-top">
          <Link to="/" className="nav-brand" onClick={closeMenu}>
            <BrandMark />
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
          {user ? <UserMenu variant="drawer" onNavigate={closeMenu} /> : null}
        </nav>
        <div className="drawer-footer">
          {!user ? (
            <Link className="nav-cta nav-cta--ghost drawer-cta" to="/login" onClick={closeMenu}>
              Sign In
            </Link>
          ) : null}
          <Link className="nav-cta drawer-cta" to="/contact" onClick={closeMenu}>
            Let&apos;s Talk
          </Link>
        </div>
      </aside>
    </>
  )
}
