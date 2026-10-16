import { Link, useParams } from 'react-router-dom'
import DashboardLayout from '../components/dashboard/DashboardLayout'
import { contact } from '../data/founders'

function Empty({ title, body }) {
  return (
    <DashboardLayout title={`${title} | PixelToCloud`} description={body}>
      <h1>{title}</h1>
      <p className="dash-lead">{body}</p>
      <Link className="ag-btn ag-btn-solid" to="/start-project">Start a project</Link>
    </DashboardLayout>
  )
}

export function Proposals() {
  return (
    <Empty
      title="Proposals"
      body="Proposals we send you will be listed here with status, price, and a validity date. None are on your account yet. A proposal is not a signed contract."
    />
  )
}

export function ProposalDetail() {
  const { id } = useParams()
  return (
    <Empty
      title="Proposal"
      body={`There is no proposal ${id} on your account. Proposals are not electronically signed in this portal.`}
    />
  )
}

export function Invoices() {
  return (
    <Empty
      title="Invoices"
      body="Invoices will show a number, dates, amount, and status when they come from our accounts. Nothing here is marked paid, because no payment feed is connected."
    />
  )
}

export function Messages() {
  return (
    <DashboardLayout title="Messages | PixelToCloud" description="Project messages.">
      <h1>Messages</h1>
      <p className="dash-lead">
        This screen is not a working inbox. There is no message store connected. Write to {contact.email} or use WhatsApp for the project.
      </p>
      <form className="inquiry-form" onSubmit={(event) => event.preventDefault()}>
        <label>
          Note
          <textarea disabled placeholder="Messaging is not connected." />
        </label>
        <button type="button" className="ag-btn ag-btn-solid" disabled>Send</button>
      </form>
    </DashboardLayout>
  )
}

export function Files() {
  return (
    <Empty
      title="Files"
      body="Project files will be listed here when a private store is connected. Nothing on this page is uploaded, and client files are not public."
    />
  )
}

export function ProjectDetail() {
  const { id } = useParams()
  return (
    <Empty
      title="Project"
      body={`There is no project ${id} on your account. Milestones, files, and approvals appear only for work assigned to you.`}
    />
  )
}
