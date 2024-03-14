import { useState } from "react";
import data from "../../data/data";
import SliderItem from "../SliderItem/SliderItem";

import icons from "../../images/icons.svg";

import css from "./CatalogList.module.scss";

const CatalogList = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={css.catolog__list__wrapper}>
      <div>
        <button className={css.clean__button}>Очистити</button>
      </div>

      <div className={css.middle__wrapper}>
        <h2 className={css.found__title}>Знайдено 104 товарів</h2>
        <div>
          <div className={css.sort__text__wrapper}>
            <p className={css.sort__text}>Сортувати</p>
            <div
              className={css.select__header}
              onClick={() => setIsOpen((prev) => !prev)}
            >
              <p className={`${css.sort__text} ${css.sort_by__text}`}>
                За рейтингом
              </p>
              <svg
                className={`${css.icon__down__sort} ${
                  isOpen ? css.icon__sort__open : ""
                }`}
              >
                <use href={icons + "#icon-down"}></use>
              </svg>
            </div>
          </div>

          {isOpen && (
            <ul className={css.dropdown}>
              <li>За тим</li>
              <li>За цим</li>
              <li>За чимось</li>
            </ul>
          )}
        </div>
      </div>

      <ul className={css.catalog__list}>
        {data.map((item) => (
          <li key={item.id}>
            <SliderItem item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CatalogList;
