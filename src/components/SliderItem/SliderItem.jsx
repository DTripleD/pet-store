import PropTypes from "prop-types";
import icons from "../../images/icons.svg";

import css from "./SliderItem.module.scss";

const SliderItem = ({ item }) => {
  return (
    <div className={css.swiper__item}>
      <div className={css.swiper__image_wrapper}>
        <img src={item.img} alt={item.title} />
        <button className={css.favorite__button}>
          <svg className={css.heart__icon}>
            <use href={icons + "#heart"}></use>
          </svg>
        </button>
      </div>
      <ul className={css.swiper__weight_list}>
        <li
          className={`${css.swiper__weight_item} ${css.swiper__weight_item__able}`}
        >
          <p className={css.swiper__weight_text}>3кг</p>
        </li>
        <li className={css.swiper__weight_item}>
          <p className={css.swiper__weight_text}>6кг</p>
        </li>
        <li className={css.swiper__weight_item}>
          <p className={css.swiper__weight_text}>12кг</p>
        </li>
      </ul>
      <div>
        <div className={css.swiper__descr_wrapper}>
          <h3 className={css.swiper__title}>{item.title}</h3>
          <p className={css.swipper__description}>{item.description}</p>
          <div className={css.swiper__price_wrapper}>
            <p className={css.swiper__new_price}>{item.new_price} грн.</p>
            <p className={css.swiper__old_price}>{item.old_price} грн.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderItem;

SliderItem.propTypes = {
  item: PropTypes.object,
};
