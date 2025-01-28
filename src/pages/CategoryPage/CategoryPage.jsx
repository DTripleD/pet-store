import { Link, useParams } from "react-router-dom";
import Routes from "components/Routes/Routes";

import css from "./CategoryPage.module.scss";
import { useEffect } from "react";
import Loader from "../../components/Loader/Loader";
import icons from "src/images/icons.svg";
import { useDispatch, useSelector } from "react-redux";
import { getAnimalCategory } from "../../redux/animal/animalOperations";
import {
  selectAnimalsLoading,
  selectCurrentAnimal,
} from "../../redux/animal/animalSelectors";
import CategoryList from "../../components/CategoryList/CategoryList";

const CategoryPage = () => {
  const { category } = useParams();

  const dispatch = useDispatch();

  const currentAnimal = useSelector(selectCurrentAnimal);
  const isLoading = useSelector(selectAnimalsLoading);

  useEffect(() => {
    dispatch(getAnimalCategory(category));
  }, [category, dispatch]);

  return isLoading ? (
    <div className={css.loader}>
      <Loader />
    </div>
  ) : (
    <section className={css.categorySection}>
      <div className="container">
        <div className={css.btnBack}>
          <Link to="/" className={css.linkBack}>
            <svg className={css.iconBack}>
              <use href={icons + "#icon-down"}></use>
            </svg>
            <p className={css.textBack}>Головна сторінка</p>
          </Link>
        </div>
        <div className={css.routes}>
          <Routes
            routes={[{ name: currentAnimal.name, key: currentAnimal.key }]}
          />
          <h2 className={css.subCatTitle}>{currentAnimal.name}</h2>
        </div>

        <CategoryList animals={currentAnimal.product_categories} />
      </div>
    </section>
  );
};

export default CategoryPage;
