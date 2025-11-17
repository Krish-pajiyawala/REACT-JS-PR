import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MovieList.css";

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [filterGenre, setFilterGenre] = useState("");
  const [filterLanguage, setFilterLanguage] = useState("");
  const [minRating, setMinRating] = useState(0);
  const [sortBy, setSortBy] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const navigate = useNavigate();

  useEffect(() => {
    const storedMovies = JSON.parse(localStorage.getItem("movies")) || [];
    setMovies(storedMovies);
  }, []);

  const genres = useMemo(() => {
    const set = new Set();
    movies.forEach((m) => {
      if (m.genre) set.add(m.genre);
    });
    return Array.from(set).sort();
  }, [movies]);

  const languages = useMemo(() => {
    const set = new Set();
    movies.forEach((m) => {
      if (m.language) set.add(m.language);
    });
    return Array.from(set).sort();
  }, [movies]);

  const filteredAndSorted = useMemo(() => {
    const term = search.trim().toLowerCase();

    let list = movies.filter((m) => {
      if (!m) return false;

      if (term) {
        const inTitle = m.title && m.title.toLowerCase().includes(term);
        const inDirector = m.director && m.director.toLowerCase().includes(term);
        const inGenre = m.genre && m.genre.toLowerCase().includes(term);
        const castStr = Array.isArray(m.cast) ? m.cast.join(" ") : (m.cast || "");
        const inCast = castStr && castStr.toLowerCase().includes(term);
        if (!(inTitle || inDirector || inGenre || inCast)) return false;
      }

      if (filterGenre && m.genre !== filterGenre) return false;
      if (filterLanguage && m.language !== filterLanguage) return false;

      if (minRating && Number(m.rating) < Number(minRating)) return false;

      return true;
    });

    if (sortBy) {
      list.sort((a, b) => {
        const dir = sortOrder === "asc" ? 1 : -1;

        const getVal = (obj, key) => {
          if (!obj) return "";
          if (key === "title") return (obj.title || "").toString().toLowerCase();
          if (key === "year") return Number(obj.year) || 0;
          if (key === "rating") return Number(obj.rating) || 0;
          if (key === "duration") return Number(obj.duration) || 0;
          return (obj[key] || "").toString().toLowerCase();
        };

        const va = getVal(a, sortBy);
        const vb = getVal(b, sortBy);

        if (va < vb) return -1 * dir;
        if (va > vb) return 1 * dir;
        return 0;
      });
    }

    return list;
  }, [movies, search, filterGenre, filterLanguage, minRating, sortBy, sortOrder]);
  

  const handleDelete = (index) => {
    const updatedMovies = movies.filter((_, i) => i !== index);
    localStorage.setItem("movies", JSON.stringify(updatedMovies));
    setMovies(updatedMovies);
  };

  const handleEdit = (movie, index) => {
    localStorage.setItem("editIndex", index);
    localStorage.setItem("editMovie", JSON.stringify(movie));
    navigate("/add");
  };

  return (
    <div className="movie-list-container">
      <h2>All Movies</h2>

      <div className="controls">
        <input
          className="search-input"
          placeholder="Search by title, director, genre, cast..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select value={filterLanguage} onChange={(e) => setFilterLanguage(e.target.value)}>
          <option value="">All Languages</option>
          {languages.map((l) => (
            <option key={l} value={l}>
              {l}
            </option>
          ))}
        </select>

        <select value={minRating} onChange={(e) => setMinRating(e.target.value)}>
          <option value={0}>Min Rating</option>
          <option value={1}>1+</option>
          <option value={2}>2+</option>
          <option value={3}>3+</option>
          <option value={4}>4+</option>
          <option value={5}>5+</option>
          <option value={6}>6+</option>
          <option value={7}>7+</option>
          <option value={8}>8+</option>
          <option value={9}>9+</option>
        </select>

        <button
          className="reset-filters"
          onClick={() => {
            setSearch("");
            setFilterLanguage("");
            setMinRating(0);
          }}
        >
          Reset
        </button>
      </div>
      {movies.length === 0 ? (
        <p className="no-movies">No movies added yet.</p>
      ) : filteredAndSorted.length === 0 ? (
        <p className="no-movies">No movies match the current filters.</p>
      ) : (
        <div className="movie-grid">
          {filteredAndSorted.map((m, index) => (
            <div key={index} className="movie-card">
              <img src={m.poster} alt={m.title} />
              <div className="movie-info">
                <h4>{m.title}</h4>
                <p>
                  <strong>Year:</strong> {m.year}
                </p>
                {m.genre && (
                  <p>
                    <strong>Genre:</strong> {m.genre}
                  </p>
                )}
                {m.director && (
                  <p>
                    <strong>Director:</strong> {m.director}
                  </p>
                )}
                {m.cast && (
                  <p>
                    <strong>Cast:</strong> {Array.isArray(m.cast) ? m.cast.join(", ") : m.cast}
                  </p>
                )}
                {m.rating && (
                  <p>
                    <strong>Rating:</strong> ⭐ {m.rating}/10
                  </p>
                )}
                {m.language && (
                  <p>
                    <strong>Language:</strong> {m.language}
                  </p>
                )}
                {m.duration && (
                  <p>
                    <strong>Duration:</strong> {m.duration} hour
                  </p>
                )}
              </div>

              <div className="movie-actions">
                <button className="edit-btn" onClick={() => handleEdit(m, index)}>
                  Edit
                </button>
                <button className="delete-btn" onClick={() => handleDelete(index)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MovieList;
