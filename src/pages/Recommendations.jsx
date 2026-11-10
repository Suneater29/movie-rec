import recommendations from "../data/recommendations";
import MovieGrid from "../components/MovieGrid";

function Recommendations({ selectedMovieIds }) {
  const moviesToShow = recommendations.filter(
    (movie) => !selectedMovieIds.includes(movie.id)
  );

  return (
    <main className="home-page">
      <h1>Your recommendations</h1>

      {selectedMovieIds.length === 0 ? (
        <p>Pick some favorite movies first, then come back here.</p>
      ) : (
        <>
          <p>Based on your {selectedMovieIds.length} picked movies:</p>
          <MovieGrid movies={moviesToShow} />
        </>
      )}
    </main>
  );
}

export default Recommendations;