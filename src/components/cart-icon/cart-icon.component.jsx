import React, { useContext } from "react";
// import {
//   //useDispatch,
//   useSelector,
// } from "react-redux";
//import { toggleCartHidden } from "../../redux/action/cart/cart.actions";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../providers/cart/cart.provider";

import "./cart-icon.styles.scss";

const CartIcon = () => {
  const { toggleHidden, cartItemsCount } = useContext(CartContext);
  // const itemCount = cartItems.reduce(
  //   (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
  //   0
  // );

  // const dispatch = useDispatch();
  return (
    <div className="cart-icon" onClick={() => toggleHidden()}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartItemsCount}</span>
    </div>
  );
};

export default CartIcon;
