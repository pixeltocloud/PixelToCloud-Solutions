import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import { whyUs } from '../../data/services'
import './WhyPixelToCloud.css'

export default function WhyPixelToCloud() {
  return (
    <section className="section why surface-alt">
      <div className="container why-layout">
        <Reveal>
          <SectionHeading
            title="Zero lock-in. Complete freedom."
            description="Unlike agencies that hold your domain and code hostage, you own 100% of everything we build—and this live site is proof of the craft."
          />
        </Reveal>
        <div className="why-grid">
          {whyUs.map((item, index) => (
            <Reveal key={item.title} delay={index * 60} as="article" className="why-card hover-lift">
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
