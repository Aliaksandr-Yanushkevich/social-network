import React from "react";
import s from "./UserInfo.module.scss";

const UserInfo = ({birthday, city, education}) => {
  return (
    <div className={s.userInfo}>
      <ul>
  <li>Date of Birth: {birthday}</li>
        <li>City: {city}</li>
        <li>Education: {education}</li>
      </ul>
    </div>
  );
};

export default UserInfo;
