import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./logo-text.png";
import s from "./Header.module.scss";

const Header = ({ isAuth, login }) => {
  return (
    <header className={s.header}>
      <div className={s.headerWrapper}>
        <NavLink to="/">
          <img src={logo} alt="logo" />
        </NavLink>
        <div className={s.loginBlock}>
          {isAuth ? login : <NavLink to="/login">Login</NavLink>}
        </div>
      </div>
    </header>
  );
};

export default Header;
