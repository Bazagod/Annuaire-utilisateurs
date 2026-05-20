import { useEffect, useState, useMemo } from "react";
import Spinner from "./components/Spinner";
import ErrorMessage from "./components/ErrorMessage";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";
import UserModal from "./components/UserModal";
import Pagination from "./components/Pagination";
import "./App.css";

const API_URL = "https://jsonplaceholder.typicode.com/users";
const USERS_PER_PAGE = 6;

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedUser, setSelectedUser] = useState(null);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchUsers() {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(API_URL, { signal: controller.signal });

        if (!response.ok) {
          throw new Error(`Erreur HTTP ${response.status}`);
        }

        const data = await response.json();
        setUsers(data);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(
            err.message === "Failed to fetch"
              ? "Impossible de joindre le serveur. Vérifiez votre connexion."
              : err.message,
          );
        }
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
    return () => controller.abort();
  }, [retryCount]);

  const filteredUsers = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return users;

    return users.filter(
      (user) =>
        user.name.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query) ||
        user.company.name.toLowerCase().includes(query),
    );
  }, [users, search]);

  const totalPages = Math.ceil(filteredUsers.length / USERS_PER_PAGE);
  const currentPageInRange =
    totalPages > 0 ? Math.min(currentPage, totalPages) : 1;

  const paginatedUsers = useMemo(() => {
    const start = (currentPageInRange - 1) * USERS_PER_PAGE;
    return filteredUsers.slice(start, start + USERS_PER_PAGE);
  }, [filteredUsers, currentPageInRange]);

  const handleSearchChange = (value) => {
    setSearch(value);
    setCurrentPage(1);
  };

  const handleRetry = () => setRetryCount((c) => c + 1);

  return (
    <div className="app">
      <header className="app-header">
        <h1>Annuaire Utilisateurs</h1>
      </header>

      <main className="app-main">
        {!loading && !error && (
          <div className="toolbar">
            <SearchBar value={search} onChange={handleSearchChange} />
            <p className="results-count">
              {filteredUsers.length} utilisateur
              {filteredUsers.length !== 1 ? "s" : ""} trouvé
              {filteredUsers.length !== 1 ? "s" : ""}
            </p>
          </div>
        )}

        {loading && <Spinner />}

        {error && <ErrorMessage message={error} onRetry={handleRetry} />}

        {!loading && !error && (
          <>
            {paginatedUsers.length > 0 ? (
              <div className="users-grid">
                {paginatedUsers.map((user) => (
                  <UserCard
                    key={user.id}
                    user={user}
                    onClick={setSelectedUser}
                  />
                ))}
              </div>
            ) : (
              <p className="empty-state">
                Aucun utilisateur ne correspond à votre recherche.
              </p>
            )}

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </>
        )}
      </main>

      {selectedUser && (
        <UserModal user={selectedUser} onClose={() => setSelectedUser(null)} />
      )}
    </div>
  );
}

export default App;
