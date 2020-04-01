import React from "react";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Messages";
import StoreContext from "../../StoreContext";
import {
  sendMessageCreator,
  updateMessageTextCreator
} from "../../redux/messagesReducer";

const MessagesContainer = () => {
  debugger;
  return (
    <StoreContext.Consumer>
      {store => {
        debugger;
        const state = store.getState();
        const dialogItems = state.messagesReducer.dialogs.map(
          ({ id, name }) => <DialogItem name={name} id={id} />
        );

        const messageItems = state.messagesReducer.messages.map(
          ({ message }) => <Message message={message} />
        );

        const newMessageText = state.messagesReducer.newMessageText;

        const sendNewMessage = () => {
          store.dispatch(sendMessageCreator());
        };

        const updateMessageText = text => {
          store.dispatch(updateMessageTextCreator(text));
        };

        return (
          <Messages
            dialogItems={dialogItems}
            messageItems={messageItems}
            newMessageText={newMessageText}
            onSendNewMessage={sendNewMessage}
            updateMessageText={updateMessageText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default MessagesContainer;
