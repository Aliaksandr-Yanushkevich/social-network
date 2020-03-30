import React from "react";
import s from "./NewPost.module.scss";
import Avatar from "../Avatar/Avatar";
import { updateNewPostTextCreator, addPostActionCreator } from "../../../redux/profileReducer";

const NewPost = ({ id, newPostText, dispatch}) => {
  debugger;
  let addPost = () => {
    dispatch(addPostActionCreator());
  };
  const onPostChange = (e) => {
    let text = e.target.value;
    dispatch(updateNewPostTextCreator(text));
  };
  return (
    <div className={s.newPost}>
      <h2>My posts</h2>
      <div className={s.message}>
        <Avatar />
        <textarea
          onChange={onPostChange}
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
