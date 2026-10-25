const WORDS = ["Build what's next", 'Develop', 'Automate', 'Scale', 'Design']

function triplet(start) {
  return [0, 1, 2].map((offset) => WORDS[(start + offset) % WORDS.length])
}

/* Five unique windows of three, then a duplicate of the first for a seamless CSS loop. */
const FRAMES = [0, 1, 2, 3, 4].map(triplet)
const ROLL = [...FRAMES, FRAMES[0]]

function TickerRow({ items }) {
  return (
    <div className="home-ticker-row">
      {items.map((word, index) => (
        <span key={`${word}-${index}`}>
          <em className={index % 2 === 0 ? 'is-solid' : undefined}>{word}</em>
          {index < items.length - 1 ? <i aria-hidden="true" /> : null}
        </span>
      ))}
    </div>
  )
}

export default function HomeTicker() {
  return (
    <section className="home-ticker" aria-label="How we work">
      <p className="sr-only">Build what&apos;s next. Develop. Automate. Scale. Design.</p>
      <div className="home-ticker-viewport" aria-hidden="true">
        <div className="home-ticker-roll">
          {ROLL.map((items, frameIndex) => (
            <TickerRow key={frameIndex} items={items} />
          ))}
        </div>
      </div>
    </section>
  )
}
