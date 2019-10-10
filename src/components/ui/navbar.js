import React from "react";
import pcstagiologo from "./pcstagiologo.png";

const Navbar = () => {
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
      <img src={pcstagiologo} alt="logo" />
      <a href="https://placekitten.com">Log out</a>
    </div>
  );
};

export default Navbar;
