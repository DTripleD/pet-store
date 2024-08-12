import { useSelector } from "react-redux";
import css from "./CategoryBurgerMenu.module.scss";
import { selectedAnimal } from "../../../redux/burgerAnimal/burgerAnimalSelectors";
import { Link } from "react-router-dom";
import ButtonBack from "../../../components/ButtonBack/ButtonBack";
import PropTypes from "prop-types";

const CategoryBurgerMenu = ({ setOpenedBurger, setIsOpen }) => {
  const animal = useSelector(selectedAnimal);

  console.log(animal);

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <ButtonBack
        text={animal.name}
        backTo={"animal"}
        setOpenedBurger={setOpenedBurger}
      />
      <ul className={css.categoryList}>
        {animal.product_categories.map((category) => (
          <li key={category.id} className={css.categoryBox}>
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
                    onClick={onClose}
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
  setIsOpen: PropTypes.func,
};

export default CategoryBurgerMenu;
