import { useEffect, useRef } from 'react'
import { WhatsAppIcon, whatsappHref } from '../site/px'

/** Shown in place of a form once the enquiry is confirmed as delivered. */
export default function FormSuccess({ title, text, onAgain, againLabel = 'Send another enquiry' }) {
  const ref = useRef(null)
  useEffect(() => {
    ref.current?.focus()
    ref.current?.scrollIntoView({ block: 'center', behavior: 'smooth' })
  }, [])
  return (
    <div className="px-form-success" role="status" aria-live="polite" tabIndex={-1} ref={ref}>
      <span className="px-form-success-mark" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12.5 4.5 4.5L19 7.5" /></svg>
      </span>
      <h3>{title}</h3>
      <p>{text}</p>
      <div className="px-actions">
        <a className="px-btn px-btn-whatsapp" href={whatsappHref('Hi PixelToCloud, I just sent an enquiry on your website.')} target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon /> Message us on WhatsApp
        </a>
        {onAgain ? <button type="button" className="px-btn px-btn-line" onClick={onAgain}>{againLabel}</button> : null}
      </div>
    </div>
  )
}
