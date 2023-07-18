import React, { Children } from "react";

import "./styles/elements/generic/reset.css";

import Header from "./components/Header";
import Hashtag from "./components/Hashtag";

function App() {
  return (
    <>
      <Header />
      <Hashtag />
    </>
  );
}

export default App;
