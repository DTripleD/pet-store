import { Link } from "react-router-dom";

import placeholder from "src/images/placeholder.jpg";

import css from "./CatalogItem.module.scss";
import WeightButtonsList from "components/WeightButtons/WeightButtonsList/WeightButtonsList";
import icons from "src/images/icons.svg";
import PropTypes from "prop-types";
import MediaQuery from "react-responsive";

const CatalogItem = ({ item }) => {
  return (
    <li className={css.productCard}>
      <Link to={`${item.id}`} className={css.productLink}>
        <div className={css.productImageWrapper}>
          <img
            src={
              item.images.length > 0 && item.images.startsWith("http")
                ? item.images
                : placeholder
            }
            alt={item.name}
          />
          <button className={css.favorite__button}>
            <svg className={css.heart__icon}>
              <use href={icons + "#heart"}></use>
            </svg>
          </button>
          <div className={css.discount}>-{item.discount}%</div>
        </div>
        <WeightButtonsList />
        <div className={css.textWrapper}>
          <div className={css.swiper__descr_wrapper}>
            <h3 className={css.swiper__title}>{item.name}</h3>
            <MediaQuery minWidth={1920}>
              <p className={css.swipper__description}>{item.description}</p>
            </MediaQuery>

            <div className={css.mobileBuyWrapper}>
              <div className={css.swiper__price_wrapper}>
                <p className={css.swiper__new_price}>
                  {item.discount_price} грн.
                </p>
                <p className={css.swiper__old_price}>{item.price} грн.</p>
              </div>
              <MediaQuery maxWidth={1919}>
                <svg className={css.cartBuyIcon}>
                  <use href={icons + "#cart"}></use>
                </svg>
              </MediaQuery>
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
