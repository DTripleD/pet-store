import PropTypes from "prop-types";
import icons from "src/images/icons.svg";

import css from "./SliderItemNew.module.scss";
import WeightButtonsList from "components/WeightButtons/WeightButtonsList/WeightButtonsList";
import { Link } from "react-router-dom";

const SliderItemNew = ({ item }) => {
  const { name, description, images, price } = item;

  return (
    <>
      <Link to={item.id} className={css.item1}>
          <div className={css.swiperImageWrapper}>
            <img className={css.swiperImage} src={images} alt={item.title} />
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
                <p className={css.swiperNewPrice}>{price} грн.</p>
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

export default SliderItemNew;

SliderItemNew.propTypes = {
  item: PropTypes.object,
};
