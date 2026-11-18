import { Link } from 'react-router-dom'
import { carePlan, currencies, formatPrice, packages } from '../../data/pricing'
import { useCurrency } from '../../lib/currency'
import './PricingTable.css'

export function CurrencyToggle() {
  const [currency, setCurrency] = useCurrency()
  return (
    <div className="pricing-toggle" role="group" aria-label="Show prices in">
      {Object.keys(currencies).map((code) => (
        <button
          key={code}
          type="button"
          aria-pressed={currency === code}
          className={currency === code ? 'is-active' : ''}
          onClick={() => setCurrency(code)}
        >
          {currencies[code].label}
        </button>
      ))}
    </div>
  )
}

export default function PricingTable({ names = {}, ctaHref = '/contact#project-inquiry' }) {
  const [currency] = useCurrency()
  const fill = (text) => text.replace('{business}', names.business || 'Business')

  return (
    <div className="pricing">
      <CurrencyToggle />
      <ul className="pricing-grid">
        {packages.map((item) => (
          <li key={item.id} className={`pricing-card${item.badge ? ' is-featured' : ''}`}>
            {item.badge ? <span className="pricing-badge">{item.badge}</span> : null}
            <h3>{names[item.id] || item.name}</h3>
            <p className="pricing-price">
              {formatPrice(item.price[currency], currency)}
              <span> one-time</span>
            </p>
            <p className="pricing-summary">{fill(item.summary)}</p>
            <ul className="pricing-features">
              {item.features.map((feature) => <li key={feature}>{fill(feature)}</li>)}
            </ul>
            <Link className={`ag-btn ${item.badge ? 'ag-btn-solid' : 'ag-btn-line'}`} to={ctaHref}>
              Choose {names[item.id] || item.name}
            </Link>
          </li>
        ))}
      </ul>
      <p className="pricing-note">
        {carePlan.text} {formatPrice(carePlan.price[currency], currency)} a month.
        {' '}Launch within 7 days or your money back. You own the code and the domain.
        {currency === 'INR' ? ' Prices exclude GST if applicable.' : ' Paid by card or bank transfer.'}
      </p>
    </div>
  )
}
