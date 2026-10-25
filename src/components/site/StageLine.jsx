import { Link } from 'react-router-dom'
import Reveal from '../ui/Reveal'
import './StageLine.css'

export default function StageLine({ id, kicker, title, titleId, link, lead, steps, note }) {
  const layout = steps.length > 4 ? ' delivery-rail--wide' : steps.length === 4 ? ' delivery-rail--four' : ''

  return (
    <section id={id} className={`delivery-rail${layout}`} aria-labelledby={titleId}>
      <div className="ag-wrap">
        <Reveal className="delivery-rail-head">
          <div>
            <p className="ag-kicker">{kicker}</p>
            <h2 id={titleId}>{title}</h2>
            {lead ? <p className="delivery-rail-lead">{lead}</p> : null}
          </div>
          {link ? <Link className="delivery-rail-link" to={link.to}>{link.label}</Link> : null}
        </Reveal>
        <ol className="delivery-rail-steps">
          {steps.map((step, index) => (
            <Reveal key={step.title} as="li" delay={index * 70}>
              <span className="delivery-rail-mark" aria-hidden="true">
                <i>{String(index + 1).padStart(2, '0')}</i>
                {index < steps.length - 1 ? <b /> : null}
              </span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
              {step.detail ? <p className="delivery-rail-detail">{step.detail}</p> : null}
            </Reveal>
          ))}
        </ol>
        {note ? <p className="delivery-rail-note">{note}</p> : null}
      </div>
    </section>
  )
}
