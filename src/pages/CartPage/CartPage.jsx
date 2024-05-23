import { Link, useLocation } from "react-router-dom";
import css from "./CartPage.module.scss";

import CartItem from "components/CartItem/CartItem";
import TotalPrice from "../../components/TotalPrice/TotalPrice";
import { useSelector } from "react-redux";
import {
  selectCartIsLoading,
  selectItemsInCart,
} from "../../redux/cart/cartSelectors";

const CartPage = () => {
  const location = useLocation();

  const itemsInCart = useSelector(selectItemsInCart);

  const cartIsLoading = useSelector(selectCartIsLoading);

  return (
    <section className={css.cartSection}>
      <h2 className={css.cartTitle}>Кошик</h2>
      <div className={css.productsWrapper}>
        {cartIsLoading ? (
          <div>Loading...</div>
        ) : (
          <ul className={css.cartList}>
            {itemsInCart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </ul>
        )}
        <div>
          <TotalPrice itemsInCart={itemsInCart} />
          <Link
            to="/order"
            type="button"
            className={css.orderButton}
            state={location.pathname}
          >
            Оформити замовлення
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
