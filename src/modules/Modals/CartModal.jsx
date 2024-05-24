import css from "./Modals.module.scss";

import icons from "src/images/icons.svg";

import PropTypes from "prop-types";
import CartItem from "components/CartItem/CartItem";
import { Link, useLocation } from "react-router-dom";
import TotalPrice from "../../components/TotalPrice/TotalPrice";

import { useSelector } from "react-redux";
import {
  selectCartIsLoading,
  selectItemsInCart,
} from "../../redux/cart/cartSelectors";

const CartModal = ({ activeCartModal, setActiveCartModal }) => {
  const location = useLocation();

  const itemsInCart = useSelector(selectItemsInCart);
  const cartIsLoading = useSelector(selectCartIsLoading);

  return (
    <div
      className={`${css.modal} ${activeCartModal ? css.active : ""}`}
      onClick={() => setActiveCartModal(false)}
    >
      <div
        className={`${css.modal__content} ${activeCartModal ? css.active : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={css.cartWrapper}>
          <div className={css.titleWrapper}>
            <h3 className={css.cartTitle}>Кошик</h3>
            {itemsInCart.length > 0 && (
              <p className={css.quantityText}>{itemsInCart.length} товара</p>
            )}
          </div>
          {cartIsLoading ? (
            <div>Loading...</div>
          ) : itemsInCart.length ? (
            <ul className={css.cartList}>
              {itemsInCart.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </ul>
          ) : (
            <div className={css.emptyWrapper}>
              <svg className={css.iconEmptyCart}>
                <use href={icons + "#empty-cart"}></use>
              </svg>
              <p className={css.emptyText}>Ваш кошик порожній</p>
            </div>
          )}

          {itemsInCart.length ? (
            <div>
              <TotalPrice itemsInCart={itemsInCart} />
              <Link
                className={`${css.cartButton} ${css.activeButton}`}
                to="/order"
                onClick={() => setActiveCartModal(false)}
                type="button"
                state={location.pathname}
              >
                Оформити замовлення
              </Link>
            </div>
          ) : (
            <button className={`${css.cartButton} ${css.emptyButton}`}>
              Продовжити покупки
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

CartModal.propTypes = {
  activeCartModal: PropTypes.bool,
  setActiveCartModal: PropTypes.func,
};

export default CartModal;
