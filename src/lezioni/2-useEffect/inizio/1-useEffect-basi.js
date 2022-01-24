import React, { useEffect, useState } from "react";

const useEffectBasi = () => {
  const [value, setValue] = useState(0);

  const incrementHandler = () => {
    setValue((prevValue) => prevValue + 1);
  };

  useEffect(() => {
    console.log("Use Effect chiamato");
    if (value < 1) {
      document.title = `Nessun messaggio`;
    } else {
      document.title = `Nuovi messaggi : ${value}`;
    }
  });

  return (
    <div className="item">
      <h4>
        Value : <span>{value}</span>
      </h4>
      <button className="button" onClick={incrementHandler}>
        Aumenta
      </button>
    </div>
  );
};

export default useEffectBasi;
