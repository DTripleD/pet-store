import css from "./CatalogList.module.scss";
import CatalogItem from "components/CatalogItem/CatalogItem";

import PropTypes from "prop-types";
import SortBy from "modules/SortBy/SortBy";
import icons from "src/images/icons.svg";
import getItemQuantityText from "../../services/getItemQuantityText";

const CatalogList = ({ products, openFilter }) => {
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
        <button className={css.cleanButton}>Очистити</button>
        <div className={css.filterLabel}>
          <p className={css.labelText}>Знижки</p>
          <svg className={css.iconClose}>
            <use href={icons + "#cross"}></use>
          </svg>
        </div>
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
};

export default CatalogList;
