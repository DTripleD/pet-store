import Slider from "modules/Slider/Slider";
import icons from "../../images/icons.svg";
import css from "./ProductPage.module.scss";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import Sidebar from "components/Sidebar/Sidebar";
import Routes from "components/Routes/Routes";
import { useEffect, useRef, useState } from "react";
import { getProduct } from "../../redux/product/productOperations";
import { useDispatch, useSelector } from "react-redux";
import DescriptionNavigation from "../../components/DescriptionNavigation/DescriptionNavigation";
import { getProducts } from "../../services/getProduct";
import {
  selectProduct,
  selectProductIsLoading,
} from "../../redux/product/productSelectors";
import Loader from "../../components/Loader/Loader";

const ProductPage = () => {
  const { productId, catalog } = useParams();
  const dispatch = useDispatch();
  const location = useLocation();
  const goBack = useRef(location.state?.from ?? `${catalog}`);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await getProducts();
        console.log(products);
        setData(products.results);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  const discData = data.filter((item) => item.discount > 0);

  useEffect(() => {
    dispatch(getProduct(productId));
  }, [dispatch, productId]);

  const product = useSelector(selectProduct);
  const isProductLoading = useSelector(selectProductIsLoading);

  return (
    <div className={css.productPageBox}>
      <div className={`container ${css.productPageContainer}`}>
        <div className={css.sidebar}>
          <Sidebar />
        </div>

        {isProductLoading ? (
          <div className={css.loaderWrapper}>
            <Loader />
          </div>
        ) : (
          <div className={css.contentBox}>
            <div className={css.routes}>
              <Routes
                routes={[
                  {
                    name: product.categories.animal_category.name,
                    key: product.categories.animal_category.key,
                    id: product.categories.animal_category.id,
                  },
                  {
                    name: product.categories.product_category.name,
                    key: product.categories.product_category.key,
                    id: product.categories.product_category.id,
                  },
                  { name: product.name, key: productId },
                ]}
              />
            </div>
            <Link to={goBack.current} className={css.linkBack}>
              <svg className={css.iconBack}>
                <use href={icons + "#icon-down"}></use>
              </svg>
              <p className={css.textBack}>{productId}</p>
            </Link>
            <DescriptionNavigation />
            <div className={css.productPageWrapper}>
              <Outlet />
              <Slider title="Акції" data={discData} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
