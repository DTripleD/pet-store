import { Link, useLocation } from "react-router-dom";
import Button from "../../components/Button/Button";
import CartItem from "../../components/CartItem/CartItem";
import css from "./OrderPage.module.scss";
import icons from "src/images/icons.svg";
import { useDispatch, useSelector } from "react-redux";
import { selectItemsInCart } from "../../redux/cart/cartSelectors";
import DropdownLocation from "./components/DropdownLocation/DropdownLocation";
import DropdownDelivery from "./components/DropdownDelivery/DropdownDelivery";
import Payment from "../../components/Payment/Payment";
import { totalPrice } from "../../helpers/totalPrice";
import { useEffect, useState } from "react";
import getItemQuantityText from "../../services/getItemQuantityText";
import OrderForm from "./components/OrderForm/OrderForm";
import { selectBranches } from "../../redux/post/postSelectiors";
import fetchCities from "../../redux/cities/citiesOperations";
import fetchRegions from "../../redux/regions/regionsOperations";
import { selectRegions } from "../../redux/regions/regionsSelectors";
import { selectCities } from "../../redux/cities/citiesSelectors";
import fetchBranches from "../../redux/post/postOperations";
import { getWarehouseTypes } from "../../services/getWarehouseTypes";

const OrderPage = () => {
  const dispatch = useDispatch();
  const regions = useSelector(selectRegions);
  const cities = useSelector(selectCities);
  const branches = useSelector(selectBranches);
  const itemsInCart = useSelector(selectItemsInCart);
  const { state } = useLocation();
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [deliveryMethods, setDeliveryMethods] = useState([]);
  const [selectedDeliveryMethod, setSelectedDeliveryMethod] = useState(null);

  const price = totalPrice(itemsInCart);
  const finalPrice = price + 70;

  useEffect(() => {
    const fetchMethods = async () => {
      try {
        const result = await getWarehouseTypes();
        setDeliveryMethods(result);
      } catch (err) {
        console.log(err);
      }
    };

    fetchMethods();
  }, []);

  useEffect(() => {
    dispatch(fetchRegions());
  }, [dispatch]);

  useEffect(() => {
    if (selectedRegion) {
      dispatch(fetchCities(selectedRegion.Ref));
    }
  }, [dispatch, selectedRegion]);

  useEffect(() => {
    if (selectedCity && selectedDeliveryMethod) {
      dispatch(
        fetchBranches({
          settlement_ref: selectedCity.Ref,
          TypeOfWarehouse: selectedDeliveryMethod.Ref,
        })
      );
    }
  }, [dispatch, selectedCity, selectedDeliveryMethod]);

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
            <OrderForm />
            <DropdownLocation
              regions={regions}
              cities={cities}
              onRegionSelect={setSelectedRegion}
              onCitySelect={setSelectedCity}
            />
            <DropdownDelivery
              deliveryMethods={deliveryMethods}
              branches={branches}
              onMethodSelect={setSelectedDeliveryMethod}
            />
            <Payment />

            <label className={css.checkbox}>
              <input type="checkbox" className={css.checkboxInput} />
              Не телефонувати мені
            </label>
            <Button type="submit" text="Замовлення підтверджую" />
          </form>
        </div>

        <div className={css.orderInfoWrapper}>
          <div className={css.orderInfoCart}>
            <p className={css.cartTitle}>Кошик</p>
            <Link to={"/user/cart"} className={css.goToCart}>
              Редагувати
            </Link>
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
                {getItemQuantityText(itemsInCart.length)}
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
