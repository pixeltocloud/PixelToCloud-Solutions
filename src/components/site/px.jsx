import { contact } from '../../data/founders'
import { formatPrice } from '../../data/pricing'
import { useCurrency } from '../../lib/currency'

export const whatsappHref = (text) =>
  `https://wa.me/${contact.whatsapp.replace('+', '')}?text=${encodeURIComponent(text)}`

export function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.22 8.22 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24Zm4.52-6.17c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.16.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.29Z" />
    </svg>
  )
}

export function Price({ amount, unit = '', prefix = 'from' }) {
  const [currency] = useCurrency()
  if (!amount) return <span className="px-price"><b>Quote</b></span>
  return (
    <span className="px-price">
      {prefix ? <small>{prefix} </small> : null}
      <b>{formatPrice(amount[currency] ?? amount.USD, currency)}</b>
      {unit ? <small>{unit}</small> : null}
    </span>
  )
}

export function CurrencyToggle() {
  const [currency, setCurrency] = useCurrency()
  return (
    <div className="px-currency" role="group" aria-label="Show prices in">
      <button type="button" aria-pressed={currency === 'INR'} onClick={() => setCurrency('INR')}>₹ INR</button>
      <button type="button" aria-pressed={currency === 'USD'} onClick={() => setCurrency('USD')}>$ USD</button>
    </div>
  )
}

export function ContactBand({
  title = 'Tell us what you need. We reply the same day.',
  text = 'Send a WhatsApp message or call. You will get a clear answer on what it takes, how long and what it costs, before any work starts.',
}) {
  const phone = contact.whatsapp
  const pretty = `${phone.slice(0, 3)} ${phone.slice(3, 8)} ${phone.slice(8)}`
  return (
    <section className="px-section px-contact" aria-labelledby="contact-band-title">
      <div className="px-wrap px-contact-grid">
        <div>
          <h2 id="contact-band-title">{title}</h2>
          <p>{text}</p>
        </div>
        <ul className="px-contact-ways">
          <li>
            <a href={whatsappHref('Hi PixelToCloud, I visited your website and would like to discuss my requirement.')} target="_blank" rel="noopener noreferrer">
              <span>WhatsApp us</span><span>{pretty}</span>
            </a>
          </li>
          <li>
            <a href={`tel:${phone}`}><span>Call us</span><span>Mon to Sun, 9 am to 7 pm IST</span></a>
          </li>
          <li>
            <a href={`mailto:${contact.email}`}><span>Email</span><span>{contact.email}</span></a>
          </li>
          <li>
            <a href="/start-project"><span>Fill the project form</span><span>Takes 2 minutes</span></a>
          </li>
        </ul>
      </div>
    </section>
  )
}
