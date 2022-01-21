import React, { useState } from "react";

const CounterComponent = () => {
  let [contatore, setContatore] = useState(0);

  const incrementHandler = () => {
    setContatore((oldValue) => {
      return oldValue + 1;
    });
  };

  const decrementHandler = () => {
    setContatore((oldValue) => {
      return oldValue - 1;
    });
  };

  const resethandler = () => {
    setContatore(0);
  };

  return (
    <div className="bg-white shadow rounded py-5 w-75 col-6 offset-3">
      <h3>Counter</h3>
      <h4>{contatore}</h4>
      <div className="d-flex justify-content-between">
        <button
          type="button"
          className="button my-2"
          onClick={decrementHandler}
        >
          Diminuisci
        </button>
        <button
          type="button"
          className="button my-2"
          onClick={incrementHandler}
        >
          Aumenta
        </button>
      </div>
      <button
        type="button"
        className="button reset-button my-2"
        onClick={resethandler}
      >
        Resetta
      </button>
    </div>
  );
};

export default CounterComponent;
