import React, { useState } from "react";
// Gli Hooks devono essere usasti con use davanti
// componenti devono avere la prima lettere Maiuscola
// Gli Hook devono essere invocati all'interno del corpo/funzione del componente
// Gli Hook non possono essere utilizzati in maniera condizionale

const UsoBase = () => {
  //   const { log } = console;
  //   const value = useState()[0];
  //   const handler = useState()[1];

  //   log(useState("useState"));
  //   log({ value: value, handler: handler });

  const [title, setTitle] = useState("Hello World");

  const changeTitle = () => {
    title === "Hello World"
      ? setTitle("Title changed")
      : setTitle("Hello World");
  };

  return (
    <>
      <h2>{title}</h2>
      <button
        type="button"
        className="btn btn-info shadow my-3"
        onClick={changeTitle}
      >
        Change Me
      </button>
    </>
  );
};

export default UsoBase;
