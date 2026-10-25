import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import UserMenu from '../auth/UserMenu'
import { industries, servicePages } from '../../data/catalog'
import './Navbar.css'

const serviceColumns = [
  {
    label: 'Build',
    items: ['web-development', 'web-applications', 'mobile-app-development', 'ecommerce'],
  },
  {
    label: 'Systems',
    items: ['ai-automation', 'cloud-devops'],
  },
  {
    label: 'Growth',
    items: ['digital-marketing'],
  },
].map((column) => ({
  ...column,
  items: column.items.map((slug) => servicePages.find((item) => item.slug === slug)).filter(Boolean),
}))

const companyLinks = [
  { to: '/about', title: 'About', text: 'The studio, the founders, and how the work is run.' },
  { to: '/work', title: 'Work', text: 'Published sites, the studies we can document, and how an engagement runs.' },
  { to: '/faq', title: 'FAQ', text: 'Pricing, timelines, ownership, and working across countries.' },
  { to: '/contact', title: 'Contact', text: 'Write or book a call. Hours follow India time.' },
]

function suppressMouseFocus(event) {
  if (event.button !== 0) return
  const node = event.target.closest('a, button, summary')
  if (!node || !event.currentTarget.contains(node)) return
  event.preventDefault()
}

function Caret() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

function DrawerGroup({ label, menuOpen, children }) {
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    if (!menuOpen) setExpanded(false)
  }, [menuOpen])

  return (
    <div className={`drawer-group${expanded ? ' is-open' : ''}`}>
      <button
        type="button"
        className="drawer-summary"
        aria-expanded={expanded}
        onClick={() => setExpanded((value) => !value)}
      >
        <span>{label}</span>
        <span className="drawer-caret" aria-hidden="true">
          <Caret />
        </span>
      </button>
      <div className="drawer-sub">
        <div className="drawer-sub-inner">{children}</div>
      </div>
    </div>
  )
}

function MegaPanel({ id, open, label, onEnter, children }) {
  return (
    <div
      id={id}
      role="region"
      aria-label={label}
      className={`mega ${open ? 'is-open' : ''}`}
      onMouseEnter={onEnter}
      aria-hidden={open ? undefined : true}
      inert={open ? undefined : true}
    >
      <div className="mega-shell">
        <div className="mega-body">{children}</div>
      </div>
    </div>
  )
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
  const [menu, setMenu] = useState(null)
  const [scrolled, setScrolled] = useState(false)
  const { user } = useAuth()
  const location = useLocation()
  const drawerRef = useRef(null)
  const toggleRef = useRef(null)
  const closeTimer = useRef(null)

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
    setMenu(null)
  }, [location.pathname])

  useEffect(() => {
    if (!menu) return undefined
    const onKey = (event) => {
      if (event.key === 'Escape') setMenu(null)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [menu])

  const holdMenu = (id) => {
    window.clearTimeout(closeTimer.current)
    setMenu(id)
  }

  const releaseMenu = () => {
    window.clearTimeout(closeTimer.current)
    closeTimer.current = window.setTimeout(() => setMenu(null), 140)
  }

  useEffect(() => {
    if (!open) return undefined
    const drawer = drawerRef.current
    const focusableIn = () => [...(drawer?.querySelectorAll('a, button') ?? [])].filter((node) => !node.closest('.drawer-group:not(.is-open) .drawer-sub'))
    drawer?.querySelector('.drawer-close')?.focus()

    const onKey = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
        return
      }
      const focusable = focusableIn()
      if (event.key !== 'Tab' || !focusable.length) return
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
    '/industries',
    '/contact',
    '/start-project',
    '/login',
    '/faq',
    '/privacy',
    '/terms',
    '/cookies',
  ].includes(location.pathname)
    || location.pathname.startsWith('/services/')
    || location.pathname.startsWith('/industries/')
    || location.pathname.startsWith('/work/')

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <header
        className={`navbar ${scrolled ? 'is-scrolled' : ''} ${isHome ? 'is-home' : ''} ${menu ? 'is-menu-open' : ''}`}
        onMouseDown={suppressMouseFocus}
        onMouseLeave={releaseMenu}
      >
        <div className="navbar-inner container">
          <Link to="/" className="nav-brand" aria-label="PixelToCloud home" onClick={closeMenu}>
            <BrandMark />
          </Link>

          <nav className="nav-links" aria-label="Primary">
            <NavLink to="/" end onMouseEnter={() => holdMenu(null)}>Home</NavLink>
            <div
              className={`nav-item ${menu === 'services' ? 'is-open' : ''}`}
              onMouseEnter={() => holdMenu('services')}
            >
              <NavLink to="/services" className={({ isActive }) => (isActive ? 'is-active' : undefined)}>Services</NavLink>
              <button
                type="button"
                className="nav-chevron"
                aria-expanded={menu === 'services'}
                aria-controls="mega-services"
                aria-label={menu === 'services' ? 'Hide Services menu' : 'Show Services menu'}
                onClick={() => setMenu((current) => (current === 'services' ? null : 'services'))}
              >
                <Caret />
              </button>
            </div>
            <div
              className={`nav-item ${menu === 'industries' ? 'is-open' : ''}`}
              onMouseEnter={() => holdMenu('industries')}
            >
              <NavLink to="/industries" className={({ isActive }) => (isActive ? 'is-active' : undefined)}>Industries</NavLink>
              <button
                type="button"
                className="nav-chevron"
                aria-expanded={menu === 'industries'}
                aria-controls="mega-industries"
                aria-label={menu === 'industries' ? 'Hide Industries menu' : 'Show Industries menu'}
                onClick={() => setMenu((current) => (current === 'industries' ? null : 'industries'))}
              >
                <Caret />
              </button>
            </div>
            <div
              className={`nav-item ${menu === 'company' ? 'is-open' : ''}`}
              onMouseEnter={() => holdMenu('company')}
            >
              <NavLink to="/about" className={({ isActive }) => (isActive ? 'is-active' : undefined)}>Company</NavLink>
              <button
                type="button"
                className="nav-chevron"
                aria-expanded={menu === 'company'}
                aria-controls="mega-company"
                aria-label={menu === 'company' ? 'Hide Company menu' : 'Show Company menu'}
                onClick={() => setMenu((current) => (current === 'company' ? null : 'company'))}
              >
                <Caret />
              </button>
            </div>
          </nav>

          <div className="nav-actions" onMouseEnter={() => holdMenu(null)}>
            {user ? <UserMenu /> : (
              <Link className="nav-cta nav-cta--ghost" to="/login">
                Sign In
              </Link>
            )}
            <Link className="nav-cta" to="/contact">
              <span>Let&apos;s Talk</span>
              <span className="nav-cta-arrow" aria-hidden="true">→</span>
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

        <MegaPanel id="mega-services" open={menu === 'services'} label="Services menu" onEnter={() => holdMenu('services')}>
          <div className="mega-cols">
            {serviceColumns.map((column) => (
              <div key={column.label}>
                <h3>{column.label}</h3>
                <ul>
                  {column.items.map((item) => (
                    <li key={item.slug}>
                      <Link to={`/services/${item.slug}`} onClick={() => setMenu(null)}>
                        <strong>{item.title}</strong>
                        <span>{item.lede}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <Link className="mega-all" to="/services" onClick={() => setMenu(null)}>All services →</Link>
        </MegaPanel>

        <MegaPanel id="mega-industries" open={menu === 'industries'} label="Industries menu" onEnter={() => holdMenu('industries')}>
          <div className="mega-cols">
            <div>
              <h3>Practices</h3>
              <ul>
                {industries.slice(0, 4).map((item) => (
                  <li key={item.slug}>
                    <Link to={`/industries/${item.slug}`} onClick={() => setMenu(null)}>
                      <strong>{item.title}</strong>
                      <span>{item.lede}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3>More</h3>
              <ul>
                {industries.slice(4).map((item) => (
                  <li key={item.slug}>
                    <Link to={`/industries/${item.slug}`} onClick={() => setMenu(null)}>
                      <strong>{item.title}</strong>
                      <span>{item.lede}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <Link className="mega-all" to="/industries" onClick={() => setMenu(null)}>All industries →</Link>
        </MegaPanel>

        <MegaPanel id="mega-company" open={menu === 'company'} label="Company menu" onEnter={() => holdMenu('company')}>
          <div className="mega-cols">
            <div>
              <h3>Studio</h3>
              <ul>
                {companyLinks.map((item) => (
                  <li key={item.to}>
                    <Link to={item.to} onClick={() => setMenu(null)}>
                      <strong>{item.title}</strong>
                      <span>{item.text}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </MegaPanel>
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
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>
        <nav className="drawer-links" aria-label="Mobile">
          <NavLink to="/" end onClick={closeMenu}>Home</NavLink>
          <DrawerGroup label="Services" menuOpen={open}>
            {serviceColumns.map((column) => (
              <div key={column.label} className="drawer-cluster">
                <p>{column.label}</p>
                {column.items.map((item) => (
                  <Link key={item.slug} to={`/services/${item.slug}`} onClick={closeMenu}>{item.title}</Link>
                ))}
              </div>
            ))}
            <Link className="drawer-all" to="/services" onClick={closeMenu}>All services</Link>
          </DrawerGroup>
          <DrawerGroup label="Industries" menuOpen={open}>
            {industries.map((item) => (
              <Link key={item.slug} to={`/industries/${item.slug}`} onClick={closeMenu}>{item.title}</Link>
            ))}
            <Link className="drawer-all" to="/industries" onClick={closeMenu}>All industries</Link>
          </DrawerGroup>
          <NavLink to="/work" onClick={closeMenu}>Work</NavLink>
          <DrawerGroup label="Company" menuOpen={open}>
            {companyLinks.filter((item) => item.to !== '/work').map((item) => (
              <Link key={item.to} to={item.to} onClick={closeMenu}>{item.title}</Link>
            ))}
          </DrawerGroup>
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
            <span className="nav-cta-arrow" aria-hidden="true">→</span>
          </Link>
        </div>
      </aside>
    </>
  )
}
