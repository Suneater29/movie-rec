import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";

import Home from "./pages/Home";
import Pick from "./pages/Pick";
import Recommendations from "./pages/Recommendations";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";

function App() {
  const [selectedMovieIds, setSelectedMovieIds] = useState([]);

  function toggleMovie(movieId) {
    setSelectedMovieIds((currentIds) => {
      if (currentIds.includes(movieId)) {
        return currentIds.filter((id) => id !== movieId);
      }

      if (currentIds.length >= 10) {
        return currentIds;
      }

      return [...currentIds, movieId];
    });
  }

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/pick"
          element={
            <Pick
              selectedMovieIds={selectedMovieIds}
              onToggleMovie={toggleMovie}
            />
          }
        />
        <Route path="/recommendations" element={<Recommendations selectedMovieIds={selectedMovieIds} />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;