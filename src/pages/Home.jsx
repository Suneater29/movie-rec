import { useEffect, useState } from "react";
import MovieGrid from "../components/MovieGrid";
import SearchBar from "../components/SearchBar";
import "./Home.css";

function Home() {
  const [movies, setMovies] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  

  useEffect(() => {
    async function loadMovies() {
      try {
        const response = await fetch(
  `http://localhost:3000/api/movies?search=${encodeURIComponent(searchText)}`
);

        if (!response.ok) {
          throw new Error("Movie request failed");
        }

        const data = await response.json();
        setMovies(data);
      } catch {
        setError("Could not load movies. Check that the API server is running.");
      } finally {
        setLoading(false);
      }
    }

    loadMovies();
  }, [searchText]);

  return (
    <main className="home-page">
      <h1>Discover movies</h1>
      <SearchBar value={searchText} onChange={setSearchText} />

      {loading ? (
        <p>Loading movies...</p>
      ) : error ? (
        <p className="empty-state">{error}</p>
      ) : movies.length > 0 ? (
        <MovieGrid movies={movies} />
      ) : (
        <p className="empty-state">No movies match that search.</p>
      )}
    </main>
  );
}

export default Home;