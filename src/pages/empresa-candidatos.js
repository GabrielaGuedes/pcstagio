import React, { Fragment } from "react";
import AvatarWithButton from "../components/ui/avatar-with-button";
import OurButton from "../components/ui/our-button";
import { Card, Table, Avatar } from "antd";
import AprovarRejeitar from "../components/aprovar-rejeitar";
import diceless from "../components/ui/diceless-logo.png";
import moana from "../components/ui/moana.png";
import tuk from "../components/ui/tuk.jpg";
import tukInv from "../components/ui/tukInv.jpg";
import moanaInv from "../components/ui/moanaInv.png";

const EmpresaCandidatos = () => {
  const empresa = {
    nome: "Diceless",
    imagem: diceless
  };

  const vagas = [
    {
      key: "1",
      imagem: <Avatar src={tuk} size={35} />,
      nome: "Gabriela Matos Guedes",
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
      imagem: <Avatar src={moanaInv} size={35} />,
      nome: "Gabriel Guedes Matos",
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
      imagem: <Avatar src={moana} size={35} />,
      nome: "Miguel Sarraf Ferreira Santucci",
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
      imagem: <Avatar src={tukInv} size={35} />,
      nome: "Miguelito Ferreira",
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
      imagem: <Avatar src={tuk} size={35} />,
      nome: "Miguela Santucci",
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
      dataIndex: "nome",
      key: "nome"
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
            nome={empresa.nome}
            src={empresa.imagem}
            size={79}
          />
          <br />
          <OurButton style={{ width: "70%" }} text="Início" />
          <br />
          <br />
          <OurButton style={{ width: "70%" }} text="Meus estágiários" />
          <br />
          <br />
          <OurButton style={{ width: "70%" }} text="Cadastrar vaga" />
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
              Candidatos para estágio back-end
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

export default EmpresaCandidatos;
