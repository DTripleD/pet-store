import { useState, useEffect } from "react";

import css from "./CatalogList.module.scss";
import CatalogItem from "../CatalogItem/CatalogItem";

import PropTypes from "prop-types";
import SortBy from "../../modules/SortBy/SortBy";

const CatalogList = ({ productsId, animalId }) => {
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
        <SortBy />
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

CatalogList.propTypes = {
  productsId: PropTypes.number,
  animalId: PropTypes.number,
};
