import { createStore, combineReducers, applyMiddleware } from "redux";
import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";
import sideReducer from "./sideReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleWare from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import appReducer from "./appReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    sidebar: sideReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})
let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

export default store;