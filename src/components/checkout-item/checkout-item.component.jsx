import React, { useContext } from "react";
// import { useDispatch } from "react-redux";

// import {
//   clearItemFromCart,
//   // addItem,
//   // removeItem,
// } from "../../redux/action/cart/cart.actions";
import { CartContext } from "../../providers/cart/cart.provider";
import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem }) => {
  const { addItem, removeItem, clearItemFromCart } = useContext(CartContext);
  const { name, imageUrl, price, quantity } = cartItem;
  //const dispatch = useDispatch();

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div
          className="arrow"
          onClick={() =>
            // dispatch(removeItem(cartItem))
            removeItem(cartItem)
          }
        >
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div
          className="arrow"
          onClick={() =>
            //dispatch(addItem(cartItem))
            addItem(cartItem)
          }
        >
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() =>
          // dispatch(clearItemFromCart(cartItem))
          clearItemFromCart(cartItem)
        }
      >
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
