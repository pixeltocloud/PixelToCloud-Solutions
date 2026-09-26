import './TrustStrip.css'

const signals = [
  {
    label: '100% IP ownership',
    detail: '100% IP ownership, code, docs, credentials',
  },
  {
    label: 'Fixed-scope delivery',
    detail: 'Clear milestones',
  },
  {
    label: 'Direct founder access',
    detail: 'No sales layer',
  },
  {
    label: '30-day warranty',
    detail: 'Post-launch support',
    sparkle: true,
  },
]

export default function TrustStrip() {
  return (
    <section className="trust-strip" id="guarantees" aria-label="Trust guarantees">
      <div className="container">
        <div className="trust-signals">
          {signals.map((item) => (
            <div key={item.label} className="trust-signal hover-lift">
              {item.sparkle ? (
                <span className="trust-signal-sparkle" aria-hidden="true">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                  </svg>
                </span>
              ) : null}
              <strong>{item.label}</strong>
              <span>{item.detail}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
