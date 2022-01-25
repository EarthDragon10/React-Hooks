import React, { useState } from "react";

const url = "https://api.github.com/users/QuincyLarson";

const ConditionalCompining = () => {
  const [loading, setLoading] = useState(false);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h2>Conditional Rendering</h2>
    </div>
  );
};

export default ConditionalCompining;
