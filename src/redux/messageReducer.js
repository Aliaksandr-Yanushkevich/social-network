const SEND_NEW_MESSAGE = "SEND-NEW-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

export const sendMessageCreator = () => ({ type: SEND_NEW_MESSAGE });
export const updateMessageTextCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, text: text })

const messageReducer = (state, action) => {
    switch (action.type) {
        case SEND_NEW_MESSAGE:
            const newMessage = {
                message: state.newMessageText
            }
            state.messages.push(newMessage);
            state.newMessageText = "";
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.text;
            return state;
        default:
            return state;
    }
}

export default messageReducer;