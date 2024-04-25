import { itemsInCart } from "../../data/itemsInCart";
import css from "./CartPage.module.scss";

import CartItem from "components/CartItem/CartItem";

const CartPage = () => {
  const totalPrice = itemsInCart.reduce((acc, currentItem) => {
    acc += currentItem.current_price;
    return acc;
  }, 0);
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
          <div className={css.amountWrapper}>
            <p className={css.amountText}>Сума замовлення:</p>
            <p className={css.amountPrice}>{totalPrice} грн</p>
          </div>
          <button type="button" className={css.orderButton}>
            Оформити замовлення
          </button>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
