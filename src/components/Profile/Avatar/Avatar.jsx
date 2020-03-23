import React from "react";
import avatar from "../avatar.png";
import s from "./Avatar.module.scss";
const Avatar = () => {
    return (
        <img className={s.avatar} src={avatar} alt="Avatar"/>
    )
}

export default Avatar;