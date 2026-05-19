export default function ErrorMessage({ message, onRetry }) {
  return (
    <div className="error-message" role="alert">
      <span className="error-icon" aria-hidden="true">
        ⚠
      </span>
      <div>
        <h2>Une erreur est survenue</h2>
        <p>{message}</p>
        {onRetry && (
          <button type="button" className="btn btn-primary" onClick={onRetry}>
            Réessayer
          </button>
        )}
      </div>
    </div>
  )
}
