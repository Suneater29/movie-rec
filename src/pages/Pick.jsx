import movies from "../data/movies";
import MovieCard from "../components/MovieCard";
import "./Pick.css";

function Pick({ selectedMovieIds, onToggleMovie }) {
  const atLimit = selectedMovieIds.length >= 10;

  return (
    <main className="pick-page">
      <h1>Pick your favorite movies</h1>
      <p>Choose up to 10 movies that match your taste.</p>
      <p className="pick-count">Selected: {selectedMovieIds.length} / 10</p>

      <div className="movie-grid">
        {movies.map((movie) => {
          const isSelected = selectedMovieIds.includes(movie.id);

          return (
            <MovieCard
              key={movie.id}
              title={movie.title}
              year={movie.year}
              posterUrl={movie.posterUrl}
              isSelected={isSelected}
              isDisabled={atLimit && !isSelected}
              onToggle={() => onToggleMovie(movie.id)}
            />
          );
        })}
      </div>
    </main>
  );
}

export default Pick;