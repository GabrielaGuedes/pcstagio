import React, { Fragment } from "react";
import risco from "../components/ui/risco.jpg";
import AvatarWithButton from "../components/ui/avatar-with-button";
import OurButton from "../components/ui/our-button";
import { Card, Table, Avatar } from "antd";
import buy4me from "../components/ui/buy4me.png";
import sports from "../components/ui/sports.jpg";
import ashowme from "../components/ui/ashowme.jpg";
import AprovarRejeitar from "../components/aprovar-rejeitar";

const VagasPendentes = () => {
  const professor = {
    nome: "Jorge Risco",
    imagem: risco
  };

  const vagas = [
    {
      key: "1",
      imagem: <Avatar src={buy4me} size={35} />,
      estagio: "Estagio front-end",
      perfil: (
        <a
          href="http://placekitten.com/"
          style={{ fontSize: 12, textDecoration: "underline", color: "blue" }}
        >
          Ver perfil
        </a>
      ),
      status: <AprovarRejeitar />
    },
    {
      key: "2",
      imagem: <Avatar src={ashowme} size={35} />,
      estagio: "Estagio data science",
      perfil: (
        <a
          href="http://placekitten.com/"
          style={{ fontSize: 12, textDecoration: "underline", color: "blue" }}
        >
          Ver perfil
        </a>
      ),
      status: <AprovarRejeitar statusInicial="Aprovado" />
    },
    {
      key: "3",
      imagem: <Avatar src={buy4me} size={35} />,
      estagio: "Estagio back-end",
      perfil: (
        <a
          href="http://placekitten.com/"
          style={{ fontSize: 12, textDecoration: "underline", color: "blue" }}
        >
          Ver perfil
        </a>
      ),
      status: <AprovarRejeitar />
    },
    {
      key: "4",
      imagem: <Avatar src={ashowme} size={35} />,
      estagio: "Estagio front-end",
      perfil: (
        <a
          href="http://placekitten.com/"
          style={{ fontSize: 12, textDecoration: "underline", color: "blue" }}
        >
          Ver perfil
        </a>
      ),
      status: <AprovarRejeitar />
    },
    {
      key: "5",
      imagem: <Avatar src={sports} size={35} />,
      estagio: "Estagio back-end",
      perfil: (
        <a
          href="http://placekitten.com/"
          style={{ fontSize: 12, textDecoration: "underline", color: "blue" }}
        >
          Ver perfil
        </a>
      ),
      status: <AprovarRejeitar statusInicial="Rejeitado" />
    }
  ];

  const columns = [
    {
      title: "",
      dataIndex: "imagem",
      key: "imagem"
    },
    {
      title: "",
      dataIndex: "estagio",
      key: "estagio"
    },
    {
      title: "",
      dataIndex: "perfil",
      key: "perfil"
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
          />
          <br />
          <OurButton style={{ width: "70%" }} text="Início" />
          <br />
          <br />
          <OurButton
            style={{ width: "70%", backgroundColor: "#AAAAAA" }}
            text="Vagas pendentes"
          />
          <br />
          <br />
          <OurButton style={{ width: "70%" }} text="Estágios pendentes" />
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
              Vagas pendentes
            </div>
            <Card
              style={{
                marginRight: "100px",
                borderRadius: 4,
                boxShadow:
                  "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)"
              }}
            >
              <Table dataSource={vagas} columns={columns} />
            </Card>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default VagasPendentes;
