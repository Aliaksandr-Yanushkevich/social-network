import React from "react";
import s from "./NewPost.module.scss";
import Avatar from "../Avatar/Avatar";

const NewPost = () => {
  return (
    <div className={s.newPost}>
      <form action="newPost.js" method="post">
        <h2>My posts</h2>
        <div className={s.message}>
          <Avatar/>
          <textarea
            className={s.inputField}
            name=""
            id="newPost"
            cols="100"
            rows="3"
            placeholder="Anything new?"
          ></textarea>
        </div>

        <p>
          <input className={s.button} value="Send" type="submit" />
        </p>
      </form>
    </div>
  );
};

export default NewPost;
