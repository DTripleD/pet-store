import { useEffect, useState } from "react";
import css from "./HeaderDropDown.module.scss";
import { Link } from "react-router-dom";
import icons from "src/images/icons.svg";

import PropTypes from "prop-types";

const HeaderDropDown = ({ isOpen }) => {
  const [selectedAnimal, setSelectedAnimal] = useState({
    product_categories: [],
    key: "",
    id: null,
    name: "",
  });
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

      {selectedAnimal.product_categories.length > 0 && (
        <ul className={css.categoriesList}>
          {selectedAnimal.product_categories.map((categori) => (
            <li key={categori.id}>
              <Link
                to={`${selectedAnimal.key}/${categori.key}`}
                state={{
                  from: {
                    animalId: selectedAnimal.id,
                    productsId: categori.id,
                    name: selectedAnimal.name,
                    key: selectedAnimal.key,
                  },
                  to: categori,
                }}
              >
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
