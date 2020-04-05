import React from "react";
import s from "../Profile.module.scss";
import Post from "./Post/Post";
import NewPost from "./NewPost/NewPost";

const MyPosts = (props) => {
  debugger;
  const postsElements = props.posts.map(({ author, text, likeCount, id }) => (
    <Post
      // fullName={props.fullName}
      avatar={props.avatar}
      author={author}
      text={text}
      likeCount={likeCount}
      key={id}
    />
  ));
  return (
    <div className={s.content}>
      <div className={s.wideColumn}>
        <NewPost
          avatar={props.avatar}
          newPostText={props.newPostText}
          onAddPost={props.onAddPost}
          onPostChange={props.onPostChange}
        />
        {postsElements}
      </div>
    </div>
  );
};

export default MyPosts;
