import { createStore,applyMiddleware, compose } from "redux";
import { AddProductRedux } from "./Component/Services/Reducer/AddProductReducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
import { thunk } from "redux-thunk";

export const store = createStore(
    AddProductRedux,
    composeEnhancers(applyMiddleware(thunk))
)