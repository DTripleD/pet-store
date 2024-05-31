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
import { addToFeatured } from "../../redux/featured/featuredOperations";

const characteristicsArray = [
  { name: "Lorem ipsum", descr: "Lorem ipsum", id: 1 },
  { name: "Lorem ipsum", descr: "Lorem ipsum", id: 2 },
  { name: "Lorem ipsum", descr: "Lorem ipsum", id: 3 },
];

const AllAboutProduct = () => {
  const dispatch = useDispatch();

  const { productId } = useParams();

  const handleAddToCart = () => {
    dispatch(
      addToCart({ token: getCookies().cartTokenPetStore, id: productId })
    );
  };

  const handleAddToFeatured = () => {
    dispatch(
      addToFeatured({
        token: getCookies().featuredTokenPetStore,
        id: productId,
      })
    );
  };

  const product = useSelector(selectProduct);

  return (
    <>
      <div className={css.main_product_info_wrapper}>
        <PhotoCarousel images={product.images} />

        <div className={css.product__header}>
          <div className={css.base_info__wrapper}>
            <h2 className={css.product_page_title}>{product.name}</h2>
            <p className={css.product_code}>код товару:0000000</p>
            <div className={css.in_stock__wrapper}>
              <svg className={css.stock__icon}>
                <use href={icons + "#car-icon"}></use>
              </svg>
              <p className={css.is_available}>В наявності</p>
            </div>
          </div>
          <div className={css.price__wrapper}>
            <WeightButtonsList />
            <div className={css.priceWrapper}>
              <p className={css.product_page__price}>
                {product.discount_price || product.price}
                <span className={css.product_page__price_symbol}>₴</span>
              </p>
              {product.discount_price && (
                <p className={css.productDiscountPrice}>{product.price} ₴</p>
              )}
            </div>
          </div>
          <ul className={css.add__button_wrapper}>
            <li>
              <button
                className={`${css.add__button} ${css.to_cart__button}`}
                onClick={handleAddToCart}
              >
                <svg className={css.to_cart__icon}>
                  <use href={icons + "#cart"}></use>
                </svg>
                Додати в кошик
              </button>
            </li>
            <li>
              <button
                className={`${css.add__button} ${css.to_wish__button}`}
                onClick={handleAddToFeatured}
              >
                <svg className={css.to_wish__icon}>
                  <use href={icons + "#heart"}></use>
                </svg>
                У бажане
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className={css.about_product_wrapper}>
        <h3 className={css.product_page__sub_title}>Характеристики</h3>
        <CharacteristicList array={characteristicsArray} />

        <Link to="characteristic" className={css.read_more_link}>
          Дивитись всі характеристики
        </Link>
      </div>
      <div className={css.about_product_wrapper}>
        <h3 className={css.product_page__sub_title}>Опис товару</h3>
        <p className={css.description__text}>{product.description}</p>
        <Link to="description" className={css.read_more_link}>
          Читати більше...
        </Link>
      </div>
    </>
  );
};

export default AllAboutProduct;
