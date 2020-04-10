import { authApi } from "../../src/api/api";

const SET_USER_DATA = "SET_USER_DATA";
const TOOGGLE_IS_FETCHING = "TOOGGLE_IS_FETCHING";
const SET_USER_PHOTO = "SET_USER_PHOTO";

export const setUserPhoto = (photo) => ({ type: SET_USER_PHOTO, photo });
export const setAuthUserData = ({ id, email, login }) =>
    ({ type: SET_USER_DATA, userData: { id, email, login } });
export const tooggleIsFetching = (isFetching) => {
    return { type: TOOGGLE_IS_FETCHING, isFetching }
}

export const getAuthUserData = () => (dispatch) => {
    authApi.me().then((data) => {
        debugger;
        if (data.resultCode === 0) {
            dispatch(tooggleIsFetching(false));
            dispatch(setAuthUserData( data.data ));
        }

    });
}



let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    photo: null,
    isFetching: false
}
const authReducer = (state = initialState, action) => {
    debugger
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.userData,
                isAuth: true,
            };
        case TOOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };
        case SET_USER_PHOTO:
            return {
                ...state,
                photo: action.photo
            };
        default:
            return state;
    }
}

export default authReducer;