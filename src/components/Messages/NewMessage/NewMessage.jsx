import React from "react";
import s from "./NewMessage.module.scss";
// import Avatar from "../../Profile/Avatar/Avatar";

const NewMessage = ({id}) => {
  return (
    <div className={s.newPost}>
      <form action="newPost.js" method="post">
        <div className={s.message}>
          {/* <Avatar/> */}
          <textarea
            className={s.inputField}
            name=""
            id={id}
            cols="120"
            rows="3"
            placeholder="Write message..."
          ></textarea>
        </div>
        {/* <div className={s.buttonWrapper}><input className={s.button} value="Send" type="submit" /></div> */}
      </form>
    </div>
  );
};

export default NewMessage;
