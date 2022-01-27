import React, { useState, useEffect } from "react";

const ControlledInput = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && email && phone) {
      console.log({ name, email, phone });
      setPeople([
        ...people,
        {
          id: new Date(Date.now().getTime().toString()),
          name,
          email,
          phone,
          people,
        },
      ]);

      setName("");
      setEmail("");
      setPhone("");
    } else {
      alert("Devi riempire il form!");
    }
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setPhone(value);
  };

  useEffect(() => {
    const { log } = console;
    log(people);
  });

  return (
    <form className="bg-white shadow rounded p-4">
      <div className="form-group d-flex align-items-center justify-content-lg-around">
        <label htmlFor="name" className="text-left font-weight-bold col-3">
          Nome:
        </label>
        <input
          id="name"
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-control col-9"
        ></input>
      </div>
      <div className="form-group d-flex align-items-center justify-content-lg-around">
        <label htmlFor="email" className="text-left font-weight-bold col-3">
          Email:
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control col-9"
        ></input>
      </div>
      <div className="form-group d-flex align-items-center justify-content-lg-around">
        <label htmlFor="name" className="text-left font-weight-bold col-3">
          Cellulare:
        </label>
        <input
          id="phone"
          type="tel"
          name="phone"
          value={phone}
          onChange={handleChange}
          className="form-control col-9"
        ></input>
      </div>
      <button type="submit" className="btn btn-info" onClick={handleSubmit}>
        Invia
      </button>
    </form>
  );
};

export default ControlledInput;
