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
            tag="Why PixelToCloud"
            title="A small studio with clear accountability"
            description="You know who is building, how delivery works, and what you own when the project ships."
          />
        </Reveal>
        <div className="why-grid">
          {whyUs.map((item, index) => (
            <Reveal key={item.title} delay={index * 50} as="article">
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
