// src/reducers/recipeReducer.js
const initialState = {
  items: [],   // array of recipes
  loading: false,
  error: null,
};

export const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "RECIPES_FETCH_START":
    case "RECIPES_ACTION_START":
      return { ...state, loading: true, error: null };

    case "RECIPES_FETCH_SUCCESS":
      return { ...state, loading: false, items: action.payload };

    case "RECIPES_ADD_SUCCESS":
      return { ...state, loading: false, items: [action.payload, ...state.items] };

    case "RECIPES_UPDATE_SUCCESS":
      return {
        ...state,
        loading: false,
        items: state.items.map((r) =>
          r.id === action.payload.id ? action.payload : r
        ),
      };

    case "RECIPES_DELETE_SUCCESS":
      return {
        ...state,
        loading: false,
        items: state.items.filter((r) => r.id !== action.payload),
      };

    case "RECIPES_ERROR":
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
