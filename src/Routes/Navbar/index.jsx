import Styles from "./Navbar.styles.jsx";

import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import CartIcon from "../../Components/CartIcon";
import CartDropDown from "../../Components/CartDropDown";
import { ReactComponent as Crown } from "../../assets/crown.svg";

import { signOutStart } from "./../../Store/User/user.action";
import { userSelector } from "./../../Store/User/user.selector";
import { cartStateSelector } from "./../../Store/Cart/cart.selector";

const Navbar = () => {
  // ------------------------------ Fetching Redux data ------------------------------
  const currentUser = useSelector(userSelector);
  const isCartOpen = useSelector(cartStateSelector);
  const dispatch = useDispatch();

  const signOutHandler = () => dispatch(signOutStart());
  return (
    <Fragment>
      {/* Navegation Bar */}
      <Styles.Navigation>
        <Styles.LogoContainer to="/">
          <Crown />
        </Styles.LogoContainer>
        <Styles.NavLinksContainer>
          {/* Routes Links */}
          <Styles.NavLink to="/shop">Shop</Styles.NavLink>
          {currentUser ? (
            <Styles.NavLink as="span" onClick={signOutHandler}>
              Sign Out
            </Styles.NavLink>
          ) : (
            <Styles.NavLink to="/auth">Sign In</Styles.NavLink>
          )}
          <CartIcon />
        </Styles.NavLinksContainer>
        {isCartOpen && <CartDropDown />}
      </Styles.Navigation>
      {/* Pages Container */}
      <Outlet />
    </Fragment>
  );
};

export default Navbar;
