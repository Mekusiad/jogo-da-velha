import React from "react";
import "./styles.css";

import Logo from "../Logo";
import AboutLink from "../AboutLink";
import Union from "../Union";

import CollabeCode from "../../assets/logo.png";
import CollabeCodeAbout from "../../assets/logo_about.png";

const About = () => {
  return (
    <article className="about">
      <Logo src={CollabeCodeAbout} />
      <AboutLink />
      <Union />
    </article>
  );
};

export default About;
