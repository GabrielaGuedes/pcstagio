import React, { Fragment } from "react";
import { Avatar } from "antd";

const AvatarWithButton = ({ src, nome, size = 79 }) => {
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
          <a
            href="http://placekitten.com/"
            style={{ fontSize: 14, textDecoration: "underline" }}
          >
            Ver seu perfil
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default AvatarWithButton;
