const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

const movies = [
  {
    id: 1,
    title: "Inception",
    year: 2010,
    posterUrl: "https://placehold.co/300x450?text=Inception",
  },
  {
    id: 2,
    title: "Interstellar",
    year: 2014,
    posterUrl: "https://placehold.co/300x450?text=Interstellar",
  },
  {
    id: 3,
    title: "The Dark Knight",
    year: 2008,
    posterUrl: "https://placehold.co/300x450?text=The+Dark+Knight",
  },
  {
    id: 4,
    title: "Arrival",
    year: 2016,
    posterUrl: "https://placehold.co/300x450?text=Arrival",
  },
];

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.get("/api/movies", (req, res) => {
  const search = String(req.query.search || "").trim().toLowerCase();

  const results = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search)
  );

  res.json(results);
});

app.listen(PORT, () => {
  console.log(`API server running at http://localhost:${PORT}`);
});