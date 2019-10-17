import React, { Fragment, useState } from "react";
import { Card, Button, Avatar, Icon } from "antd";
import empresa from "./diceless.png";

const OurPanel = ({ content, hiddenContent }) => {
  const [showHiddenContent, setShowHiddenContent] = useState(false);
  /*const [querotuk, setQuerotuk] = useState(true);

  const onClick = () => {
    setQuerotuk(!querotuk);
  };*/

  return (
    <Fragment>
      {/*<div style={{ backgroundColor: "yellow", fontWeight: "600" }}>
        moana
        {querotuk ? "tuk" : "sem tuk"}
  </div>*/}
      <Card
        style={{
          width: 666,
          display: "flex",
          justifyContent: "flex-start",
          marginTop: 50,
          marginLeft: 50,
          padding: "10px 10px 0px"
        }}
      >
        {content}
        <div style={{ width: 590, overflow: "auto" }}>
          {showHiddenContent && hiddenContent}
        </div>

        <br />
        <Icon
          type={showHiddenContent ? "arrow-up" : "arrow-down"}
          onClick={() => {
            setShowHiddenContent(!showHiddenContent);
          }}
        />
      </Card>
      {/*<Button color="#753437" onClick={onClick}>
        tuk
</Button>*/}
    </Fragment>
  );
};

export default OurPanel;
