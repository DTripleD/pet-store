import Routes from "components/Routes/Routes";
import css from "./CategoriesPage.module.scss";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
import ButtonBack from "../../components/ButtonBack/ButtonBack";
import { fetchCategoryData } from "../../helpers/getCategoryData";
import CategoryList from "../../components/CategoryList/CategoryList";

const CategoriesPage = () => {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await fetchCategoryData("http://127.0.0.1:8000/api/v1/animalcategories/");
        setCategories(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return loading ? (
      <div className={css.loader}>
        <Loader />
      </div>
    ) : (
    <section className={css.categorySection}>
      <div className="container">
        <div className={css.btnBack}>
          <ButtonBack to="/" text="Головна сторінка" />
        </div>
        <div className={css.routes}>
          <Routes routes={[{ name: 'Категорії', key: categories.key }]} />
        </div>
        <CategoryList categories={categories} />
      </div>
    </section>
  );
};

export default CategoriesPage;
