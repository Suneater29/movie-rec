import "./MovieCard.css"
// function MovieCard({ title, year, posterUrl }) {

function MovieCard({ title, year, posterUrl }){
    return(
        
        <article className="movie-card">
            <img className="movie-card-poster" src={posterUrl} alt={`${title}poster`} />
            <div className="movie-card-info">
                <h2>{title}</h2>
                <p>{year}</p>
            </div>
        </article>
    );
}

export default MovieCard