import Styles from "./Navbar.styles.jsx";
import { useContext, Fragment } from "react";
import { Outlet } from "react-router-dom";
import { ReactComponent as Crown } from "../../assets/crown.svg";
import { UserContext } from "./../../Context/user.context";
import { CartContext } from "./../../Context/cart.context";
import { signOutUser } from "./../../Utils/Firebase/firebase.utils";
import CartIcon from "../../Components/CartIcon";
import CartDropDown from "../../Components/CartDropDown";

const Navbar = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

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
