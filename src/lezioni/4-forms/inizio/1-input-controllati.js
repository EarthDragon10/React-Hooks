import React from "react";

const ControlledInput = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Inviato");
  };

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
