import Slider from "../../components/Slider/Slider";
import WeightButtonsList from "../../components/WeightButtons/WeightButtonsList/WeightButtonsList";
import data from "../../data/data";
import icons from "../../images/icons.svg";

import css from "./ProductPage.module.scss";

const ProductPage = () => {
  return (
    <div className={css.container}>
      <div className={css.product_page__wrapper}>
        <ul className={css.product__nav_buttons_list}>
          <li>
            <button
              className={`${css.product__nav_button} ${css.product__nav_button_active}`}
            >
              Все про товар
            </button>
          </li>
          <li>
            <button
              className={`${css.product__nav_button} ${css.product__nav_button_inactive}`}
            >
              Опис
            </button>
          </li>
          <li>
            <button
              className={`${css.product__nav_button} ${css.product__nav_button_inactive}`}
            >
              Характеристики
            </button>
          </li>
        </ul>
        <div className={css.main_product_info_wrapper}>
          <div>
            <div className={css.main__image_wrapper}></div>
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div className={css.product__header}>
            <div className={css.base_info__wrapper}>
              <h2 className={css.product_page_title}>
                Сухий корм для кошек крупних порід Brit Care Cat GF Large Cats
                Power & Vitality 400 г (курка та качка)
              </h2>
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
              <p className={css.product_page__price}>
                360<span className={css.product_page__price_symbol}>₴</span>
              </p>
            </div>
            <ul className={css.add__button_wrapper}>
              <li>
                <button className={`${css.add__button} ${css.to_cart__button}`}>
                  <svg className={css.to_cart__icon}>
                    <use href={icons + "#cart"}></use>
                  </svg>
                  Додати в кошик
                </button>
              </li>
              <li>
                <button className={`${css.add__button} ${css.to_wish__button}`}>
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
          <ul className={css.characteristic__list}>
            <li className={css.characteristic__item}>
              <p className={css.characteristic_text}>Lorem ipsum</p>
              <p
                className={`${css.characteristic_text} ${css.characteristic_value}`}
              >
                Lorem ipsum
              </p>
            </li>
            <li className={css.characteristic__item}>
              <p className={css.characteristic_text}>Lorem ipsum</p>
              <p
                className={`${css.characteristic_text} ${css.characteristic_value}`}
              >
                Lorem ipsum
              </p>
            </li>
            <li className={css.characteristic__item}>
              <p className={css.characteristic_text}>Lorem ipsum</p>
              <p
                className={`${css.characteristic_text} ${css.characteristic_value}`}
              >
                Lorem ipsum
              </p>
            </li>
          </ul>
          <a href="" className={css.read_more_link}>
            Дивитись всі характеристики
          </a>
        </div>
        <div className={css.about_product_wrapper}>
          <h3 className={css.product_page__sub_title}>Опис товару</h3>
          <p className={css.description__text}>
            Brit Care Cat GF Large Cats Power & Vitality - це високоякісний
            сухий корм, спеціально розроблений для задоволення потреб великих
            порід котів. Збалансований склад і вміст корисних інгредієнтів
            роблять цей корм ідеальним вибором для забезпечення сильного здоров
            {"'"}я та енергії вашої кішки.
          </p>
          <a href="" className={css.read_more_link}>
            Читати більше...
          </a>
        </div>
      </div>
      <Slider title="Акції" data={data} />
    </div>
  );
};

export default ProductPage;
