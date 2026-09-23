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
  'Interactive 2D/3D experience',
  'Cloud hosting & maintenance',
  'Not sure yet — need guidance',
]

export default function ContactSection() {
  const [status, setStatus] = useState('idle')
  const [message, setMessage] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)

    if (data.get('company_website')) {
      setStatus('success')
      setMessage('Thanks — your inquiry was sent. We’ll review it and reply shortly.')
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
      setMessage('Thanks — your inquiry was sent. We’ll review it and reply shortly.')
      form.reset()
    } catch {
      setStatus('error')
      setMessage('Something went wrong. Email us at pixeltocloud@gmail.com or message on WhatsApp.')
    }
  }

  return (
    <section className="section contact" id="contact-section">
      <div className="container">
        <Reveal>
          <SectionHeading
            tag="Contact"
            title="Tell us what you need built"
            description="Share a short brief. We’ll reply with scope questions, a suggested approach, and a clear milestone plan."
          />
        </Reveal>

        <Reveal className="inquiry-wrap">
          <form className="inquiry-form" onSubmit={handleSubmit} noValidate={false}>
            <div className="hp-field" aria-hidden="true">
              <label htmlFor="company_website">Company website</label>
              <input
                id="company_website"
                name="company_website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

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
                rows="5"
                required
                placeholder="What does your business do, who is this for, and what should the website or software help with?"
              />
            </label>

            <label>
              <span>Your name</span>
              <input name="name" type="text" required placeholder="e.g. Rahul Sharma" autoComplete="name" />
            </label>

            <label>
              <span>Email address</span>
              <input name="email" type="email" required placeholder="e.g. rahul@company.com" autoComplete="email" />
            </label>

            <label className="full">
              <span>
                Phone or WhatsApp <em>(optional)</em>
              </span>
              <input name="phone" type="tel" placeholder="e.g. +91 98765 43210" autoComplete="tel" />
            </label>

            <div className="full">
              <Button type="submit" className="submit-btn" disabled={status === 'loading'}>
                {status === 'loading' ? 'Sending…' : 'Send project inquiry'}
              </Button>
            </div>

            <p className="trust-note">
              Confidential by default. We can sign an NDA before any detailed technical discussion.
            </p>

            {message ? (
              <p className={`form-feedback is-${status}`} role="status" aria-live="polite">
                {message}
              </p>
            ) : null}
          </form>
        </Reveal>

        <p className="wa-alt">
          Prefer direct chat?{' '}
          <a href={contact.whatsappLink} target="_blank" rel="noreferrer">
            Discuss on WhatsApp
          </a>
        </p>
      </div>
    </section>
  )
}
