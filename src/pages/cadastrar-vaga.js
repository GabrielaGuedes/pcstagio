import React, { Fragment } from "react";
import diceless from "../components/ui/diceless.png";
import AvatarWithButton from "../components/ui/avatar-with-button";
import { Card, Input } from "antd";
import OurButton from "../components/ui/our-button";
import { Link } from "react-router-dom";

const CadastrarVaga = () => {
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
          paddingBottom: "20px"
        }}
      >
        <div style={{ width: "25%" }}>
          <AvatarWithButton src={diceless} nome={dados.nome} pessoa="empresa" />
          <br />
          <Link to="/empresa">
            <OurButton style={{ width: "70%" }} text="Início" />
          </Link>
          <br />
          <br />
          <Link to="meus-estagiarios">
            <OurButton style={{ width: "70%" }} text="Meus estágiários" />
          </Link>
          <br />
          <br />
          <Link to="cadastrar-vaga">
            <OurButton
              style={{ width: "70%", backgroundColor: "#AAAAAA" }}
              text="Cadastrar vaga"
            />
          </Link>
        </div>
        <div style={{ width: "75%", marginLeft: "20px" }}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ width: "50%", textAlign: "left", fontSize: "20px" }}>
              Cadastrar Vaga
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
              <b>Nome:</b>
              <Input style={{ marginLeft: "20px" }} />
            </div>
            <br></br>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <b>Benefícios:</b>
              <TextArea autoSize={{ minRows: 5, maxRows: 10 }} />
            </div>
            <br></br>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <b>Remuneração:</b>
              <Input style={{ marginLeft: "20px" }} />
            </div>
            <br></br>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <b>Requisitos:</b>
              <TextArea autoSize={{ minRows: 5, maxRows: 10 }} />
            </div>
            <br></br>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <b>Etapas do processo seletivo:</b>
              <TextArea autoSize={{ minRows: 5, maxRows: 10 }} />
            </div>
            <br></br>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <b>Descrição:</b>
              <TextArea autoSize={{ minRows: 5, maxRows: 10 }} />
            </div>
            <br></br>
          </Card>
        </div>
      </div>
    </Fragment>
  );
};

export default CadastrarVaga;
