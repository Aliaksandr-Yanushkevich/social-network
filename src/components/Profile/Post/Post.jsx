import React from "react";
import Avatar from "../Avatar/Avatar";
import { NavLink } from "react-router-dom";
import s from "./Post.module.scss";

const Post = ({ text, author }) => {
  return (
    <div className={s.post}>
      <Avatar />
      <div className={s.message}>
        <NavLink to="/profile" className={s.author}> {author}</NavLink>
        {text}
      </div>
    </div>
  );
};

export default Post;
