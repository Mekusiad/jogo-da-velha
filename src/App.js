import React, { Children } from "react";

import "./styles/elements/generic/reset.css";
import "./App.css";

import Label from "./objects/Label";

import Header from "./components/Header";
import Hashtag from "./components/Hashtag";

const App = () => {
  return (
    <main className="app">
      <Header />
      <Hashtag />
      <Label content="Mostrar eventos" />
    </main>
  );
};

export default App;
