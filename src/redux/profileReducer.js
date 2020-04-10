import { usersApi } from "../../src/api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

export const onAddPost = () => ({ type: ADD_POST });
export const onPostChange = text => ({ type: UPDATE_NEW_POST_TEXT, newText: text });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });

export const getProfile = (userId) => (dispatch) => {
    if (!userId) {
        userId = 2;
      }
      usersApi.getProfile(userId).then((data) => {
          debugger;
        dispatch(setUserProfile(data));
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
    newPostText: "",
    profile: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, { id: 4, text: state.newPostText, likesCount: 0 }],
                newPostText: ""
            };

        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }

        default:
            return state
    }
}

export default profileReducer;