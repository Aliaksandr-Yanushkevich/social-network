import React from "react";
import avatar from "./avatar.png";
import s from "./Profile.module.scss";
import UserInfo from "./UserInfo/UserInfo";
import NewPost from "./NewPost/NewPost";
import Post from "./Post/Post";

const Profile = () => {
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
          <NewPost />
          <Post author="Eric Cartman" text="Hello, world!" />
          <Post author="Eric Cartman" text="Do you miss me?" />
          <Post author="Eric Cartman" text="Why nobody write me?" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
