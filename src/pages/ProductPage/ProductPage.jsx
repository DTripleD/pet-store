import Slider from "modules/Slider/Slider";

import data from "src/data/data";

import css from "./ProductPage.module.scss";
import { Outlet, useParams } from "react-router-dom";

import Sidebar from "components/Sidebar/Sidebar";
import Routes from "components/Routes/Routes";
import { useEffect } from "react";
import ProductNavigation from "modules/ProductNavigation/ProductNavigation";
import { getProduct } from "../../redux/product/productOperations";
import { useDispatch } from "react-redux";
import MediaQuery from "react-responsive";

const ProductPage = () => {
  const { productId } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct(productId));
  }, [dispatch, productId]);

  return (
    <div className={`${css.container} ${css.productPageContainer}`}>
      <MediaQuery minWidth={1920}>
        <Sidebar />
      </MediaQuery>
      <div className={css.product_page__wrapper}>
        {/* <Routes /> */}

        <ProductNavigation productId={productId} />
        <Outlet />
        <Slider title="Акції" data={data} />
      </div>
    </div>
  );
};

export default ProductPage;
