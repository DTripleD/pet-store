import PropTypes from "prop-types";

const SliderButtons = ({ swiperRef, isStartBtnActive, isEndBtnActive }) => {
  return (
    <div className="slider__buttons_wrapper">
      <button
        onClick={() => swiperRef.current.slidePrev()}
        disabled={isStartBtnActive}
        className="slider__button"
      >
        {/* <CaretLeft color={"txtSecondary"} /> */}
      </button>
      <button
        onClick={() => swiperRef.current.slideNext()}
        disabled={isEndBtnActive}
        className="slider__button"
      >
        {/* <CaretRight color={"txtSecondary"} /> */}
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
