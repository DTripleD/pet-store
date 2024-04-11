import Slider from "../../modules/Slider/Slider";
import SortButton from "../../components/SortButton/SortButton";

import data from "../../data/data";

import css from "./ProductPage.module.scss";
import { Outlet, useLocation } from "react-router-dom";

import Sidebar from "../../components/Sidebar/Sidebar";
import Routes from "../../components/Routes/Routes";

const ProductPage = () => {
  const { pathname, state } = useLocation();

  console.log(state);

  return (
    <div className={`${css.container} ${css.productPageContainer}`}>
      <Sidebar />
      <div className={css.product_page__wrapper}>
        <Routes />
        <ul className={css.product__nav_buttons_list}>
          <li>
            <SortButton
              link=""
              isActive={
                !pathname.endsWith("description") &&
                !pathname.endsWith("characteristic")
              }
              text={"Все про товар"}
            />
          </li>
          <li>
            <SortButton
              link="description"
              isActive={pathname.endsWith("description")}
              text={"Опис"}
            />
          </li>
          <li>
            <SortButton
              link="characteristic"
              isActive={pathname.endsWith("characteristic")}
              text={"Характеристики"}
            />
          </li>
        </ul>
        <Outlet />
        <Slider title="Акції" data={data} />
      </div>
    </div>
  );
};

export default ProductPage;
