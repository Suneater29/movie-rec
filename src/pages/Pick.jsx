import movies from "../data/movies";
import MovieCard from "../components/MovieCard";
import "./Pick.css";
import { useEffect, useState } from "react";

function Pick({ selectedMovieIds, onToggleMovie }) {
  const [movies,setMovies]=useState([]);
  const [loading,setLoading]=useState(true);
  const [error,setError]=useState("");

  useEffect(()=>{
    async function loadMovies() {
      try{
        const response=await fetch("http://localhost:3000/api/movies");
        if(!response.ok){
          throw new Error("Movie request failed");
        }
        setMovies(await response.json());
      }
      catch{
        setError("Could not load movies. Check that the API server is running.");
      }
      finally{
        setLoading(false);
      }
    }
    loadMovies();
  },[]);

   const atLimit = selectedMovieIds.length >= 10;


  return (
    <main className="pick-page">
      <h1>Pick your favorite movies</h1>
      <p>Choose up to 10 movies that match your taste.</p>
      <p className="pick-count">Selected: {selectedMovieIds.length} / 10</p>
{/* 
      {loading?(
        p
      ):} */}

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