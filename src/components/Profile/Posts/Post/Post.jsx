import React from "react";
import Avatar from "../../Avatar/Avatar";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import s from "./Post.module.scss";

const Post = ({ text, author, likeCount }) => {
  return (
    <div className={s.post}>
      <Avatar />
      <div className={s.message}>
        <div className={s.postDetails}>
          <NavLink to="/profile" className={s.author}>
            {author}
          </NavLink>{" "}
          {function() {
            const date = new Date();
            let hours;
            let minutes;
            if (date.getHours() < 10) {
              hours = "0" + date.getHours();
            } else {
              hours = date.getHours();
            }
            if (date.getMinutes() < 10) {
              minutes = "0" + date.getMinutes();
            } else {
              minutes = date.getMinutes();
            }
            return `${hours}:${minutes}`;
          }()}
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
