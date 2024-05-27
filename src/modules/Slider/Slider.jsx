import { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import PropTypes from "prop-types";

import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

import css from "./Slider.module.scss";

import icons from "src/images/icons.svg";
import SliderButtons from "components/SliderButtons/SliderButtons";
import SliderItem from "components/SliderItem/SliderItem";
import MediaQuery from "react-responsive";

const Slider = ({ title, data }) => {
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
          <h2 className={css.slider__header_title}>{title}</h2>
          <MediaQuery minWidth={744}>
            <SliderButtons
              isStartBtnActive={isStartBtnActive}
              isEndBtnActive={isEndBtnActive}
              swiperRef={swiperRef}
            />
          </MediaQuery>
        </div>
        <MediaQuery maxWidth={743}>
          <ul className={css.productsList}>
            {data.map((item) => (
              <SliderItem key={item.id} item={item} />
            ))}
          </ul>
        </MediaQuery>
        <MediaQuery minWidth={744}>
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={24}
            onSlideChange={isButtonActive}
            modules={[Navigation]}
            className="mySwiper"
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {data.map((item) => (
              <SwiperSlide key={item.id}>
                <SliderItem item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </MediaQuery>
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
