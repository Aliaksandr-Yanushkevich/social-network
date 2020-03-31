import React from "react";
import {
  sendMessageCreator,
  updateMessageTextCreator
} from "../../../redux/messagesReducer";
import NewMessage from "./NewMessage";
// import Avatar from "../../Profile/Avatar/Avatar";

const NewMessageContainer = ({ store }) => {
  const { dispatch } = store;
  const state = store.getState();
  debugger;
  const onSendNewMessage = () => {
    dispatch(sendMessageCreator());
  };
  const updateMessageText = text => {
    dispatch(updateMessageTextCreator(text));
  };
  return (
    <NewMessage
      onSendNewMessage={onSendNewMessage}
      updateMessageText={updateMessageText}
      newMessageText={state.messagesReducer.newMessageText}
    />
  );
};

export default NewMessageContainer;
