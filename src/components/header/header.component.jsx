import React, { useContext, useState } from "react";
//import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import CurrentUserContext from "../../contexts/current-user/current-user.context";
//import CartContext from "../../contexts/cart/cart.context";
import { CartContext } from "../../providers/cart/cart.provider";

import {
  HeaderContainer,
  // OptionDiv,
  LogoContainer,
  OptionLink,
  OptionsContainer,
} from "./header.styles";
import "./header.styles.scss";

const Header = () => {
  // const { hidden } = useSelector(({ cart: { hidden } }) => ({
  //   hidden,
  // }));
  const { hidden } = useContext(CartContext);
  const currentUser = useContext(CurrentUserContext);

  return (
    // <div className="header">
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink className="option" to="/shop">
          CONTACT
        </OptionLink>
        {currentUser ? (
          <OptionLink as="div" onClick={() => auth.signOut()}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to="/signin">SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {!hidden && <CartDropdown />}
    </HeaderContainer>

    // </div>
  );
};

export default Header;
