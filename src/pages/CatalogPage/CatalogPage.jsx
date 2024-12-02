import { Link, useParams } from "react-router-dom";
import CatalogList from "components/CatalogList/CatalogList";
import FilterForm from "components/FilterFrom/FilterForm";
import Routes from "components/Routes/Routes";
import icons from "src/images/icons.svg";
import css from "./CatalogPage.module.scss";
import { useEffect, useState } from "react";
import { getPriceLine } from "src/helpers/getPriceLine";
import { getProducts } from "../../redux/products/productsOperations";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCategories,
  selectProducts,
} from "../../redux/products/productsSelectors";
import FilterBurger from "../../modules/FilterBurger/FilterBurger";
import PropTypes from "prop-types";
import Loader from "../../components/Loader/Loader";

const CatalogPage = ({ animalId, productsId }) => {
  const { category, catalog } = useParams();
  const [value, setValue] = useState([0, 0]);
  const products = useSelector(selectProducts);
  const routes = useSelector(selectCategories);
  const dispatch = useDispatch();
  const [filtersIsOpen, setFiltersIsOpen] = useState(false);

  useEffect(() => {
    if (products.length) {
      setValue(getPriceLine(products));
    }
  }, [products]);

  useEffect(() => {
    if (catalog && category) {
      dispatch(
        getProducts({
          productsId: catalog,
          animalId: category,
        })
      );
    }
  }, [catalog, category, dispatch]);

  const handleGoUp = () => {
    window.scrollTo(0, 0);
  }

  const handleOpenFilter = () => {
    setFiltersIsOpen(true);
  }

  return (
    <div className={css.wrapper}>
      <div className="container">
        <div className={css.routes}>
        {routes.name ? (
          <Routes
            routes={[
              { name: routes.name, key: routes.key, id: routes.id },
              {
                name: routes.product_category.name,
                key: routes.product_category.key,
              },
            ]}
          />
        ) : (
          <div>No routes</div>
        )}
        </div>
        <div className={css.btnBack}>
          <Link 
            to={`/${routes.id}`}
            className={css.linkBack}
          >
            <svg className={css.iconBack}>
              <use href={icons + "#icon-down"}></use>
            </svg>
            <p className={css.textBack}>{routes?.name || 'Back'}</p>
          </Link>
        </div>
        <h2 className={css.catalogTitle}>{routes?.product_category?.name || 'Catalog'}</h2>
        <div className={css.catalogContainer}>
          <div className={css.filterForm}>
            <FilterForm
              value={value}
              setValue={setValue}
              animalId={catalog}
              productsId={category}
            />
          </div>

          <div className={css.productsBox}>
            {products ? (
              <CatalogList
                products={products}
                value={value}
                setValue={setValue}
                animalId={catalog}
                productsId={category}
                openFilter={handleOpenFilter}
              />
            ) : (
              <Loader />
            )}
            <div className={css.btnLoadMore}>
              <p className={css.btnText}>Завантажити більше</p>
              <svg className={css.iconDown}>
                <use href={icons + "#icon-down"}></use>
              </svg>
            </div>
          </div>
        </div>
        <button 
          type="button" 
          className={css.goUp}
          onClick={handleGoUp}
        >
          <svg className={css.iconUp}>
              <use href={icons + "#icon-up"}></use>
            </svg>
        </button>
        <div className={css.filterBurger}>
          <FilterBurger
            filtersIsOpen={filtersIsOpen}
            setFiltersIsOpen={setFiltersIsOpen}
            value={value}
            setValue={setValue}
            animalId={animalId}
            productsId={productsId}
          />
        </div>
      </div>
    </div>
  );
};

CatalogPage.propTypes = {
  animalId: PropTypes.string,
  productsId: PropTypes.string,
};

export default CatalogPage;
