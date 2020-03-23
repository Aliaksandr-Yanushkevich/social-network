import React from "react";
import { NavLink } from "react-router-dom";
import s from "./DialogItem.module.scss";

const DialogItem = ({ name, id }) => {
  return (
    <li>
      <NavLink to={"/messages/" + id} activeClassName={s.active}>
        {name}
      </NavLink>
    </li>
  );
};

export default DialogItem;
