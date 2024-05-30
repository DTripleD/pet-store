import { useSelector } from "react-redux";
import css from "./CategoryBurgerMenu.module.scss";
import { selectedAnimal } from "../../../redux/burgerAnimal/burgerAnimalSelectors";
import { Link } from "react-router-dom";
import ButtonBack from "../../../components/ButtonBack/ButtonBack";

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
      <ul>
        {animal.product_categories.map((category) => (
          <li key={category.id}>
            <p>{category.product_categories}</p>
            <ul>
              {category.subcategories.map((item) => (
                <li key={item.id}>
                  <Link to={`${animal.id}/${item.id}`}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CategoryBurgerMenu;
