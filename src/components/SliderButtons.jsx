import PropTypes from "prop-types";

import icons from "../images/icons.svg";

const SliderButtons = ({ swiperRef, isStartBtnActive, isEndBtnActive }) => {
  return (
    <div className="slider__buttons_wrapper">
      <button
        onClick={() => swiperRef.current.slidePrev()}
        disabled={isStartBtnActive}
        className="slider__button"
      >
        <svg className="slider__icon">
          <use href={icons + "#icon-left"}></use>
        </svg>
      </button>
      <button
        onClick={() => swiperRef.current.slideNext()}
        disabled={isEndBtnActive}
        className="slider__button"
      >
        <svg className="slider__icon">
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
