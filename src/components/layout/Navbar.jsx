import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { serviceGroups } from '../../data/offerings'
import { WhatsAppIcon, whatsappHref } from '../site/px'

function Caret() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

const pages = [
  { to: '/pricing', label: 'Pricing' },
  { to: '/celebrations', label: 'Celebrations' },
  { to: '/work', label: 'Our work' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

const chatLink = whatsappHref('Hi PixelToCloud, I visited your website and would like to discuss my requirement.')

export default function Navbar() {
  const [drawer, setDrawer] = useState(false)
  const [mega, setMega] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { user } = useAuth()
  const location = useLocation()
  const headerRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setDrawer(false)
    setMega(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = drawer ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [drawer])

  useEffect(() => {
    if (!mega) return undefined
    const onKey = (event) => {
      if (event.key === 'Escape') setMega(false)
    }
    const onClick = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) setMega(false)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onClick)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onClick)
    }
  }, [mega])

  return (
    <header ref={headerRef} className={`px-header${scrolled || mega ? ' is-scrolled' : ''}`}>
      <a className="sr-only" href="#main-content">Skip to content</a>
      <div className="px-wrap px-header-inner">
        <Link to="/" className="px-brand" aria-label="PixelToCloud home">
          <img src="/logo-icon.svg" alt="" width="40" height="40" />
          <span>PixelToCloud</span>
        </Link>

        <nav className="px-nav" aria-label="Main">
          <button type="button" aria-expanded={mega} aria-controls="px-services-menu" onClick={() => setMega((value) => !value)}>
            Services <Caret />
          </button>
          {pages.map((page) => (
            <NavLink key={page.to} to={page.to}>{page.label}</NavLink>
          ))}
        </nav>

        <div className="px-header-cta px-actions">
          {user ? <Link className="px-btn px-btn-line px-btn-small" to="/dashboard">Dashboard</Link> : null}
          <a className="px-btn px-btn-whatsapp px-btn-small" href={chatLink} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon /> WhatsApp us
          </a>
        </div>

        <button
          type="button"
          className="px-menu-toggle"
          aria-expanded={drawer}
          aria-controls="px-drawer"
          aria-label={drawer ? 'Close menu' : 'Open menu'}
          onClick={() => setDrawer((value) => !value)}
        >
          {drawer ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" /></svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
          )}
        </button>
      </div>

      <div id="px-services-menu" className="px-mega" hidden={!mega}>
        <div className="px-wrap">
          <div className="px-mega-grid">
            {serviceGroups.map((group) => (
              <div key={group.id}>
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item.slug}><Link to={`/services/${item.slug}`}>{item.name}</Link></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="px-mega-foot">
            <Link className="px-link" to="/services">All services</Link>
            <Link className="px-link" to="/pricing">Prices and packages</Link>
            <Link className="px-link" to="/celebrations">Invitations and event videos</Link>
          </div>
        </div>
      </div>

      <div id="px-drawer" className="px-drawer" hidden={!drawer}>
        {serviceGroups.map((group) => (
          <details key={group.id}>
            <summary>{group.title} <Caret /></summary>
            <ul>
              {group.items.map((item) => (
                <li key={item.slug}><Link to={`/services/${item.slug}`}>{item.name}</Link></li>
              ))}
            </ul>
          </details>
        ))}
        {pages.map((page) => (
          <Link key={page.to} to={page.to}>{page.label}</Link>
        ))}
        <div className="px-actions">
          <a className="px-btn px-btn-whatsapp" href={chatLink} target="_blank" rel="noopener noreferrer"><WhatsAppIcon /> WhatsApp us</a>
          {user ? <Link className="px-btn px-btn-line" to="/dashboard">Dashboard</Link> : <Link className="px-btn px-btn-line" to="/login">Client login</Link>}
        </div>
      </div>
    </header>
  )
}
