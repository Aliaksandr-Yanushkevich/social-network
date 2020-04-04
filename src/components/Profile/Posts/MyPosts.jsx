import React from "react";
import s from "../Profile.module.scss";
import Post from "./Post/Post";
import NewPost from "./NewPost/NewPost";

const MyPosts = ({ posts, newPostText, onAddPost, onPostChange }) => {
  const postsElements = posts.map(({ author, text, likeCount, id}) => (
    <Post author={author} text={text} likeCount={likeCount} key={id}/>
  ));
  return (
    <div className={s.content}>
      <div className={s.wideColumn}>
        <NewPost
          newPostText={newPostText}
          onAddPost={onAddPost}
          onPostChange={onPostChange}
        />
        {postsElements}
      </div>
    </div>
  );
};

export default MyPosts;
