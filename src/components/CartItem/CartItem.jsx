import { useState } from "react";
import placeholder from "src/images/placeholder.jpg";
import css from "./CartItem.module.scss";
import PropTypes from "prop-types";
import icons from "src/images/icons.svg";

const CartItem = ({ item, isOrderPage }) => {
  const { product } = item;
  const { name, images, discount_price, price } = product || {};
  const [quantity, setQuantity] = useState(item.quantity || 1);

  const imageUrl = images || placeholder;
  const itemsPrice = ((discount_price || price) * quantity).toFixed(2);

  return (
    <div 
      className={isOrderPage ? css.itemCartOrderPage : css.cartItem}
    >
      <div className={isOrderPage ? css.imageOrderPage : css.imageWrapper}>
        <img
          src={imageUrl}
          alt={name}
        />
      </div>
      <div
        className={isOrderPage ? css.itemWrapperOrderPage : css.itemWrapper}
      >
        <div className={css.baseInfoWrapper}>
          <p className={css.itemText}>{name}</p>
          {isOrderPage && <p className={css.quantityOrderPage}>{quantity} шт.</p>}
          {!isOrderPage && (
            <div className={css.priceWrapper}>
              <p className={css.totalPrice}>
                {discount_price || price} грн
              </p>
              {discount_price && (
                <p className={css.oldPrice}>{price} грн</p>
              )}
          </div>
          )}
        </div>
        <div className={css.priceFunctionsWrapper}>
          {!isOrderPage && (
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
          )}
          {!isOrderPage && (
            <p className={css.totalPriceDesk}>
              {itemsPrice}{" "}
              грн
            </p>
          )}
        </div>
      </div>
      {!isOrderPage && (
        <svg className={css.iconExtraMenu}>
          <use href={icons + "#extra-menu"}></use>
      </svg>
      )}
    </div>
  );
};

export default CartItem;

CartItem.propTypes = {
  item: PropTypes.object,
  isOrderPage: PropTypes.bool,
};
