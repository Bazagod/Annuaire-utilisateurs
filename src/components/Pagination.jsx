export default function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <nav className="pagination" aria-label="Pagination">
      <button
        type="button"
        className="pagination__btn"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Page précédente"
      >
        ‹
      </button>

      <ul className="pagination__pages">
        {pages.map((page) => (
          <li key={page}>
            <button
              type="button"
              className={`pagination__page${page === currentPage ? ' pagination__page--active' : ''}`}
              onClick={() => onPageChange(page)}
              aria-current={page === currentPage ? 'page' : undefined}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="pagination__btn"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Page suivante"
      >
        ›
      </button>
    </nav>
  )
}
