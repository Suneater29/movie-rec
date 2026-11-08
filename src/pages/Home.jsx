import movies from "../data/movies";
import MovieGrid from "../components/MovieGrid";
 

function Home(){
    return(
        <main>
            <h1>Discover Movies</h1>
            <MovieGrid movies={movies}/>
        </main>
    );
}

export default Home;