import React, { Fragment, useState } from "react";
import AvatarWithButton from "../components/ui/avatar-with-button";
import OurPanel from "../components/ui/our-panel";
import { Avatar } from "antd";
import moana from "../components/ui/moana.png";
import buy4me from "../components/ui/buy4me.png";
import sports from "../components/ui/sports.jpg";
import ashowme from "../components/ui/ashowme.jpg";
import OurButton from "../components/ui/our-button";
import Text from "antd/lib/typography/Text";

const InicialAluno = () => {
  const [aluno, setAluno] = useState({
    nome: "Miguel Sarraf Ferreira Santucci",
    imagem: moana,
    vagasCandidatado: [2, 3]
  });

  const vagas = [
    {
      id: 1,
      nome: "Buy4me",
      imagem: buy4me,
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
      nome: "Sports",
      imagem: sports,
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
      nome: "Ashowme",
      imagem: ashowme,
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
      nome: "Buy4me",
      imagem: buy4me,
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
  ];

  const content = vaga => {
    const alunoCandidatado = aluno.vagasCandidatado.find(
      vagaCandidatado => vagaCandidatado === vaga.id
    );
    return (
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%"
          }}
        >
          <div style={{ display: "flex", flexDirection: "row" }}>
            {/* wrapper logo e nome */}
            <Avatar
              src={vaga.imagem}
              alt="empresalogo"
              size={35}
              style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: 10
              }}
            >
              <div
                style={{ color: "#184932", fontWeight: "600", fontSize: 18 }}
              >
                {vaga.nome}
              </div>
              <div style={{ fontSize: 12, color: "rgba(0, 0, 0, 0.62)" }}>
                {vaga.estagio}
              </div>
            </div>
          </div>
          <OurButton
            color={alunoCandidatado ? "#D3D3D3" : "#99D5CA"}
            text={alunoCandidatado ? "Candidatado" : "Se candidatar"}
            textColor="#184932"
            fontSize="18px"
            onClick={() => {
              setAluno({
                ...aluno,
                vagasCandidatado: alunoCandidatado
                  ? aluno.vagasCandidatado.filter(
                      vagaCandidatado => vagaCandidatado !== vaga.id
                    )
                  : [...aluno.vagasCandidatado, vaga.id]
              });
            }}
          />
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
          <AvatarWithButton nome={aluno.nome} src={aluno.imagem} size={79} />
          <br />
          <OurButton
            style={{ width: "70%", backgroundColor: "#AAAAAA" }}
            text="Início"
          />
          <br />
          <br />
          <OurButton style={{ width: "70%" }} text="Meus estágios" />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column"
          }}
        >
          {vagas.map(vaga => (
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

export default InicialAluno;
