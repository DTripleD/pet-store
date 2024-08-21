import PropTypes from "prop-types";
import icons from "src/images/icons.svg";

import css from "./SliderItem.module.scss";
import WeightButtonsList from "components/WeightButtons/WeightButtonsList/WeightButtonsList";
import { Link } from "react-router-dom";

const SliderItem = ({ item }) => {
  const { name, description, discount, images } = item;

  return (
    <>
      <Link to={item.id} className={css.item}>
          <div className={css.swiperImageWrapper}>
            <img className={css.swiperImage} src={images} alt={item.title} />
            {discount ? (
              <div className={css.swiperDisc}>{`${discount}%`}</div>
            ) : (
              <div></div>
            )}
            <button className={css.favoriteButton}>
              <svg className={css.heartIcon}>
                <use href={icons + "#heart"}></use>
              </svg>
            </button>
          </div>
          <WeightButtonsList />

          <div className={css.swiperDescrWrapper}>
            <h3 className={css.swiperTitle}>{name}</h3>
              <p className={css.swiperDescription}>{description}</p>

            <div className={css.mobileBuyWrapper}>
              <div className={css.swiperPriceWrapper}>
                <p className={css.swiperNewPrice}>{item.discount_price} грн.</p>
                <p className={css.swiperOldPrice}>{item.price} грн.</p>
              </div>
                <svg className={css.cartBuyIcon}>
                  <use href={icons + "#cart"}></use>
                </svg>
            </div>
          </div>
      </Link>
    </>
  );
};

export default SliderItem;

SliderItem.propTypes = {
  item: PropTypes.object,
};
