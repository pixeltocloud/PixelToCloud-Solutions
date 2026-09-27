import './ProjectVisual.css'

export default function ProjectVisual({ study }) {
  const type = study.visual?.type || 'portal'
  const primary = study.visual?.primary || study.accent || '#0284c7'
  const secondary = study.visual?.secondary || '#059669'

  return (
    <div className="visual-stage project-visual" style={{ '--viz-a': primary, '--viz-b': secondary }}>
      <div className="viz-chrome">
        <span />
        <span />
        <span />
        <em>{study.mockup?.url}</em>
      </div>
      <div className={`viz-body viz-${type}`}>
        {type === 'portal' && (
          <>
            <div className="viz-layer viz-sidebar" />
            <div className="viz-layer viz-main">
              <div className="viz-kpi" style={{ color: primary }}>
                {study.mockup?.kpis?.[0]?.value}
              </div>
              <div className="viz-bar">
                <i style={{ width: '78%', background: primary }} />
              </div>
              <div className="viz-rows">
                <span />
                <span />
                <span />
              </div>
            </div>
          </>
        )}
        {type === 'clinical' && (
          <>
            <div className="viz-layer viz-calendar">
              {[...Array(6)].map((_, i) => (
                <b key={i} className={i === 2 ? 'is-active' : ''} />
              ))}
            </div>
            <div className="viz-layer viz-chip">WhatsApp confirmed</div>
          </>
        )}
        {type === 'commerce' && (
          <>
            <div className="viz-layer viz-product" />
            <div className="viz-layer viz-tags">
              <span>USD</span>
              <span>INR</span>
              <span>EUR</span>
            </div>
          </>
        )}
        {type === 'webgl' && (
          <>
            <div className="viz-layer viz-orb" />
            <div className="viz-layer viz-ring" />
            <div className="viz-layer viz-fps">60 FPS</div>
          </>
        )}
      </div>
      <p className="viz-caption">{study.mockup?.footer}</p>
    </div>
  )
}
