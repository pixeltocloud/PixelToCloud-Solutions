import { contact } from '../../data/founders'

export { CtaBand } from './Stage'

export function FaqList({ groups }) {
  return (
    <div className="ag-faq">
      {groups.map((group) => (
        <section key={group.id || group.title} id={group.id}>
          {group.title ? <h2>{group.title}</h2> : null}
          {group.items.map((item) => (
            <details key={item.q || item.question}>
              <summary>{item.q || item.question}</summary>
              <p>{item.a || item.answer}</p>
            </details>
          ))}
        </section>
      ))}
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
