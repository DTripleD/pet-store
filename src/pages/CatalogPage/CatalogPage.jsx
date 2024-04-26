import { useLocation, useParams } from "react-router-dom";
import CatalogList from "components/CatalogList/CatalogList";
import FilterForm from "components/FilterFrom/FilterForm";

import Routes from "components/Routes/Routes";

import css from "./CatalogPage.module.scss";
import { useEffect, useState } from "react";
import { getPriceLine } from "src/helpers/getPriceLine";
import { getProducts } from "../../redux/products/productsOperations";
import { useDispatch, useSelector } from "react-redux";
import { selectProducts } from "../../redux/products/productsSelectors";

const CatalogPage = () => {
  // const { catalog } = useParams();

  const [value, setValue] = useState([0, 0]);

  const { state } = useLocation();

  const products = useSelector(selectProducts);

  const dispatch = useDispatch();

  useEffect(() => {
    if (products) {
      setValue(getPriceLine(products));
    }
  }, [products, setValue]);

  useEffect(() => {
    dispatch(
      getProducts({
        productsId: state.from.productsId,
        animalId: state.from.animalId,
      })
    );
  }, [dispatch, state.from.animalId, state.from.productsId]);

  return (
    <div className="container">
      {products ? (
        <Routes
          routes={[
            { name: state.from.name, key: state.from.key, id: state.from.id },
            { name: state.to.name, key: state.to.key },
          ]}
        />
      ) : (
        <div>Loading...</div>
      )}
      <div className={css.catalog__container}>
        <FilterForm
          value={value}
          setValue={setValue}
          animalId={state.from.animalId}
          productsId={state.from.productsId}
        />

        {products ? <CatalogList products={products} /> : <div>Loading...</div>}
      </div>
    </div>
  );
};

export default CatalogPage;
