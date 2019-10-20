import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./components/ui/navbar";
import { Link, Switch, Route } from "react-router-dom";
import InicialCliente from "./pages/inicial-cliente";
import VagasPendentes from "./pages/vagas-pendentes";
import PerfilEdicaoEmpresa from "./pages/perfil-edicao-empresa";
import EdicaoAluno from "./pages/perfil-edicao-aluno";
import EstagiosPendentes from "./pages/estagios-pendentes";
import EmpresaCandidatos from "./pages/empresa-candidatos";
import InicialCadastro from "./pages/inicial-cadastro";

function App() {
  const onClick = () => {};

  return (
    <div className="App">
      {/* <Navbar /> */}
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
      <InicialCadastro />
    </div>
  );
}

export default App;
