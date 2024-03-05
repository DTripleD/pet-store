import { useRef, useState } from "react";

import SliderItem from "./SliderItem";
import SliderButtons from "./SliderButtons";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import PropTypes from "prop-types";

import "swiper/css";
import "swiper/css/pagination";

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
      <div className="slider__header">
        <h2 className="slider__header_title">{title}</h2>
        <SliderButtons
          isStartBtnActive={isStartBtnActive}
          isEndBtnActive={isEndBtnActive}
          swiperRef={swiperRef}
        />
      </div>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={40}
        pagination={{
          clickable: true,
        }}
        onSlideChange={isButtonActive}
        modules={[Pagination, Navigation]}
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
    </section>
  );
};

export default Slider;

Slider.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array,
};
