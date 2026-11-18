import { useState } from 'react'
import { Link } from 'react-router-dom'
import { submitInquiry } from '../lib/inquiry'
import Seo from '../components/seo/Seo'
import { CtaBand } from '../components/site/blocks'
import PricingTable from '../components/pricing/PricingTable'
import { clientSites } from '../data/clientSites'
import { contact } from '../data/founders'
import { brand } from '../config/brand'
import '../components/work/WorkPortfolio.css'
import './Contact.css'
import './Clinics.css'

const doctorSites = clientSites.filter((site) => site.category === 'Healthcare')

const checkLink = `https://wa.me/${contact.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(
  'Hi PixelToCloud, I run a clinic and would like the free Google presence check.',
)}`

const included = [
  { title: 'Found on Google', text: 'Clear doctor and treatment pages, a complete Google Business Profile, and local search basics for searches like "dentist near me".' },
  { title: 'Quoted by AI assistants', text: 'Plain-language answers, FAQs and structured data that ChatGPT, Gemini and Google AI answers can read and cite.' },
  { title: 'Appointments without phone tag', text: 'An appointment request form with a WhatsApp confirmation, plus call and map buttons that work on any phone.' },
  { title: 'More reviews', text: 'A review-request QR card for the front desk and a short link to send after each visit.' },
  { title: 'Patient data handled with care', text: 'Consent checkbox and privacy notice on every form, ahead of India’s data protection rules.' },
  { title: 'Yours to keep', text: 'You own the domain and the code. Launch within 7 days or your money back.' },
]

const steps = [
  { b: '1', h: 'Free check', p: 'We show where your clinic ranks today, your reviews against nearby clinics, and what patients see when they search your name.' },
  { b: '2', h: 'Agree the scope', p: 'Pick a package. We list the pages, photos and details we need from you.' },
  { b: '3', h: 'Launch in 7 days', p: 'Review the site on a private link, ask for changes, then go live.' },
]

function GoogleCheckForm() {
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
    const clinic = String(data.get('clinic') || '').trim()
    try {
      await submitInquiry({
        _subject: `Google check request: ${clinic}`,
        requestType: 'Free Google check',
        clinic,
        city: data.get('city'),
        name: data.get('name'),
        phone: data.get('phone'),
        email: data.get('email') || '',
        consent: data.get('consent') ? 'Yes' : 'No',
      })
      setStatus('success')
      setMessage('Thank you. Your clinic’s Google check will reach you within one working day, by email or WhatsApp.')
      form.reset()
    } catch {
      setStatus('error')
      setMessage(`The request could not be sent. Email ${contact.email} or message us on WhatsApp.`)
    }
  }

  return (
    <form className="ag-form contact-form" onSubmit={onSubmit}>
      <label className="sr-only" aria-hidden="true">
        Company website
        <input name="company_website" tabIndex={-1} autoComplete="off" />
      </label>
      <div className="contact-form-grid">
        <label>
          <span>Clinic name</span>
          <input name="clinic" required autoComplete="organization" placeholder="e.g. Sharma Dental Clinic" />
        </label>
        <label>
          <span>City</span>
          <input name="city" required autoComplete="address-level2" placeholder="e.g. Alwar" />
        </label>
        <label>
          <span>Your name</span>
          <input name="name" required autoComplete="name" />
        </label>
        <label>
          <span>Phone or WhatsApp</span>
          <input name="phone" type="tel" inputMode="tel" required autoComplete="tel" />
        </label>
        <label className="contact-form-full">
          <span>Email (optional)</span>
          <input name="email" type="email" autoComplete="email" />
        </label>
      </div>
      <label className="clinics-consent">
        <input type="checkbox" name="consent" required />
        <span>You may contact me about this check by phone, WhatsApp or email.</span>
      </label>
      <div className="contact-form-actions">
        <button className="ag-btn ag-btn-solid contact-submit" type="submit" disabled={status === 'loading'}>
          {status === 'loading' ? 'Sending…' : 'Get my free Google check →'}
        </button>
        {message ? (
          <p className={`contact-status is-${status}`} role="status" aria-live="polite">{message}</p>
        ) : null}
      </div>
    </form>
  )
}

export default function Clinics() {
  return (
    <div className="ag ag-page clinics-page">
      <Seo
        title={`Websites for clinics and doctors | ${brand.name}`}
        description="Clinic websites that get doctors found on Google and in AI answers, with WhatsApp appointment requests. Launch in 7 days. Offices in Gurugram and Alwar."
        path="/clinics"
      />

      <section className="ag-hero" aria-labelledby="clinics-title">
        <div className="ag-wrap">
          <p className="ag-eye">For clinics and doctors</p>
          <h1 id="clinics-title">Get your clinic found on Google and in AI answers.</h1>
          <p className="ag-lead">
            We build clinic websites that patients find, trust and book from. Our doctor sites for
            Dr. Archit Joshi and Dr. Neeraj Rathee appear at the top of Google and in ChatGPT and Gemini answers.
          </p>
          <div className="ag-actions">
            <a className="ag-btn ag-btn-light" href="#google-check">Get a free Google check</a>
            <a className="ag-btn ag-btn-ghost" href={checkLink} target="_blank" rel="noopener noreferrer">
              Ask on WhatsApp
              <span className="sr-only"> (opens WhatsApp in a new tab)</span>
            </a>
          </div>
        </div>
      </section>

      <section className="ag-sheet" id="google-check" aria-labelledby="clinics-check-title">
        <div className="ag-wrap clinics-check">
          <header className="ag-section-head">
            <p className="ag-kicker">Free, no obligation</p>
            <h2 id="clinics-check-title">See how patients find your clinic today</h2>
            <p>
              We check where your clinic appears on Google for searches like &quot;dentist in Alwar&quot;, your reviews against
              nearby clinics, and what patients see when they search your name. You get a one-page report within one working day.
            </p>
          </header>
          <GoogleCheckForm />
        </div>
      </section>

      <section className="ag-sheet cream" aria-labelledby="clinics-proof-title">
        <div className="ag-wrap">
          <header className="ag-section-head">
            <p className="ag-kicker">Live doctor sites</p>
            <h2 id="clinics-proof-title">Practices we have already put online</h2>
            <p>Open any of them on your phone.</p>
          </header>
          <ul className="clinics-proof">
            {doctorSites.map((site) => (
              <li key={site.id}>
                <a href={site.url} target="_blank" rel="noopener noreferrer">
                  <img src={site.image} alt={`Homepage of ${site.name}`} width="1440" height="960" loading="lazy" decoding="async" />
                  <strong>{site.name}</strong>
                  <span>{site.host}</span>
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="ag-sheet" aria-labelledby="clinics-included-title">
        <div className="ag-wrap">
          <header className="ag-section-head">
            <p className="ag-kicker">What you get</p>
            <h2 id="clinics-included-title">Built for how patients choose a doctor</h2>
          </header>
          <ul className="clinics-included">
            {included.map((item) => (
              <li key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="ag-sheet alt" aria-labelledby="clinics-steps-title">
        <div className="ag-wrap">
          <header className="ag-section-head">
            <p className="ag-kicker">How it works</p>
            <h2 id="clinics-steps-title">From free check to live site in a week</h2>
          </header>
          <ol className="ag-steps">
            {steps.map((step) => (
              <li key={step.b}>
                <b>{step.b}</b>
                <h3>{step.h}</h3>
                <p>{step.p}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="ag-sheet" id="pricing" aria-labelledby="clinics-pricing-title">
        <div className="ag-wrap">
          <header className="ag-section-head">
            <p className="ag-kicker">Packages</p>
            <h2 id="clinics-pricing-title">Clinic packages</h2>
            <p>One-time prices. Offices in Gurugram and Alwar; we work with clinics anywhere.</p>
          </header>
          <PricingTable names={{ business: 'Clinic' }} />
          <p className="clinics-more">
            Running a chemist shop too? Ask about <Link to="/contact">PharmaOS</Link>, our offline billing and stock software for pharmacies.
          </p>
        </div>
      </section>

      <CtaBand />
    </div>
  )
}
