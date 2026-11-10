import movies from "../data/movies";
import MovieGrid from "../components/MovieGrid";
import { useState } from "react";
import SearchBar from "../components/searchBar";
import './Home.css';
 

function Home(){
    const[searchText,setSearchText]=useState("");
    const filteredMovies=movies.filter((movie)=>movie.title.toLowerCase().includes(searchText.toLowerCase())
    );
    return(
        <main className="home-page">
            <h1>Discover Movies</h1>
            <SearchBar
                value={searchText}
                onChange={setSearchText}/>
            <MovieGrid movies={filteredMovies}/>
        </main>
    );
}

export default Home;