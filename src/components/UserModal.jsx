import { useEffect } from 'react'

export default function UserModal({ user, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  if (!user) return null

  const { address, company } = user

  return (
    <div className="modal-overlay" onClick={onClose} role="presentation">
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="modal__close"
          onClick={onClose}
          aria-label="Fermer"
        >
          <i className="pi pi-times" aria-hidden="true" />
        </button>

        <header className="modal__header">
          <div className="modal__avatar" aria-hidden="true">
            {user.name
              .split(' ')
              .map((n) => n[0])
              .join('')
              .slice(0, 2)
              .toUpperCase()}
          </div>
          <div>
            <h2 id="modal-title">{user.name}</h2>
            <p className="modal__username">@{user.username}</p>
          </div>
        </header>

        <div className="modal__body">
          <section>
            <h3>Contact</h3>
            <dl>
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${user.email}`}>{user.email}</a>
              </dd>
              <dt>Téléphone</dt>
              <dd>{user.phone}</dd>
              <dt>Site web</dt>
              <dd>
                <a href={`https://${user.website}`} target="_blank" rel="noreferrer">
                  {user.website}
                </a>
              </dd>
            </dl>
          </section>

          <section>
            <h3>Adresse</h3>
            <dl>
              <dt>Rue</dt>
              <dd>{address.street}</dd>
              <dt>Appartement</dt>
              <dd>{address.suite}</dd>
              <dt>Ville</dt>
              <dd>
                {address.city}, {address.zipcode}
              </dd>
            </dl>
          </section>

          <section>
            <h3>Entreprise</h3>
            <dl>
              <dt>Nom</dt>
              <dd>{company.name}</dd>
              <dt>Slogan</dt>
              <dd>{company.catchPhrase}</dd>
              <dt>Activité</dt>
              <dd>{company.bs}</dd>
            </dl>
          </section>
        </div>
      </div>
    </div>
  )
}
