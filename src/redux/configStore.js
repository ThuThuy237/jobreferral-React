import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import LoginReducer from "../reducers/Login/LoginReducer";
import PostJobReducer from "../reducers/PostJob/PostJobReducer";
const rootReducer = combineReducers({
    LoginReducer,
    PostJobReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;