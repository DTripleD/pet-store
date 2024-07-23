import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import PropTypes from "prop-types";
import "swiper/scss";
import { Link } from "react-router-dom";
import css from "./Slider.module.scss";
import icons from "src/images/icons.svg";
import SliderButtons from "components/SliderButtons/SliderButtons";
import SliderItem from "components/SliderItem/SliderItem";

const Slider = ({ data }) => {
  const [isStartBtnActive, setStartBtnActive] = useState(true);
  const [isEndBtnActive, setIsEndBtnActive] = useState(false);

  const swiperRef = useRef();

  function isButtonActive(e) {
    e.isBeginning ? setStartBtnActive(true) : setStartBtnActive(false);
    e.isEnd ? setIsEndBtnActive(true) : setIsEndBtnActive(false);
  }

  return (
    <section>
      <div className={css.sliderContainer}>
        <div className={css.slider__header}>
          <h2 className={css.slider__header_title}>Знижки</h2>
            <SliderButtons
              isStartBtnActive={isStartBtnActive}
              isEndBtnActive={isEndBtnActive}
              swiperRef={swiperRef}
            />
        </div>
          <ul className={css.productsList}>
            {data.map((item) => (
              <SliderItem key={item.id} item={item} />
            ))}
          </ul>
          <div className={css.swiper}>
            <Swiper
              onSlideChange={isButtonActive}
              modules={[Navigation]}
              slidesPerView={4}
              spaceBetween={16}
              className={css.swiper_container}
              wrapperClass={css.swiper_wrapper}
              breakpoints={{
                1280: {
                    spaceBetween: 24,
                  },
                }}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
            >
              {data.map(item => (
                <SwiperSlide key={item.id} className={css.item_box}>
                  <SliderItem  item={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        <Link to="new" className={css.styled__link}>
          <p className={css.show__all_text}>Переглянути все</p>
          <svg className={css.show__all_icon}>
            <use href={icons + "#icon-right"}></use>
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default Slider;

Slider.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array,
};
