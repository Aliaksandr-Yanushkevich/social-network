import React from "react";
import s from "./UserInfo.module.scss";

const UserInfo = ({fullName, aboutMe, lookingForAJob, lookingForAJobDescription}) => {
  return (
    <div className={s.userInfo}>
      <h1 className={s.username}>{fullName}</h1>
      <ul>
        <li>About me: {aboutMe}</li>
        {lookingForAJob ? <li>Looking for a job in: {lookingForAJobDescription}</li> : null}
      </ul>
    </div>
  );
};

export default UserInfo;
