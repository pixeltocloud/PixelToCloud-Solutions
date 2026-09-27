import './Stage.css'

const sceneMarkup = {
  orbit: (
    <div className="sc sc-orbit">
      <span className="ring" />
      <span className="core" />
      <span className="sat s1" />
      <span className="sat s2" />
      <span className="sat s3" />
    </div>
  ),
  pulse: (
    <div className="sc sc-pulse">
      <span className="bubble b1">Hi — what do you need?</span>
      <span className="bubble b2">A time this week.</span>
      <span className="bubble b3">Thursday, 11:00. Handing you over.</span>
    </div>
  ),
  lattice: (
    <div className="sc sc-lattice">
      <span className="node n1" />
      <span className="node n2" />
      <span className="node n3" />
      <span className="node n4" />
      <span className="link l1" />
      <span className="link l2" />
      <span className="packet" />
    </div>
  ),
  shelf: (
    <div className="sc sc-shelf">
      <span className="card c1" />
      <span className="card c2" />
      <span className="card c3" />
      <span className="bag">Bag · 2</span>
    </div>
  ),
  funnel: (
    <div className="sc sc-funnel">
      <span className="bar wide" />
      <span className="bar mid" />
      <span className="bar thin" />
      <span className="drop" />
    </div>
  ),
  rooms: (
    <div className="sc sc-rooms">
      <span className="room r1" />
      <span className="room r2" />
      <span className="room r3" />
      <span className="room r4" />
    </div>
  ),
  ledger: (
    <div className="sc sc-ledger">
      <span className="row" />
      <span className="row" />
      <span className="row hot" />
      <span className="row" />
    </div>
  ),
  care: (
    <div className="sc sc-care">
      <span className="halo" />
      <span className="slot">09:40</span>
      <span className="slot on">11:10</span>
      <span className="slot">14:00</span>
    </div>
  ),
  nodes: (
    <div className="sc sc-nodes">
      <span className="rack" />
      <span className="rack" />
      <span className="rack" />
      <span className="travel" />
    </div>
  ),
  swatches: (
    <div className="sc sc-swatches">
      <span className="chip a" />
      <span className="chip b" />
      <span className="chip c" />
      <span className="type">Aa</span>
    </div>
  ),
  shift: (
    <div className="sc sc-shift">
      <span className="pane old" />
      <span className="pane next" />
    </div>
  ),
  meter: (
    <div className="sc sc-meter">
      <span className="track" />
      <span className="fill" />
      <span className="tick" />
    </div>
  ),
}

export default function Stage({
  image,
  imageAlt,
  scene = 'orbit',
  accent = '#0284c7',
  caption,
  priority = false,
  compact = false,
}) {
  return (
    <figure className={`stage scene-${scene}${compact ? ' is-compact' : ''}`} style={{ '--stage-accent': accent }}>
      <img
        src={image}
        alt={imageAlt}
        width="1600"
        height="1000"
        decoding="async"
        loading={priority ? 'eager' : 'lazy'}
      />
      <div className="stage-scrim" />
      <div className="stage-play" aria-hidden="true">
        {sceneMarkup[scene] || sceneMarkup.orbit}
      </div>
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  )
}
