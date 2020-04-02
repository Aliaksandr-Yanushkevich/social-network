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
        { message: "How is going on?" },
        { message: "What a bore!" },
        { message: "You will respect my authority!" }
    ],
    newMessageText: ""
}
const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_NEW_MESSAGE: {
            const stateCopy = { ...state }
            const newMessage = {
                message: stateCopy.newMessageText
            }
            stateCopy.messages = [...state.messages]
            stateCopy.messages.push(newMessage);
            stateCopy.newMessageText = "";
            return stateCopy;
        }

        case UPDATE_NEW_MESSAGE_TEXT: {
            const stateCopy = { ...state }
            stateCopy.newMessageText = action.text;
            return stateCopy;
        }

        default:
            return state;
    }
}

export default messagesReducer;