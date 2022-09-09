import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="homepage">
      <h2>Welcome to SuperTokens demo login/signup</h2>
      <p>
        Go to <Link to="/secret">Secret</Link>
      </p>
    </div>
  );
};

export default Homepage;
