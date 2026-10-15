import { whyUs } from '../../data/services'

export default function HomeWhy() {
  return (
    <section className="home-block" aria-labelledby="home-why-title">
      <div className="container">
        <h2 id="home-why-title">Why teams stay</h2>
        <ul className="home-why-grid">
          {whyUs.map((item) => (
            <li key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
