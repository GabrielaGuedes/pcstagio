import React, { useState, Fragment } from "react";
import { Icon } from "antd";

const AprovarRejeitar = ({ statusInicial }) => {
  const [status, setStatus] = useState(statusInicial);

  return (
    <div style={{ fontSize: 12 }}>
      {status ? (
        status
      ) : (
        <Fragment>
          <Icon
            type="cross"
            style={{ marginRight: 10 }}
            onClick={() => setStatus("Rejeitado")}
          />
          <Icon type="check" onClick={() => setStatus("Aprovado")} />
        </Fragment>
      )}
    </div>
  );
};

export default AprovarRejeitar;
