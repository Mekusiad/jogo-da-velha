import React, { Children } from "react";

import "./styles/elements/generic/reset.css";
import "./App.css";

import Checkbox from "./objects/Checkbox";

import Header from "./components/Header";
import Hashtag from "./components/Hashtag";
import Input from "./objects/Input";

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
    </main>
  );
};

export default App;
