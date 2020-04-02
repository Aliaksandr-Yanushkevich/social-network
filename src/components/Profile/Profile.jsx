import React from "react";
import avatar from "./avatar.png";
import s from "./Profile.module.scss";
import UserInfo from "./UserInfo/UserInfo";
import MyPostsContainer from "./Posts/MyPostsContainer";

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
          <UserInfo
            birthday="03.07.1991"
            city="Minsk"
            education="Rolling Scopes Front-End Course"
          ></UserInfo>
          <MyPostsContainer />
        </div>
      </div>
    </div>
  );
};

export default Profile;
