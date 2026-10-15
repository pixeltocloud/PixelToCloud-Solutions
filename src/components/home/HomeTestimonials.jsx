import { testimonials } from '../../data/testimonials'

export default function HomeTestimonials() {
  return (
    <section className="home-block home-quotes" aria-labelledby="home-quotes-title">
      <div className="container">
        <h2 id="home-quotes-title">What clients say</h2>
        <ul>
          {testimonials.map((quote) => (
            <li key={quote.name}>
              <blockquote>
                <p>“{quote.text}”</p>
                <footer>
                  <strong>{quote.name}</strong>
                  <span>{quote.role}</span>
                </footer>
              </blockquote>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
