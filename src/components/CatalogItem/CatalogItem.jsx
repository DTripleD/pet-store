import { Link } from "react-router-dom";

import css from "./CatalogItem.module.scss";
import WeightButtonsList from "../WeightButtons/WeightButtonsList/WeightButtonsList";
import icons from "../../images/icons.svg";
import PropTypes from "prop-types";

const CatalogItem = ({ item }) => {
  return (
    <li className={css.productCard}>
      <Link
        to={`${item.id}`}
        state={{ from: "dd", to: "dd" }}
        className={css.productLink}
      >
        <div className={css.productImageWrapper}>
          <img src={item.images[0]?.image} alt={item.name} />
          <button className={css.favorite__button}>
            <svg className={css.heart__icon}>
              <use href={icons + "#heart"}></use>
            </svg>
          </button>
          <div className={css.discount}>-{item.discount}%</div>
        </div>
        <WeightButtonsList />
        <div>
          <div className={css.swiper__descr_wrapper}>
            <h3 className={css.swiper__title}>{item.name}</h3>
            <p className={css.swipper__description}>{item.description}</p>
            <div className={css.swiper__price_wrapper}>
              <p className={css.swiper__new_price}>
                {item.discount_price} грн.
              </p>
              <p className={css.swiper__old_price}>{item.price} грн.</p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default CatalogItem;

CatalogItem.propTypes = {
  item: PropTypes.object,
};
