export default function SearchBar({ value, onChange }) {
  return (
    <div className="search-bar">
      <label htmlFor="user-search" className="sr-only">
        Rechercher un utilisateur
      </label>
      <i className="pi pi-search search-icon" aria-hidden="true" />
      <input
        id="user-search"
        type="search"
        placeholder="Rechercher par nom, email ou entreprise…"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete="off"
      />
    </div>
  )
}
