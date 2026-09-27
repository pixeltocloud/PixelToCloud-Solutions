import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function Analytics() {
  const location = useLocation()

  useEffect(() => {
    const endpoint = import.meta.env.VITE_ANALYTICS_ENDPOINT
    if (!endpoint) return undefined
    if (navigator.doNotTrack === '1' || localStorage.getItem('ptc-analytics') === 'off') return undefined

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
