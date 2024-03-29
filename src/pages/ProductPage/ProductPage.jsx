import WeightButtonsList from "../../components/WeightButtons/WeightButtonsList/WeightButtonsList";
import icons from "../../images/icons.svg";

const ProductPage = () => {
  return (
    <div className="container">
      <ul className="product__nav_buttons_list">
        <li>
          <button className="product__nav_button product__nav_button_active">
            Все про товар
          </button>
        </li>
        <li>
          <button className="product__nav_button product__nav_button_inactive">
            Опис
          </button>
        </li>
        <li>
          <button className="product__nav_button product__nav_button_inactive">
            Характеристики
          </button>
        </li>
      </ul>
      <div className="main_product_info_wrapper">
        <div>
          <div className="main__image_wrapper"></div>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div>
          <div className="base_info__wrapper">
            <h2 className="product-page_title">
              Сухий корм для кошек крупних порід Brit Care Cat GF Large Cats
              Power & Vitality 400 г (курка та качка)
            </h2>
            <p className="procuct_code">код товару:0000000</p>
            <div className="in-stock__wrapper">
              <svg className="stock__icon">
                <use href={icons + "#car-icon"}></use>
              </svg>
              <p className="is-available">В наявності</p>
            </div>
          </div>
          <WeightButtonsList />
          <p className="product_page__price">
            360<span className="product_page__price_symbol">₴</span>
          </p>
          <ul className="add__button_wrapper">
            <li>
              <button className="add__button to_cart__button">
                <svg className="to_cart__icon">
                  <use href={icons + "#cart"}></use>
                </svg>
                Додати в кошик
              </button>
            </li>
            <li>
              <button className="add__button to_wish__button">
                <svg className="to_wish__icon">
                  <use href={icons + "#heart"}></use>
                </svg>
                У бажане
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h3>Характеристики</h3>
      </div>
      <div>
        <h3>Опис товару</h3>
        <p>
          Brit Care Cat GF Large Cats Power & Vitality - це високоякісний сухий
          корм, спеціально розроблений для задоволення потреб великих порід
          котів. Збалансований склад і вміст корисних інгредієнтів роблять цей
          корм ідеальним вибором для забезпечення сильного здоров{"'"}я та
          енергії вашої кішки.
        </p>
      </div>
    </div>
  );
};

export default ProductPage;
