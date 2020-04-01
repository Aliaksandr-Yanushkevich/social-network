import React from "react";
import Message from "./Message/Message";
import NewMessage from "./NewMessage/NewMessage";
import s from "./Messages.module.scss";
import DialogItem from "./DialogItem/DialogItem";

const Messages = ({
  dialogItems,
  messageItems,
  newMessageText,
  onSendNewMessage,
  updateMessageText
}) => {
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
