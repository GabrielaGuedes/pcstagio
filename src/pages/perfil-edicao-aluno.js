import React, { Fragment } from "react";
import moana from "../components/ui/moana.jpg";
import AvatarWithButton from "../components/ui/avatar-with-button";
import { Button, Icon, Card, Input } from "antd";
import OurButton from "../components/ui/our-button";

const EdicaoAluno = () => {
  const dados = {
    nome: "Miguel Sarraf Ferreira Santucci",
    nusp: "10336827",
    cpf: "47002770845",
    curso: "quadrimestral",
    anoIngresso: "2017",
    cel: "(11)99127-3492",
    nasc: "17/10/1999",
    end_rua: "Rua Prof Luciano Gualberto",
    end_num: "526",
    cep: "02022-020",
    end_comp: "Travessa 3",
    end_bai: "Butantã",
    email: "miguelzinho@usp.br",
    curriculo:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra mauris sit amet mauris vulputate laoreet. Aliquam tristique nunc vitae tellus posuere, non volutpat ante ornare. Quisque ipsum ligula, placerat ut purus vel, tristique cursus nulla. Nam ut pellentesque ligula. Nulla mattis non risus at porttitor. Donec sed orci eget ante tempor blandit eu et nibh. Vestibulum ex dolor, tempor sit amet lobortis eu, efficitur a diam. Phasellus semper vehicula tortor ut consequat. Ut suscipit eros ut orci interdum, maximus suscipit arcu viverra. Sed augue magna, dignissim eget arcu vitae, posuere porta sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultrices erat sapien, at aliquet ligula placerat vitae. Donec tortor est, interdum sed ultricies non, vestibulum nec nibh. Phasellus quis mattis magna. Donec aliquet nulla id ex imperdiet, vel laoreet mauris ornare."
  };
  return (
    <Fragment>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: "20px",
          marginLeft: "40px",
          marginRight: "40px"
        }}
      >
        <div style={{ width: "25%" }}>
          <AvatarWithButton src={moana} nome={dados.nome}></AvatarWithButton>
          <br />
          <OurButton style={{ width: "70%" }} text="Início"></OurButton>
          <br />
          <br />
          <OurButton style={{ width: "70%" }} text="Meus estágios"></OurButton>
        </div>
        <div style={{ width: "75%", marginLeft: "20px" }}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ width: "50%", textAlign: "left", fontSize: "20px" }}>
              Perfil
            </div>
            <div
              style={{
                width: "50%",
                textAlign: "right",
                fontSize: "20px"
              }}
            >
              <OurButton
                style={{
                  marginRight: "100px",
                  width: "40%",
                  backgroundColor: "#6314A0"
                }}
                text="Salvar"
                textColor="white"
                fontSize="20px"
                fontWeight="bold"
              ></OurButton>
            </div>
          </div>
          <Card style={{ marginRight: "100px" }}>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div
                style={{
                  textAlign: "left",
                  width: "100%",
                  display: "flex",
                  flexDirection: "row"
                }}
              >
                <b>Nome:</b>
                <Input
                  defaultValue={dados.nome}
                  size="small"
                  style={{ marginLeft: "20px" }}
                ></Input>
              </div>
            </div>
            <br></br>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div
                style={{
                  textAlign: "left",
                  width: "50%",
                  display: "flex",
                  flexDirection: "row"
                }}
              >
                <div style={{ width: "125px" }}>
                  <b>Número USP:</b>
                </div>
                <Input
                  defaultValue={dados.nusp}
                  size="small"
                  style={{ marginLeft: "20px" }}
                ></Input>
              </div>
              <div
                style={{
                  textAlign: "left",
                  width: "50%",
                  display: "flex",
                  flexDirection: "row"
                }}
              >
                <b>CPF:</b>
                <Input
                  defaultValue={dados.cpf}
                  size="small"
                  style={{ marginLeft: "20px" }}
                ></Input>
              </div>
            </div>
            <br></br>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div
                style={{
                  textAlign: "left",
                  width: "50%",
                  display: "flex",
                  flexDirection: "row"
                }}
              >
                <b>Curso:</b>
                <Input
                  defaultValue={dados.curso}
                  size="small"
                  style={{ marginLeft: "20px" }}
                ></Input>
              </div>
              <div
                style={{
                  textAlign: "left",
                  width: "50%",
                  display: "flex",
                  flexDirection: "row"
                }}
              >
                <div style={{ width: "165px" }}>
                  <b>Ano de ingresso:</b>
                </div>
                <Input
                  defaultValue={dados.anoIngresso}
                  size="small"
                  style={{ marginLeft: "20px" }}
                ></Input>
              </div>
            </div>
            <br></br>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div
                style={{
                  textAlign: "left",
                  width: "100%",
                  display: "flex",
                  flexDirection: "row"
                }}
              >
                <b>Telefone:</b>
                <Input
                  defaultValue={dados.cel}
                  size="small"
                  style={{ marginLeft: "20px" }}
                ></Input>
              </div>
            </div>
            <br></br>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div
                style={{
                  textAlign: "left",
                  width: "100%",
                  display: "flex",
                  flexDirection: "row"
                }}
              >
                <b>E-mail:</b>
                <Input
                  defaultValue={dados.email}
                  size="small"
                  style={{ marginLeft: "20px" }}
                ></Input>
              </div>
            </div>
            <br></br>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div
                style={{
                  textAlign: "left",
                  width: "100%",
                  display: "flex",
                  flexDirection: "row"
                }}
              >
                <div style={{ width: "175px" }}>
                  <b>Data de Nascimento:</b>
                </div>
                <Input
                  defaultValue={dados.nasc}
                  size="small"
                  style={{ marginLeft: "20px" }}
                ></Input>
              </div>
            </div>
            <br></br>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div
                style={{
                  textAlign: "left",
                  width: "100%",
                  display: "flex",
                  flexDirection: "row"
                }}
              >
                <b>Endereço:</b>
                <Input
                  defaultValue={dados.end_rua}
                  size="small"
                  style={{ marginLeft: "20px" }}
                ></Input>
              </div>
            </div>
            <br></br>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div
                style={{
                  textAlign: "left",
                  width: "50%",
                  display: "flex",
                  flexDirection: "row"
                }}
              >
                <b>Número:</b>
                <Input
                  defaultValue={dados.end_num}
                  size="small"
                  style={{ marginLeft: "20px" }}
                ></Input>
              </div>
              <div
                style={{
                  textAlign: "left",
                  width: "50%",
                  display: "flex",
                  flexDirection: "row"
                }}
              >
                <b>Complemento:</b>
                <Input
                  defaultValue={dados.end_comp}
                  size="small"
                  style={{ marginLeft: "20px" }}
                ></Input>
              </div>
            </div>
            <br></br>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div
                style={{
                  textAlign: "left",
                  width: "50%",
                  display: "flex",
                  flexDirection: "row"
                }}
              >
                <b>CEP:</b>
                <Input
                  defaultValue={dados.cep}
                  size="small"
                  style={{ marginLeft: "20px" }}
                ></Input>
              </div>
              <div
                style={{
                  textAlign: "left",
                  width: "50%",
                  display: "flex",
                  flexDirection: "row"
                }}
              >
                <b>Bairro:</b>
                <Input
                  defaultValue={dados.end_bai}
                  size="small"
                  style={{ marginLeft: "20px" }}
                ></Input>
              </div>
            </div>
            <br></br>
            <div style={{ textAlign: "left" }}>
              <b>Currículo:</b>
              <br></br>
              {dados.curriculo}
            </div>
          </Card>
        </div>
      </div>
    </Fragment>
  );
};

export default EdicaoAluno;
