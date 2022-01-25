import React, { useState, useEffect } from "react";
import Axios from "axios";

const url = "https://api.github.com/users/QuincyLarson";

const ConditionalCompining = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("default user");

  const fetchData = async () => {
    setIsError(false);
    setIsLoading(true);

    try {
      const response = await Axios.get(url);

      console.log(response);

      setUser(response.data);
    } catch (error) {
      console.log(error);
      setIsError(true);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <Loading />;
  } else if (isError) {
    return <Error />;
  } else {
    return (
      <article className="card d-flex align-items-center p-5 shadow mt-5">
        <img
          src={user.avatar_url}
          alt={user.name}
          style={{ width: "80px", height: "80px" }}
          className="rounded-circle my-4 shadow"
        />
        <h2>{user.login}</h2>
      </article>
    );
  }
};

const Loading = () => {
  return (
    <div>
      <h2>Loading..</h2>
    </div>
  );
};

const Error = () => {
  return (
    <div>
      <h2>Error...</h2>
    </div>
  );
};

export default ConditionalCompining;
