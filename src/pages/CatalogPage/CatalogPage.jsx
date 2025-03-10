import { Link, useParams } from "react-router-dom";
import CatalogList from "components/CatalogList/CatalogList";
import FilterForm from "components/FilterFrom/FilterForm";
import Routes from "components/Routes/Routes";
import icons from "src/images/icons.svg";
import css from "./CatalogPage.module.scss";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  getAllProducts,
  getDiscounts,
  getNew,
  getProducts,
} from "../../redux/products/productsOperations";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCategories,
  selectProducts,
} from "../../redux/products/productsSelectors";
import FilterBurger from "../../modules/FilterBurger/FilterBurger";
import PropTypes from "prop-types";
import Loader from "../../components/Loader/Loader";
import { handleGoUp } from "../../helpers/goUp";

const CatalogPage = ({ animalId, productsId }) => {
  const [searchParams] = useSearchParams();
  const [value, setValue] = useState([
    Number(searchParams.get("min")) || 0,
    Number(searchParams.get("max")) || 1,
  ]);
  const [initialValue, setInitialValue] = useState([0, 0]);
  const [filtersIsOpen, setFiltersIsOpen] = useState(false);

  const { category, catalog, subcategory } = useParams();
  const products = useSelector(selectProducts);
  const categories = useSelector(selectCategories);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (products.length) {
  //     setValue(getPriceLine(products));
  //   }
  // }, [products]);

  useEffect(() => {
    const handlePriceCalculation = (products) => {
      if (products.length === 0) return;

      const prices = products.map((product) =>
        product.discount_price
          ? parseFloat(product.discount_price)
          : parseFloat(product.price)
      );

      const minPrice = Math.min(...prices);
      const maxPrice = Math.max(...prices);

      const roundedMinPrice = Math.floor(minPrice);
      const roundedMaxPrice = Math.ceil(maxPrice);

      const minPriceFilterSaved = Number(searchParams.get("min"));
      const maxPriceFilterSaved = Number(searchParams.get("max"));

      if (minPriceFilterSaved && maxPriceFilterSaved) {
        setValue([minPriceFilterSaved, maxPriceFilterSaved]);
      } else {
        setValue([roundedMinPrice, roundedMaxPrice]);
      }

      setInitialValue([
        Math.max(0, roundedMinPrice - 20),
        roundedMaxPrice + 20,
      ]);
    };

    const fetchData = async (action) => {
      const { payload } = await dispatch(action);
      handlePriceCalculation(payload.results);
    };

    if (category === "special" && catalog === "new") {
      fetchData(getNew());
    } else if (category === "special" && catalog === "discount") {
      fetchData(getDiscounts());
    } else if (category === "special" && catalog === "search") {
      fetchData(
        getAllProducts({ searchValue: searchParams.get("searchValue") })
      );
    } else if (catalog && category) {
      fetchData(
        getProducts({
          productsId: catalog,
          animalId: category,
          subcategory,
          value:
            searchParams.get("min") && searchParams.get("max")
              ? [searchParams.get("min"), searchParams.get("max")]
              : [],
          isNew: searchParams.get("new"),
          hasDiscount: searchParams.get("discount"),
        })
      );
    }
  }, [catalog, category, dispatch, searchParams, subcategory]);

  const handleOpenFilter = () => {
    setFiltersIsOpen(true);
  };

  function getPageName() {
    if (category === "special" && catalog === "new") {
      return "Новинки";
    } else if (category === "special" && catalog === "discount") {
      return "Акції";
    }
  }

  const filterList = [
    { title: "Новинки", key: "new", value: searchParams.get("new") },
    {
      title: "Знижки",
      key: "discounts",
      value: searchParams.get("discounts"),
    },
    {
      title: `${searchParams.get("min")}-${searchParams.get("max")}`,
      key: "price",
      value:
        searchParams.get("min") && searchParams.get("max")
          ? `${searchParams.get("min")}-${searchParams.get("max")}`
          : null,
    },
    {
      title: searchParams.get("sortBy"),
      key: "sortBy",
      value: searchParams.get("sortBy"),
    },
    {
      title: searchParams.get("searchValue"),
      key: "searchValue",
      value: searchParams.get("searchValue"),
    },
  ];

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
          {categories?.product_category?.name || getPageName()}
        </h2>
        <div className={css.catalogContainer}>
          <div className={css.filterForm}>
            <FilterForm
              value={value}
              setValue={setValue}
              animalId={category}
              productsId={catalog}
              initialValue={initialValue}
            />
          </div>

          <div className={css.productsBox}>
            {products ? (
              <CatalogList
                products={products}
                filterList={filterList}
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
            initialValue={initialValue}
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
