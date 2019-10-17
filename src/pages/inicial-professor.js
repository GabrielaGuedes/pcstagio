import React, { Fragment, useState } from "react";
import AvatarWithButton from "../components/ui/avatar-with-button";
import OurPanel from "../components/ui/our-panel";
import diceless from "../components/ui/diceless-logo.png";
import OurButton from "../components/ui/our-button";
import Text from "antd/lib/typography/Text";
import BotaoVerCandidatos from "../components/botao-ver-candidatos";
import risco from "../components/ui/risco.jpg";

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
        imagemAluno: moana,
        imagemEmpresa: buy4me,
        tipo: "Estágio frontend",
        fim: "04/05/2006",
        nota: "8,5"
      },
      {
        nomeAluno: "Gabriel Guedes Matos",
        nomeEmpresa: "SPORTS",
        imagemAluno: moana,
        imagemEmpresa: buy4me,
        tipo: "Estágio data science",
        fim: "30/05/2019",
        nota: "10"
      }
    ]
  };

  const content = vaga => {
    return (
      <div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ color: "#184932", fontWeight: "600", fontSize: 18 }}>
            {vaga.estagio}
          </div>
          <BotaoVerCandidatos vaga={vaga} />
        </div>

        <div
          style={{ display: "flex", flexDirection: "column", marginTop: 15 }}
        >
          <Text underline style={{ fontSize: 14, fontWeight: 700 }}>
            Requisitos:
          </Text>
          <Text style={{ fontSize: 14 }}>{vaga.requisitos}</Text>
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
          <OurButton
            style={{ width: "70%", backgroundColor: "#AAAAAA" }}
            text="Início"
          />
          <br />
          <br />
          <OurButton style={{ width: "70%" }} text="Meus estágiários" />
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
          {empresa.vagas.map(vaga => (
            <div style={{ width: "75%", marginBottom: "30px" }}>
              <OurPanel
                content={content(vaga)}
                hiddenContent={hiddenContent(vaga)}
              />
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default InicialProfessor;
