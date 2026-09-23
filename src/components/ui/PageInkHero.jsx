import Button from './Button'
import './PageInkHero.css'

/**
 * Premium ink page hero used across Services / Work / About / Contact.
 * @param {{ title: string, description: string, actions?: Array<{ label: string, to?: string, href?: string, variant?: string, target?: string, rel?: string }>, points?: Array<{ label: string, detail: string }> }} props
 */
export default function PageInkHero({ title, description, actions = [], points = [] }) {
  return (
    <section className="page-ink-hero">
      <div className="page-ink-hero-glow" aria-hidden="true" />
      <div className="container page-ink-hero-inner">
        <div className="page-ink-hero-copy">
          <h1>{title}</h1>
          <p>{description}</p>
          {actions.length ? (
            <div className="page-ink-hero-cta">
              {actions.map((action) => (
                <Button
                  key={action.label}
                  to={action.to}
                  href={action.href}
                  target={action.target}
                  rel={action.rel}
                  variant={action.variant || 'primary'}
                >
                  {action.label}
                </Button>
              ))}
            </div>
          ) : null}
        </div>
        {points.length ? (
          <ul className="page-ink-hero-points" aria-label="Highlights">
            {points.map((point) => (
              <li key={point.label}>
                <strong>{point.label}</strong>
                <span>{point.detail}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  )
}
