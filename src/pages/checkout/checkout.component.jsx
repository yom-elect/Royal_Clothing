import React from "react";
import { useSelector } from "react-redux";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import "./checkout.styles.scss";

const CheckoutPage = () => {
  const { cartItems, total } = useSelector(({ cart: { cartItems } }) => ({
    total: cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        (accumulatedQuantity + cartItem.quantity) * cartItem.price,
      0
    ),
    cartItems,
  }));
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}

      <div className="total">
        <span>TOTAL: ${total}</span>
      </div>
    </div>
  );
};

export default CheckoutPage;
