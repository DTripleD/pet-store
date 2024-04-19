import Slider from "../../modules/Slider/Slider";

import data from "../../data/data";

import css from "./ProductPage.module.scss";
import { Outlet, useParams } from "react-router-dom";

import Sidebar from "../../components/Sidebar/Sidebar";
import Routes from "../../components/Routes/Routes";
import { useEffect, useState } from "react";
import ProductNavigation from "../../modules/ProductNavigation/ProductNavigation";

const ProductPage = () => {
  const [product, setProduct] = useState({});

  const { productId } = useParams();

  const getProductData = (id) => {
    return fetch(`http://127.0.0.1:8000/api/v1/products/${id}/`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  };

  useEffect(() => {
    getProductData(productId);
  }, [productId]);

  return (
    <div className={`${css.container} ${css.productPageContainer}`}>
      <Sidebar />
      <div className={css.product_page__wrapper}>
        <Routes />
        <ProductNavigation productId={productId} />
        <Outlet />
        <Slider title="Акції" data={data} />
      </div>
    </div>
  );
};

export default ProductPage;
