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
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('State is changed')
    },
    addNewPost() {
        const newPost = {
            id: 4, text: this._state.profilePage.newPostText, likesCount: 0
        }
        this._state.profilePage.posts.push(newPost);
        this.updateNewPostText("");
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    sendNewMessage() {
        const newMessage = {
            message: this._state.messagesPage.newMessageText
        }
        this._state.messagesPage.messages.push(newMessage);
        this.updateNewMessageText("");
        this._callSubscriber(this._state);
    },
    updateNewMessageText(newText) {
        this._state.messagesPage.newMessageText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
}

window.store = store;