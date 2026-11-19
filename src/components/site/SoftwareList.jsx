import { Link } from 'react-router-dom'
import { products } from '../../data/products'

export default function SoftwareList() {
  return (
    <div className="px-work px-software">
      {products.map((item) => (
        <figure key={item.slug}>
          <Link to={`/work/${item.slug}`}>
            <div className="px-work-shot">
              <img src={item.image} alt={`${item.name} screen`} loading="lazy" width="800" height="500" />
            </div>
            <figcaption>
              <strong>{item.name}</strong>
              <span>{item.kind}</span>
              <p>{item.text}</p>
              <em>{item.status}</em>
            </figcaption>
          </Link>
        </figure>
      ))}
    </div>
  )
}
