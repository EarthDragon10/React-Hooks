import React, { useState } from "react";

const ShortRender = () => {
  const [word, setWord] = useState("Valore");

  // Short Circuit Evaluation con OR operator

  const example = word || "sono un esempio";

  // Short Circuit Evaluation con AND operator

  const example2 = word && "Ho un valore";

  return (
    <div>
      <h2>{example}</h2>
      {word && <h4>Ciao sono un Componente</h4>}
    </div>
  );
};

export default ShortRender;
