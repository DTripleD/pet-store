import PropTypes from "prop-types";
import icons from "src/images/icons.svg";

import css from "./SliderItem.module.scss";
import WeightButtonsList from "components/WeightButtons/WeightButtonsList/WeightButtonsList";
import { Link } from "react-router-dom";

const SliderItem = ({ item }) => {
  const { old_price, new_price} = item;
  const disc = ((new_price - old_price) / old_price) * 100;

  return (
    <>
      <Link to={item.id} className={css.item}>
          <div className={css.swiper__image_wrapper}>
            <img className={css.swiper__image} src={item.img} alt={item.title} />
            <div className={css.swiper_disc}>{`${disc}%`}</div>
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
                <p className={css.swiper__new_price}>{item.new_price} грн.</p>
                <p className={css.swiper__old_price}>{item.old_price} грн.</p>
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
