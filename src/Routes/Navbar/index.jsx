import "./Navbar.styles.scss";
import { Outlet, Link } from "react-router-dom";
import React, { useContext } from "react";
import { ReactComponent as Crown } from "../../assets/crown.svg";
import { UserContext } from "./../../Context/user.context";
import { signOutUser } from "./../../Utils/Firebase/firebase.utils";

const Navbar = () => {
  const { currentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    await signOutUser();
  };

  return (
    <React.Fragment>
      {/* Navegation Bar */}
      <div className="navigation">
        <Link to="/" className="logo-container">
          <Crown className="logo" />
        </Link>
        <div className="nav-links-container">
          {/* Routes Links */}
          <Link to="/shop" className="nav-link">
            Shop
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>
              Sign Out
            </span>
          ) : (
            <Link to="/auth" className="nav-link">
              Sign In
            </Link>
          )}
        </div>
      </div>
      {/* Pages Container */}
      <Outlet />
    </React.Fragment>
  );
};

export default Navbar;
