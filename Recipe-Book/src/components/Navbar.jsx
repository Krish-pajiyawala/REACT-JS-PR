import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../actions/authActions";
import "../components/Navbar.css";

const Navbar = () => {
  let dispatch;
  let user;

  try {
    dispatch = useDispatch();
    user = useSelector((state) => state.auth?.user);
  } catch (err) {
    console.warn("Redux Provider is missing. Navbar rendering without hooks.");
    dispatch = () => {};
    user = null;
  }

  const handleLogout = () => {
    if (dispatch) dispatch(logoutUser());
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm border-bottom">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <div className="me-2">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#10B981"/>
              <path d="M2 17L12 22L22 17" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 5L16 9" stroke="#059669" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <span className="fw-bold text-dark">RecipeBook</span>
        </Link>

        <div className="collapse navbar-collapse show">
          {user && (
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <NavLink 
                  className={({ isActive }) => 
                    `nav-link px-3 py-2 rounded-pill ${isActive ? 'bg-emerald-50 text-emerald-700 fw-medium' : 'text-gray-600'}`
                  } 
                  to="/"
                >
                  <i className="bi bi-journal-bookmark me-2"></i>
                  My Recipes
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  className={({ isActive }) => 
                    `nav-link px-3 py-2 rounded-pill ${isActive ? 'bg-emerald-50 text-emerald-700 fw-medium' : 'text-gray-600'}`
                  } 
                  to="/add"
                >
                  <i className="bi bi-plus-circle me-2"></i>
                  Add Recipe
                </NavLink>
              </li>
            </ul>
          )}

          <ul className="navbar-nav ms-auto align-items-center">
            {user ? (
              <>
                <li className="nav-item me-3">
                  <div className="d-flex align-items-center bg-emerald-50 px-3 py-1 rounded-pill">
                    <div className="bg-white rounded-circle p-1 me-2">
                      <i className="bi bi-person-circle text-emerald-600"></i>
                    </div>
                    <span className="text-emerald-700 fw-medium">{user.email}</span>
                  </div>
                </li>
                <li className="nav-item">
                  <button
                    className="btn btn-sm btn-outline-emerald d-flex align-items-center"
                    onClick={handleLogout}
                  >
                    <i className="bi bi-box-arrow-right me-2"></i>
                    Sign out
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink 
                    className={({ isActive }) => 
                      `nav-link px-3 py-2 rounded-pill ${isActive ? 'bg-emerald-50 text-emerald-700 fw-medium' : 'text-gray-600'}`
                    } 
                    to="/login"
                  >
                    <i className="bi bi-box-arrow-in-right me-2"></i>
                    Login
                  </NavLink>
                </li>
                <li className="nav-item ms-2">
                  <NavLink 
                    className={({ isActive }) => 
                      `nav-link px-3 py-2 rounded-pill ${isActive ? 'bg-emerald-600 text-white' : 'bg-emerald-500 text-white hover-bg-emerald-600'}`
                    } 
                    to="/register"
                  >
                    <i className="bi bi-person-plus me-2"></i>
                    Register
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;