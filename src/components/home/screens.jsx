export function TaxPreview() {
  return (
    <div className="ui ui-tax">
      <header>
        <strong>Easy My Tax</strong>
        <span>Client vault</span>
      </header>
      <ul>
        <li>
          <span>GST · March</span>
          <em>Ready</em>
        </li>
        <li>
          <span>ITR packet</span>
          <em>Review</em>
        </li>
        <li>
          <span>Shared files</span>
          <em>12</em>
        </li>
      </ul>
    </div>
  )
}

export function CarePreview() {
  return (
    <div className="ui ui-care">
      <header>
        <strong>Harish Renova</strong>
        <span>Oncology</span>
      </header>
      <div>
        <p>Consultation</p>
        <b>Tue · 16:00</b>
        <small>WhatsApp confirmation sent</small>
      </div>
    </div>
  )
}

export function CraftPreview() {
  return (
    <div className="ui ui-craft">
      <div className="ui-swatch" />
      <header>
        <strong>Brass lamp</strong>
        <span>Inquire</span>
      </header>
      <p>USD · INR · EUR</p>
    </div>
  )
}
