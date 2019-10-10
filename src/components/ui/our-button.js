import React from "react";
import { Button } from "antd";

const OurButton = ({
  color,
  text,
  fontWeight = "s",
  textColor = "#184932",
  fontSize,
  onClick
}) => {
  return (
    <Button style={{ backgroundColor: color }} onClick={onClick}>
      <div style={{ color: textColor, fontWeight, fontSize }}>{text}</div>
    </Button>
  );
};

export default OurButton;
