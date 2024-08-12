import css from "./DeliveryPage.module.scss";
import SortButton from "components/SortButton/SortButton";
import { useState } from "react";
import BackButtonPage from "../../components/BackButtonPage/BackButtonPage";
// import { useLocation } from "react-router-dom";

const DeliveryPage = () => {
  const [selectedButton, setSelectedButton] = useState("Всі");
  // const { pathname } = useLocation();

  return (
    <section className={css.deliveryPage}>
      <div className={css.wrapper}>
        <div className={css.btnBack}>
          <BackButtonPage text={"Мої замовлення"} />
        </div>

          <div className="container">
          <h2 className={css.title}>Мої замовлення</h2>
          <ul className={css.buttonsList}>
            {['Всі', 'Поточні', 'Виконані', 'Скасовані'].map((status, index) => (
              <li className={css.item} key={index}>
                <SortButton
                  isActive={selectedButton === status}
                  text={status}
                  setSelectedButton={setSelectedButton}
                />
              </li>
            ))}
          </ul>
          <p className={css.deliveryText}>Замовлень ще немає</p>
        </div>
      </div>
    </section>
  );
};

export default DeliveryPage;
