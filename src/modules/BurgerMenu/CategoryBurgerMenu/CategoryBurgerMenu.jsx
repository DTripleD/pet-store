import { useSelector } from "react-redux";
import css from "./CategoryBurgerMenu.module.scss";
import { selectedAnimal } from "../../../redux/burgerAnimal/burgerAnimalSelectors";
import { Link } from "react-router-dom";
import ButtonBack from "../../../components/ButtonBack/ButtonBack";
import PropTypes from "prop-types";

const CategoryBurgerMenu = ({ setOpenedBurger, setIsOpen }) => {
  const animal = useSelector(selectedAnimal);

  function close() {
    setIsOpen(false);
  }

  return (
    <div className={css.wrapper}>
      <ButtonBack
        text={animal.name}
        backTo={"animal"}
        setOpenedBurger={setOpenedBurger}
      />
      <ul className={css.categoryList}>
        {animal.product_categories.map((category) => (
          <li key={category.id} className={css.categoryBox}>
            <Link
              to={`${animal.key}/${category.key}`}
              className={css.categoryName}
              onClick={close}
            >
              {category.name}
            </Link>
            <ul className={css.subCatList}>
              {category.subcategories.map((item) => (
                <li key={item.id} className={css.subCatItem}>
                  <Link
                    to={`${animal.key}/${item.key}`}
                    className={css.subCatName}
                    onClick={close}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

CategoryBurgerMenu.propTypes = {
  setOpenedBurger: PropTypes.func,
  setIsOpen: PropTypes.func,
};

export default CategoryBurgerMenu;
