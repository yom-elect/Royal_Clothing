import React from "react";
import { useDispatch } from "react-redux";

import { addItem } from "../../redux/action/cart/cart.actions";
import CustomButton from "../custom-button/custom-button.component";
import "./collection-item.styles.scss";

const CollectionItem = ({ item }) => {
  const { imageUrl, name, price } = item;
  const dispatch = useDispatch();

  const addToCart = (item) => {
    dispatch(addItem(item));
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
