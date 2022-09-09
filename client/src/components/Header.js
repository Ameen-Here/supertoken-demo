import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { signOut } from "supertokens-auth-react/recipe/emailpassword";

const Header = (props) => {
  const logoutHandler = async () => {
    props.logout();
    await signOut();
  };
  return (
    <div className="navigation">
      <div className="logo">
        <Link className="links" to={"/"}>
          <h3>SuperTokens</h3>
        </Link>
      </div>
      <div className="nav-links">
        {props.loginShow && (
          <Link onClick={logoutHandler} to={"/"} className="links">
            Logout
          </Link>
        )}
        {!props.loginShow && (
          <Link to={"/secret"} className="links">
            Login/Signup
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
