import { useEffect, useState } from "react";
import css from "./HeaderDropDown.module.scss";
import { Link } from "react-router-dom";
import icons from "src/images/icons.svg";

import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { getAnimals } from "../../redux/animal/animalOperations";
import { selectAnimals } from "../../redux/animal/animalSelectors";

const HeaderDropDown = ({ isOpen }) => {
  const [selectedAnimal, setSelectedAnimal] = useState({
    product_categories: [],
    key: "",
    id: null,
    name: "",
  });

  const animals = useSelector(selectAnimals);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAnimals());
  }, [dispatch]);
  return (
    <div
      className={`${css.menu} ${isOpen ? css.isOpen : ""}`}
      onMouseLeave={() =>
        setSelectedAnimal({
          product_categories: [],
          key: "",
          id: null,
          name: "",
        })
      }
    >
      <ul className={css.animalsList}>
        {animals.map((animal) => (
          <li key={animal.id} onMouseEnter={() => setSelectedAnimal(animal)}>
            <Link to={`${animal.key}`} className={css.animalsItem}>
              <div className={css.animalWrapper}>
                <svg className={css.iconRight}>
                  <use href={icons + `#${animal.key}`}></use>
                </svg>
                <p className={css.animalName}>{animal.name}</p>
              </div>
              <svg className={css.iconRight}>
                <use href={icons + "#icon-right"}></use>
              </svg>
            </Link>
          </li>
        ))}
      </ul>

      {selectedAnimal.product_categories.length > 0 && (
        <ul className={css.categoriesList}>
          {selectedAnimal.product_categories.map((categori) => (
            <li key={categori.id}>
              <Link to={`${selectedAnimal.key}/${categori.key}`}>
                <p className={css.categoryName}>{categori.name}</p>
              </Link>
              <ul className={css.subcategoryList}>
                {categori.subcategories.map((sub) => (
                  <li key={sub.key} className={css.subcategoryItem}>
                    <Link
                      to={`${selectedAnimal.key}/${categori.key}?subCategory=${sub.key}`}
                      className={css.subcategoryName}
                    >
                      {sub.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HeaderDropDown;

HeaderDropDown.propTypes = {
  isOpen: PropTypes.bool,
};
