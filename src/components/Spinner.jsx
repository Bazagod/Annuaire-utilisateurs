export default function Spinner() {
  return (
    <div className="spinner-wrapper" role="status" aria-label="Chargement en cours">
      <div className="spinner" />
      <p>Chargement des utilisateurs…</p>
    </div>
  )
}
