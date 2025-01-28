import Routes from "components/Routes/Routes";
import css from "./CategoriesPage.module.scss";
import { useEffect } from "react";
import Loader from "../../components/Loader/Loader";
import ButtonBack from "../../components/ButtonBack/ButtonBack";
import CategoryList from "../../components/CategoryList/CategoryList";
import { getAnimals } from "../../redux/animal/animalOperations";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAnimals,
  selectAnimalsLoading,
} from "../../redux/animal/animalSelectors";

const CategoriesPage = () => {
  const animals = useSelector(selectAnimals);

  const isLoading = useSelector(selectAnimalsLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAnimals());
  }, [dispatch]);

  return isLoading ? (
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
          <Routes routes={[{ name: "Категорії", key: animals.key }]} />
        </div>
        <CategoryList animals={animals} />
      </div>
    </section>
  );
};

export default CategoriesPage;
