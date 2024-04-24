import { useLocation, useParams } from "react-router-dom";
import CatalogList from "components/CatalogList/CatalogList";
import FilterForm from "components/FilterFrom/FilterForm";

import { getProducts } from "src/api/getProducts";

import Routes from "components/Routes/Routes";

import css from "./CatalogPage.module.scss";
import { useEffect, useState } from "react";
import { getPriceLine } from "src/helpers/getPriceLine";

const CatalogPage = () => {
  // const { catalog } = useParams();

  const [products, setProducts] = useState();

  const [value, setValue] = useState([0, 0]);

  const { state } = useLocation();

  useEffect(() => {
    if (products) {
      setValue(getPriceLine(products));
    }
  }, [products, setValue]);

  useEffect(() => {
    getProducts(state.from.productsId, state.from.animalId).then((data) =>
      setProducts(data.results)
    );
  }, [state.from.animalId, state.from.productsId]);

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
          setProducts={setProducts}
        />

        {products ? <CatalogList products={products} /> : <div>Loading...</div>}
      </div>
    </div>
  );
};

export default CatalogPage;
