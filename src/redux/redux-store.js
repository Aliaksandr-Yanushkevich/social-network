import { createStore, combineReducers } from "redux";
import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";
import sideReducer from "./sideReducer";

let reducers = combineReducers({
    profileReducer,
    messagesReducer,
    sideReducer
})
let store = createStore(reducers);

export default store;