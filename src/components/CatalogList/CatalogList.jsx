import css from "./CatalogList.module.scss";
import CatalogItem from "components/CatalogItem/CatalogItem";

import PropTypes from "prop-types";
import SortBy from "modules/SortBy/SortBy";

const CatalogList = ({ products }) => {
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
  products: PropTypes.array,
};
