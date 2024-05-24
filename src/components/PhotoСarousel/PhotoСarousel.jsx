import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import icons from "src/images/icons.svg";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import css from "./PhotoСarousel.module.scss";

import mainImage from "src/images/img.png";

const PhotoCarousel = ({ images = [] }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  console.log(images);

  const swiperReff = useRef();

  return (
    <div className={css.imageThumbWrapper}>
      <Swiper
        loop={true}
        spaceBetween={24}
        slidesPerView={1}
        onSwiper={(swiper) => {
          swiperReff.current = swiper;
        }}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
      >
        {images.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.image} className={css.bigImage} />
          </SwiperSlide>
        ))}
        <div className={css.imageSliderButtonsWrapper}>
          <button
            onClick={() => {
              swiperReff.current.slidePrev();
            }}
            className={css.imageSliderButton}
          >
            <svg className={css.slider__icon}>
              <use href={icons + "#icon-left"}></use>
            </svg>
          </button>
          <button
            onClick={() => swiperReff.current.slideNext()}
            className={css.imageSliderButton}
          >
            <svg className={css.slider__icon}>
              <use href={icons + "#icon-right"}></use>
            </svg>
          </button>
        </div>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={24}
        slidesPerView={"auto"}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="smallProductSlider"
      >
        {images.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.image} className={css.hita} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PhotoCarousel;
