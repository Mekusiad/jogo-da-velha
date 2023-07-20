import React from "react";

import CollabeCode from "../../assets/logo.png";
import CollabeCodeAbout from "../../assets/logo_about.png";

const Logo = ({ src = "CollabeCode" }) => {
  return <img src={src} alt="logo-image" />;
};

export default Logo;
