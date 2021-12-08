import React from "react";
import { useParams, useHistory } from "react-router-dom";

const SingleProgetto = ({ history, location, match }) => {
  console.log(match.params.id);

  const { id } = useParams();

  return <div>Singolo Progetto numero {id}</div>;
};

export default SingleProgetto;
