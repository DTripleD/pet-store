import css from "./Modals.module.scss";

import icons from "src/images/icons.svg";

import PropTypes from "prop-types";

const CartModal = ({ activeCartModal, setActiveCartModal }) => {
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
          <h3 className={css.cartTitle}>Кошик</h3>
          <div className={css.emptyWrapper}>
            <svg className={css.iconEmptyCart}>
              <use href={icons + "#empty-cart"}></use>
            </svg>
            <p className={css.emptyText}>Ваш кошик порожній</p>
          </div>
          <button className={css.emptyButton}>Продовжити покупки</button>
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
