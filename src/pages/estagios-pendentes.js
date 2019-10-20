import React, { Fragment } from "react";
import risco from "../components/ui/risco.jpg";
import AvatarWithButton from "../components/ui/avatar-with-button";
import OurButton from "../components/ui/our-button";
import { Card, Table, Avatar } from "antd";
import buy4me from "../components/ui/buy4me.png";
import sports from "../components/ui/sports.jpg";
import ashowme from "../components/ui/ashowme.jpg";
import AprovarRejeitar from "../components/aprovar-rejeitar";
import moana from "../components/ui/moana.png";
import tuk from "../components/ui/tuk.jpg";
import tukInv from "../components/ui/tukInv.jpg";
import moanaInv from "../components/ui/moanaInv.png";
import { Link } from "react-router-dom";

const EstagiosPendentes = () => {
  const professor = {
    nome: "Jorge Risco",
    imagem: risco
  };

  const estagios = [
    {
      key: "1",
      imagemEmpresa: <Avatar src={buy4me} size={35} />,
      imagemAluno: <Avatar src={tuk} size={35} />,
      estagio: "Estagio front-end",
      perfilEmpresa: (
        <a
          href="http://placekitten.com/"
          style={{ fontSize: 12, textDecoration: "underline", color: "blue" }}
        >
          Perfil empresa
        </a>
      ),
      perfilAluno: (
        <a
          href="http://placekitten.com/"
          style={{ fontSize: 12, textDecoration: "underline", color: "blue" }}
        >
          Perfil aluno
        </a>
      ),
      status: <AprovarRejeitar />
    },
    {
      key: "2",
      imagemEmpresa: <Avatar src={ashowme} size={35} />,
      imagemAluno: <Avatar src={moanaInv} size={35} />,
      estagio: "Estagio data science",
      perfilEmpresa: (
        <a
          href="http://placekitten.com/"
          style={{ fontSize: 12, textDecoration: "underline", color: "blue" }}
        >
          Perfil empresa
        </a>
      ),
      perfilAluno: (
        <a
          href="http://placekitten.com/"
          style={{ fontSize: 12, textDecoration: "underline", color: "blue" }}
        >
          Perfil aluno
        </a>
      ),
      status: <AprovarRejeitar statusInicial="Aprovado" />
    },
    {
      key: "3",
      imagemEmpresa: <Avatar src={buy4me} size={35} />,
      imagemAluno: <Avatar src={moana} size={35} />,
      estagio: "Estagio back-end",
      perfilEmpresa: (
        <a
          href="http://placekitten.com/"
          style={{ fontSize: 12, textDecoration: "underline", color: "blue" }}
        >
          Perfil empresa
        </a>
      ),
      perfilAluno: (
        <a
          href="http://placekitten.com/"
          style={{ fontSize: 12, textDecoration: "underline", color: "blue" }}
        >
          Perfil aluno
        </a>
      ),
      status: <AprovarRejeitar />
    },
    {
      key: "4",
      imagemEmpresa: <Avatar src={ashowme} size={35} />,
      imagemAluno: <Avatar src={tukInv} size={35} />,
      estagio: "Estagio front-end",
      perfilEmpresa: (
        <a
          href="http://placekitten.com/"
          style={{ fontSize: 12, textDecoration: "underline", color: "blue" }}
        >
          Perfil empresa
        </a>
      ),
      perfilAluno: (
        <a
          href="http://placekitten.com/"
          style={{ fontSize: 12, textDecoration: "underline", color: "blue" }}
        >
          Perfil aluno
        </a>
      ),
      status: <AprovarRejeitar />
    },
    {
      key: "5",
      imagemEmpresa: <Avatar src={sports} size={35} />,
      imagemAluno: <Avatar src={tuk} size={35} />,
      estagio: "Estagio back-end",
      perfilEmpresa: (
        <a
          href="http://placekitten.com/"
          style={{ fontSize: 12, textDecoration: "underline", color: "blue" }}
        >
          Perfil empresa
        </a>
      ),
      perfilAluno: (
        <a
          href="http://placekitten.com/"
          style={{ fontSize: 12, textDecoration: "underline", color: "blue" }}
        >
          Perfil aluno
        </a>
      ),
      status: <AprovarRejeitar statusInicial="Rejeitado" />
    }
  ];

  const columns = [
    {
      title: "",
      dataIndex: "imagemEmpresa",
      key: "imagemEmpresa"
    },
    {
      title: "",
      dataIndex: "imagemAluno",
      key: "imagemAluno"
    },
    {
      title: "",
      dataIndex: "estagio",
      key: "estagio"
    },
    {
      title: "",
      dataIndex: "perfilEmpresa",
      key: "perfilEmpresa"
    },
    {
      title: "",
      dataIndex: "perfilAluno",
      key: "perfilAluno"
    },
    {
      title: "",
      dataIndex: "status",
      key: "status"
    }
  ];

  return (
    <Fragment>
      <div style={{ display: "flex", margin: "20px 40px 0px" }}>
        <div style={{ width: "25%", marginRight: 20 }}>
          <AvatarWithButton
            nome={professor.nome}
            src={professor.imagem}
            size={79}
            pessoa="professor"
          />
          <br />
          <Link to="/professor">
            <OurButton style={{ width: "70%" }} text="Início" />
          </Link>
          <br />
          <br />
          <Link to="vagas-pendentes">
            <OurButton style={{ width: "70%" }} text="Vagas pendentes" />
          </Link>
          <br />
          <br />
          <Link to="estagios-pendentes">
            <OurButton
              style={{ width: "70%", backgroundColor: "#AAAAAA" }}
              text="Estágios pendentes"
            />
          </Link>
        </div>
        <div style={{ width: "75%", marginBottom: "30px" }}>
          <div style={{ width: "100%" }}>
            <div
              style={{
                fontSize: 18,
                color: "#184932",
                fontWeight: 500,
                width: "100%",
                marginBottom: 20
              }}
            >
              Estágios pendentes
            </div>
            <Card
              style={{
                marginRight: "100px",
                borderRadius: 4,
                boxShadow:
                  "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)"
              }}
            >
              <Table dataSource={estagios} columns={columns} />
            </Card>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EstagiosPendentes;
