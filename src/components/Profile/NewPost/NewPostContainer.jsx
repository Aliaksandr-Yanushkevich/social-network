import React from "react";
import {
  updateNewPostTextCreator,
  addPostActionCreator
} from "../../../redux/profileReducer";
import NewPost from "./NewPost"

const NewPostContainer = ({ store }) => {
  debugger;
  const {dispatch} = store;
  let onAddPost = () => {
    dispatch(addPostActionCreator());
  };
  const onPostChange = text => {
    dispatch(updateNewPostTextCreator(text));
  };
  return (
    <NewPost
      id="NewPost"
      newPostText={store.newPostText}
      onAddPost={onAddPost}
      onPostChange={onPostChange}
    />
  );
};

export default NewPostContainer;
