import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./logo-text.png";
import s from "./Header.module.scss";

const Header = () => {
  return (
    <header className={s.header}>
      <div className="">
        <NavLink to="/">
          <img src={logo} alt="logo" />
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
