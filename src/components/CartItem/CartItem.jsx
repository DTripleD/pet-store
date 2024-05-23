import { useState } from "react";

import placeholder from "src/images/placeholder.jpg";

import css from "./CartItem.module.scss";

import PropTypes from "prop-types";

import icons from "src/images/icons.svg";

const CartItem = ({ item, isOrderPage }) => {
  const [quantity, setQuantity] = useState(item.quantity);

  return (
    <li className={css.cartItem}>
      <div className={css.imageWrapper}>
        <img
          src={
            item.product.images
              ? `http://127.0.0.1:8000${item.product.images}`
              : placeholder
          }
          alt="Image of cart item"
        />
      </div>
      <div
        className={`${css.itemWrapper} ${
          isOrderPage ? css.itemWrapperOrderPage : ""
        }`}
      >
        <div className={css.baseInfoWrapper}>
          <p className={css.itemText}>{item.product.name}</p>
          <div className={css.priceWrapper}>
            <p className={css.totalPrice}>
              {item.product.discount_price || item.product.price} грн
            </p>
            {item.product.discount_price && (
              <p className={css.oldPrice}>{item.product.price} грн</p>
            )}
          </div>
        </div>
        <div className={css.priceFunctionsWrapper}>
          <div className={css.quantityWrapper}>
            <button
              type="button"
              className={css.quantityButton}
              disabled={quantity <= 1}
              onClick={() => setQuantity((prev) => prev - 1)}
            >
              -
            </button>
            <span className={css.quantityText}>{quantity}</span>
            <button
              type="button"
              className={css.quantityButton}
              onClick={() => setQuantity((prev) => prev + 1)}
            >
              +
            </button>
          </div>
          {!isOrderPage && (
            <p className={css.totalPrice}>
              {(item.product.discount_price || item.product.price) * quantity}{" "}
              грн
            </p>
          )}
        </div>
      </div>
      <svg className={css.iconExtraMenu}>
        <use href={icons + "#extra-menu"}></use>
      </svg>
    </li>
  );
};

export default CartItem;

CartItem.propTypes = {
  item: PropTypes.object,
  isOrderPage: PropTypes.bool,
};
