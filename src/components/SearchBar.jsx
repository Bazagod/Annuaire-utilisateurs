export default function SearchBar({ value, onChange }) {
  return (
    <div className="search-bar">
      <label htmlFor="user-search" className="sr-only">
        Rechercher un utilisateur
      </label>
      <svg
        className="search-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
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
