import { useEffect, useRef } from 'react'

export default function HeroAmbient() {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return undefined

    video.muted = true
    video.defaultMuted = true
    video.playbackRate = 0.2
    const start = video.play()
    if (start) start.catch(() => {})

    return undefined
  }, [])

  return (
    <video
      ref={videoRef}
      className="home-ambient"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-hidden="true"
    >
      <source src="/video/hero-mist.mp4" type="video/mp4" />
    </video>
  )
}
