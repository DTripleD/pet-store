import css from "./CatalogList.module.scss";
import CatalogItem from "components/CatalogItem/CatalogItem";

import PropTypes from "prop-types";
import SortBy from "modules/SortBy/SortBy";
import { useEffect, useState } from "react";
import MediaQuery from "react-responsive";
import icons from "src/images/icons.svg";

import FilterBurger from "../../modules/FilterBurger/FilterBurger";

const CatalogList = ({ products, value, setValue, animalId, productsId }) => {
  const [filtersIsOpen, setFiltersIsOpen] = useState(false);

  return (
    <div className={css.catolog__list__wrapper}>
      <div>
        <MediaQuery maxWidth={1919}>
          <button
            className={css.filterButton}
            type="button"
            onClick={() => setFiltersIsOpen((prev) => !prev)}
          >
            <svg className={css.filterIcon}>
              <use href={icons + "#filter"}></use>
            </svg>
            <p>Фільтри</p>
          </button>
        </MediaQuery>
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
      <FilterBurger
        filtersIsOpen={filtersIsOpen}
        setFiltersIsOpen={setFiltersIsOpen}
        value={value}
        setValue={setValue}
        animalId={animalId}
        productsId={productsId}
      />
    </div>
  );
};

export default CatalogList;

CatalogList.propTypes = {
  products: PropTypes.array,
};
