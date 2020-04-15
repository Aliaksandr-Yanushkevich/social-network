import { usersApi, profileApi } from "../../src/api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

export const onAddPost = (postBody) => ({ type: ADD_POST,  postBody});
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = status => ({ type: SET_STATUS, status });

export const getProfile = (userId) => (dispatch) => {
    if (!userId) {
        userId = 2;
    }
    usersApi.getProfile(userId).then((data) => {
        dispatch(setUserProfile(data));
    });
};

export const getStatus = (userId) => (dispatch) => {
    profileApi.getStatus(userId).then((response) => {
        dispatch(setStatus(response.data));
    });
};

export const updateStatus = (status) => (dispatch) => {
    profileApi.updateStatus(status).then((response) => {
        if (response.data.resultCode === 0)
            dispatch(setStatus(status));
    });
};

let initialState = {
    posts: [
        { id: 1, author: "Eric Cartman", text: "Hello, world!", likeCount: 7 },
        { id: 2, author: "Eric Cartman", text: "Do you miss me?", likeCount: 3 },
        {
            id: 3,
            author: "Eric Cartman",
            text: "Why nobody write me?",
            likeCount: 12
        }
    ],
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, { id: 4, text: action.postBody, likesCount: 0 }],
            };

        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }

        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }

        default:
            return state
    }
}

export default profileReducer;