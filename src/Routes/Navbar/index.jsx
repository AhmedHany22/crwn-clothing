import "./Navbar.styles.scss";
import { Outlet, Link } from "react-router-dom";
import React from "react";
import { ReactComponent as Crown } from "../../assets/crown.svg";

const Navbar = () => {
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
          <Link to="/signin" className="nav-link">
            Sign In
          </Link>
        </div>
      </div>
      {/* Pages Container */}
      <Outlet />
    </React.Fragment>
  );
};

export default Navbar;
