import MovieCard from "./MovieCard";
import "./MovieGrid.css";

function MovieGrid({ movies }) {
  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          year={movie.year}
          posterUrl={movie.posterUrl}
        />
      ))}
    </div>
  );
}

export default MovieGrid;