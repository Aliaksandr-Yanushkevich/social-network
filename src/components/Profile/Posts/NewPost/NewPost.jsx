import React from "react";
import s from "./NewPost.module.scss";
import Avatar from "../../Avatar/Avatar";
import { reduxForm, Field } from "redux-form";

const NewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          className={s.inputField}
          name="newPost"
          cols="120"
          rows="3"
          placeholder="Anything new?"
          component="textarea"
        />
      </div>
      <div className={s.buttonWrapper}>
        <button className={s.button}>Publish</button>
      </div>
    </form>
  );
};

const NewPostReduxForm = reduxForm({
  form: "newPost",
})(NewPostForm);

const NewPost = ({ avatar, onAddPost}) => {
  const addPost = (addPost) => {
    // alert(addPost.newPost)
    onAddPost(addPost.newPost);
  };
 
  return (
    <div className={s.newPost}>
      <h2>My posts</h2>
      <div className={s.message}>
        <Avatar avatar={avatar} />
        <NewPostReduxForm onSubmit={addPost} />
      </div>
    </div>
  );
};

export default NewPost;
