import React, { Fragment } from "react";
import OurButton from "./ui/our-button";
import { Link } from "react-router-dom";

const BotaoVerCandidatos = ({ vaga }) => {
  return (
    <Fragment>
      <Link to="/empresa/candidatos">
        <OurButton
          color="#99D5CA"
          text="Ver candidatados"
          textColor="#184932"
          fontSize="18px"
        />
      </Link>
    </Fragment>
  );
};

export default BotaoVerCandidatos;
