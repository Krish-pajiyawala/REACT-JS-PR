// src/reducers/authReducer.js
const initialState = {
  user: null,       // { uid, email }
  loading: false,
  error: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "AUTH_START":
      return { ...state, loading: true, error: null };
    case "AUTH_SUCCESS":
      return { ...state, loading: false, user: action.payload, error: null };
    case "AUTH_ERROR":
      return { ...state, loading: false, error: action.payload };
    case "AUTH_LOGOUT":
      return { ...state, user: null, loading: false, error: null };
    case "AUTH_SET_USER": // from onAuthStateChanged
      return { ...state, user: action.payload, loading: false, error: null };
    default:
      return state;
  }
};
