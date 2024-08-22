import { Link, useLocation } from "react-router-dom";
import placeholder from "src/images/placeholder.jpg";
import css from "./CatalogItem.module.scss";
import WeightButtonsList from "components/WeightButtons/WeightButtonsList/WeightButtonsList";
import icons from "src/images/icons.svg";
import PropTypes from "prop-types";

const CatalogItem = ({ item }) => {
  const location = useLocation();

  return (
    <li className={css.productCard}>
      <Link state={{ from: location }} to={`${item.id}`} className={css.productLink}>
        <div className={css.productImageWrapper}>
          <img
            src={
              item.images.length > 0 && item.images.startsWith("http")
                ? item.images
                : placeholder
            }
            alt={item.name}
            className={css.img}
          />
          <button className={css.favoriteButton}>
            <svg className={css.heartIcon}>
              <use href={icons + "#heart"}></use>
            </svg>
          </button>
          <div className={css.discount}>-{item.discount}%</div>
        </div>
        <WeightButtonsList />
        <div className={css.textWrapper}>
          <div className={css.swiperDescrWrapper}>
            <h3 className={css.swiperTitle}>{item.name}</h3>
              <p className={css.swipperDescription}>{item.description}</p>

            <div className={css.mobileBuyWrapper}>
              <div className={css.swiperPriceWrapper}>
                <p className={css.swiperNewPrice}>
                  {item.discount_price} грн.
                </p>
                <p className={css.swiperOldPrice}>{item.price} грн.</p>
              </div>
              <svg className={css.cartBuyIcon}>
                <use href={icons + "#cart"}></use>
              </svg>
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
