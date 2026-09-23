import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import { testimonials } from '../../data/testimonials'
import './Testimonials.css'

export default function Testimonials() {
  const [featured, ...rest] = testimonials

  return (
    <section className="section testimonials surface-alt">
      <div className="container">
        <Reveal>
          <SectionHeading
            tag="Client feedback"
            title="Trusted by clinics, CAs & founders"
            description="Real feedback from professionals whose digital footprint we transformed."
          />
        </Reveal>

        <div className="testimonials-layout">
          {featured ? (
            <Reveal as="blockquote" className="testimonial-featured hover-lift">
              <p>“{featured.text}”</p>
              <footer>
                <strong>{featured.name}</strong>
                <span>{featured.role}</span>
              </footer>
            </Reveal>
          ) : null}

          <div className="testimonials-grid">
            {rest.map((item, index) => (
              <Reveal key={item.name} delay={index * 50} as="blockquote" className="hover-lift">
                <p>“{item.text}”</p>
                <footer>
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </footer>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
