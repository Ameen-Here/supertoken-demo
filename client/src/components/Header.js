import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navigation">
      <div className="logo">
        <h3>SuperTokens</h3>
      </div>
      <div className="nav-links">
        <Link to={"/login"} className="links">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Header;
