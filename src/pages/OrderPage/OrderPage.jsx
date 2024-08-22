import { Link, useLocation } from "react-router-dom";
import Button from "../../components/Button/Button";
import CartItem from "../../components/CartItem/CartItem";
import css from "./OrderPage.module.scss";
import icons from "src/images/icons.svg";
import { useSelector } from "react-redux";
import { selectItemsInCart } from "../../redux/cart/cartSelectors";
import DropdownLocation from "../../components/DropdownLocation/DropdownLocation";
import DropdownDelivery from "../../components/DropdownDelivery/DropdownDelivery";
import Payment from "../../components/Payment/Payment";
import { totalPrice } from "../../helpers/totalPrice";
// import { getCity } from "../../services/getCity";
// import { useEffect, useState } from "react";

const OrderPage = () => {
  const { state } = useLocation();
  const itemsInCart = useSelector(selectItemsInCart);
  const price = totalPrice(itemsInCart);

  const finalPrice = price + 70;

  // useEffect(() => {
  //   const fetchCities = async () => {
  //     try {
  //       const response = await getCity();
  //       console.log(response)
  //       setCities(response);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
   
  //   fetchCities();
  // }, []);

  return (
    <section className={css.orderSection}>
      <div className={css.orderContainer}>
        <div className={css.formWrapper}>
          <div className={css.titleWrapper}>
            <Link to={state || "/"} className={css.linkBack}>
              <svg className={css.iconBack}>
                <use href={icons + "#icon-down"}></use>
              </svg>
            </Link>
            <h2 className={css.orderTitle}>Оформлення замовлення</h2>
          </div>
          <h3 className={css.orderSubTitle}>Контактні дані</h3>

          <form className={css.form}>
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
            <DropdownLocation />
            <DropdownDelivery />
            <Payment />

            <label className={css.checkbox} >
              <input type="checkbox" className={css.checkboxInput} />
              Не телефонувати мені
            </label>
            <Button type="submit" text="Замовлення підтверджую" />
          </form>
        </div>

        <div className={css.orderInfoWrapper}>
          <div className={css.orderInfoCart}>
            <p className={css.cartTitle}>Кошик</p>
            <Link to={"/user/cart"} className={css.goToCart}>Редагувати</Link>
          </div>

          <ul>
            {itemsInCart.map((item) => (
              <CartItem key={item.id} item={item} isOrderPage={true} />
            ))}
          </ul>

          <ul className={css.priceList}>
            <li className={css.priceItem}>
              <p className={css.totalPrice}>До сплати</p>
              <p className={`${css.totalPrice} ${css.totalPriceNumber}`}>
                {finalPrice} грн
              </p>
            </li>
            <li className={css.priceItem}>
              <p className={css.partPrice}>
                {itemsInCart.length > 0 ? (
                  itemsInCart.length > 4
                    ? `${itemsInCart.length} товарів`
                    : itemsInCart.length === 1
                    ? `${itemsInCart.length} товар`
                    : `${itemsInCart.length} товари`
                ) : (
                  '0 товарів'
                )}
              </p>
              <p className={css.partPrice}>{price} грн</p>
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
