import React, { Fragment } from "react";
import diceless from "../components/ui/diceless-logo.png";
import AvatarWithButton from "../components/ui/avatar-with-button";
import { Button, Icon, Card } from "antd";
import OurButton from "../components/ui/our-button";

const PerfilEmpresa = () => {
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
      "1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra mauris sit amet mauris vulputate laoreet. \n2. Aliquam tristique nunc vitae tellus posuere, non volutpat ante ornare. Quisque ipsum ligula, placerat ut purus vel, tristique cursus nulla. \n3. Nam ut pellentesque ligula. Nulla mattis non risus at porttitor. Donec sed orci eget ante tempor blandit eu et nibh. Vestibulum ex dolor, tempor sit amet lobortis eu, efficitur a diam. Phasellus semper vehicula tortor ut consequat. \n4. Ut suscipit eros ut orci interdum, maximus suscipit arcu viverra. Sed augue magna, dignissim eget arcu vitae, posuere porta sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. \n5.Aenean ultrices erat sapien, at aliquet ligula placerat vitae. Donec tortor est, interdum sed ultricies non, vestibulum nec nibh. Phasellus quis mattis magna. Donec aliquet nulla id ex imperdiet, vel laoreet mauris ornare."
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
          <AvatarWithButton src={diceless} nome={dados.nome}></AvatarWithButton>
          <br />
          <OurButton style={{ width: "70%" }} text="Início"></OurButton>
          <br />
          <br />
          <OurButton style={{ width: "70%" }} text="Meus arquivos"></OurButton>
        </div>
        <div style={{ width: "75%" }}>
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
              <Icon type="edit"></Icon>
              <a
                href="http://www.staggeringbeauty.com/"
                style={{ marginRight: "100px" }}
              >
                Editar
              </a>
            </div>
          </div>
          <Card style={{ marginRight: "100px" }}>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div style={{ textAlign: "left", width: "50%" }}>
                <b>Nome:</b> {dados.nome}
              </div>
              <div style={{ textAlign: "left", width: "50%" }}>
                <b></b> {}
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div style={{ textAlign: "left", width: "50%" }}>
                <b>E-mail para contato:</b> {dados.email}
              </div>
              <div style={{ textAlign: "left", width: "50%" }}>
                <b></b> {}
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div style={{ textAlign: "left", width: "50%" }}>
                <b>CNPJ:</b> {dados.cnpj}
              </div>
              <div style={{ textAlign: "left", width: "50%" }}>
                <b></b> {}
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div style={{ textAlign: "left", width: "50%" }}>
                <b>Endereço:</b> {dados.end_rua}
              </div>
              <div style={{ textAlign: "left", width: "50%" }}>
                <b></b> {}
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div style={{ textAlign: "left", width: "50%" }}>
                <b>Número:</b> {dados.end_num}
              </div>
              <div style={{ textAlign: "left", width: "50%" }}>
                <b>Complemento:</b> {dados.end_comp}
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div style={{ textAlign: "left", width: "50%" }}>
                <b>CEP:</b> {dados.cep}
              </div>
              <div style={{ textAlign: "left", width: "50%" }}>
                <b>Bairro:</b> {dados.end_bai}
              </div>
            </div>
            <div style={{ whiteSpace: "pre-line", textAlign: "left" }}>
              <b>Valores:</b>
              <br></br>
              {dados.valores}
            </div>
          </Card>
        </div>
      </div>
    </Fragment>
  );
};

export default PerfilEmpresa;
