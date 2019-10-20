import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./components/ui/navbar";
import { Switch, Route } from "react-router-dom";
import InicialCliente from "./pages/inicial-cliente";
import VagasPendentes from "./pages/vagas-pendentes";
import PerfilEdicaoEmpresa from "./pages/perfil-edicao-empresa";
import EdicaoAluno from "./pages/perfil-edicao-aluno";
import EstagiosPendentes from "./pages/estagios-pendentes";
import EmpresaCandidatos from "./pages/empresa-candidatos";
import InicialCadastro from "./pages/inicial-cadastro";
import InicialAluno from "./pages/inicial-aluno";
import InicialProfessor from "./pages/inicial-professor";
import InicialEmpresa from "./pages/inicial-empresa";
import MeusEstagios from "./pages/meus-estagios";
import PerfilAluno from "./pages/perfil-aluno";
import MeusEstagiarios from "./pages/meus-estagiarios";
import CadastrarVaga from "./pages/cadastrar-vaga";
import PerfilEmpresa from "./pages/perfil-empresa";

function App() {
  const onClick = () => {};

  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Navbar inicial />
          <InicialCliente />
        </Route>
        <Route path="/cadastro" exact>
          <InicialCadastro />
        </Route>
        <Route path="/aluno" exact>
          <Navbar />
          <InicialAluno />
        </Route>
        <Route path="/empresa" exact>
          <Navbar />
          <InicialEmpresa />
        </Route>
        <Route path="/professor" exact>
          <Navbar />
          <InicialProfessor />
        </Route>
        <Route path="/aluno/meus-estagios" exact>
          <Navbar />
          <MeusEstagios />
        </Route>
        <Route path="/aluno/perfil" exact>
          <Navbar />
          <PerfilAluno />
        </Route>
        <Route path="/aluno/perfil/edicao" exact>
          <Navbar />
          <EdicaoAluno />
        </Route>
        <Route path="/empresa/meus-estagiarios" exact>
          <Navbar />
          <MeusEstagiarios />
        </Route>
        <Route path="/empresa/cadastrar-vaga" exact>
          <Navbar />
          <CadastrarVaga />
        </Route>
        <Route path="/empresa/candidatos" exact>
          <Navbar />
          <EmpresaCandidatos />
        </Route>
        <Route path="/empresa/perfil" exact>
          <Navbar />
          <PerfilEmpresa />
        </Route>
        <Route path="/empresa/perfil/edicao" exact>
          <Navbar />
          <PerfilEdicaoEmpresa />
        </Route>
        <Route path="/professor/vagas-pendentes" exact>
          <Navbar />
          <VagasPendentes />
        </Route>
        <Route path="/professor/estagios-pendentes" exact>
          <Navbar />
          <EstagiosPendentes />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
