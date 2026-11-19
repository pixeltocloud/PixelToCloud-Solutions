import { useState } from 'react'
import { submitInquiry } from '../../lib/inquiry'
import FormSuccess from './FormSuccess'
import { contact } from '../../data/founders'
import '../../pages/Contact.css'
import '../../pages/Clinics.css'

/**
 * Free Google check request form. Every submission is emailed with the subject
 * "Google check request: <business>", which the daily follow-up task looks for.
 */
export default function GoogleCheckForm({
  businessLabel = 'Business name',
  businessPlaceholder = 'e.g. Sharma Sweets',
  businessType = 'Business',
}) {
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
    const business = String(data.get('business') || '').trim()
    try {
      await submitInquiry({
        _subject: `Google check request: ${business}`,
        requestType: 'Free Google check',
        businessType,
        business,
        city: data.get('city'),
        name: data.get('name'),
        phone: data.get('phone'),
        email: data.get('email') || '',
        consent: data.get('consent') ? 'Yes' : 'No',
      })
      setStatus('success')
      setMessage('Thank you. Your free Google check will reach you within one working day, by email or WhatsApp.')
      form.reset()
    } catch {
      setStatus('error')
      setMessage(`The request could not be sent. Email ${contact.email} or message us on WhatsApp.`)
    }
  }

  if (status === 'success') {
    return (
      <FormSuccess
        title="Thank you. Your request has been sent."
        text="Your free Google check will reach you within one working day, by email or WhatsApp."
        onAgain={() => { setStatus('idle'); setMessage('') }}
        againLabel="Request another check"
      />
    )
  }

  return (
    <form className="ag-form contact-form" onSubmit={onSubmit}>
      <label className="sr-only" aria-hidden="true">
        Company website
        <input name="company_website" tabIndex={-1} autoComplete="off" />
      </label>
      <div className="contact-form-grid">
        <label>
          <span>{businessLabel}</span>
          <input name="business" required autoComplete="organization" placeholder={businessPlaceholder} />
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
