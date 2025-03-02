import PhotoCarousel from "components/PhotoСarousel/PhotoСarousel";
import css from "./AllAboutProduct.module.scss";
import icons from "src/images/icons.svg";

import { Link, useParams } from "react-router-dom";
import WeightButtonsList from "components/WeightButtons/WeightButtonsList/WeightButtonsList";
import CharacteristicList from "components/CharacteristicList/CharacteristicList";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cart/cartOperations";
import { getCookies } from "../../shared/cookies/cookies";
import { selectProduct } from "../../redux/product/productSelectors";
import {
  addToFeatured,
  deleteFromFeatured,
} from "../../redux/featured/featuredOperations";
import { selectFeaturedList } from "../../redux/featured/featuredSelectors";
import { selectCartIsLoading } from "../../redux/cart/cartSelectors";
import Loader from "../../components/Loader/Loader";

const characteristicsArray = [
  { name: "Lorem ipsum", descr: "Lorem ipsum", id: 1 },
  { name: "Lorem ipsum", descr: "Lorem ipsum", id: 2 },
  { name: "Lorem ipsum", descr: "Lorem ipsum", id: 3 },
];

const AllAboutProduct = () => {
  const dispatch = useDispatch();

  const { productId } = useParams();

  const featuredList = useSelector(selectFeaturedList);

  function isItemInFeaturedList() {
    return featuredList
      .map((product) => product.product.id)
      .includes(Number(productId));
  }

  const handleAddToCart = () => {
    dispatch(
      addToCart({ token: getCookies().cartTokenPetStore, id: productId })
    );
  };

  const handleAddToFeatured = () => {
    if (isItemInFeaturedList()) {
      dispatch(
        deleteFromFeatured({
          token: getCookies().featuredTokenPetStore,
          id: productId,
        })
      );
    } else {
      dispatch(
        addToFeatured({
          token: getCookies().featuredTokenPetStore,
          id: productId,
        })
      );
    }
  };

  const product = useSelector(selectProduct);
  const cartLoadingSelector = useSelector(selectCartIsLoading);

  return (
    <>
      <div className={css.mainProductInfoWrapper}>
        <PhotoCarousel images={product.images} />

        <div className={css.productHeader}>
          <div className={css.baseInfoWrapper}>
            <h2 className={css.productPageTitle}>{product.name}</h2>
            <p className={css.productCode}>код товару:0000000</p>
            <div className={css.inStockWrapper}>
              <svg className={css.stockIcon}>
                <use href={icons + "#car-icon"}></use>
              </svg>
              <p className={css.isAvailable}>В наявності</p>
            </div>
          </div>
          <div className={css.priceWrapper}>
            <WeightButtonsList />
            <div className={css.priceBox}>
              <p className={css.productPagePrice}>
                {product.discountPrice || product.price}
                <span className={css.productPagePriceSymbol}>₴</span>
              </p>
              {product.discount_price && (
                <p className={css.productDiscountPrice}>{product.price} ₴</p>
              )}
            </div>
          </div>
          <ul className={css.addButtonWrapper}>
            <li>
              <button
                className={`${css.addButton} ${css.toCartButton}`}
                onClick={handleAddToCart}
              >
                <svg className={css.toCartIcon}>
                  <use href={icons + "#cart"}></use>
                </svg>
                {cartLoadingSelector ? "Додаємо" : "Додати в кошик"}
              </button>
            </li>
            <li>
              <button
                className={`${css.addButton} ${css.toWishButton}`}
                onClick={handleAddToFeatured}
              >
                <svg className={css.toWishIcon}>
                  <use
                    href={
                      isItemInFeaturedList()
                        ? icons + "#icon-heart_fill"
                        : icons + "#heart"
                    }
                  ></use>
                </svg>
                {isItemInFeaturedList() ? "Прибрати" : "У бажане"}
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className={css.aboutProductWrapper}>
        <h3 className={css.productPageSubTitle}>Характеристики</h3>
        <CharacteristicList array={characteristicsArray} />

        <Link to="characteristic" className={css.readMoreLink}>
          Дивитись всі характеристики
        </Link>
      </div>
      <div className={css.aboutProductWrapper}>
        <h3 className={css.productPageSubTitle}>Опис товару</h3>
        <p className={css.descriptionText}>{product.description}</p>
        <Link to="description" className={css.readMoreLink}>
          Читати більше...
        </Link>
      </div>
    </>
  );
};

export default AllAboutProduct;
