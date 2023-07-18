import React from "react";

import "./styles.css";

import Logo from "../../objects/Logo";
import Sobre from "../../objects/Sobre";
import Hamburguer from "../../objects/Hamburguer";

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <Sobre />
      <Hamburguer />
    </header>
  );
};

export default Header;
