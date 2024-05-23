import { Link, useLocation } from "react-router-dom";
import Button from "../../components/Button/Button";
import CartItem from "../../components/CartItem/CartItem";
import css from "./OrderPage.module.scss";

import icons from "src/images/icons.svg";
import { useSelector } from "react-redux";
import { selectItemsInCart } from "../../redux/cart/cartSelectors";

const OrderPage = () => {
  const { state } = useLocation();

  const itemsInCart = useSelector(selectItemsInCart);

  return (
    <section className={css.orderSection}>
      <div className={`container ${css.orderContainer} `}>
        <div className={css.formWrapper}>
          <div className={css.titleWrapper}>
            <Link to={state || "/"}>
              <svg className={css.iconBack}>
                <use href={icons + "#icon-down"}></use>
              </svg>
            </Link>
            <h2 className={css.orderTitle}>Оформлення замовлення</h2>
          </div>
          <form>
            <h3 className={css.orderSubTitle}>Контактні дані</h3>
            <ul className={css.contactInfoList}>
              <li>
                <label className={css.contactInfoLabel}>
                  Ім’я*
                  <input
                    type="text"
                    placeholder="Введіть ім’я"
                    className={css.contactInfoInput}
                  />
                </label>
              </li>
              <li>
                <label className={css.contactInfoLabel}>
                  Прізвище*
                  <input
                    type="text"
                    placeholder="Введіть номер або email"
                    className={css.contactInfoInput}
                  />
                </label>
              </li>
              <li>
                <label className={css.contactInfoLabel}>
                  Номер телефону*
                  <input
                    type="text"
                    placeholder="Введіть номер"
                    className={css.contactInfoInput}
                  />
                </label>
              </li>
              <li>
                <label className={css.contactInfoLabel}>
                  Електронна пошта
                  <input
                    type="text"
                    placeholder="Введіть email"
                    className={css.contactInfoInput}
                  />
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
              <CartItem key={item.id} item={item} isOrderPage={true} />
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
