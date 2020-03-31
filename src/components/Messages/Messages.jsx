import React from "react";
import Message from "./Message/Message";
import NewMessageContainer from "./NewMessage/NewMessageContainer";
import s from "./Messages.module.scss";
import DialogItem from "./DialogItem/DialogItem";

const Messages = ({ store, dispatch }) => {
  const state = store.getState();
  debugger;
  const dialogItems = state.messagesReducer.dialogs.map(({ id, name }) => (
    <DialogItem name={name} id={id} />
  ));

  const messageItems = state.messagesReducer.messages.map(({ message }) => (
    <Message message={message} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        <ul>{dialogItems}</ul>
      </div>
      <div className={s.messages}>{messageItems}</div>
      <NewMessageContainer store={store}/>
    </div>
  );
};

export default Messages;
