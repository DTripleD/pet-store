import { useLocation, useParams } from "react-router-dom";
import CatalogList from "../../components/CatalogList/CatalogList";
import FilterForm from "../../components/FilterFrom/FilterForm";

import Routes from "../../components/Routes/Routes";

import css from "./CatalogPage.module.scss";

const CatalogPage = () => {
  // const { catalog } = useParams();

  const { state } = useLocation();

  console.log(state);

  return (
    <div className="container">
      <Routes
        routes={[
          { name: state.from.name, key: state.from.key, id: state.from.id },
          { name: state.to.name, key: state.to.key },
        ]}
      />
      <div className={css.catalog__container}>
        <FilterForm />
        <CatalogList
          animalId={state.from.animalId}
          productsId={state.from.productsId}
        />
      </div>
    </div>
  );
};

export default CatalogPage;
