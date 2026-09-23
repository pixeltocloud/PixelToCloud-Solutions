import { useState } from 'react'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'
import { contact } from '../../data/founders'
import './ContactSection.css'

const projectTypes = [
  'Business website',
  'Custom web application or client portal',
  'E-commerce / product experience',
  'Lead funnel / Google Ads landing page',
  'WhatsApp automation',
  'Interactive 2D/3D experience',
  'Cloud hosting & maintenance',
  'Not sure yet — need guidance',
]

export default function ContactSection({ compactHero = false }) {
  const [status, setStatus] = useState('idle')
  const [message, setMessage] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)

    if (data.get('company_website')) {
      setStatus('idle')
      form.reset()
      return
    }

    setStatus('loading')
    setMessage('')

    try {
      const response = await fetch(contact.formEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: data.get('name'),
          email: data.get('email'),
          phone: data.get('phone') || '',
          projectType: data.get('projectType'),
          message: data.get('details'),
          _subject: `PixelToCloud inquiry from ${data.get('name')}`,
          _template: 'table',
          _captcha: 'false',
        }),
      })

      if (!response.ok) throw new Error('Submission failed')

      setStatus('success')
      setMessage('Thanks — your inquiry was sent. We typically reply the same business day (IST).')
      form.reset()
    } catch {
      setStatus('error')
      setMessage(`Something went wrong. Email ${contact.email} or message on WhatsApp.`)
    }
  }

  return (
    <section className="section contact" id="connect">
      <div className="container">
        {!compactHero ? (
          <Reveal>
            <SectionHeading
              title="Start a project"
              description="Share a short brief, chat on WhatsApp, or request a 15-minute intro call. Direct founder response—usually the same business day."
            />
          </Reveal>
        ) : null}

        <div className="connect-layout">
          <Reveal className="inquiry-wrap">
            <form className="inquiry-form" onSubmit={handleSubmit}>
              <p className="connect-panel-title">Project inquiry</p>

              <div className="hp-field" aria-hidden="true">
                <label htmlFor="company_website">Company website</label>
                <input id="company_website" name="company_website" type="text" tabIndex={-1} autoComplete="off" />
              </div>

              <label>
                <span>Your name</span>
                <input name="name" type="text" required placeholder="e.g. Rahul Sharma" autoComplete="name" />
              </label>

              <label>
                <span>Email address</span>
                <input name="email" type="email" required placeholder="e.g. rahul@company.com" autoComplete="email" />
              </label>

              <label className="full">
                <span>What are you looking for?</span>
                <select name="projectType" required defaultValue="">
                  <option value="" disabled>
                    Select a project type…
                  </option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </label>

              <label className="full">
                <span>Briefly describe the project</span>
                <textarea
                  name="details"
                  rows="4"
                  required
                  placeholder="What does your business do, and what should the website or software help with?"
                />
              </label>

              <label className="full">
                <span>
                  Phone or WhatsApp <em>(optional)</em>
                </span>
                <input name="phone" type="tel" placeholder="e.g. +91 98765 43210" autoComplete="tel" />
              </label>

              <div className="full">
                <Button type="submit" className="submit-btn" disabled={status === 'loading'}>
                  {status === 'loading' ? 'Sending…' : 'Send inquiry'}
                </Button>
              </div>

              <p className="trust-note">NDA available before detailed technical discussion. Milestone payments only.</p>

              {message ? (
                <p className={`form-feedback is-${status}`} role="status" aria-live="polite">
                  {message}
                </p>
              ) : null}
            </form>
          </Reveal>

          <div className="connect-side">
            <Reveal className="connect-card connect-qr hover-lift" delay={60}>
              <p className="connect-panel-title">WhatsApp scan</p>
              <img
                src="/qr-code/qr-pixeltocloud-connect.png"
                alt="QR code opening PixelToCloud connect card"
                width="220"
                height="220"
                loading="lazy"
                decoding="async"
                className="qr-image"
              />
              <p className="connect-card-copy">Scan to open our smart connect card, then chat on WhatsApp.</p>
              <Button href={contact.whatsappLink} target="_blank" rel="noreferrer" variant="secondary" className="connect-side-btn">
                Open WhatsApp
              </Button>
            </Reveal>

            <Reveal className="connect-card connect-book hover-lift" delay={100}>
              <p className="connect-panel-title">Request a call</p>
              <p className="connect-card-copy">
                Prefer a short intro? Message us on WhatsApp to request a 15-minute architecture call and fixed estimate.
              </p>
              <Button href={contact.appointmentLink} target="_blank" rel="noreferrer" className="connect-side-btn">
                Request a 15-min call
              </Button>
              <a className="connect-mail" href={`mailto:${contact.email}`}>
                or email {contact.email}
              </a>
              <p className="connect-phones">
                {contact.phones.map((phone) => (
                  <a key={phone} href={`tel:${phone}`}>
                    {phone.replace('+91', '+91 ')}
                  </a>
                ))}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
