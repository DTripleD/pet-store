import Slider from "../../modules/Slider/Slider";
import SortButton from "../../components/SortButton/SortButton";

import data from "../../data/data";

import css from "./ProductPage.module.scss";
import { Outlet, useLocation } from "react-router-dom";

const ProductPage = () => {
  const { pathname } = useLocation();

  return (
    <div className={css.container}>
      <div className={css.product_page__wrapper}>
        <ul className={css.product__nav_buttons_list}>
          <li>
            <SortButton
              link="/product"
              isActive={pathname === "/product"}
              text={"Все про товар"}
            />
          </li>
          <li>
            <SortButton
              link="description"
              isActive={pathname === "/product/description"}
              text={"Опис"}
            />
          </li>
          <li>
            <SortButton
              link="characteristic"
              isActive={pathname === "/product/characteristic"}
              text={"Характеристики"}
            />
          </li>
        </ul>
        <Outlet />
      </div>
      <Slider title="Акції" data={data} />
    </div>
  );
};

export default ProductPage;
