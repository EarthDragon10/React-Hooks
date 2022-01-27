import React, { useEffect, useState } from "react";

const ControlledInput = () => {
  // const [nome, setNome] = useState("");
  // const [email, setEmail] = useState("");
  // const [cellulare, setCellulare] = useState("");

  const [persona, setPersona] = useState({
    nome: "",
    email: "",
    cellulare: "",
  });

  const [persone, setPersone] = useState([]);

  const handleSumbit = (e) => {
    e.preventDefault();
    console.log(persona);
    // setPersone([
    //   ...persone,
    //   {
    //     id: persone.length + 1,
    //     nome,
    //     email,
    //     cellulare,
    //   },
    // ]);
    // setNome("");
    // setEmail("");
    // setCellulare("");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(persona[name]);
  };

  useEffect(() => {
    const { log } = console;
    log(persone);
  }, [persone]);
  return (
    <form className="bg-white shadow p-4" onSubmit={(e) => handleSumbit(e)}>
      <div className="form-group d-flex align-items-center justify-content-around container">
        <label htmlFor="nome" className="text-left font-weight-bold col-3">
          {" "}
          Nome:{" "}
        </label>
        <input
          type="text"
          id="nome"
          name="nome"
          className="form-control col-9"
          value={persona.nome}
          onChange={handleChange}
        />
      </div>
      <div className="form-group  d-flex align-items-center justify-content-around container">
        <label htmlFor="email" className="text-left font-weight-bold col-3">
          {" "}
          Email:{" "}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="form-control col-9"
          value={persona.email}
        />
      </div>
      <div className="form-group  d-flex align-items-center justify-content-around container">
        <label htmlFor="cellulare" className="text-left font-weight-bold col-3">
          {" "}
          Cellulare:{" "}
        </label>
        <input
          type="tel"
          id="cellulare"
          name="cellulare"
          className="form-control col-9"
          value={persona.cellulare}
        />
      </div>
      <button type="submit" className="btn btn-info ">
        {" "}
        Invia
      </button>
    </form>
  );
};

export default ControlledInput;
