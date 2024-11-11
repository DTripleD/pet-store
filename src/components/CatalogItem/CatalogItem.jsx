import { Link, useLocation } from "react-router-dom";
import placeholder from "src/images/placeholder.jpg";
import css from "./CatalogItem.module.scss";
import WeightButtonsList from "components/WeightButtons/WeightButtonsList/WeightButtonsList";
import icons from "src/images/icons.svg";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { selectFeaturedList } from "../../redux/featured/featuredSelectors";
import {
  addToFeatured,
  deleteFromFeatured,
} from "../../redux/featured/featuredOperations";
import { getCookies } from "../../shared/cookies/cookies";

const CatalogItem = ({ item }) => {
  const location = useLocation();

  const dispatch = useDispatch();

  const featuredList = useSelector(selectFeaturedList);

  function isItemInFeaturedList() {
    return featuredList.map((product) => product.product.id).includes(item.id);
  }

  const handleAddToFeatured = () => {
    if (isItemInFeaturedList()) {
      dispatch(
        deleteFromFeatured({
          token: getCookies().featuredTokenPetStore,
          id: item.id,
        })
      );
    } else {
      dispatch(
        addToFeatured({
          token: getCookies().featuredTokenPetStore,
          id: item.id,
        })
      );
    }
  };

  return (
    <li className={css.productCard}>
      <button className={css.favoriteButton} onClick={handleAddToFeatured}>
        <svg className={css.heartIcon}>
          <use
            href={
              isItemInFeaturedList()
                ? icons + "#icon-heart_fill"
                : icons + "#heart"
            }
          ></use>
        </svg>
      </button>
      <Link
        state={{ from: location }}
        to={`${item.id}`}
        className={css.productLink}
      >
        <div className={css.productImageWrapper}>
          <img
            src={
              item.images.length > 0 && item.images.startsWith("http")
                ? item.images
                : placeholder
            }
            alt={item.name}
            className={css.img}
          />

          <div className={css.discount}>-{item.discount}%</div>
        </div>
        <WeightButtonsList />
        <div className={css.textWrapper}>
          <div className={css.swiperDescrWrapper}>
            <h3 className={css.swiperTitle}>{item.name}</h3>
            <p className={css.swipperDescription}>{item.description}</p>

            <div className={css.mobileBuyWrapper}>
              <div className={css.swiperPriceWrapper}>
                <p className={css.swiperNewPrice}>{item.discount_price} грн.</p>
                <p className={css.swiperOldPrice}>{item.price} грн.</p>
              </div>
              <svg className={css.cartBuyIcon}>
                <use href={icons + "#cart"}></use>
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default CatalogItem;

CatalogItem.propTypes = {
  item: PropTypes.object,
};
