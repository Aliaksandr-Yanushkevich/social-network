import React from "react";
import Message from "./Message/Message";
import NewMessage from "./NewMessage/NewMessage";
import s from "./Messages.module.scss";
import DialogItem from "./DialogItem/DialogItem";

const Messages = ({ dialogs, messages, newMessageText, dispatch }) => {
  const dialogItems = dialogs.map(({ id, name }) => (
    <DialogItem name={name} id={id} />
  ));

  const messageItems = messages.map(({ message }) => (
    <Message message={message} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        <ul>{dialogItems}</ul>
      </div>
      <div className={s.messages}>{messageItems}</div>
      <NewMessage dispatch={dispatch} newMessageText={newMessageText} />
    </div>
  );
};

export default Messages;
