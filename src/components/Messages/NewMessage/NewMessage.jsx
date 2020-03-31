import React from "react";
import s from "./NewMessage.module.scss";
// import Avatar from "../../Profile/Avatar/Avatar";

const NewMessage = ({ onSendNewMessage, updateMessageText, newMessageText }) => {
  const sendNewMessage = () => {
    onSendNewMessage();
  };
  const onMessageChange = (e) => {
    let text = e.target.value;
    updateMessageText(text);
  };
  return (
    <div className={s.newPost}>
      <div className={s.message}>
        {/* <Avatar/> */}
        <textarea
          onChange={onMessageChange}
          className={s.inputField}
          name=""
          // id={id}
          cols="120"
          rows="3"
          placeholder="Write message..."
          value={newMessageText}
        ></textarea>
      </div>
      <div className={s.buttonWrapper}>
        <button className={s.button} onClick={() => sendNewMessage()}>
          Send
        </button>
      </div>
    </div>
  );
};

export default NewMessage;
