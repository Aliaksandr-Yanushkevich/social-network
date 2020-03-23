import React from "react";
import Avatar from "../Avatar/Avatar";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import s from "./Post.module.scss";

const Post = ({ text, author, likeCount }) => {
  //   const options = { hour: "numeric", minute: "numeric", second: "numeric" };
  const date = new Date();
  return (
    <div className={s.post}>
      <Avatar />
      <div className={s.message}>
        <div className={s.postDetails}>
          <NavLink to="/profile" className={s.author}>
            {author}
          </NavLink>
          {" "}
          {date.getHours()}:{date.getMinutes()};
        </div>
        {text}
        <div className={s.likes}>
          <FontAwesomeIcon icon={faHeart} />
          {likeCount}
        </div>
      </div>
    </div>
  );
};

export default Post;
