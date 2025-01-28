import css from "./AnimalBurgerMenu.module.scss";
import icons from "../../../images/icons.svg";
import PropTypes from "prop-types";

import { useEffect } from "react";
import { selectAnimal } from "../../../redux/burgerAnimal/burgerAnimalSlice";
import ButtonBack from "../../../components/ButtonBack/ButtonBack";
import { useDispatch, useSelector } from "react-redux";
import { getAnimals } from "../../../redux/animal/animalOperations";
import { selectAnimals } from "../../../redux/animal/animalSelectors";

const AnimalBurgerMenu = ({ setOpenedBurger }) => {
  const animals = useSelector(selectAnimals);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAnimals());
  }, [dispatch]);

  return (
    <div className={css.wrapper}>
      <div className={css.btnBack}>
        <ButtonBack
          text={"Каталог"}
          backTo={"main"}
          setOpenedBurger={setOpenedBurger}
        />
      </div>
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
    </div>
  );
};

AnimalBurgerMenu.propTypes = {
  setOpenedBurger: PropTypes.func,
};

export default AnimalBurgerMenu;
