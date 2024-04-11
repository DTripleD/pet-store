import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import icons from "../../images/icons.svg";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import css from "./PhotoСarousel.module.scss";

import mainImage from "../../images/img.png";

const photoArray = [
  { img: mainImage, id: 1 },
  { img: mainImage, id: 2 },
  { img: mainImage, id: 3 },
  { img: mainImage, id: 4 },
  { img: mainImage, id: 5 },
  { img: mainImage, id: 6 },
  { img: mainImage, id: 8 },
  { img: mainImage, id: 9 },
  { img: mainImage, id: 10 },
];

const PhotoCarousel = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

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
        {photoArray.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.img} className={css.bigImage} />
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
        {photoArray.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.img} className={css.hita} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PhotoCarousel;
