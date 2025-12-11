// src/pages/Register.jsx
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../actions/authActions";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, user } = useSelector((state) => state.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (user) {
    navigate("/");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(email, password));
  };

  return (
    <div className="container" style={{ maxWidth: "400px" }}>
      <h2 className="mb-3">Register</h2>

      {error && <p className="text-danger">{error}</p>}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            className="form-control"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            className="form-control"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Min 6 characters"
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary w-100"
          disabled={loading}
        >
          Register
        </button>
      </form>

      <p className="mt-3">
        Already have an account?{" "}
        <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Register;
