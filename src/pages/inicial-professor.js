import React, { Fragment } from "react";
import AvatarWithButton from "../components/ui/avatar-with-button";
import OurPanel from "../components/ui/our-panel";
import OurButton from "../components/ui/our-button";
import Text from "antd/lib/typography/Text";
import risco from "../components/ui/risco.jpg";
import moana from "../components/ui/moana.png";
import tuk from "../components/ui/tuk.jpg";
import tukInv from "../components/ui/tukInv.jpg";
import buy4me from "../components/ui/buy4me.png";
import sports from "../components/ui/sports.jpg";
import ashowme from "../components/ui/ashowme.jpg";
import { Avatar, Input } from "antd";
import AtribuirNota from "../components/atribuir-nota";

const InicialProfessor = () => {
  const professor = {
    nome: "Jorge Risco",
    imagem: risco,
    estagios: [
      {
        nomeAluno: "Miguel Sarraf",
        nomeEmpresa: "Buy4me",
        imagemAluno: moana,
        imagemEmpresa: buy4me,
        tipo: "Estágio backend",
        fim: "30/03/2048",
        nota: ""
      },
      {
        nomeAluno: "Gabriela Matos Guedes",
        nomeEmpresa: "Ashowme",
        imagemAluno: tuk,
        imagemEmpresa: ashowme,
        tipo: "Estágio frontend",
        fim: "04/05/2006",
        nota: "8,5"
      },
      {
        nomeAluno: "Gabriel Guedes Matos",
        nomeEmpresa: "SPORTS",
        imagemAluno: tukInv,
        imagemEmpresa: sports,
        tipo: "Estágio data science",
        fim: "30/05/2019",
        nota: "10"
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
            <div>{estagio.nomeAluno}</div>
          </div>
          <div style={{ display: "flex" }}>
            <Avatar
              src={estagio.imagemEmpresa}
              size={40}
              style={{
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
              }}
            />
            <Avatar
              src={estagio.imagemAluno}
              size={40}
              style={{
                marginLeft: 20,
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
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
          <div style={{ display: "flex", flexDirection: "column" }}>
            <OurButton
              color="#99D5CA"
              text="Relatórios"
              textColor="#184932"
              fontWeight={600}
            />
            <AtribuirNota />
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
            nome={professor.nome}
            src={professor.imagem}
            size={79}
          />
          <br />
          <OurButton
            style={{ width: "70%", backgroundColor: "#AAAAAA" }}
            text="Início"
          />
          <br />
          <br />
          <OurButton style={{ width: "70%" }} text="Vagas pendentes" />
          <br />
          <br />
          <OurButton style={{ width: "70%" }} text="Estágios pendentes" />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column"
          }}
        >
          {professor.estagios.map(estagio => (
            <div style={{ width: "75%", marginBottom: "30px" }}>
              <OurPanel content={content(estagio)} />
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default InicialProfessor;
