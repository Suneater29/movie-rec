import "./MovieCard.css";

function MovieCard({
  title,
  year,
  posterUrl,
  isSelected = false,
  isDisabled = false,
  onToggle,
}) {
  return (
    <article className="movie-card">
      <img
        className="movie-card-poster"
        src={posterUrl}
        alt={`${title} poster`}
      />
      <div className="movie-card-info">
        <h2>{title}</h2>
        <p>{year}</p>

        {onToggle && (
          <button
            type="button"
            className="movie-card-button"
            aria-pressed={isSelected}
            disabled={isDisabled}
            onClick={onToggle}
          >
            {isSelected ? "Remove from picks" : "Add to picks"}
          </button>
        )}
      </div>
    </article>
  );
}

export default MovieCard;