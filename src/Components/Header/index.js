import React from "react";

import "./styles.css";
import CollabeCode from "../../assets/logo.png";

import Logo from "../../objects/Logo";
import AboutLink from "../../objects/AboutLink";
import Hamburguer from "../../objects/Hamburguer";

const Header = () => {
  return (
    <header className="header">
      <Logo src={CollabeCode} />
      <AboutLink />
      <Hamburguer />
    </header>
  );
};

export default Header;
