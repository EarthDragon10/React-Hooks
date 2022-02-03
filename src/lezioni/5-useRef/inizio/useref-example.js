import React, { useRef } from "react";

const RefExample = () => {
  const inputRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} />
        <button className="button" type="submit">
          Invia
        </button>
      </form>
    </div>
  );
};

export default RefExample;
