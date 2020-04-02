const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextCreator = text => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

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
    newPostText: ""
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            const newPost = {
                id: 4, text: state.newPostText, likesCount: 0
            }
            const stateCopy = { ...state }
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(newPost);
            debugger;
            stateCopy.newPostText = "";
            debugger;
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            const stateCopy = { ...state }
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        default:
            return state
    }
}

export default profileReducer;