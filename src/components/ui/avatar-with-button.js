import React, { Fragment } from "react";
import { Avatar } from "antd";
import { Link } from "react-router-dom";

const AvatarWithButton = ({ src, nome, size = 79, pessoa }) => {
  const botaoPerfil = () => {
    switch (pessoa) {
      case "aluno":
        return "/aluno/perfil";
      case "empresa":
        return "/empresa/perfil";
      default:
        return "";
    }
  };
  return (
    <Fragment>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center"
        }}
      >
        <Avatar src={src} size={size} shape="circle" />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            marginLeft: 10
          }}
        >
          <div style={{ color: "#184932", fontWeight: "600", fontSize: 18 }}>
            {nome}
          </div>
          {pessoa === "professor" || (
            <Link to={botaoPerfil()}>Ver seu perfil</Link>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default AvatarWithButton;
