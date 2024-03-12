import { useState } from "react";
import data from "../../data/data";
import SliderItem from "../SliderItem/SliderItem";

import icons from "../../images/icons.svg";

const CatalogList = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="catolog__list__wrapper">
      <div>
        <button className="clean__button">Очистити</button>
      </div>

      <div className="middle__wrapper">
        <h2 className="found__title">Знайдено 104 товарів</h2>
        <div>
          <div className="sort__text__wrapper">
            <p className="sort__text">Сортувати</p>
            <div
              className="select__header"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              <p className="sort__text sort_by__text">За рейтингом</p>
              <svg
                className={`icon__down__sort ${
                  isOpen ? "icon__sort__open" : ""
                }`}
              >
                <use href={icons + "#icon-down"}></use>
              </svg>
            </div>
          </div>

          {isOpen && (
            <ul className="dropdown">
              <li>За тим</li>
              <li>За цим</li>
              <li>За чимось</li>
            </ul>
          )}
        </div>
      </div>

      <ul className="catalog__list">
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
