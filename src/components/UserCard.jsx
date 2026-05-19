export default function UserCard({ user, onClick }) {
  const initials = user.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  return (
    <article className="user-card" onClick={() => onClick(user)}>
      <div className="user-card__avatar" aria-hidden="true">
        {initials}
      </div>
      <h2 className="user-card__name">{user.name}</h2>
      <ul className="user-card__details">
        <li>
          <span className="label">Email</span>
          <a href={`mailto:${user.email}`} onClick={(e) => e.stopPropagation()}>
            {user.email}
          </a>
        </li>
        <li>
          <span className="label">Téléphone</span>
          <span>{user.phone}</span>
        </li>
        <li>
          <span className="label">Entreprise</span>
          <span>{user.company.name}</span>
        </li>
      </ul>
      <button type="button" className="user-card__btn">
        Voir les détails
      </button>
    </article>
  )
}
