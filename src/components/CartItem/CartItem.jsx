import { useState } from "react";

import placeholder from "src/images/placeholder.jpg";

import css from "./CartItem.module.scss";

import PropTypes from "prop-types";

import icons from "src/images/icons.svg";

const CartItem = ({ item, isOrderPage }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <li className={css.cartItem}>
      <div className={css.imageWrapper}>
        <img src={item.img ? item.img : placeholder} alt="Image of cart item" />
      </div>
      <div
        className={`${css.itemWrapper} ${
          isOrderPage ? css.itemWrapperOrderPage : ""
        }`}
      >
        <div className={css.baseInfoWrapper}>
          <p className={css.itemText}>{item.text}</p>
          <div className={css.priceWrapper}>
            <p className={css.totalPrice}>{item.current_price} грн</p>
            {item.old_price && (
              <p className={css.oldPrice}>{item.old_price} грн</p>
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
              {item.current_price * quantity} грн
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
