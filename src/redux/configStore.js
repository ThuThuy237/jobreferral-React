import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import LoginReducer from "../reducers/Login/LoginReducer";
import PostJobReducer from "../reducers/PostJob/PostJobReducer";
import GetResourceReducer from "../reducers/GetResource/GetResourseReducer";
import RegisterRecruiterReducer from "../reducers/RegisterRecruiter/RegisterRecruiterReducer";
import RecruiterReducer from "../reducers/Recruiter/RecruiterReducer";
const rootReducer = combineReducers({
    LoginReducer,
    PostJobReducer,
    GetResourceReducer,
    RegisterRecruiterReducer,
    RecruiterReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;