import React, { useContext } from "react";
// import { useDispatch } from "react-redux";

// import { addItem } from "../../redux/action/cart/cart.actions";
import CustomButton from "../custom-button/custom-button.component";
import "./collection-item.styles.scss";

import { CartContext } from "../../providers/cart/cart.provider";
//import { addItemToCart } from "../../providers/cart/cart.utils";

const CollectionItem = ({ item }) => {
  const { imageUrl, name, price } = item;
  const { addItem } = useContext(CartContext);

  // const dispatch = useDispatch();

  const addToCart = (item) => {
    // dispatch(addItem(item));
    addItem(item);
  };
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <CustomButton onClick={() => addToCart(item)} inverted>
        Add to Cart
      </CustomButton>
    </div>
  );
};

export default CollectionItem;
