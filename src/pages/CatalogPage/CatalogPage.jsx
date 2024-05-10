import { useParams } from "react-router-dom";
import CatalogList from "components/CatalogList/CatalogList";
import FilterForm from "components/FilterFrom/FilterForm";

import Routes from "components/Routes/Routes";

import css from "./CatalogPage.module.scss";
import { useEffect, useState } from "react";
import { getPriceLine } from "src/helpers/getPriceLine";
import { getProducts } from "../../redux/products/productsOperations";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCategories,
  selectProducts,
} from "../../redux/products/productsSelectors";

const CatalogPage = () => {
  const { category, catalog } = useParams();

  const [value, setValue] = useState([0, 0]);

  const products = useSelector(selectProducts);

  const routes = useSelector(selectCategories);

  const dispatch = useDispatch();

  useEffect(() => {
    if (products) {
      setValue(getPriceLine(products));
    }
  }, [products, setValue]);

  useEffect(() => {
    dispatch(
      getProducts({
        productsId: catalog,
        animalId: category,
      })
    );
  }, [catalog, category, dispatch]);

  return (
    <div className="container">
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
      <div className={css.catalog__container}>
        <FilterForm
          value={value}
          setValue={setValue}
          animalId={catalog}
          productsId={category}
        />

        {products ? <CatalogList products={products} /> : <div>Loading...</div>}
      </div>
    </div>
  );
};

export default CatalogPage;
