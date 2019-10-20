import React, { Fragment } from "react";
import AvatarWithButton from "../components/ui/avatar-with-button";
import OurPanel from "../components/ui/our-panel";
import OurButton from "../components/ui/our-button";
import Text from "antd/lib/typography/Text";
import moana from "../components/ui/moana.png";
import moanaInv from "../components/ui/moanaInv.png";
import tuk from "../components/ui/tuk.jpg";
import diceless from "../components/ui/diceless.png";
import { Avatar } from "antd";

const MeusEstagiarios = () => {
  const empresa = {
    nome: "Diceless",
    imagem: diceless,
    estagiarios: [
      {
        nomeAluno: "Gabriela Matos Guedes",
        imagemAluno: tuk,
        tipo: "Estágio backend",
        fim: "30/03/2048"
      },
      {
        nomeAluno: "Miguel Sarraf Ferreira Santucci",
        imagemAluno: moana,
        tipo: "Estágio frontend",
        fim: "04/05/2006"
      },
      {
        nomeAluno: "Gabriel Guedes Matos",
        imagemAluno: moanaInv,
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
            <div>{estagio.nomeAluno}</div>
          </div>
          <div style={{ display: "flex" }}>
            <Avatar
              src={estagio.imagemAluno}
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
            <OurButton
              fontWeight={600}
              color="#99D5CA"
              text="Enviar relatório"
              textColor="#184932"
            />
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
            nome={empresa.nome}
            src={empresa.imagem}
            size={79}
          />
          <br />
          <OurButton style={{ width: "70%" }} text="Início" />
          <br />
          <br />
          <OurButton
            style={{ width: "70%", backgroundColor: "#AAAAAA" }}
            text="Meus estágiários"
          />
          <br />
          <br />
          <OurButton style={{ width: "70%" }} text="Cadastrar vaga" />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column"
          }}
        >
          {empresa.estagiarios.map(estagiario => (
            <div style={{ width: "75%", marginBottom: "30px" }}>
              <OurPanel content={content(estagiario)} />
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default MeusEstagiarios;
