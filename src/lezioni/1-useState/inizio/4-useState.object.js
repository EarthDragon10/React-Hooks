import React, { useState } from "react";

const StateObject = () => {
  const [person, setPerson] = useState({
    name: "Stefano",
    age: 29,
    hello: "Ciao",
  });

  const changeHello = () => {
    setPerson({ ...person, age: 30, hello: "Ciao, oggi ho fatto gli anni" });
  };

  return (
    <div className="item shadow ">
      <div className="text-left">
        <h5>{person.name}</h5>
        <h5>{person.age}</h5>
        <h6>{person.hello}</h6>
      </div>
      <button type="button" className="button" onClick={changeHello}>
        Cambia il Saluto
      </button>
    </div>
  );
};

export default StateObject;
