const SEND_NEW_MESSAGE = "SEND-NEW-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

export const sendMessageCreator = () => ({ type: SEND_NEW_MESSAGE });
export const updateMessageTextCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, text: text })

let initialState = {
    dialogs: [
        { id: 1, name: "Kenny" },
        { id: 2, name: "Batters" },
        { id: 3, name: "Stan" },
        { id: 4, name: "Kyle" }
    ],
    messages: [
        { id: 1, message: "How is going on?" },
        { id: 2, message: "What a bore!" },
        { id: 3, message: "You will respect my authority!" }
    ],
    newMessageText: ""
}
const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_NEW_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, { id: 6, message: state.newMessageText }],
                newMessageText: ""
            };

        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.text
            };

        default:
            return state;
    }
}

export default messagesReducer;