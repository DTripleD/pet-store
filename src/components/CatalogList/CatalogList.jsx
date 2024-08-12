import css from "./CatalogList.module.scss";
import CatalogItem from "components/CatalogItem/CatalogItem";

import PropTypes from "prop-types";
import SortBy from "modules/SortBy/SortBy";
import { useState } from "react";
import icons from "src/images/icons.svg";
import FilterBurger from "../../modules/FilterBurger/FilterBurger";

const CatalogList = ({ products, value, setValue, animalId, productsId }) => {
  const [filtersIsOpen, setFiltersIsOpen] = useState(false);

  return (
    <div className={css.catologListWrapper}>
      <h2 className={css.catalogTitle}>Вологий корм</h2>
      <div className={css.filterMob}>
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
        <SortBy />
      </div>
      <div className={css.filterParams}>
      <button className={css.cleanButton}>Очистити</button>
    </div>

      <div className={css.middleWrapper}>
        <h2 className={css.foundTitle}>Знайдено {products.length} товарів</h2>
        <div className={css.sortByDesk}>
          <SortBy />
        </div>
      </div>

      <ul className={css.catalogList}>
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
  animalId: PropTypes.string,
  setValue: PropTypes.func,
  value: PropTypes.array,
  productsId: PropTypes.string,
};
