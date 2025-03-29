import { Link, useParams } from "react-router-dom";
import CatalogList from "components/CatalogList/CatalogList";
import FilterForm from "components/FilterFrom/FilterForm";
import Routes from "components/Routes/Routes";
import icons from "src/images/icons.svg";
import css from "./CatalogPage.module.scss";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getProducts } from "../../redux/products/productsOperations";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCategories,
  selectPriceRange,
  selectProducts,
} from "../../redux/products/productsSelectors";
import FilterBurger from "../../modules/FilterBurger/FilterBurger";
import PropTypes from "prop-types";
import Loader from "../../components/Loader/Loader";
import { handleGoUp } from "../../helpers/goUp";
import { getFilterList } from "../../helpers/getFilterList";

const CatalogPage = ({ animalId, productsId }) => {
  const [value, setValue] = useState([]);
  const [filtersIsOpen, setFiltersIsOpen] = useState(false);

  const { category, catalog, subcategory } = useParams();

  const [searchParams, setSearchParams] = useSearchParams();

  const products = useSelector(selectProducts);
  const categories = useSelector(selectCategories);
  const priceRange = useSelector(selectPriceRange);

  const min = searchParams.get("minPrice");
  const max = searchParams.get("maxPrice");
  const discount = searchParams.get("hasDiscount");
  const isNew = searchParams.get("isNew");
  const sortBy = searchParams.get("sortBy");
  const searchValue = searchParams.get("searchValue");

  const filterList = getFilterList({
    min,
    max,
    discount,
    isNew,
    sortBy,
    searchValue,
  });

  const dispatch = useDispatch();

  useEffect(() => {
    const formData = {};

    if (min && max) {
      formData.minPrice = min;
      formData.maxPrice = max;
    }
    if (isNew) {
      formData.isNew = isNew;
    }
    if (discount) {
      formData.hasDiscount = discount;
    }
    if (searchValue) {
      formData.searchValue = searchValue;
    }
    if (sortBy) {
      formData.ordering =
        sortBy === "Від дешевих до дорогих" ? "price" : "-price";
    }

    if (catalog && category) {
      dispatch(
        getProducts({
          productsId: catalog,
          animalId: category,
          subcategory,
          value: [formData.minPrice, formData.maxPrice],
          isNew: formData.isNew,
          hasDiscount: formData.hasDiscount,
          ordering: formData.ordering,
        })
      );
    }
  }, [
    catalog,
    category,
    discount,
    dispatch,
    isNew,
    max,
    min,
    searchValue,
    sortBy,
    subcategory,
  ]);

  useEffect(() => {
    setValue([Number(min) || priceRange[0], Number(max) || priceRange[1]]);
  }, [max, min, priceRange]);

  const handleOpenFilter = () => {
    setFiltersIsOpen(true);
  };

  function handleClearFilters() {
    setSearchParams({});
    dispatch(
      getProducts({
        productsId,
        animalId,
        subcategory,
      })
    );
  }

  return (
    <div className={css.wrapper}>
      <div className="container">
        <div className={css.routes}>
          {categories?.name !== undefined ? (
            <Routes
              routes={[
                {
                  name: categories.name,
                  key: categories.key,
                  id: categories.id,
                },
                {
                  name: categories.product_category.name,
                  key: categories.product_category.key,
                },
              ]}
            />
          ) : (
            <div></div>
          )}
        </div>
        <div className={css.btnBack}>
          <Link to={`/${categories?.id}`} className={css.linkBack}>
            <svg className={css.iconBack}>
              <use href={icons + "#icon-down"}></use>
            </svg>
            <p className={css.textBack}>{categories?.name || "Back"}</p>
          </Link>
        </div>
        <h2 className={css.catalogTitle}>
          {categories?.product_category?.name}
        </h2>
        <div className={css.catalogContainer}>
          <div className={css.filterForm}>
            <FilterForm
              value={value}
              setValue={setValue}
              animalId={category}
              productsId={catalog}
              subcategory={subcategory}
              priceRange={priceRange}
              handleClearFilters={handleClearFilters}
            />
          </div>

          <div className={css.productsBox}>
            {products ? (
              <CatalogList
                products={products}
                filterList={filterList}
                openFilter={handleOpenFilter}
                handleClearFilters={handleClearFilters}
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
        <button type="button" className={css.goUp} onClick={handleGoUp}>
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
            subcategory={subcategory}
            handleClearFilters={handleClearFilters}
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
