import {createStore, combineReducers, applyMiddleware} from "redux";
import thunkMiddleware from 'redux-thunk';

import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import usersReducer from "./usersReducer";
import authReduced from "./auth-reducer";

let reducers = combineReducers({     // объект, 
    profilePage: profileReducer,
    messagePage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReduced
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;