import './App.css';
import { genres } from "./mock-data/genres.js";
import { movies } from "./mock-data/movies.js";
import GenreList from "./components/GenreList";
import MovieList from "./components/MovieList";
import { useState } from "react";

function App() {
  const [currentGenre, setCurrentGenre] = useState("All");

  const filteredMovies =
    currentGenre === "All"
      ? movies
      : movies.filter((m) => m.genre === currentGenre);

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">CINESELECT</h1>
        <p className="app-subtitle">Browse by genre</p>
      </header>
      <main className="app-main">
        <aside className="sidebar">
          <GenreList
            genres={genres}
            currentGenre={currentGenre}
            setCurrentGenre={setCurrentGenre}
          />
        </aside>
        <section className="content">
          <MovieList movies={filteredMovies} currentGenre={currentGenre} />
        </section>
      </main>
    </div>
  );
}

export default App;