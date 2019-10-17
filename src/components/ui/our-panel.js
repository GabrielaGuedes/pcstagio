import React, { Fragment, useState } from "react";
import { Card, Button, Avatar, Icon } from "antd";
import empresa from "./diceless.png";

const OurPanel = ({ content, hiddenContent }) => {
  const [showHiddenContent, setShowHiddenContent] = useState(false);

  return (
    <Fragment>
      <Card
        style={{
          width: 666,
          display: "flex",
          justifyContent: "flex-start",
          padding: "10px 10px 0px",
          borderRadius: 4,
          boxShadow:
            "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)"
        }}
      >
        {content}
        <div style={{ width: 590, overflow: "auto" }}>
          {showHiddenContent && hiddenContent}
        </div>

        <br />
        <div
          style={{ display: "flex", width: "100%", justifyContent: "center" }}
        >
          <Icon
            type={showHiddenContent ? "arrow-up" : "arrow-down"}
            onClick={() => {
              setShowHiddenContent(!showHiddenContent);
            }}
          />
        </div>
      </Card>
    </Fragment>
  );
};

export default OurPanel;
