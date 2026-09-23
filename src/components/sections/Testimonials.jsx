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
            title="What partners say"
            description="Quotes from people running the systems we built."
          />
        </Reveal>

        <div className="testimonials-layout">
          {featured ? (
            <Reveal as="blockquote" className="testimonial-featured">
              <p>“{featured.quote}”</p>
              <footer>
                <strong>{featured.author}</strong>
                <span>{featured.role}</span>
              </footer>
            </Reveal>
          ) : null}

          <div className="testimonials-grid">
            {rest.map((item, index) => (
              <Reveal key={item.author} delay={index * 50} as="blockquote">
                <p>“{item.quote}”</p>
                <footer>
                  <strong>{item.author}</strong>
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
