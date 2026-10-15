import { agencyStats } from '../../data/founders'

const stats = [{ value: '8+', label: 'Years building systems' }, ...agencyStats]

export default function HomeStats() {
  return (
    <section className="home-stats-wrap" aria-label="Studio facts">
      <ul className="container home-stats">
        {stats.map((stat) => (
          <li key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
