import { useEffect } from 'react'

/**
 * Lightweight analytics stub.
 * Set VITE_ANALYTICS_ENDPOINT to enable; respects Do Not Track and local opt-out.
 */
export default function Analytics() {
  useEffect(() => {
    const endpoint = import.meta.env.VITE_ANALYTICS_ENDPOINT
    if (!endpoint) return undefined
    if (navigator.doNotTrack === '1' || localStorage.getItem('ptc-analytics') === 'off') return undefined

    const payload = {
      path: window.location.pathname,
      referrer: document.referrer || null,
      ts: Date.now(),
    }

    const send = () => {
      try {
        navigator.sendBeacon?.(endpoint, JSON.stringify(payload))
      } catch {
        // ignore analytics failures
      }
    }

    send()
    return undefined
  }, [])

  return null
}
