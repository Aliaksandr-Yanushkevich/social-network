import React from "react";
import s from "./NewMessage.module.scss";
// import Avatar from "../../Profile/Avatar/Avatar";

const NewMessage = ({
  sendNewMessage,
  updateNewMessageText,
  newMessageText
}) => {
  let newMessageElement = React.createRef();

  const sendMessage = () => {
    sendNewMessage();
  };
  const onMessageChange = () => {
    let text = newMessageElement.current.value;
    updateNewMessageText(text);
  };
  return (
    <div className={s.newPost}>
      <div className={s.message}>
        {/* <Avatar/> */}
        <textarea
          onChange={onMessageChange}
          className={s.inputField}
          ref={newMessageElement}
          name=""
          // id={id}
          cols="120"
          rows="3"
          placeholder="Write message..."
          value={newMessageText}
        ></textarea>
      </div>
      <div className={s.buttonWrapper}>
        <button className={s.button} onClick={() => sendMessage()}>
          Send
        </button>
      </div>
    </div>
  );
};

export default NewMessage;
