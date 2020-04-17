// import { authApi } from "../api/api";
// import { stopSubmit } from "redux-form";
import { getAuthUserData } from "./authReducer";

const INITIALIZED_SUCCES = "INITIALIZED_SUCCES";


export const initilizedSuccess = () =>
    ({ type: INITIALIZED_SUCCES, });


export const initilizeApp = () => (dispatch) => {
    const promise = dispatch(getAuthUserData())

    Promise.all([promise]).then(() => dispatch(initilizedSuccess()))
}

let initialState = {
    initialized: false,
}
const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCES:
            return {
                ...state,
                initialized: true,
            };
        default:
            return state;
    }
}

export default appReducer;