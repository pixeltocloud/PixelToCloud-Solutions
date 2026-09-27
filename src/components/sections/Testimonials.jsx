import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import { testimonials } from '../../data/testimonials'
import './Testimonials.css'

export default function Testimonials() {
  return (
    <section className="section testimonials surface-alt">
      <div className="container">
        <Reveal>
          <SectionHeading
            title="Trusted by clinics, CAs & founders"
            description="Real feedback from professionals whose digital footprint we transformed."
          />
        </Reveal>

        <div className="testimonials-grid">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} delay={index * 50} as="blockquote" className="testimonial-card hover-lift">
              <p>“{item.text}”</p>
              <footer>
                <strong>{item.name}</strong>
                <span>{item.role}</span>
              </footer>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
