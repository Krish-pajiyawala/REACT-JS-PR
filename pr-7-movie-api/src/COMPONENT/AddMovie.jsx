import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddMovie.css";

function AddMovie() {
  const [movie, setMovie] = useState({
    title: "",
    year: "",
    director: "",
    cast: "",
    rating: "",
    duration: "",
    language: "",
    poster: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const editMovie = JSON.parse(localStorage.getItem("editMovie"));
    const editIndex = localStorage.getItem("editIndex");

    if (editMovie && editIndex !== null) {
      setMovie(editMovie);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "rating") {
      const num = Number(value);
      if (num < 1 || num > 10) {
        return;
      }
    }

    setMovie({ ...movie, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const movies = JSON.parse(localStorage.getItem("movies")) || [];
    const editIndex = localStorage.getItem("editIndex");

    if (editIndex !== null) {
      movies[editIndex] = movie;
      localStorage.removeItem("editIndex");
      localStorage.removeItem("editMovie");
    } else {
      movies.push(movie);
    }

    localStorage.setItem("movies", JSON.stringify(movies));
    navigate("/");
  };

  return (
    <div className="add-movie-container">
      <form className="add-movie-form" onSubmit={handleSubmit}>
        <h2>{localStorage.getItem("editIndex") ? "Edit Movie" : "Add Movie"}</h2>

        <input type="text" name="title" value={movie.title} placeholder="🎬 Movie Title" onChange={handleChange} required/>
        <input type="text" name="year" value={movie.year} placeholder="📅 Release Year" onChange={handleChange} required />
        <input type="text" name="director" value={movie.director} placeholder="🎬 Director" onChange={handleChange} />
        <input type="text" name="cast" value={movie.cast} placeholder="🎤 Cast" onChange={handleChange} />
        <input type="number" name="rating" value={movie.rating} placeholder="⭐ Rating (1-10)" onChange={handleChange} min="1" max="10" required />
        <input type="text" name="duration" value={movie.duration} placeholder="⏱️ Duration (mins)" onChange={handleChange} />
        <input type="text" name="language" value={movie.language} placeholder="🌐 Language" onChange={handleChange} />
        <input type="text" name="poster" value={movie.poster} placeholder="🖼️ Poster URL" onChange={handleChange} required />

        <button type="submit">
          {localStorage.getItem("editIndex") ? "Update Movie" : "Add Movie"}
        </button>
      </form>
    </div>
  );
}

export default AddMovie;
