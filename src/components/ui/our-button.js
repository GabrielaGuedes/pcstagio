import React from "react";
import { Button } from "antd";

const OurButton = ({
  color,
  text,
  fontWeight = "normal",
  textColor = "#184932",
  fontSize,
  onClick,
  ...props
}) => {
  return (
    <Button style={{ backgroundColor: color }} onClick={onClick} {...props}>
      <div style={{ color: textColor, fontWeight, fontSize }}>{text}</div>
    </Button>
  );
};

export default OurButton;
