import { useLocation, useParams } from "react-router-dom";
import CatalogList from "../../components/CatalogList/CatalogList";
import FilterForm from "../../components/FilterFrom/FilterForm";

import Routes from "../../components/Routes/Routes";

import css from "./CatalogPage.module.scss";

const CatalogPage = () => {
  // const { catalog } = useParams();

  const { state } = useLocation();

  return (
    <div className="container">
      <Routes
        routes={[
          { name: state.from.name, key: state.from.key },
          { name: state.to.name, key: state.to.key },
        ]}
      />
      <div className={css.catalog__container}>
        <FilterForm />
        <CatalogList />
      </div>
    </div>
  );
};

export default CatalogPage;
