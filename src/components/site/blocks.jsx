import { useState } from 'react'
import { contact } from '../../data/founders'

export { CtaBand } from './Stage'

export function FaqList({ groups }) {
  const items = groups.flatMap((group, groupIndex) =>
    group.items.map((item, itemIndex) => ({
      id: `${group.id || groupIndex}-${itemIndex}`,
      label: group.title,
      q: item.q || item.question,
      a: item.a || item.answer,
    })),
  )
  const [openId, setOpenId] = useState(items[0]?.id ?? null)

  return (
    <div className="ag-faq">
      {items.map((item) => {
        const open = openId === item.id
        const panelId = `faq-panel-${item.id}`
        const buttonId = `faq-button-${item.id}`
        return (
          <div key={item.id} className={`ag-faq-item${open ? ' is-open' : ''}`}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenId(open ? null : item.id)}
              >
                <span>
                  {item.label ? <span className="ag-faq-label">{item.label}</span> : null}
                  <span className="ag-faq-q">{item.q}</span>
                </span>
                <span className="ag-faq-chevron" aria-hidden="true" />
              </button>
            </h3>
            <div
              className="ag-faq-panel"
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              aria-hidden={open ? undefined : true}
              inert={open ? undefined : true}
            >
              <div>
                <p>{item.a}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export function LegalNotice() {
  return (
    <p className="ag-note">
      This page is a working policy for the site. It is not a jurisdiction-specific legal opinion. Have counsel review it before you rely on it.
    </p>
  )
}

export function DirectContact() {
  return (
    <ul className="ag-list">
      <li className="ag-row"><strong>Email</strong><span><a href={`mailto:${contact.email}`}>{contact.email}</a></span></li>
      <li className="ag-row"><strong>WhatsApp</strong><span><a href={contact.whatsappLink}>Message the studio</a></span></li>
      <li className="ag-row"><strong>Offices</strong><span>{contact.location}</span></li>
    </ul>
  )
}
