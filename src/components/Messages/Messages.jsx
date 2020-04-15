import React from "react";
import Message from "./Message/Message";
import NewMessage from "./NewMessage/NewMessage";
import s from "./Messages.module.scss";
import DialogItem from "./DialogItem/DialogItem";
import { Redirect } from "react-router-dom";

const Messages = ({
  messagesPage,
  onSendNewMessage,
  // updateMessageText,
  isAuth,
}) => {
  if (!isAuth) return <Redirect to="/login" />;
  const dialogItems = messagesPage.dialogs.map(({ id, name }) => (
    <DialogItem name={name} id={id} key={id} />
  ));
  const messageItems = messagesPage.messages.map(({ message, id }) => (
    <Message message={message} key={id} />
  ));
  const newMessageText = messagesPage.newMessageText;
  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        <ul>{dialogItems}</ul>
      </div>
      <div className={s.messages}>{messageItems}</div>
      <NewMessage
        newMessageText={newMessageText}
        onSendNewMessage={onSendNewMessage}
        // updateMessageText={updateMessageText}
      />
    </div>
  );
};

export default Messages;
