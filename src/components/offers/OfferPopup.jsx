import { useEffect, useId, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { coupons, openingOffer } from '../../data/offers'
import './OfferPopup.css'

const seenKey = 'ptc-offer-seen'

export default function OfferPopup() {
  const titleId = useId()
  const noteId = useId()
  const dialogRef = useRef(null)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem(seenKey)) return undefined
    const timer = window.setTimeout(() => setOpen(true), 500)
    return () => window.clearTimeout(timer)
  }, [])

  function close() {
    sessionStorage.setItem(seenKey, '1')
    setOpen(false)
  }

  useEffect(() => {
    if (!open) return undefined
    const dialog = dialogRef.current
    const previouslyFocused = document.activeElement
    dialog?.querySelector('button')?.focus()

    function onKey(event) {
      if (event.key === 'Escape') {
        close()
        return
      }
      if (event.key !== 'Tab' || !dialog) return
      const items = [...dialog.querySelectorAll('a, button')]
      if (!items.length) return
      const first = items[0]
      const last = items[items.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKey)
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus()
    }
  }, [open])

  if (!open) return null

  return (
    <div className="offer-popup" role="presentation" onClick={close}>
      <div
        className="offer-popup-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={noteId}
        ref={dialogRef}
        onClick={(event) => event.stopPropagation()}
      >
        <button type="button" className="offer-popup-close" onClick={close} aria-label="Close offer">
          <span aria-hidden="true">×</span>
        </button>
        <p className="offer-popup-kicker">Opening offer</p>
        <h2 id={titleId}>
          {openingOffer.line}
          <sup>*</sup>
        </h2>
        <p id={noteId}>* {openingOffer.note}</p>
        <ul>
          {coupons.map((coupon) => (
            <li key={coupon.id}>
              <div>
                <strong>{coupon.title}</strong>
                <span>{coupon.detail}</span>
              </div>
              <Link to={`/contact?coupon=${coupon.id}#start-project`} onClick={close}>
                Apply
              </Link>
            </li>
          ))}
        </ul>
        <button type="button" className="offer-popup-later" onClick={close}>
          Maybe later
        </button>
      </div>
    </div>
  )
}
