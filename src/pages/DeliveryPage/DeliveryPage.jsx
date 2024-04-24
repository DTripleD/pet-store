import css from "./DeliveryPage.module.scss";

import SortButton from "components/SortButton/SortButton";

import { useState } from "react";

import { useLocation } from "react-router-dom";

const DeliveryPage = () => {
  const [selectedButton, setSelectedButton] = useState("Всі");

  const { pathname } = useLocation();

  console.log(pathname);
  return (
    <div>
      <h2>Мої замовлення</h2>
      <ul className={css.buttonsList}>
        <li>
          <SortButton
            isActive={selectedButton === "Всі"}
            text={"Всі"}
            setSelectedButton={setSelectedButton}
          />
        </li>
        <li>
          <SortButton
            isActive={selectedButton === "Поточні"}
            text={"Поточні"}
            setSelectedButton={setSelectedButton}
          />
        </li>
        <li>
          <SortButton
            isActive={selectedButton === "Виконані"}
            text={"Виконані"}
            setSelectedButton={setSelectedButton}
          />
        </li>
        <li>
          <SortButton
            isActive={selectedButton === "Скасовані"}
            text={"Скасовані"}
            setSelectedButton={setSelectedButton}
          />
        </li>
      </ul>
      <p>Замовлень ще немає</p>
    </div>
  );
};

export default DeliveryPage;
