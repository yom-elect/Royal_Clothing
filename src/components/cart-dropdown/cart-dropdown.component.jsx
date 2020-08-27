import React, { useContext } from "react";
// import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.styles.scss";

import { CartContext } from "../../providers/cart/cart.provider";
// import { toggleCartHidden } from "../../redux/action/cart/cart.actions";

const Cart = ({ history }) => {
  //const dispatch = useDispatch();
  //const cartItems = useSelector(({ cart: { cartItems } }) => cartItems);
  const { cartItems, toggleHidden } = useContext(CartContext);

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          toggleHidden();
          history.push("/checkout");
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

export default withRouter(Cart);
