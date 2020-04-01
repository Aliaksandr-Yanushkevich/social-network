import React from "react";
import s from "./UserInfo.module.scss";

const UserInfo = ({ birthday, city, education }) => {
  return (
    <div className={s.userInfo}>
      <h1 className={s.username}>Eric Cartman</h1>
      <ul>
        <li>Date of Birth: {birthday}</li>
        <li>City: {city}</li>
        <li>Education: {education}</li>
      </ul>
    </div>
  );
};

export default UserInfo;
