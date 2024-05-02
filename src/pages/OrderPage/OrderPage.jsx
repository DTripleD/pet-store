import Button from "../../components/Button/Button";
import css from "./OrderPage.module.scss";

const OrderPage = () => {
  return (
    <section className={css.orderSection}>
      <div className="container">
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
    </section>
  );
};

export default OrderPage;
