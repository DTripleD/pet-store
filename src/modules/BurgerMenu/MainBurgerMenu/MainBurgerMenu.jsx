import css from "./MainBurgerMenu.module.scss";
import icons from "src/images/icons.svg";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../../redux/auth/selectors";

const MainBurgerMenu = ({ setIsOpen, setOpenedBurger }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  return (
    <div className={css.burgerContainer}>
      <div className={css.burgerAuthWrapper}>
        <svg
          className={css.burgerIcon}
          onClick={() => setIsOpen(false)}
        >
          <use href={icons + "#person"}></use>
        </svg>
        {isLoggedIn ? (
          <Link 
            to={'/user/profile'} 
            className={css.burgerMenuText} 
            onClick={() => setIsOpen(false)}
            >
              {user.first_name || 'User name'}
          </Link>
        ) : (
          <ul className={css.burgerAuthList}>
            <li
              className={css.burgerMenuText}
              onClick={() => setOpenedBurger("login")}
            >
              Вхід
            </li>
            <li className={css.line}>|</li>
            <li
              className={css.burgerMenuText}
              onClick={() => setOpenedBurger("register")}
            >
              Реєстрація
            </li>
          </ul>
        )}
      </div>
      <ul className={css.burgerMenuList}>
        <li
          className={css.burgerMenuItem}
          onClick={() => setOpenedBurger("animal")}
        >
          <svg className={css.burgerIcon} onClick={() => setIsOpen(false)}>
            <use href={icons + "#menu"}></use>
          </svg>
          <p className={css.burgerMenuText}>Каталог</p>
        </li>
        <li className={css.burgerMenuItem}>
          <svg className={css.burgerIcon}>
            <use href={icons + "#heart"}></use>
          </svg>
          <Link 
            to={"/user/favorite"} 
            className={css.burgerMenuText}
            onClick={() => setIsOpen(false)}
          >
            Обране
          </Link>
        </li>
        <li className={css.burgerMenuItem}>
          <svg className={css.burgerIcon} >
            <use href={icons + "#cart"}></use>
          </svg>
          <Link 
            to={"/user/cart"} 
            className={css.burgerMenuText}
            onClick={() => setIsOpen(false)}
            >
              Кошик
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MainBurgerMenu;

MainBurgerMenu.propTypes = {
  setIsOpen: PropTypes.bool,
  setOpenedBurger: PropTypes.func,
};
