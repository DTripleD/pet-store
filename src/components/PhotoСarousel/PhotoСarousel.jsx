import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import icons from "src/images/icons.svg";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Pagination, Thumbs } from "swiper/modules";
import css from "./PhotoСarousel.module.scss";
import PropTypes from "prop-types";
import MediaQuery from "react-responsive";

const PhotoCarousel = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const swiperRef = useRef();
  const paginationRef = useRef(null);

  return (
    <div className={css.imageThumbWrapper}>
      <Swiper
        wrapperClass={css.wrapperCont}
        className={css.swiper}
        loop={true}
        spaceBetween={24}
        slidesPerView={1}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        pagination={{
          el: paginationRef.current,
          dynamicBullets: true,
          clickable: true,
          bulletClass: css.bullet,
          bulletActiveClass: css.bulletActive,
          renderBullet: (index, className) => {
            return `<span class="${className}"></span>`;
          },
        }}
        modules={[Pagination, FreeMode, Navigation, Thumbs]}
      >
        {images.map((item) => (
          <SwiperSlide key={item.id} className={`${css.swiperSlide}`}>
            <img src={item.image} className={css.bigImage} />
          </SwiperSlide>
        ))}
          <button
            onClick={() => {
              swiperRef.current.slidePrev();
            }}
            className={css.sliderButtonLeft}
          >
            <svg className={css.slider__icon}>
              <use href={icons + "#icon-left"}></use>
            </svg>
          </button>
          <button
            onClick={() => swiperRef.current.slideNext()}
            className={css.sliderButtonRight}
          >
            <svg className={css.slider__icon}>
              <use href={icons + "#icon-right"}></use>
            </svg>
          </button>
        <div className={css.pagination} ref={paginationRef}>
          {/* <div className={css.bullet}></div> */}
        </div>
      </Swiper>
      <MediaQuery minWidth={1280}>
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
            <SwiperSlide key={item.id} className={css.smallImage}>
              <img src={item.image} className={css.hita} />
            </SwiperSlide>
          ))}
        </Swiper>
      </MediaQuery>
    </div>
  );
};

export default PhotoCarousel;

PhotoCarousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
};
