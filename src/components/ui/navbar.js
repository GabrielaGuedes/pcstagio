import React from "react";
import pcstagiologo from "./pcstagiologo.png";
import { Link } from "react-router-dom";

const Navbar = ({ inicial }) => {
  return (
    <div
      style={{
        backgroundColor: "#99D5CA",
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <img src={pcstagiologo} alt="logo" height={50} width={150} />
      <Link to="/cadastro">{inicial ? "Log in" : "Log out"}</Link>
    </div>
  );
};

export default Navbar;
