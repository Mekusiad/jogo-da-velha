import React, { Children } from "react";

import "./styles/elements/generic/reset.css";
import "./App.css";

import Checkbox from "./objects/Checkbox";
import About from "./objects/About";

import Header from "./components/Header";
import Hashtag from "./components/Hashtag";

const App = () => {
  return (
    <main className="app">
      <Header />
      <Hashtag />
      <Checkbox
        id="show"
        type="checkbox"
        value="show"
        content="Mostrar Eventos"
      />
      <About />
    </main>
  );
};

export default App;
