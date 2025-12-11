// src/pages/Login.jsx
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../actions/authActions";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
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
    dispatch(loginUser(email, password));
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-gradient-primary py-5">
      <div className="container" style={{ maxWidth: "420px" }}>
        <div className="card border-0 shadow-lg rounded-3 overflow-hidden">
          <div className="card-header bg-emerald-600 text-white text-center py-4">
            <div className="d-flex justify-content-center mb-3">
              <div className="bg-white p-3 rounded-circle">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#10B981"/>
                  <path d="M2 17L12 22L22 17" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <h2 className="fw-bold mb-0">Welcome Back</h2>
            <p className="text-emerald-100 mb-0">Sign in to your RecipeBook account</p>
          </div>
          
          <div className="card-body p-4 p-md-5">
            {error && (
              <div className="alert alert-danger d-flex align-items-center" role="alert">
                <i className="bi bi-exclamation-triangle-fill me-2"></i>
                <div>{error}</div>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="form-label fw-medium text-gray-700">Email Address</label>
                <div className="input-group">
                  <span className="input-group-text bg-emerald-50 border-end-0">
                    <i className="bi bi-envelope text-emerald-600"></i>
                  </span>
                  <input
                    className="form-control border-start-0"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="form-label fw-medium text-gray-700">Password</label>
                <div className="input-group">
                  <span className="input-group-text bg-emerald-50 border-end-0">
                    <i className="bi bi-lock text-emerald-600"></i>
                  </span>
                  <input
                    className="form-control border-start-0"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-emerald w-100 py-3 fw-bold"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                    Signing in...
                  </>
                ) : (
                  <>
                    <i className="bi bi-box-arrow-in-right me-2"></i>
                    Sign In
                  </>
                )}
              </button>
            </form>

            <div className="text-center mt-4 pt-3 border-top">
              <p className="text-gray-600 mb-0">
                Don't have an account?{" "}
                <Link to="/register" className="text-emerald-600 fw-medium text-decoration-none">
                  Create one now
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;