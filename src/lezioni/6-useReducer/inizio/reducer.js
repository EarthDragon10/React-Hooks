const reducer = (state, action) => {
  console.log({ state: state, action: action });

  switch (action.type) {
    case "PREMO_BOTTONE":
      return console.log("bottone premuto");

    case "APRI_MODAL":
      console.log(action);
      return { ...state, isModalOpen: true, modalContent: action.payload };

    case "CHIUDI_MODAL":
      return { ...state, isModalOpen: false };

    default:
      return console.log("qualcosa è andato storto");
  }
};

export default reducer;
