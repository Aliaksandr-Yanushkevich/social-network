import React from "react";
import logo from "./logo.jpg";
import s from "./Header.module.scss"

const Header = () => {
  return (
    <header className={s.header}>
      <img src={logo} alt="logo" />
    </header>
  );
};

export default Header;
