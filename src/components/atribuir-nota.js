import React, { Fragment, useState } from "react";
import { Input } from "antd";
import OurButton from "./ui/our-button";

const AtribuirNota = () => {
  //   const [nota, setNota] = useState();

  return (
    <Fragment>
      <Input style={{ marginTop: 25 }} />
      <OurButton
        fontWeight={600}
        color="#99D5CA"
        text="Atribuir nota"
        textColor="#184932"
      />
    </Fragment>
  );
};

export default AtribuirNota;
