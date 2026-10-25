import { useEffect, useId, useState } from 'react'
import WhatsAppIcon from '../ui/WhatsAppIcon'
import { contact } from '../../data/founders'
import './ConnectDock.css'

function CallIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M7.1 3.4c.4-.4 1-.5 1.5-.3l2.2 1c.5.2.8.7.8 1.2l-.2 2.4c0 .5-.3.9-.7 1.1l-1.3.7a12.4 12.4 0 0 0 5.1 5.1l.7-1.3c.2-.4.6-.7 1.1-.7l2.4-.2c.5 0 1 .3 1.2.8l1 2.2c.2.5.1 1.1-.3 1.5l-1.6 1.6c-.4.4-1 .6-1.6.5C10.6 18.4 5.6 13.4 4.8 6.6c-.1-.6.1-1.2.5-1.6l1.8-1.6z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M3 5.5h18a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1zm9 6.7L4.4 7.2l-.8 1.3L12 14.2l8.4-5.7-.8-1.3L12 12.2z" />
    </svg>
  )
}

export default function ConnectDock() {
  const [open, setOpen] = useState(false)
  const [note, setNote] = useState('')
  const panelId = useId()

  useEffect(() => {
    if (!open) return undefined
    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    const onPointer = (event) => {
      if (!event.target.closest('.connect-dock')) setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onPointer)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onPointer)
    }
  }, [open])

  function send(event) {
    event.preventDefault()
    const text = note.trim() || 'Hi PixelToCloud, I visited pixeltocloud.com and would like to discuss a project.'
    const url = `https://wa.me/918219352124?text=${encodeURIComponent(text)}`
    window.open(url, '_blank', 'noopener,noreferrer')
    setOpen(false)
  }

  return (
    <div className="connect-dock">
      {open ? (
        <form className="connect-chat" id={panelId} role="dialog" aria-label="WhatsApp chat" onSubmit={send}>
          <header className="connect-chat-head">
            <WhatsAppIcon />
            <div>
              <strong>PixelToCloud</strong>
              <span>Pankaj and Rusmeen reply on WhatsApp.</span>
            </div>
            <button type="button" className="connect-chat-close" onClick={() => setOpen(false)} aria-label="Close chat">
              ×
            </button>
          </header>
          <p className="connect-chat-bubble">Tell us what you are building. Send opens WhatsApp with your note.</p>
          <label className="sr-only" htmlFor={`${panelId}-note`}>Message</label>
          <textarea
            id={`${panelId}-note`}
            rows={3}
            value={note}
            onChange={(event) => setNote(event.target.value)}
            placeholder="A website, an app, or something else…"
          />
          <button className="connect-chat-send" type="submit">
            <WhatsAppIcon />
            Send on WhatsApp
          </button>
        </form>
      ) : null}
      <nav className="connect-dock-bar" aria-label="Quick contact">
        <a href={`tel:${contact.whatsappPrimary}`} aria-label={`Call ${contact.whatsappPrimary}`}>
          <CallIcon />
          <span>Call</span>
        </a>
        <a href={`mailto:${contact.email}`} aria-label={`Email ${contact.email}`}>
          <MailIcon />
          <span>Email</span>
        </a>
        <button
          type="button"
          className="is-wa"
          aria-expanded={open}
          aria-controls={panelId}
          aria-label={open ? 'Close WhatsApp chat' : 'Open WhatsApp chat'}
          onClick={() => setOpen((current) => !current)}
        >
          <WhatsAppIcon />
          <span>WhatsApp</span>
        </button>
      </nav>
    </div>
  )
}
