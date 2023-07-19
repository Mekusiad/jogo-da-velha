import React, { Children } from "react";

import "./styles/elements/generic/reset.css";
import "./App.css";

import Input from "./objects/Input";

import Header from "./components/Header";
import Hashtag from "./components/Hashtag";

const App = () => {
  return (
    <main className="app">
      <Header />
      <Hashtag />
      <Input id="show" type="checkbox" value="show" content="Mostrar Eventos" />
    </main>
  );
};

export default App;
