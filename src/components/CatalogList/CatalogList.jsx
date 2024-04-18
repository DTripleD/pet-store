import { useState, useEffect } from "react";
import data from "../../data/data";

import icons from "../../images/icons.svg";

import css from "./CatalogList.module.scss";
import CatalogItem from "../CatalogItem/CatalogItem";
import { useLocation } from "react-router-dom";

const CatalogList = ({ productsId, animalId }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [products, setProducts] = useState([]);

  const getData = (productsId, animalId) => {
    return fetch(
      `http://127.0.0.1:8000/api/v1/products/?product_category=${productsId}&animal_category=${animalId}`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data.results));
  };

  useEffect(() => {
    getData(productsId, animalId);
  }, [animalId, productsId]);

  return (
    <div className={css.catolog__list__wrapper}>
      <div>
        <button className={css.clean__button}>Очистити</button>
      </div>

      <div className={css.middle__wrapper}>
        <h2 className={css.found__title}>Знайдено {products.length} товарів</h2>
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
        {products.map((item) => (
          <CatalogItem item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
};

export default CatalogList;
