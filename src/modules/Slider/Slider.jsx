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
import SliderItemNew from "../../components/SliderItem/SliderItemNew";

const Slider = ({ data, title }) => {
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
          {data.filter((item) => item.id > 4).map((item) => (
            title === 'Акції' ? (
            <SliderItem key={item.id} item={item} />
            ) : (
              <SliderItemNew key={item.id}  item={item} />
            )
          ))}
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
            {data.map(item => (
              <SwiperSlide key={item.id} className={css.itemBox}>
                {title === 'Акції' ? (
                <SliderItem  item={item} />
                ) : (
                <SliderItemNew  item={item} />
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
         <Link to="new" className={css.styledLink}>
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
};
