import React, { Fragment, useState } from "react";
import pcstagiologo from "../components/ui/pcstagiologo.png";
import { Input, Radio } from "antd";
import OurButton from "../components/ui/our-button";
import { Link } from "react-router-dom";

const InicialCadastro = () => {
  const [login, setLogin] = useState("");
  const linkTo = () => {
    switch (login) {
      case "aluno":
        return "/aluno";
      case "empresa":
        return "/empresa";
      case "professor":
        return "/professor";
      default:
        return "/cadastro";
    }
  };

  return (
    <Fragment>
      <div
        style={{
          backgroundColor: "#99D5CA",
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <img src={pcstagiologo} alt="logo" height={50} width={150} />
        <div style={{ display: "flex", flexDirection: "row", marginRight: 30 }}>
          <Input
            placeholder="login"
            value={login}
            onChange={e => setLogin(e.target.value)}
          />
          <div
            style={{
              marginLeft: 15,
              marginRight: 15,
              display: "flex",
              flexDirection: "column",
              width: "100%"
            }}
          >
            <Input.Password placeholder="senha" />
            <div style={{ textDecoration: "underline" }}>Esqueceu a senha?</div>
          </div>
          <Link to={linkTo()}>
            <OurButton text="Entrar" textColor="#ffffff" color="#6314A0" />
          </Link>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row"
        }}
      >
        <div
          style={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: 150,
            marginLeft: 100
          }}
        >
          <img src={pcstagiologo} width={600} />
          <div style={{ color: "#6314A0", fontSize: 20, fontWeight: 600 }}>
            O novo portal de estágios do PCS
          </div>
        </div>

        <div
          style={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            marginTop: 150,
            marginRight: 100,
            marginLeft: 100
          }}
        >
          <div style={{ marginBottom: 20, fontSize: 18, fontWeight: 600 }}>
            Cadastre-se
          </div>
          <Input placeholder="nome" style={{ marginBottom: 20 }} />
          <Radio.Group style={{ marginBottom: 20 }}>
            <Radio value={1} style={{ fontSize: 18, fontWeight: 600 }}>
              Aluno
            </Radio>
            <Radio value={2} style={{ fontSize: 18, fontWeight: 600 }}>
              Empresa
            </Radio>
          </Radio.Group>
          <Input placeholder="CPF/CNPJ" style={{ marginBottom: 20 }} />
          <Input placeholder="E-mail" style={{ marginBottom: 20 }} />
          <OurButton
            text="Cadastrar"
            color="#99D5CA"
            textColor="#184932"
            fontSize="18px"
          />
        </div>
      </div>
    </Fragment>
  );
};

export default InicialCadastro;
