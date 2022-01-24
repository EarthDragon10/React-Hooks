import React, { useState, useEffect } from "react";

const CleanUp = () => {
  const [size, setSize] = useState(window.innerWidth);

  // console.log("Render");

  const changeSizeWindow = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    // console.log("Setto addEventListener");

    window.addEventListener("resize", changeSizeWindow);

    return () => {
      // console.log("Rimuovo addEventListener");
      window.removeEventListener("resize", changeSizeWindow);
    };
  });

  return (
    <div
      className="container w-75 col-6 offset-3 bg-white shadow py-4"
      style={{ textAlign: "center" }}
    >
      <h1> {size} </h1>
    </div>
  );
};

export default CleanUp;
