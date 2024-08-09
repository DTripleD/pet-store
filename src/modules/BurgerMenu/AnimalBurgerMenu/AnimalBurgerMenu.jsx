import css from "./AnimalBurgerMenu.module.scss";
import icons from "../../../images/icons.svg";
import PropTypes from "prop-types";

import { useEffect, useState } from "react";
import { selectAnimal } from "../../../redux/burgerAnimal/burgerAnimalSlice";
import ButtonBack from "../../../components/ButtonBack/ButtonBack";
import { useDispatch } from "react-redux";

const AnimalBurgerMenu = ({ setOpenedBurger }) => {
  // const [selectedAnimal, setSelectedAnimal] = useState({
  //   product_categories: [],
  //   key: "",
  //   id: null,
  //   name: "",
  // });
  const [animals, setAnimals] = useState([]);
  const dispatch = useDispatch();

  // console.log(selectedAnimal);

  // const getData = async () => {
  //   return fetch("http://127.0.0.1:8000/api/v1/animalcategories/")
  //     .then((res) => res.json())
  //     .then((data) => setAnimals(data));
  // };

  // useEffect(() => {
  //   getData();
  // }, []);
  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/v1/animalcategories/');
        const data = await response.json();
        setAnimals(data);
      } catch (error) {
        console.error('Error fetching animals:', error);
      }
    };

    fetchAnimals();
  }, []);

  return (
    <>
      <ButtonBack
        text={"Категорії"}
        backTo={"main"}
        setOpenedBurger={setOpenedBurger}
      />
      <ul className={css.animalsList}>
        {animals.map((item) => (
          <li
            key={item.id}
            className={css.animalItem}
            onClick={() => {
              setOpenedBurger("category");
              dispatch(selectAnimal(item));
            }}
          >
            <div className={css.animalWrapper}>
              <svg className={css.animalLogo}>
                <use href={icons + `#${item.key}`}></use>
              </svg>
              <p className={css.animalText}>{item.name}</p>
            </div>
            <svg className={css.toAnimalIcon}>
              <use href={icons + "#icon-down"}></use>
            </svg>
          </li>
        ))}
      </ul>
    </>
  );
};

AnimalBurgerMenu.propTypes = {
  setOpenedBurger: PropTypes.func,
};

export default AnimalBurgerMenu;
