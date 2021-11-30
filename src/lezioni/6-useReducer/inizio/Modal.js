import React from "react";

const Modal = ({ modalContent, modalState, openModal }) => {
  console.log(modalState);
  return (
    <section className={`modal-section ${modalState ? "show-modal" : ""}`}>
      <div className="container modal-content">
        <h4>{modalContent || "Sono un Modal"}</h4>
        <button className="button delete-button" onClick={openModal}>
          X
        </button>
      </div>
    </section>
  );
};

export default Modal;
