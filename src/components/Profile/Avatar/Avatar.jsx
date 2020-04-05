import React from "react";
import defaultAvatar from "../avatar.png";
import s from "./Avatar.module.scss";
const Avatar = ({ avatar }) => {
  if (avatar) {
    return <img className={s.avatar} src={avatar} alt="Avatar" />;
  }
  return <img className={s.avatar} src={defaultAvatar} alt="Avatar" />;
};

export default Avatar;
