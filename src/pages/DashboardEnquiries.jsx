import { Link } from 'react-router-dom'
import DashboardLayout from '../components/dashboard/DashboardLayout'

export default function DashboardEnquiries() {
  return (
    <DashboardLayout title="Enquiries | PixelToCloud" description="Enquiries on your PixelToCloud account.">
      <h1>Enquiries</h1>
      <p className="dash-lead">Questions you send us will be listed here once they are connected to your account.</p>
      <Link className="ag-btn ag-btn-solid" to="/contact">Send an enquiry</Link>
    </DashboardLayout>
  )
}
