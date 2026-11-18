import { useEffect, useState } from 'react'

const storageKey = 'ptc-currency'
const eventName = 'ptc-currency-change'

function detectCurrency() {
  try {
    const saved = localStorage.getItem(storageKey)
    if (saved === 'INR' || saved === 'USD') return saved
  } catch {
    // storage blocked: fall through to time zone
  }
  try {
    const zone = Intl.DateTimeFormat().resolvedOptions().timeZone || ''
    if (zone === 'Asia/Kolkata' || zone === 'Asia/Calcutta') return 'INR'
  } catch {
    // ignore
  }
  return 'USD'
}

/** Returns [currency, setCurrency]. Every component using it stays in sync. */
export function useCurrency() {
  const [currency, setState] = useState(detectCurrency)

  useEffect(() => {
    const onChange = (event) => setState(event.detail)
    window.addEventListener(eventName, onChange)
    return () => window.removeEventListener(eventName, onChange)
  }, [])

  function setCurrency(next) {
    try {
      localStorage.setItem(storageKey, next)
    } catch {
      // ignore
    }
    window.dispatchEvent(new CustomEvent(eventName, { detail: next }))
  }

  return [currency, setCurrency]
}
