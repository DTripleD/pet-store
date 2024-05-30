import { useSelector } from "react-redux";
import css from "./CategoryBurgerMenu.module.scss";
import { selectedAnimal } from "../../../redux/burgerAnimal/burgerAnimalSelectors";
import { Link } from "react-router-dom";
import ButtonBack from "../../../components/ButtonBack/ButtonBack";
import PropTypes from "prop-types";

const CategoryBurgerMenu = ({ setOpenedBurger }) => {
  const animal = useSelector(selectedAnimal);

  console.log(animal);

  return (
    <>
      <ButtonBack
        text={animal.name}
        backTo={"animal"}
        setOpenedBurger={setOpenedBurger}
      />
      <ul className={css.categoryList}>
        {animal.product_categories.map((category) => (
          <li key={category.id}>
            <Link
              to={`${animal.id}/${category.id}`}
              className={css.categoryName}
            >
              {category.name}
            </Link>
            <ul className={css.subCatList}>
              {category.subcategories.map((item) => (
                <li key={item.id} className={css.subCatItem}>
                  <Link
                    to={`${animal.id}/${item.id}`}
                    className={css.subCatName}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
};

CategoryBurgerMenu.propTypes = {
  setOpenedBurger: PropTypes.func,
};

export default CategoryBurgerMenu;
