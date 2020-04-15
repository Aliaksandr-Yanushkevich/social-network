const SEND_NEW_MESSAGE = "SEND-NEW-MESSAGE";

export const sendMessageCreator = (messageBody) => ({ type: SEND_NEW_MESSAGE, messageBody });

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
                messages: [...state.messages, { id: 6, message: action.messageBody }],
            };

        default:
            return state;
    }
}

export default messagesReducer;