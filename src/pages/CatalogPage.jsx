import { useLocation, useParams } from "react-router-dom";
import CatalogList from "../components/CatalogList/CatalogList";
import FilterForm from "../components/FilterFrom/FilterForm";

import Routes from "../components/Routes/Routes";

const CatalogPage = () => {
  // const { catalog } = useParams();

  const { state } = useLocation();

  return (
    <div className="container">
      <Routes
        routes={[
          { display: state.from.display, path: state.from.path },
          { display: state.to.display, path: state.to.path },
        ]}
      />
      <div className="catalog__container">
        <FilterForm />
        <CatalogList />
      </div>
    </div>
  );
};

export default CatalogPage;
