import { marqueeLabels } from '../../data/services'
import './Marquee.css'

export default function Marquee({ reverse = false, labels = marqueeLabels }) {
  const loop = [...labels, ...labels]
  return (
    <div className={`marquee ${reverse ? 'is-reverse' : ''}`} aria-hidden="true">
      <div className="marquee-track">
        {loop.map((label, index) => (
          <span className="marquee-item" key={`${label}-${index}`}>
            <i />
            {label}
          </span>
        ))}
      </div>
    </div>
  )
}
