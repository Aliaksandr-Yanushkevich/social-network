import React from "react";
import avatar from "./avatar.png";
import s from "./Profile.module.scss";
import Post from "./Post/Post";
import NewPostContainer from "./NewPost/NewPostContainer";

const MyPosts = ({ store }) => {
  const state = store.getState();
  const postsElements = state.profileReducer.posts.map(
    ({ author, text, likeCount }) => (
      <Post author={author} text={text} likeCount={likeCount} />
    )
  );
  return (
    <div className={s.content}>
      <div className={s.narrowColumn}>
        <div className={s.avatar + " " + s.block}>
          <img src={avatar} alt="My avatar" />
        </div>
      </div>
      <div className={s.wideColumn}>
        <div className={s.info}>
          <h1 className={s.username}>Eric Cartman</h1>
          <NewPostContainer store={store} />
          {postsElements}
        </div>
      </div>
    </div>
  );
};

export default MyPosts;
