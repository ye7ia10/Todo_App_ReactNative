import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";

//import reducer function
import userReducer from "./reducers";

const rootReducer = combineReducers({userReducer}); // combine all reducers in one place

export const Store = createStore(rootReducer, applyMiddleware(thunk));