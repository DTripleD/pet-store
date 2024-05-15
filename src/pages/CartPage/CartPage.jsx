import { Link, useLocation } from "react-router-dom";
// import { itemsInCart } from "../../data/itemsInCart";
import css from "./CartPage.module.scss";

import CartItem from "components/CartItem/CartItem";
import TotalPrice from "../../components/TotalPrice/TotalPrice";
import { totalPrice } from "../../helpers/totalPrice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCart } from "../../redux/cart/cartOperations";
import { getCookies } from "../../shared/cookies/cookies";
import { selectItemsInCart } from "../../redux/cart/cartSelectors";

const CartPage = () => {
  const location = useLocation();

  const dispatch = useDispatch();

  useEffect(() => {
    const cookies = getCookies();

    dispatch(getCart(cookies.cartTokenPetStore));
  }, [dispatch]);

  const itemsInCart = useSelector(selectItemsInCart);

  return (
    <section className={css.cartSection}>
      <h2 className={css.cartTitle}>Кошик</h2>
      <div className={css.productsWrapper}>
        <ul className={css.cartList}>
          {itemsInCart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </ul>
        <div>
          <TotalPrice totalPrice={totalPrice(itemsInCart)} />
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
