import { Link, useLocation } from "react-router-dom";
import Button from "../../components/Button/Button";
import CartItem from "../../components/CartItem/CartItem";
import css from "./OrderPage.module.scss";
import icons from "src/images/icons.svg";
import { useSelector } from "react-redux";
import { selectItemsInCart } from "../../redux/cart/cartSelectors";
import DropdownLocation from "../../components/DropdownLocation/DropdownLocation";
import DropdownDelivery from "../../components/DropdownDelivery/DropdownDelivery";
// import { getCity } from "../../services/getCity";

const OrderPage = () => {
  const { state } = useLocation();
  const itemsInCart = useSelector(selectItemsInCart);

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

            <div className={css.payment}>
              <h3 className={css.paymentTitle}>Спосіб оплати</h3>
              <label className={css.paymentLabel} htmlFor="paymentOnline">
                <input 
                  className={css.paymentRadio} 
                  type="radio" 
                  id="paymentOnline"
                  name="paymentMethod"
                  />
                Карткою Online
              </label>
              <label className={css.paymentLabel} htmlFor="paymentCash">
                <input 
                  className={css.paymentRadio} 
                  type="radio" 
                  id="paymentCash"
                  name="paymentMethod"
                  />
                Наложений платіж
              </label>
            </div>

            <label className={css.checkbox} >
              <input type="checkbox" className={css.checkboxInput} />
              Не телефонувати мені
            </label>
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
