export default function DashboardCard({ label, value, detail }) {
  return (
    <article className="dash-card">
      <p>{label}</p>
      <strong>{value}</strong>
      <span>{detail}</span>
    </article>
  )
}
