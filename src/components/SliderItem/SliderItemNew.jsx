import PropTypes from "prop-types";
import icons from "src/images/icons.svg";

import css from "./SliderItemNew.module.scss";
import WeightButtonsList from "components/WeightButtons/WeightButtonsList/WeightButtonsList";
import { Link } from "react-router-dom";

const SliderItemNew = ({ item }) => {
  return (
    <>
      <Link to={item.id} className={css.item1}>
          <div className={css.swiper__image_wrapper}>
            <img className={css.swiper__image} src={item.img} alt={item.title} />
            <button className={css.favorite__button}>
              <svg className={css.heart__icon}>
                <use href={icons + "#heart"}></use>
              </svg>
            </button>
          </div>
          <WeightButtonsList />

          <div className={css.swiper__descr_wrapper}>
            <h3 className={css.swiper__title}>{item.title}</h3>
              <p className={css.swipper__description}>{item.description}</p>

            <div className={css.mobileBuyWrapper}>
              <div className={css.swiper__price_wrapper}>
                <p className={css.swiper__new_price}>{item.old_price} грн.</p>
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
