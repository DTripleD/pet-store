import css from "./WeightButtonsItem.module.scss";
import PropTypes from "prop-types";

const WeightButtonsItem = ({ text, isAble }) => {
  return (
    <li
      className={`${css.swiper__weight_item} ${
        isAble ? css.swiper__weight_item__able : ""
      }`}
    >
      <p className={css.swiper__weight_text}>{text}</p>
    </li>
  );
};

export default WeightButtonsItem;

WeightButtonsItem.propTypes = {
  text: PropTypes.string,
  isAble: PropTypes.bool,
};
