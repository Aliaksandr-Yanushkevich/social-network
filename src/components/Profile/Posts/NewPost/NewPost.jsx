import React from "react";
import s from "./NewPost.module.scss";
import Avatar from "../../Avatar/Avatar";

const NewPost = ({ id, newPostText, onAddPost, onPostChange}) => {
  let addPost = () => {
    onAddPost();
  };
  const PostChange = (e) => {
    let text = e.target.value;
    onPostChange(text)
  };
  return (
    <div className={s.newPost}>
      <h2>My posts</h2>
      <div className={s.message}>
        <Avatar />
        <textarea
          onChange={PostChange}
          className={s.inputField}
          value={newPostText}
          name=""
          id={id}
          cols="120"
          rows="3"
          placeholder="Anything new?"
        ></textarea>
      </div>
      <div className={s.buttonWrapper}>
        <button className={s.button} onClick={() => addPost()}>
          Publish
        </button>
      </div>
    </div>
  );
};

export default NewPost;
