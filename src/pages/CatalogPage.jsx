import { useParams } from "react-router-dom";
import CatalogList from "../components/CatalogList/CatalogList";
import FilterForm from "../components/FilterFrom/FilterForm";

const CatalogPage = () => {
  const { catalog } = useParams();

  console.log(catalog);

  return (
    <div className="container catalog__container">
      <FilterForm />
      <CatalogList />
    </div>
  );
};

export default CatalogPage;
