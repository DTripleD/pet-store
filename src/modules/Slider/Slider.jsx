import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import PropTypes from "prop-types";
import "swiper/scss";
import { Link } from "react-router-dom";
import css from "./Slider.module.scss";
import icons from "src/images/icons.svg";
import SliderButtons from "components/SliderButtons/SliderButtons";

import CatalogItem from "../../components/CatalogItem/CatalogItem";

const Slider = ({ data, title, isNew }) => {
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
        <div className={css.sliderHeader}>
          <h2 className={css.sliderHeaderTitle}>{title}</h2>
          <SliderButtons
            isStartBtnActive={isStartBtnActive}
            isEndBtnActive={isEndBtnActive}
            swiperRef={swiperRef}
          />
        </div>
        <ul className={css.productsList}>
          {data
            .map((item) => (
              <CatalogItem key={item.id} item={item} isNew={isNew} />
            ))
            .slice(0, 4)
            }
        </ul>
        <div className={css.swiper}>
          <Swiper
            onSlideChange={isButtonActive}
            modules={[Navigation]}
            slidesPerView={4}
            spaceBetween={16}
            className={css.swiperContainer}
            wrapperClass={css.swiperWrapper}
            breakpoints={{
              1280: {
                spaceBetween: 16,
              },
              1920: {
                slidesPerView: 5,
                spaceBetween: 24,
              },
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {data.map((item) => (
              <SwiperSlide tag="ul" key={item.id} className={css.itemBox}>
                <CatalogItem item={item} isSlider={true} isNew={isNew} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <Link to={'/category/:catalog'} className={css.styledLink}>
          <p className={css.showAllText}>Переглянути все</p>
          <svg className={css.showAllIcon}>
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
  isNew: PropTypes.bool,
};
