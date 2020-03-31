import React from "react";
import avatar from "./avatar.png";
import s from "./Profile.module.scss";
import UserInfo from "./UserInfo/UserInfo";
import Post from "./Post/Post";
import NewPostContainer from "./NewPost/NewPostContainer";

const Profile = ({ store }) => {
  const state = store.getState();
  debugger;
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
          <UserInfo
            birthday="03.07.1991"
            city="Minsk"
            education="Rolling Scopes Front-End Course"
          ></UserInfo>
          <NewPostContainer store={store} />
          {postsElements}
        </div>
      </div>
    </div>
  );
};

export default Profile;
