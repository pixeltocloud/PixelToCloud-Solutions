import { useEffect, useRef, useState } from 'react'

function prefersReducedMotion() {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export default function useInView() {
  const ref = useRef(null)
  const [inView, setInView] = useState(prefersReducedMotion)

  useEffect(() => {
    const node = ref.current
    if (!node || inView) return undefined

    // Failsafe: never leave content permanently invisible if IO misses
    const failsafe = window.setTimeout(() => setInView(true), 1800)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
          window.clearTimeout(failsafe)
        }
      },
      { rootMargin: '0px 0px -4% 0px', threshold: 0.05 },
    )

    observer.observe(node)
    return () => {
      observer.disconnect()
      window.clearTimeout(failsafe)
    }
  }, [inView])

  return [ref, inView]
}
