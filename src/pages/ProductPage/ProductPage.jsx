import Slider from "modules/Slider/Slider";
import icons from "../../images/icons.svg";
import css from "./ProductPage.module.scss";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import Sidebar from "components/Sidebar/Sidebar";
import Routes from "components/Routes/Routes";
import { useEffect, useRef, useState } from "react";
import { getProduct } from "../../redux/product/productOperations";
import { useDispatch } from "react-redux";
import DescriptionNavigation from "../../components/DescriptionNavigation/DescriptionNavigation";
import { getProducts } from "../../services/getProduct";

const ProductPage = () => {
  const { productId, catalog } = useParams();
  const dispatch = useDispatch();
  const location = useLocation();
  const goBack = useRef(location.state?.from ?? `${catalog}`)
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
    }

    fetchData();
  }, []);

  const discData = data.filter(item => item.discount > 0);

  useEffect(() => {
    dispatch(getProduct(productId));
  }, [dispatch, productId]);

  return (
    <div className={css.productPageBox}>
      <div className={`container ${css.productPageContainer}`}>
        <div className={css.sidebar}>
          <Sidebar />
        </div>
        <div className={css.contentBox}>
          <div className={css.routes}>
            <Routes routes={[{ name: productId, key: productId }]} />
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
      </div>
    </div>
  );
};

export default ProductPage;
