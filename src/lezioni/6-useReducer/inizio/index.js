import React, { useState, useReducer } from "react";
import Modal from "./Modal";

const reducer = (state, action) => {
  console.log({ state: state, action: action });

  switch (action.type) {
    case "PREMO_BOTTONE":
      return console.log("bottone premuto");

    default:
      return console.log("qualcosa è andato storto");
  }
};

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

  return (
    <>
      <div>
        <h3>Premi qui per aprire il Modal</h3>
        <button className="button" onClick={tiPremo}>
          Mostrami
        </button>
      </div>
      <Modal modalContent={state.modalContent} modalState={state.isModalOpen} />
    </>
  );
};

export default Index;
