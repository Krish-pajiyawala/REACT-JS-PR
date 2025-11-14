import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>🎬 MY MOVIE</h2>
      <div className="nav-links">
        <Link to="/add">Add Movie</Link>
        <Link to="/">All Movies</Link>
      </div>
    </nav>
  );
}

export default Navbar;
