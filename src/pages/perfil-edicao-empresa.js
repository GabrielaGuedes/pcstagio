import React, { Fragment } from "react";
import diceless from "../components/ui/diceless.png";
import AvatarWithButton from "../components/ui/avatar-with-button";
import { Card, Input } from "antd";
import OurButton from "../components/ui/our-button";

const PerfilEdicaoEmpresa = () => {
  const dados = {
    nome: "Diceless",
    cnpj: "23.456.789/0001-12",
    end_rua: "Rua Prof Luciano Gualberto",
    end_num: "526",
    cep: "02022-020",
    end_comp: "Travessa 3",
    end_bai: "Butantã",
    email: "contato@diceless.com",
    valores:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra mauris sit amet mauris vulputate laoreet. Aliquam tristique nunc vitae tellus posuere, non volutpat ante ornare. Quisque ipsum ligula, placerat ut purus vel, tristique cursus nulla. Nam ut pellentesque ligula. Nulla mattis non risus at porttitor. Donec sed orci eget ante tempor blandit eu et nibh. Vestibulum ex dolor, tempor sit amet lobortis eu, efficitur a diam. Phasellus semper vehicula tortor ut consequat. Ut suscipit eros ut orci interdum, maximus suscipit arcu viverra. Sed augue magna, dignissim eget arcu vitae, posuere porta sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultrices erat sapien, at aliquet ligula placerat vitae. Donec tortor est, interdum sed ultricies non, vestibulum nec nibh. Phasellus quis mattis magna. Donec aliquet nulla id ex imperdiet, vel laoreet mauris ornare."
  };
  const { TextArea } = Input;
  return (
    <Fragment>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: "20px",
          marginLeft: "40px",
          marginRight: "40px",
          paddingBottom: "10%"
        }}
      >
        <div style={{ width: "25%" }}>
          <AvatarWithButton src={diceless} nome={dados.nome}></AvatarWithButton>
          <br />
          <OurButton style={{ width: "70%" }} text="Início" />
          <br />
          <br />
          <OurButton style={{ width: "70%" }} text="Meus estágiários" />
          <br />
          <br />
          <OurButton style={{ width: "70%" }} text="Cadastrar vaga" />
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
            <div
              style={{
                display: "flex",
                textAlign: "left",
                width: "100%",
                flexDirection: "row"
              }}
            >
              <b>Nome:</b>
              <Input
                defaultValue={dados.nome}
                size="small"
                style={{ marginLeft: "20px" }}
              />
            </div>
            <br></br>
            <div
              style={{
                display: "flex",
                textAlign: "left",
                width: "100%",
                flexDirection: "row"
              }}
            >
              <div style={{ width: 175 }}>
                <b>E-mail para contato:</b>
              </div>
              <Input
                defaultValue={dados.email}
                size="small"
                style={{ marginLeft: "20px" }}
              />
            </div>
            <br></br>
            <div
              style={{
                display: "flex",
                textAlign: "left",
                width: "100%",
                flexDirection: "row"
              }}
            >
              <b>CNPJ:</b>
              <Input
                defaultValue={dados.cnpj}
                size="small"
                style={{ marginLeft: "20px" }}
              />
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
                  flexDirection: "row",
                  marginLeft: 10
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
                  flexDirection: "row",
                  marginLeft: 10
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
              <b>Valores:</b>
              <br></br>
              <TextArea
                defaultValue={dados.valores}
                autoSize={{ minRows: 5, maxRows: 10 }}
              />
            </div>
          </Card>
        </div>
      </div>
    </Fragment>
  );
};

export default PerfilEdicaoEmpresa;
