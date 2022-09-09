import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Secret = (props) => {
  useEffect(() => {
    props.loggedIn();
  }, []);
  return (
    <div className="secret">
      <h1>Welcome to secret!!!</h1>
      <Link to={"/"}>
        <h4>Back to homepage.</h4>
      </Link>
    </div>
  );
};

export default Secret;
