import React, { useState } from "react";
import Modal from "./Modal";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("Eccomi, sono un Modal");

  const openModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div>
        <h3>Premi qui per aprire il Modal</h3>
        <button className="button" onClick={openModal}>
          Mostrami
        </button>
      </div>
      <Modal
        modalContent={modalContent}
        modalState={isModalOpen}
        openModal={openModal}
      />
    </>
  );
};

export default Index;
