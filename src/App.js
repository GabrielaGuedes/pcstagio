import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./components/ui/navbar";
import { Link, Switch, Route } from "react-router-dom";
import InicialCliente from "./pages/inicial-cliente";
import InicialAluno from "./pages/inicial-aluno";
import InicialEmpresa from "./pages/inicial-empresa";

function App() {
  const onClick = () => {};

  return (
    <div className="App">
      <Navbar />
      {/* <div className="App">
        <AvatarWithButton
          src="http://placekitten.com/405/405"
          nome="Miguel Sarraf"
        />
      </div>
      <OurButton text="skansklo" /> */}
      {/* <Switch>
        <Route path="/" component={InicialCliente} />
      </Switch> */}
      <InicialEmpresa />
    </div>
  );
}

export default App;
