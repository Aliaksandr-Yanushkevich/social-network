import React from "react";
import Message from "./Message/Message";
import NewMessage from "./NewMessage/NewMessage";
import s from "./Messages.module.scss";
import DialogItem from "./DialogItem/DialogItem";

const Messages = ({ messagesReducer, onSendNewMessage, updateMessageText }) => {
  const dialogItems = messagesReducer.dialogs.map(({ id, name }) => (
    <DialogItem name={name} id={id} />
  ));

  const messageItems = messagesReducer.messages.map(({ message }) => (
    <Message message={message} />
  ));

  const newMessageText = messagesReducer.newMessageText;
  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        <ul>{dialogItems}</ul>
      </div>
      <div className={s.messages}>{messageItems}</div>
      <NewMessage
        newMessageText={newMessageText}
        onSendNewMessage={onSendNewMessage}
        updateMessageText={updateMessageText}
      />
    </div>
  );
};

export default Messages;
