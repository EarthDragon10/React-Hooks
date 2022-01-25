import React, { useState } from "react";

const ShortRender = () => {
  const [word, setWord] = useState("Valore");
  const [toggle, setToggle] = useState(false);

  // Short Circuit Evaluation con OR operator

  // const example = word || "sono un esempio";

  // Short Circuit Evaluation con AND operator

  // const example2 = word && "Ho un valore";

  // Ternary Operator

  // const example3 = word === "Valore" ? "Sono Vero!" : "sono Falso!";

  return (
    <div>
      {/* <h2>{example}</h2>
      {word && <h4>Ciao sono un Componente</h4>}
      {example3} */}
      <h2>{word || "Sono un Esempio se non è inserito un valore"}</h2>
      {toggle ? (
        <h2 className="text-success">Vero</h2>
      ) : (
        <h2 className="text-danger">Falso</h2>
      )}
      <button className="button" onClick={() => setToggle(!toggle)}>
        Cambia
      </button>
    </div>
  );
};

export default ShortRender;
