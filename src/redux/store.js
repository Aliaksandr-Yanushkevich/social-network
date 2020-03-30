import profileReducer from "./profileReducer";
import sideReducer from "./sideReducer";
import messagesReducer from "./messagesReducer";

export const store = {
    _state: {
        profilePage: {
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
        },
        messagesPage: {
            dialogs: [
                { id: 1, name: "Kenny" },
                { id: 2, name: "Batters" },
                { id: 3, name: "Stan" },
                { id: 4, name: "Kyle" }
            ],
            messages: [
                { message: "How is going on?" },
                { message: "What a bore!" },
                { message: "You will respect my authority!" }
            ],
            newMessageText: ""
        },
        sideBar: {}
    },
    _callSubscriber() {
        console.log('State is changed')
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogPage = messagesReducer(this._state.messagesPage, action);
        this._state.sideBar = sideReducer(this._state.sideBar, action);
        this._callSubscriber(this._state);
    }
}




window.store = store;