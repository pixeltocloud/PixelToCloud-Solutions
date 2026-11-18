import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function Analytics() {
  const location = useLocation()

  useEffect(() => {
    const endpoint = import.meta.env.VITE_ANALYTICS_ENDPOINT
    if (!endpoint) return undefined
    let optedOut = false
    try {
      optedOut = localStorage.getItem('ptc-analytics') === 'off'
    } catch {
      // storage can be blocked (private mode, strict privacy settings)
    }
    if (navigator.doNotTrack === '1' || optedOut) return undefined

    const payload = {
      path: location.pathname,
      referrer: document.referrer || null,
      ts: Date.now(),
    }

    try {
      navigator.sendBeacon?.(endpoint, JSON.stringify(payload))
    } catch {
      // ignore analytics failures
    }

    return undefined
  }, [location.pathname])

  return null
}
