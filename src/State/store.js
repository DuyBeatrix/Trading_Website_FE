import { thunk } from "redux-thunk";
import authenticationReducer from "./Authentication/Reducer";

import {combineReducers, legacy_createStore, applyMiddleware} from "redux";

const rootReducer = combineReducers ({
    auth : authenticationReducer
});

// create redux store
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))