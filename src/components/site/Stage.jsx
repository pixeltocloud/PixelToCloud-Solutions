import { Link } from 'react-router-dom'
import { brand } from '../../config/brand'

export function HeroStage() {
  return (
    <figure className="devices">
      <div className="laptop" aria-hidden="true">
        <div className="laptop-lid">
          <i className="laptop-cam" />
          <div className="screen">
            <aside>
              <b>Work</b>
              <span className="on">Review</span>
              <span>Files</span>
              <span>Messages</span>
            </aside>
            <div className="screen-main">
              <header>
                <strong>In review</strong>
                <small>This week</small>
              </header>
              <svg viewBox="0 0 360 120" role="img" aria-label="">
                <defs>
                  <linearGradient id="heroFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#2563EB" stopOpacity="0.45" />
                    <stop offset="1" stopColor="#2563EB" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="heroLine" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0" stopColor="#38BDF8" />
                    <stop offset="1" stopColor="#60A5FA" />
                  </linearGradient>
                </defs>
                <path d="M0 92 C40 88 60 70 90 66 C130 60 150 78 190 52 C230 26 260 40 300 28 C330 20 344 18 360 12 V120 H0 Z" fill="url(#heroFill)" />
                <path d="M0 92 C40 88 60 70 90 66 C130 60 150 78 190 52 C230 26 260 40 300 28 C330 20 344 18 360 12" fill="none" stroke="url(#heroLine)" strokeWidth="2.5" />
              </svg>
              <ul>
                <li><em>Returns</em><b>Ready</b></li>
                <li><em>Documents</em><b>Shared</b></li>
                <li><em>Billing</em><b>Open</b></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="laptop-base" />
      </div>
      <div className="handset" aria-hidden="true">
        <div className="handset-screen">
          <p>Visit request</p>
          <strong>Thursday</strong>
          <span>11:30 · Confirmed</span>
          <em>A person replies if the time does not work.</em>
        </div>
      </div>
      <figcaption className="sr-only">A composed laptop dashboard and phone confirmation. It is not a screenshot of a client product.</figcaption>
    </figure>
  )
}

export function ServiceShot({ kind }) {
  if (kind === 'mobile') {
    return (
      <div className="shot shot-mobile" aria-hidden="true">
        <div><b>Book</b><i /><i className="on" /></div>
        <div><b>Status</b><i className="on" /><i /></div>
      </div>
    )
  }
  if (kind === 'ai') {
    return (
      <div className="shot shot-ai" aria-hidden="true">
        <p>Opening hours</p>
        <p className="me">Can someone call me?</p>
        <span>Handed to a person</span>
      </div>
    )
  }
  if (kind === 'cloud') {
    return (
      <div className="shot shot-cloud" aria-hidden="true">
        <b>Production <small>Live</small></b>
        <b>Staging <small>Ready</small></b>
        <b>Rollback <small>One step</small></b>
      </div>
    )
  }
  return (
    <div className="shot shot-web" aria-hidden="true">
      <div className="shot-bar"><i /><i /><i /></div>
      <div className="shot-tiles"><span /><span /><span /></div>
    </div>
  )
}

export function WorkFrame({ kind = 'vault' }) {
  if (kind === 'clinic') {
    return (
      <div className={`frame frame-${kind}`} aria-hidden="true">
        <div className="frame-phone">
        <p>Booking</p>
        <strong>Choose a time</strong>
        <span>Morning</span>
        <span className="on">Afternoon</span>
        <b>Send confirmation</b>
        </div>
      </div>
    )
  }
  if (kind === 'catalog') {
    return (
      <div className={`frame frame-${kind}`} aria-hidden="true">
        <div className="tile" /><div className="tile alt" /><div className="tile" />
      </div>
    )
  }
  return (
    <div className={`frame frame-${kind}`} aria-hidden="true">
      <div className="frame-bar"><span /><span /><span /></div>
      <div className="frame-rows">
        <b>Returns</b><b>Documents</b><b>Billing</b>
      </div>
    </div>
  )
}

export function frameKind(slug = '') {
  if (['harish-renova', 'healthcare', 'mobile-app-development', 'ai-automation', 'hospitality'].includes(slug)) return 'clinic'
  if (['saini-handicrafts', 'ecommerce', 'web-development', 'retail-and-makers'].includes(slug)) return 'catalog'
  return 'vault'
}

export function CtaBand() {
  return (
    <section className="ag-close" aria-labelledby="site-cta-title">
      <div className="ag-wrap ag-close-row">
        <div>
          <p className="ag-eye">Next step</p>
          <h2 id="site-cta-title">Have a challenge worth solving?</h2>
          <p>Let&apos;s explore what the right website, software, or automation could do for your business.</p>
        </div>
        <div className="ag-actions" style={{ marginTop: 0 }}>
          <Link className="ag-btn ag-btn-light" to={brand.primaryHref}>{brand.primaryCta}</Link>
          <Link className="ag-btn ag-btn-ghost" to="/contact">Talk to us</Link>
        </div>
      </div>
    </section>
  )
}
