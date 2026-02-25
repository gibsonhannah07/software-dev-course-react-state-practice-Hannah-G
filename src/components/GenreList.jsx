function GenreList({ genres, currentGenre, setCurrentGenre }) {
  return (
    <div className="genre-list">
      <h2 className="genre-heading">Genres</h2>
      <ul className="genre-items">
        <li>
          <button
            className={`genre-btn ${currentGenre === "All" ? "genre-btn--active" : ""}`}
            onClick={() => setCurrentGenre("All")}
          >
            All
          </button>
        </li>
        {genres.map((genre) => (
          <li key={genre.id}>
            <button
              className={`genre-btn ${currentGenre === genre.name ? "genre-btn--active" : ""}`}
              onClick={() => setCurrentGenre(genre.name)}
            >
              {genre.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GenreList;