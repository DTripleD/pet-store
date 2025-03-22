import css from "./CatalogList.module.scss";
import CatalogItem from "components/CatalogItem/CatalogItem";

import PropTypes from "prop-types";
import SortBy from "modules/SortBy/SortBy";
import icons from "src/images/icons.svg";
import getItemQuantityText from "../../services/getItemQuantityText";
import FilterItem from "./components/FilterItem/FilterItem";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const CatalogList = ({
  products,
  openFilter,
  filterList,
  handleClearFilters,
}) => {
  const [isDisable, setIsDisable] = useState(true);

  const [searchParams] = useSearchParams();

  // function deleteSearchParam() {}

  useEffect(() => {
    if (searchParams.size) {
      setIsDisable(false);
    } else {
      setIsDisable(true);
    }
  }, [searchParams]);

  return (
    <div className={css.catologListWrapper}>
      <div className={css.filterMob}>
        <button className={css.filterButton} type="button" onClick={openFilter}>
          <svg className={css.filterIcon}>
            <use href={icons + "#filter"}></use>
          </svg>
          <p>Фільтри</p>
        </button>
        <SortBy />
      </div>
      <div className={css.filterParams}>
        <button
          className={css.cleanButton}
          disabled={isDisable}
          onClick={handleClearFilters}
        >
          Очистити
        </button>

        {filterList.map(
          (filterValue) =>
            filterValue.value && (
              <FilterItem
                key={filterValue.key}
                id={filterValue.key}
                filterValue={filterValue.title}
                title={filterValue.title}
              />
            )
        )}
      </div>

      <div className={css.middleWrapper}>
        <h2 className={css.foundTitle}>
          {products.length
            ? `Знайдено ${getItemQuantityText(products.length)}`
            : "Нічого не знайдено"}
        </h2>
        <div className={css.sortByDesk}>
          <SortBy />
        </div>
      </div>

      <ul className={css.catalogList}>
        {products.map((item) => (
          <CatalogItem item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
};

CatalogList.propTypes = {
  products: PropTypes.array,
  openFilter: PropTypes.func,
  filterList: PropTypes.array,
  handleClearFilters: PropTypes.func,
};

export default CatalogList;
