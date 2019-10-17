import React, { Fragment, useState } from "react";
import { Modal } from "antd";
import OurButton from "./ui/our-button";

const BotaoVerCandidatos = ({ vaga }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Fragment>
      <Modal
        title={"Candidatos para vaga de " + vaga.estagio}
        visible={modalOpen}
        onCancel={() => setModalOpen(false)}
        onOk={() => setModalOpen(false)}
        destroyOnClose
      >
        {vaga.candidatos.length > 0
          ? vaga.candidatos.map(candidato => {
              return (
                <Fragment>
                  {candidato}
                  <br />
                </Fragment>
              );
            })
          : "Não há candidatos para esta vaga ainda"}
      </Modal>
      <OurButton
        color="#99D5CA"
        text="Ver candidatados"
        textColor="#184932"
        fontSize="18px"
        onClick={() => {
          setModalOpen(true);
        }}
      />
    </Fragment>
  );
};

export default BotaoVerCandidatos;
