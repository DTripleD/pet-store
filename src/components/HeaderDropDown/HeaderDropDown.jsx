import { useEffect, useState } from "react";
import css from "./HeaderDropDown.module.scss";
import { Link } from "react-router-dom";
import icons from "../../images/icons.svg";

import PropTypes from "prop-types";

const HeaderDropDown = ({ isOpen }) => {
  const [selectedAnimal, setSelectedAnimal] = useState({ array: [], key: "" });
  const [animals, setAnimals] = useState([]);

  const getData = async () => {
    return fetch("http://127.0.0.1:8000/api/v1/animalcategories/")
      .then((res) => res.json())
      .then((data) => setAnimals(data));
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div
      className={`${css.menu} ${isOpen ? css.isOpen : ""}`}
      onMouseLeave={() => setSelectedAnimal({ array: [], key: "" })}
    >
      <ul className={css.animalsList}>
        {animals.map((animal) => (
          <li
            key={animal.id}
            onMouseEnter={() =>
              setSelectedAnimal({
                array: animal.product_categories,
                key: animal.key,
              })
            }
          >
            <Link to={animal.key} className={css.animalsItem} state={animal.id}>
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

      {selectedAnimal.array.length > 0 && (
        <ul className={css.categoriesList}>
          {selectedAnimal.array.map((categori) => (
            <li key={categori.id}>
              <Link to={`${selectedAnimal.key}/${categori.key}`}>
                <p className={css.categoryName}>{categori.name}</p>
              </Link>
              <ul className={css.subcategoryList}>
                {categori.subcategories.map((sub) => (
                  <li key={sub.id} className={css.subcategoryName}>
                    {sub.name}
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
