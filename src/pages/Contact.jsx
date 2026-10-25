import { useState } from 'react'
import { Link } from 'react-router-dom'
import Seo from '../components/seo/Seo'
import WhatsAppIcon from '../components/ui/WhatsAppIcon'
import StageLine from '../components/site/StageLine'
import { brand } from '../config/brand'
import { contact } from '../data/founders'
import { budgetBands, projectTypes, timelines } from '../data/inquiryOptions'
import { coupons } from '../data/offers'
import { submitInquiry } from '../lib/inquiry'
import './Contact.css'

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
        <div className="ag-wrap">
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
              <a
                className="ag-btn ag-btn-whatsapp"
                href={contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon />
                Connect on WhatsApp
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              <a className="ag-btn ag-btn-light" href="#project-inquiry">Start a project</a>
            </div>
          </div>
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
                    {projectTypes.map((type) => <option key={type}>{type}</option>)}
                  </select>
                </label>
                <label>
                  <span>Budget range<RequiredMark /></span>
                  <select name="budget" required defaultValue="" aria-required="true">
                    <option value="" disabled>Choose a band</option>
                    {budgetBands.map((band) => <option key={band}>{band}</option>)}
                  </select>
                </label>
                <label>
                  <span>Timeline<RequiredMark /></span>
                  <select name="timeline" required defaultValue="" aria-required="true">
                    <option value="" disabled>Choose one</option>
                    {timelines.map((item) => <option key={item}>{item}</option>)}
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

      <StageLine
        kicker="What happens next"
        title="A straightforward process, from the start."
        titleId="contact-next-title"
        link={{ to: '/work#engagement', label: 'See the full process' }}
        steps={[
          { title: 'We review', text: 'We read your brief and identify the main requirements.' },
          { title: 'We discuss', text: 'We clarify your goals, priorities, timeline, and constraints.' },
          { title: 'We define the next step', text: 'You receive a practical recommendation for how to move forward.' },
        ]}
      />
    </div>
  )
}
