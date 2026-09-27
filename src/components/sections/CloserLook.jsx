import Stage from '../ui/Stage'
import './CloserLook.css'

const chapterScenes = ['orbit', 'pulse', 'shelf', 'lattice']

export default function CloserLook({ look, image, imageAlt = '', accent = '#0284c7' }) {
  if (!look) return null

  return (
    <section className="section closer" aria-label="Closer look">
      <div className="container">
        <p className="closer-kicker">A closer look</p>
        <h2>{look.title}</h2>
        <p className="closer-intro">{look.intro}</p>

        <ol className="closer-chapters">
          {look.chapters.map((chapter, index) => (
            <li key={chapter.title}>
              {image ? (
                <Stage
                  compact
                  image={image}
                  imageAlt={imageAlt}
                  scene={chapterScenes[index % chapterScenes.length]}
                  accent={accent}
                />
              ) : (
                <span>0{index + 1}</span>
              )}
              <div>
                <h3>{chapter.title}</h3>
                <p>{chapter.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="closer-split">
          <div>
            <h3>Picture it</h3>
            <ul className="closer-scenes">
              {look.scenes.map((scene) => (
                <li key={scene.label}>
                  <strong>{scene.label}</strong>
                  <p>{scene.text}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="closer-leave">
            <h3>What you leave with</h3>
            <ul>
              {look.leaveWith.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
