import PropTypes from "prop-types";

const SliderItem = ({ item }) => {
  return (
    <div className="swiper__item">
      <div className="swiper__image_wrapper">
        <img src={item.img} alt={item.title} className="swiper__image" />
        {/* <Heart count={null} stylesIcon={styles.swiper__icon} /> */}
      </div>
      <div className="swiper__info_wrapper">
        <ul className="swiper__weight_list">
          <li className="swiper__weight_item">
            <p className="swiper__weight_text swiper__weight_able">3kg</p>
          </li>
          <li className="swiper__weight_item">
            <p className="swiper__weight_text">6kg</p>
          </li>
          <li className="swiper__weight_item">
            <p className="swiper__weight_text">12kg</p>
          </li>
        </ul>
        <div className="swiper__descr_wrapper">
          <h3 className="swiper__title">{item.title}</h3>
          <p className="swipper__description">{item.description}</p>
          <div className="swiper__price_wrapper">
            <p className="swiper__new_price">{item.new_price} грн.</p>
            <p className="swiper__old_price">{item.old_price} грн.</p>
          </div>
        </div>
      </div>
      <button className="button__add">Додати в кошик</button>
    </div>
  );
};

export default SliderItem;

SliderItem.propTypes = {
  item: PropTypes.object,
};
