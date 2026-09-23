export default function SectionHeading({ tag, title, description, align = 'left' }) {
  return (
    <div className={`section-header ${align === 'center' ? 'is-center' : ''}`}>
      {tag ? <div className="section-tag">{tag}</div> : null}
      <h2 className="section-title">{title}</h2>
      {description ? <p className="section-desc">{description}</p> : null}
    </div>
  )
}
