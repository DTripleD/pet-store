import PropTypes from "prop-types";
import icons from "src/images/icons.svg";

import css from "./SliderItem.module.scss";
import WeightButtonsList from "components/WeightButtons/WeightButtonsList/WeightButtonsList";
import { Link } from "react-router-dom";

const SliderItem = ({ item }) => {
  return (
    <li className={css.item}>
      <Link to={item.id}>
        <div className={css.swiper__item}>
          <div className={css.swiper__image_wrapper}>
            <img src={item.img} alt={item.title} />
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
            <div className={css.swiper__price_wrapper}>
              <p className={css.swiper__new_price}>{item.new_price} грн.</p>
              <p className={css.swiper__old_price}>{item.old_price} грн.</p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default SliderItem;

SliderItem.propTypes = {
  item: PropTypes.object,
};
