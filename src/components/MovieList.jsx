function MovieList({ movies, currentGenre }) {
  if (movies.length === 0) {
    return (
      <div className="movie-error">
        <span className="movie-error__icon">⚠️</span>
        <p>No movies found for <strong>{currentGenre}</strong>.</p>
      </div>
    );
  }

  return (
    <div>
      <p className="movie-count">
        {movies.length} film{movies.length !== 1 ? "s" : ""}
        {currentGenre !== "All" ? ` in ${currentGenre}` : " across all genres"}
      </p>
      <ul className="movie-grid">
        {movies.map((movie) => (
          <li key={movie.id} className="movie-card">
            <div className="movie-card__genre-tag">{movie.genre}</div>
            <h3 className="movie-card__title">{movie.title}</h3>
            <div className="movie-card__meta">
              <span className="movie-card__year">{movie.yearReleased}</span>
              <span className="movie-card__director">{movie.director}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieList;