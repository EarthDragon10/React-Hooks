import React, { useEffect, useState } from "react";

const useEffectBasi = () => {
  // console.log("component rendering");
  const [value, setValue] = useState(0);

  const aumenta = () => {
    setValue((oldValue) => oldValue + 1);
  };

  useEffect(() => {
    console.log("useEffect chiamato!");
    document.title = "UseEffect Title";
  });

  return (
    <div className="item">
      <h4>
        Value : <span>{value}</span>
      </h4>
      <button className="button" onClick={aumenta}>
        Aumenta
      </button>
    </div>
  );
};

export default useEffectBasi;
