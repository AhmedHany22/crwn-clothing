import Styles from "./Navbar.styles.jsx";
import { useSelector } from "react-redux";
import { useContext, Fragment } from "react";
import { Outlet } from "react-router-dom";

import { CartContext } from "./../../Context/cart.context";
import { userSelector } from "./../../Store/User/user.selector";
import { signOutUser } from "./../../Utils/Firebase/firebase.utils";
import { ReactComponent as Crown } from "../../assets/crown.svg";

import CartIcon from "../../Components/CartIcon";
import CartDropDown from "../../Components/CartDropDown";

const Navbar = () => {
  const { isCartOpen } = useContext(CartContext);
  // ------------------------------ Fetching Redux data ------------------------------
  const currentUser = useSelector(userSelector);

  const signOutHandler = async () => await signOutUser();

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
