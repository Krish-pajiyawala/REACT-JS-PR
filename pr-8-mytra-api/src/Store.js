// Store.js
import { createStore, applyMiddleware, compose } from "redux";
import { AddProductRedux } from "./Component/Services/Reducer/AddProductReducer";
import * as reduxThunk from "redux-thunk";

let thunkMiddleware = null;

if (typeof reduxThunk === "function") {
    thunkMiddleware = reduxThunk;
} else if (typeof reduxThunk.default === "function") {
    thunkMiddleware = reduxThunk.default;
} else if (typeof reduxThunk.thunk === "function") {
    thunkMiddleware = reduxThunk.thunk;
}

if (!thunkMiddleware) {
    console.error("redux-thunk exports found:", Object.keys(reduxThunk));
    throw new Error(
        "Cannot locate thunk middleware function in redux-thunk module. " +
        "Check your redux-thunk installation/version. Keys: " +
        JSON.stringify(Object.keys(reduxThunk))
    );
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(AddProductRedux, composeEnhancers(applyMiddleware(thunkMiddleware)));