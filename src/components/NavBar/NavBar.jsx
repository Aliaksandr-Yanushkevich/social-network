import React from "react";
import s from "./NavBar.module.scss";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className={s.navbar}>
      <ul>
        <li className={s.item}>
          <NavLink to="/profile" activeClassName={s.active}>
            Profile
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink to="/messages" activeClassName={s.active}>Messages</NavLink>
        </li>
        <li className={s.item}>
          <NavLink to="/news" activeClassName={s.active}>News</NavLink>
        </li>
        <li className={s.item}>
          <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
        </li>
        <li className={s.item}>
          <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
