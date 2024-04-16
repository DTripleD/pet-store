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
      {/* <Routes
        routes={[
          { name: state.name, key: state.key },
          { name: state.name, key: state.key },
        ]}
      /> */}
      <div className={css.catalog__container}>
        <FilterForm />
        <CatalogList />
      </div>
    </div>
  );
};

export default CatalogPage;
