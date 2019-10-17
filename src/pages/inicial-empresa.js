import React, { Fragment, useState } from "react";
import AvatarWithButton from "../components/ui/avatar-with-button";
import OurPanel from "../components/ui/our-panel";
import diceless from "../components/ui/diceless-logo.png";
import OurButton from "../components/ui/our-button";
import Text from "antd/lib/typography/Text";
import BotaoVerCandidatos from "../components/botao-ver-candidatos";

const InicialEmpresa = () => {
  const empresa = {
    nome: "Diceless",
    imagem: diceless,
    vagas: [
      {
        id: 1,
        candidatos: [],
        estagio: "Estágio backend",
        requisitos: `
        - Ter conhecimentos em Python \n - A partir do 4º ano`,
        beneficios: `Assistência médica (Bradesco Saúde Top Nacional - Quarto) 
           Assistência odontológica (Bradesco Saúde Dental Padrão) 
           Bolsa auxílio competitiva 
           Vale refeição, auxílio transporte e auxílio capacitação`,
        remuneracao: "R$ 2500,00",
        etapas: `- Entrevista com RH (até 2 dias após inscrição) 
          - Resolução de case (prazo de 1 semana) 
          - Entrevista com gestor (até 2 dias após aprovação do case)`,
        descricao: `
          Principais responsabilidades: 
          • Acompanhamento das rotinas diárias; 
          • Desenvolvimento de rotinas e execuções em
          Oracle SQL e PL/SQL; 
          • Análise e qualidade dos dados que são
          trafegados entre as áreas reguladores; 
          • Envio e automação de relatórios que dão
          suporte aos reguladores.`
      },

      {
        id: 2,
        candidatos: [
          "Gabriela Matos Guedes",
          "Miguel Sarraf Ferreira Santucci"
        ],
        estagio: "Estágio data science",
        requisitos: `
          - Ter conhecimentos em Cobol \n - A partir do 5º ano`,
        beneficios: `Assistência médica (Bradesco Saúde Top Nacional - Quarto) 
           Assistência odontológica (Bradesco Saúde Dental Padrão) 
           Bolsa auxílio competitiva 
           Vale refeição, auxílio transporte e auxílio capacitação`,
        remuneracao: "R$ 2500,00",
        etapas: `- Entrevista com RH (até 2 dias após inscrição) 
          - Resolução de case (prazo de 1 semana) 
          - Entrevista com gestor (até 2 dias após aprovação do case)`,
        descricao: `
          Principais responsabilidades: 
          • Acompanhamento das rotinas diárias; 
          • Desenvolvimento de rotinas e execuções em
          Oracle SQL e PL/SQL; 
          • Análise e qualidade dos dados que são
          trafegados entre as áreas reguladores; 
          • Envio e automação de relatórios que dão
          suporte aos reguladores.`
      },

      {
        id: 3,
        candidatos: ["Miguel Sarraf Ferreira Santucci"],
        estagio: "Estágio frontend",
        requisitos: `
          - Ter conhecimentos em React
          - Inglês intermediário`,
        beneficios: `Assistência médica (Bradesco Saúde Top Nacional - Quarto) 
           Assistência odontológica (Bradesco Saúde Dental Padrão) 
           Bolsa auxílio competitiva 
           Vale refeição, auxílio transporte e auxílio capacitação`,
        remuneracao: "R$ 2500,00",
        etapas: `- Entrevista com RH (até 2 dias após inscrição) 
          - Resolução de case (prazo de 1 semana) 
          - Entrevista com gestor (até 2 dias após aprovação do case)`,
        descricao: `
          Principais responsabilidades: 
          • Acompanhamento das rotinas diárias; 
          • Desenvolvimento de rotinas e execuções em
          Oracle SQL e PL/SQL; 
          • Análise e qualidade dos dados que são
          trafegados entre as áreas reguladores; 
          • Envio e automação de relatórios que dão
          suporte aos reguladores.`
      },

      {
        id: 4,
        candidatos: ["Gabriela Matos Guedes"],
        estagio: "Estágio backend",
        requisitos: `
        - Ter conhecimentos em Python \n - A partir do 4º ano`,
        beneficios: `Assistência médica (Bradesco Saúde Top Nacional - Quarto) 
           Assistência odontológica (Bradesco Saúde Dental Padrão) 
           Bolsa auxílio competitiva 
           Vale refeição, auxílio transporte e auxílio capacitação`,
        remuneracao: "R$ 2500,00",
        etapas: `- Entrevista com RH (até 2 dias após inscrição) 
          - Resolução de case (prazo de 1 semana) 
          - Entrevista com gestor (até 2 dias após aprovação do case)`,
        descricao: `
          Principais responsabilidades: 
          • Acompanhamento das rotinas diárias; 
          • Desenvolvimento de rotinas e execuções em
          Oracle SQL e PL/SQL; 
          • Análise e qualidade dos dados que são
          trafegados entre as áreas reguladores; 
          • Envio e automação de relatórios que dão
          suporte aos reguladores.`
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

  const hiddenContent = vaga => (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Text underline style={{ fontSize: 14, fontWeight: 700 }}>
        Etapas:
      </Text>
      <Text style={{ fontSize: 14 }}>{vaga.etapas}</Text>

      <Text underline style={{ fontSize: 14, fontWeight: 700 }}>
        Benefícios:
      </Text>
      <Text style={{ fontSize: 14 }}>{vaga.beneficios}</Text>

      <Text underline style={{ fontSize: 14, fontWeight: 700 }}>
        Remuneração:
      </Text>
      <Text style={{ fontSize: 14 }}>{vaga.remuneracao}</Text>

      <Text underline style={{ fontSize: 14, fontWeight: 700 }}>
        Descrição:
      </Text>
      <Text style={{ fontSize: 14 }}>{vaga.descricao}</Text>
    </div>
  );

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

export default InicialEmpresa;
