import { Link, useParams } from "react-router-dom";
import CatalogList from "components/CatalogList/CatalogList";
import FilterForm from "components/FilterFrom/FilterForm";
import Routes from "components/Routes/Routes";
import icons from "src/images/icons.svg";
import css from "./SearchPage.module.scss";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getAllProducts } from "../../redux/products/productsOperations";
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

const SearchPage = ({ animalId, productsId }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState([]);
  const [filtersIsOpen, setFiltersIsOpen] = useState(false);

  const { category, catalog } = useParams();
  const products = useSelector(selectProducts);
  const categories = useSelector(selectCategories);
  const priceRange = useSelector(selectPriceRange);

  const min = searchParams.get("minPrice");
  const max = searchParams.get("maxPrice");
  const discount = searchParams.get("hasDiscount");
  const isNew = searchParams.get("isNew");
  const sortBy = searchParams.get("sortBy");
  const searchValue = searchParams.get("searchValue");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts({ searchValue: searchParams.get("searchValue") }));
  }, [dispatch, searchParams]);

  const handleOpenFilter = () => {
    setFiltersIsOpen(true);
  };

  function handleClearFilters() {
    setSearchParams({});
    dispatch(getAllProducts());
  }

  const filterList = getFilterList({
    min,
    max,
    discount,
    isNew,
    sortBy,
    searchValue,
  });

  useEffect(() => {
    setValue([Number(min) || priceRange[0], Number(max) || priceRange[1]]);
  }, [max, min, priceRange]);

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
        <h2 className={css.catalogTitle}>Пошук</h2>
        <div className={css.catalogContainer}>
          <div className={css.filterForm}>
            <FilterForm
              value={value}
              setValue={setValue}
              animalId={category}
              productsId={catalog}
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
            priceRange={priceRange}
            handleClearFilters={handleClearFilters}
          />
        </div>
      </div>
    </div>
  );
};

SearchPage.propTypes = {
  animalId: PropTypes.string,
  productsId: PropTypes.string,
};

export default SearchPage;
