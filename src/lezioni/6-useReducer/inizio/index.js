import React, { useReducer } from "react";
import Modal from "./Modal";
import reducer from "./reducer";
import { APRI_MODAL, CHIUDI_MODAL } from "./actions";

const initialState = {
  isModalOpen: false,
  modalContent: "Eccomi, sono un modal.",
};

const Index = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // console.log(state);

  const tiPremo = () => {
    dispatch({ type: "PREMO_BOTTONE" });
  };

  const apriModal = () => {
    dispatch({ type: APRI_MODAL, payload: "il mio nuovo modal" });
  };

  const chiudiModal = () => {
    dispatch({ type: CHIUDI_MODAL });
  };

  return (
    <>
      <div>
        <h3>Premi qui per aprire il Modal</h3>
        <button className="button" onClick={apriModal}>
          Mostrami
        </button>
      </div>
      <Modal
        modalContent={state.modalContent}
        modalState={state.isModalOpen}
        chiudiModal={chiudiModal}
      />
    </>
  );
};

export default Index;
