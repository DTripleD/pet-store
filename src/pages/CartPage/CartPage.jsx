import { Link, useLocation } from "react-router-dom";
import css from "./CartPage.module.scss";
import icons from "src/images/icons.svg";

import CartItem from "components/CartItem/CartItem";
import TotalPrice from "../../components/TotalPrice/TotalPrice";
import { useSelector } from "react-redux";
import {
  selectCartIsLoading,
  selectItemsInCart,
} from "../../redux/cart/cartSelectors";
import ButtonBack from "../../components/ButtonBack/ButtonBack";

const CartPage = () => {
  const location = useLocation();
  const itemsInCart = useSelector(selectItemsInCart);
  const cartIsLoading = useSelector(selectCartIsLoading);

  return (
    <section className={css.cartSection}>
      <div className={css.wrapper}>
        <div className={css.btnBack}>
          <ButtonBack
            text={"Кошик"}
            backTo={"main"}
            // setOpenedBurger={setOpenedBurger}
          />
        </div>
        <h2 className={css.cartTitle}>Кошик</h2>
        {cartIsLoading ? (
          <div className={css.loading}>Loading...</div>
        ) : itemsInCart && !itemsInCart.length ? (
          <div className={css.productsWrapper}>
            <ul className={css.cartList}>
              {itemsInCart.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </ul>
            <div className={css.totalSection}>
              <TotalPrice itemsInCart={itemsInCart} />
              <Link
                to="/order"
                className={css.orderButton}
                state={{ from: location.pathname }}
              >
                Оформити замовлення
              </Link>
              <Link
                to="/"
                className={css.continueLink}
              >
                Продовжити покупки
              </Link>
            </div>
          </div>
        ) : (
          <div className={css.emptyCart}>
            <div className={css.emptyCartBox}>
              <svg className={css.iconCart}>
                <use href={icons + "#empty-cart"}></use>
              </svg>
              <p className={css.emptyCartText}>Ваш кошик порожній</p>
            </div>
            <Link
                to="/"
                className={css.emptyCartButton}
              >
                Продовжити покупки
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default CartPage;
