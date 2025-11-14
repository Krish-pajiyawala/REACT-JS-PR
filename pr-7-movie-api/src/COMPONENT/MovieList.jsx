import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MovieList.css";

function MovieList() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedMovies = JSON.parse(localStorage.getItem("movies")) || [];
    setMovies(storedMovies);
  }, []);

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
      {movies.length === 0 ? (
        <p className="no-movies">No movies added yet.</p>
      ) : (
        <div className="movie-grid">
          {movies.map((m, index) => (
            <div key={index} className="movie-card">
              <img src={m.poster} alt={m.title} />
              <div className="movie-info">
                <h4>{m.title}</h4>
                <p><strong>Year:</strong> {m.year}</p>
                {m.genre && <p><strong>Genre:</strong> {m.genre}</p>}
                {m.director && <p><strong>Director:</strong> {m.director}</p>}
                {m.cast && <p><strong>Cast:</strong> {m.cast}</p>}
                {m.rating && <p><strong>Rating:</strong> ⭐ {m.rating}/10</p>}
                {m.language && <p><strong>Language:</strong> {m.language}</p>}
                {m.duration && <p><strong>Duration:</strong> {m.duration} hour</p>}
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
