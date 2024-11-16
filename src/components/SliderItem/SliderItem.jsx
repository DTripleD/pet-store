import PropTypes from "prop-types";
import icons from "src/images/icons.svg";
import css from "./SliderItem.module.scss";
import WeightButtonsList from "components/WeightButtons/WeightButtonsList/WeightButtonsList";
import { Link } from "react-router-dom";

const SliderItem = ({ item, onAdd, isDiscounted }) => {
  const { id, name, description, discount, images, price, discount_price } =
    item;

  return (
    <>
      <Link to={`${item.id}`} className={css.item}>
        <div
          className={
            isDiscounted ? css.swiperImageWrapper : css.swiperImageWrapperNew
          }
        >
          <img className={css.swiperImage} src={images} alt={item.title} />
          {isDiscounted && discount ? (
            <div className={css.swiperDisc}>{`${discount}%`}</div>
          ) : (
            <div></div>
          )}
          <button className={css.favoriteButton}>
            <svg className={css.heartIcon}>
              <use href={icons + "#heart"}></use>
            </svg>
          </button>
        </div>

        <WeightButtonsList />

        <div className={css.swiperDescrWrapper}>
          <h3 className={css.swiperTitle}>{name}</h3>
          <p className={css.swiperDescription}>{description}</p>
          <div className={css.mobileBuyWrapper}>
            <div className={css.swiperPriceWrapper}>
              {isDiscounted ? (
                <>
                  <p className={css.swiperNewPrice}>{discount_price} грн.</p>
                  <p className={css.swiperOldPrice}>{price} грн.</p>
                </>
              ) : (
                <p className={css.swiperNewPrice}>{price} грн.</p>
              )}
            </div>
            <button
              type="button"
              className={css.cartButton}
              onClick={() => onAdd(id)}
            >
              <svg className={css.cartBuyIcon}>
                <use href={icons + "#cart"}></use>
              </svg>
            </button>
          </div>
        </div>
      </Link>
    </>
  );
};

export default SliderItem;

SliderItem.propTypes = {
  item: PropTypes.object,
  onAdd: PropTypes.func,
  isDiscounted: PropTypes.bool,
};
