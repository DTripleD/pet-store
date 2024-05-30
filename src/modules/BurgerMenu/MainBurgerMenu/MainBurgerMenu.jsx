import css from "./MainBurgerMenu.module.scss";

import icons from "src/images/icons.svg";

import PropTypes from "prop-types";

const MainBurgerMenu = ({ setIsOpen, setOpenedBurger }) => {
  const isLogIn = false;

  return (
    <div className={css.burgerContainer}>
      <div className={css.burgerAuthWrapper}>
        <svg className={css.burgerIcon} onClick={() => setIsOpen(false)}>
          <use href={icons + "#person"}></use>
        </svg>
        {isLogIn ? (
          <p className={css.burgerMenuText}>PersonName</p>
        ) : (
          <ul className={css.burgerAuthList}>
            {/* !!!!!! нужно ли тут лишками или как то по другому? */}
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
          <svg className={css.burgerIcon} onClick={() => setIsOpen(false)}>
            <use href={icons + "#heart"}></use>
          </svg>
          <p className={css.burgerMenuText}>Обране</p>
        </li>
        <li className={css.burgerMenuItem}>
          <svg className={css.burgerIcon} onClick={() => setIsOpen(false)}>
            <use href={icons + "#cart"}></use>
          </svg>
          <p className={css.burgerMenuText}>Кошик</p>
        </li>
      </ul>
    </div>
  );
};

export default MainBurgerMenu;

MainBurgerMenu.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
};
