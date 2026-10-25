import { useState } from 'react'
import { Link } from 'react-router-dom'
import Seo from '../components/seo/Seo'
import { brand } from '../config/brand'
import { contact } from '../data/founders'
import { coupons } from '../data/offers'
import { submitInquiry } from '../lib/inquiry'
import './Contact.css'

const types = [
  'Business website',
  'Website redesign',
  'Web application or SaaS',
  'Mobile application',
  'E-commerce',
  'AI and automation',
  'Cloud or DevOps',
  'Not sure yet',
]

function RequiredMark() {
  return (
    <>
      <span className="field-mark" aria-hidden="true"> *</span>
      <span className="sr-only"> (required)</span>
    </>
  )
}

function OptionalMark() {
  return <span className="field-optional">Optional</span>
}

function ContactVisual() {
  return (
    <div className="contact-visual" aria-hidden="true">
      <svg className="contact-visual-svg" viewBox="0 0 420 360" fill="none">
        <defs>
          <radialGradient id="contactGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.35" />
            <stop offset="55%" stopColor="#2563eb" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="210" cy="180" r="120" fill="url(#contactGlow)" />
        <path d="M210 92 L210 128" stroke="#38bdf8" strokeOpacity="0.55" strokeWidth="1.4" />
        <path d="M210 232 L210 268" stroke="#38bdf8" strokeOpacity="0.55" strokeWidth="1.4" />
        <path d="M118 180 L154 180" stroke="#38bdf8" strokeOpacity="0.55" strokeWidth="1.4" />
        <path d="M266 180 L302 180" stroke="#38bdf8" strokeOpacity="0.55" strokeWidth="1.4" />
        <rect x="168" y="140" width="84" height="80" rx="10" fill="#0b1220" stroke="rgba(125,211,252,0.45)" />
        <rect x="180" y="154" width="36" height="6" rx="3" fill="#7dd3fc" fillOpacity="0.85" />
        <rect x="180" y="168" width="60" height="5" rx="2.5" fill="rgba(248,250,252,0.28)" />
        <rect x="180" y="180" width="48" height="5" rx="2.5" fill="rgba(248,250,252,0.18)" />
        <rect x="180" y="198" width="40" height="10" rx="5" fill="#2563eb" />
        <g className="contact-node contact-node-top">
          <rect x="164" y="54" width="92" height="38" rx="8" fill="#0b1220" stroke="rgba(56,189,248,0.4)" />
          <text x="210" y="78" textAnchor="middle" fill="#e2e8f0" fontSize="11" fontFamily="var(--font-sans), sans-serif" fontWeight="650">WEBSITE</text>
        </g>
        <g className="contact-node contact-node-bottom">
          <rect x="152" y="268" width="116" height="38" rx="8" fill="#0b1220" stroke="rgba(56,189,248,0.4)" />
          <text x="210" y="292" textAnchor="middle" fill="#e2e8f0" fontSize="11" fontFamily="var(--font-sans), sans-serif" fontWeight="650">AUTOMATION</text>
        </g>
        <g className="contact-node contact-node-left">
          <rect x="28" y="161" width="90" height="38" rx="8" fill="#0b1220" stroke="rgba(56,189,248,0.4)" />
          <text x="73" y="185" textAnchor="middle" fill="#e2e8f0" fontSize="11" fontFamily="var(--font-sans), sans-serif" fontWeight="650">SOFTWARE</text>
        </g>
        <g className="contact-node contact-node-right">
          <rect x="302" y="161" width="72" height="38" rx="8" fill="#0b1220" stroke="rgba(56,189,248,0.4)" />
          <text x="338" y="185" textAnchor="middle" fill="#e2e8f0" fontSize="11" fontFamily="var(--font-sans), sans-serif" fontWeight="650">AI</text>
        </g>
      </svg>
      <p className="contact-visual-caption">Website · Software · AI · Automation</p>
    </div>
  )
}

export default function Contact() {
  const [status, setStatus] = useState('idle')
  const [message, setMessage] = useState('')

  async function onSubmit(event) {
    event.preventDefault()
    if (status === 'loading') return
    const form = event.currentTarget
    const data = new FormData(form)
    if (data.get('company_website')) return
    setStatus('loading')
    setMessage('')
    try {
      await submitInquiry({
        name: data.get('name'),
        email: data.get('email'),
        phone: data.get('phone') || '',
        projectType: data.get('projectType'),
        budget: data.get('budget'),
        timeline: data.get('timeline'),
        country: data.get('country'),
        message: data.get('details'),
        coupon: data.get('coupon') || 'None',
      })
      setStatus('success')
      setMessage('Sent. We typically reply the same business day (IST).')
      form.reset()
    } catch {
      setStatus('error')
      setMessage(`The form could not be delivered. Email ${contact.email} or use WhatsApp.`)
    }
  }

  return (
    <div className="ag ag-page contact-page">
      <Seo
        title={`Contact | ${brand.name}`}
        description="Tell us what you are building. We help with websites, software, and automation."
        path="/contact"
      />

      <section className="ag-hero contact-hero" aria-labelledby="contact-hero-title">
        <div className="ag-wrap contact-hero-grid">
          <div className="contact-hero-copy">
            <p className="ag-eye">Let&apos;s build something useful</p>
            <h1 id="contact-hero-title">
              Tell us what you&apos;re building.
              <span> We&apos;ll help you figure out the next step.</span>
            </h1>
            <p className="ag-lead">
              Whether you need a new website, a custom application, or smarter business automation,
              tell us a little about the challenge. We&apos;ll help you explore a practical way forward.
            </p>
            <div className="ag-actions">
              <a className="ag-btn ag-btn-light" href="#project-inquiry">Start a project</a>
              <a
                className="ag-btn ag-btn-ghost"
                href={contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
          <ContactVisual />
        </div>
      </section>

      <section className="ag-sheet contact-body" aria-labelledby="project-inquiry-title">
        <div className="ag-wrap contact-layout">
          <div className="contact-main" id="project-inquiry">
            <header className="contact-main-head">
              <p className="ag-kicker">Project inquiry</p>
              <h2 id="project-inquiry-title">Tell us about your project</h2>
              <p>Share the essentials. We&apos;ll review your requirements and help you determine the right next step.</p>
            </header>

            <form className="ag-form contact-form" onSubmit={onSubmit} noValidate={false}>
              <p className="contact-required-note" id="inquiry-required-note">Fields marked with * are required.</p>
              <label className="sr-only" aria-hidden="true">
                Company website
                <input name="company_website" tabIndex={-1} autoComplete="off" />
              </label>

              <div className="contact-form-grid">
                <label>
                  <span>Name<RequiredMark /></span>
                  <input name="name" required autoComplete="name" aria-required="true" />
                </label>
                <label>
                  <span>Email<RequiredMark /></span>
                  <input name="email" type="email" required autoComplete="email" aria-required="true" />
                </label>
                <label>
                  <span>Phone <OptionalMark /></span>
                  <input name="phone" type="tel" inputMode="tel" autoComplete="tel" />
                </label>
                <label>
                  <span>Country or time zone<RequiredMark /></span>
                  <input name="country" required autoComplete="country-name" aria-required="true" />
                </label>
                <label>
                  <span>Project type<RequiredMark /></span>
                  <select name="projectType" required defaultValue="" aria-required="true">
                    <option value="" disabled>Choose one</option>
                    {types.map((type) => <option key={type}>{type}</option>)}
                  </select>
                </label>
                <label>
                  <span>Budget range<RequiredMark /></span>
                  <select name="budget" required defaultValue="" aria-required="true">
                    <option value="" disabled>Choose a band</option>
                    <option>Under $2,000</option>
                    <option>$2,000–$8,000</option>
                    <option>$8,000–$25,000</option>
                    <option>$25,000+</option>
                    <option>Not sure yet</option>
                  </select>
                </label>
                <label>
                  <span>Timeline<RequiredMark /></span>
                  <select name="timeline" required defaultValue="" aria-required="true">
                    <option value="" disabled>Choose one</option>
                    <option>Focused site, 7-day window</option>
                    <option>2–6 weeks</option>
                    <option>1–3 months</option>
                    <option>Not sure yet</option>
                  </select>
                </label>
                <label>
                  <span>Coupon <OptionalMark /></span>
                  <select name="coupon" defaultValue="">
                    <option value="">None</option>
                    {coupons.map((coupon) => (
                      <option key={coupon.id} value={coupon.id}>{coupon.title}</option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="contact-form-full">
                <span>Project description<RequiredMark /></span>
                <textarea
                  name="details"
                  required
                  aria-required="true"
                  minLength={20}
                  rows={5}
                  placeholder="What does your business do, what problem are you trying to solve, and what would a successful outcome look like?"
                />
              </label>

              <div className="contact-form-actions">
                <button className="ag-btn ag-btn-solid contact-submit" type="submit" disabled={status === 'loading'}>
                  {status === 'loading' ? 'Sending…' : 'Send project inquiry →'}
                </button>
                <p className="contact-submit-note">
                  No obligation. Your project details help us prepare a more useful first conversation.
                  {' '}
                  <Link to="/start-project">Prefer a step-by-step brief?</Link>
                </p>
                {message ? (
                  <p className={`contact-status is-${status}`} role="status" aria-live="polite">
                    {message}
                  </p>
                ) : null}
              </div>
            </form>
          </div>

          <aside className="contact-aside" aria-label="Direct contact options">
            <p className="ag-kicker">Direct lines</p>
            <h2>Prefer a direct conversation?</h2>
            <p className="contact-aside-lead">
              Choose the channel that works best for you. We&apos;ll help you work out the next step.
            </p>

            <ul className="contact-channels">
              <li>
                <a href={`mailto:${contact.email}`}>
                  <span>Email</span>
                  <strong>{contact.email}</strong>
                  <em>Send an email</em>
                </a>
              </li>
              <li>
                <a href={contact.whatsappLink} target="_blank" rel="noopener noreferrer">
                  <span>WhatsApp</span>
                  <strong>Talk through your requirements</strong>
                  <em>Message us on WhatsApp</em>
                </a>
              </li>
              <li>
                <div>
                  <span>Location</span>
                  <strong>Gurugram, Haryana · Alwar, Rajasthan</strong>
                </div>
              </li>
            </ul>

            <p className="contact-aside-note">
              We typically respond within one business day, India time.
            </p>
          </aside>
        </div>
      </section>

      <section className="ag-sheet alt contact-next" aria-labelledby="contact-next-title">
        <div className="ag-wrap">
          <header className="contact-next-head">
            <p className="ag-kicker">What happens next</p>
            <h2 id="contact-next-title">A straightforward process, from the start.</h2>
          </header>
          <ol className="contact-next-steps">
            <li>
              <b aria-hidden="true">01</b>
              <h3>We review</h3>
              <p>We read your brief and identify the main requirements.</p>
            </li>
            <li>
              <b aria-hidden="true">02</b>
              <h3>We discuss</h3>
              <p>We clarify your goals, priorities, timeline, and constraints.</p>
            </li>
            <li>
              <b aria-hidden="true">03</b>
              <h3>We define the next step</h3>
              <p>You receive a practical recommendation for how to move forward.</p>
            </li>
          </ol>
        </div>
      </section>
    </div>
  )
}
