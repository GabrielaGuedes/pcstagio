import React, { Fragment } from "react";
import AvatarWithButton from "../components/ui/avatar-with-button";
import OurPanel from "../components/ui/our-panel";
import OurButton from "../components/ui/our-button";
import Text from "antd/lib/typography/Text";
import moana from "../components/ui/moana.png";
import buy4me from "../components/ui/buy4me.png";
import sports from "../components/ui/sports.jpg";
import ashowme from "../components/ui/ashowme.jpg";
import { Avatar, Upload } from "antd";
import { Link } from "react-router-dom";

const MeusEstagios = () => {
  const aluno = {
    nome: "Miguel Sarraf Ferreira Santucci",
    imagem: moana,
    estagios: [
      {
        nomeEmpresa: "Buy4me",
        imagemEmpresa: buy4me,
        tipo: "Estágio backend",
        fim: "30/03/2048"
      },
      {
        nomeEmpresa: "Ashowme",
        imagemEmpresa: ashowme,
        tipo: "Estágio frontend",
        fim: "04/05/2006"
      },
      {
        nomeEmpresa: "Sports",
        imagemEmpresa: sports,
        tipo: "Estágio data science",
        fim: "20/06/2028"
      }
    ]
  };

  const content = estagio => {
    return (
      <div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{
              color: "#184932",
              fontWeight: "600",
              fontSize: 18,
              display: "flex",
              flexDirection: "column",
              width: "100%"
            }}
          >
            <div>{estagio.nomeEmpresa}</div>
          </div>
          <div style={{ display: "flex" }}>
            <Avatar
              src={estagio.imagemEmpresa}
              size={40}
              style={{
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                marginRight: 50
              }}
            />
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{ display: "flex", flexDirection: "column", marginTop: 15 }}
          >
            <Text style={{ fontSize: 16, fontWeight: 500 }}>
              Vaga: {estagio.tipo}
            </Text>
            <Text style={{ fontSize: 16, fontWeight: 500, marginTop: 25 }}>
              Fim: {estagio.fim}
            </Text>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end"
            }}
          >
            <Upload>
              <OurButton
                fontWeight={600}
                color="#99D5CA"
                text="Enviar relatório"
                textColor="#184932"
              />
            </Upload>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Fragment>
      <div style={{ display: "flex", margin: "20px 40px 0px" }}>
        <div style={{ width: "25%", marginRight: 20 }}>
          <AvatarWithButton
            nome={aluno.nome}
            src={aluno.imagem}
            size={79}
            pessoa="aluno"
          />
          <br />
          <Link to="/aluno">
            <OurButton style={{ width: "70%" }} text="Início" />
          </Link>
          <br />
          <br />

          <Link to="/aluno/meus-estagios">
            <OurButton
              style={{ width: "70%", backgroundColor: "#AAAAAA" }}
              text="Meus estágios"
            />
          </Link>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column"
          }}
        >
          {aluno.estagios.map(estagio => (
            <div style={{ width: "75%", marginBottom: "30px" }}>
              <OurPanel content={content(estagio)} />
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default MeusEstagios;
