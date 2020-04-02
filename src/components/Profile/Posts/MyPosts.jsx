import React from "react";
import avatar from "../avatar.png";
import s from "../Profile.module.scss";
import Post from "./Post/Post";
import NewPost from "./NewPost/NewPost";

const MyPosts = ({ profileReducer, onAddPost, onPostChange }) => {
  const postsElements = profileReducer.posts.map(
    ({ author, text, likeCount }) => (
      <Post author={author} text={text} likeCount={likeCount} />
    )
  );
  return (
    <div className={s.content}>
      <div className={s.wideColumn}>
        <NewPost onAddPost={onAddPost} onPostChange={onPostChange} />
        {postsElements}
      </div>
    </div>
  );
};

export default MyPosts;
