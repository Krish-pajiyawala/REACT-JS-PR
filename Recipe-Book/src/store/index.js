// src/store/index.js
import { createStore, combineReducers, applyMiddleware } from "redux";
import {thunk} from "redux-thunk";
import { authReducer } from "../reducers/authReducer";
import { recipeReducer } from "../reducers/recipeReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  recipes: recipeReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
