import Button from "../../components/Button/Button";
import CartItem from "../../components/CartItem/CartItem";
import { itemsInCart } from "../../data/itemsInCart";
import css from "./OrderPage.module.scss";

const OrderPage = () => {
  return (
    <section className={css.orderSection}>
      <div className={`container ${css.orderContainer} `}>
        <div className={css.formWrapper}>
          <h2 className={css.orderTitle}>Оформлення замовлення</h2>
          <form>
            <h3 className={css.orderSubTitle}>Контактні дані</h3>
            <ul className={css.contactInfoList}>
              <li>
                <label className={css.contactInfoLabel}>
                  Ім’я*
                  <input type="text" className={css.contactInfoInput} />
                </label>
              </li>
              <li>
                <label className={css.contactInfoLabel}>
                  Прізвище*
                  <input type="text" />
                </label>
              </li>
              <li>
                <label className={css.contactInfoLabel}>
                  Номер телефону*
                  <input type="text" />
                </label>
              </li>
              <li>
                <label className={css.contactInfoLabel}>
                  Електронна пошта
                  <input type="text" />
                </label>
              </li>
            </ul>
            <label>
              <input type="checkbox" />
              Не телефонувати мені
            </label>
            <h3 className={css.orderSubTitle}>Доставка</h3>
            <Button type="submit" text="Замовлення підтверджую" />
          </form>
        </div>
        <div className={css.orderInfoWrapper}>
          <ul>
            {itemsInCart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </ul>
          <ul className={css.priceList}>
            <li className={css.priceItem}>
              <p className={css.totalPrice}>До сплати</p>
              <p className={`${css.totalPrice} ${css.totalPriceNumber}`}>
                970 грн
              </p>
            </li>
            <li className={css.priceItem}>
              <p className={css.partPrice}>2 товари</p>
              <p className={css.partPrice}>900 грн</p>
            </li>
            <li className={css.priceItem}>
              <p className={css.partPrice}>Доставка</p>
              <p className={css.partPrice}>70 грн</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default OrderPage;
