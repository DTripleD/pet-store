import PropTypes from "prop-types";
import icons from "src/images/icons.svg";
import css from "./SliderButtons.module.scss";

const SliderButtons = ({ swiperRef, isStartBtnActive, isEndBtnActive }) => {
  return (
    <div className={css.slider__buttons_wrapper}>
      <button
        onClick={() => swiperRef.current.slidePrev()}
        disabled={isStartBtnActive}
        className={css.slider__button}
      >
        <svg className={css.slider__icon}>
          <use href={icons + "#icon-left"}></use>
        </svg>
      </button>
      <button
        onClick={() => swiperRef.current.slideNext()}
        disabled={isEndBtnActive}
        className={css.slider__button}
      >
        <svg className={css.slider__icon}>
          <use href={icons + "#icon-right"}></use>
        </svg>
      </button>
    </div>
  );
};

export default SliderButtons;

SliderButtons.propTypes = {
  swiperRef: PropTypes.object,
  isStartBtnActive: PropTypes.bool,
  isEndBtnActive: PropTypes.bool,
};
