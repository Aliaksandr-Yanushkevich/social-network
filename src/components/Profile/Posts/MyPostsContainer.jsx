import React from "react";
import NewPost from "./NewPost/NewPost";
import PostHistory from "./PostHistory/PostHistory";
import StoreContext from "../../../StoreContext";
import { Fragment } from "react";
import { addPostActionCreator, updateNewPostTextCreator } from "../../../redux/profileReducer";

const MyPostsContainer = () => {
  return (
    <StoreContext.Consumer>
      {store => {
        debugger;
        const state = store.getState();

        const addPost = () => {
          store.dispatch(addPostActionCreator());
        };

        const updateNewPost = text => {
          debugger;
          store.dispatch(updateNewPostTextCreator(text));
        };

        return (
          <Fragment>
            <NewPost
              id="1"
              newPostText={state.profileReducer.newPostText}
              onAddPost={addPost}
              onPostChange={updateNewPost}
            />
            <PostHistory posts={state.profileReducer.posts} />
          </Fragment>
        );
      }}
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;
