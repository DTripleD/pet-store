import icons from "../../images/icons.svg";

import Sidebar from "../Sidebar/Sidebar";

import css from "./Header.module.scss";
import Logo from "../Logo/Logo";

import PropTypes from "prop-types";

const Header = ({ setActive }) => {
  return (
    <header>
      <div className={`container ${css.header__container}`}>
        <Logo color={"logo__header"} />

        <div className={css.search__section}>
          <div className={css.dropdown}>
            <button className={css.category__header_button} type="button">
              <svg className={css.icon__header}>
                <use href={icons + "#lines"}></use>
              </svg>
              <p className={css.header__btn_text}>Категорії</p>
            </button>

            <div className={`${css.menu}`}>
              <Sidebar />
            </div>
          </div>

          <label className={css.header__label}>
            <svg className={css.icon__header}>
              <use href={icons + "#loop"}></use>
            </svg>
            <input
              type="text"
              placeholder="Пошук..."
              className={css.header__input}
            />
          </label>
        </div>
        <div className={css.info__wrapper}>
          <div>
            <div className={css.phone__wrapper}>
              <svg className={css.icon__header}>
                <use href={icons + "#phone"}></use>
              </svg>
              <a href="tel:+000-000-00-00" className={css.phone}>
                000-000-00-00
              </a>
              <svg className={`${css.icon__header} ${css.icon__down__header}`}>
                <use href={icons + "#icon-down"}></use>
              </svg>
            </div>
            <p className={css.work_hours}>Без вихідних, з 8 до 20 </p>
          </div>
          <button className={css.user__button}>
            <svg className={css.icon__header}>
              <use href={icons + "#heart"}></use>
            </svg>
          </button>
          <button
            className={css.user__button}
            onClick={() => setActive("cart")}
          >
            <svg className={css.icon__header}>
              <use href={icons + "#cart"}></use>
            </svg>
          </button>
          <button
            className={css.user__button}
            onClick={() => setActive("register")}
          >
            <svg className={css.icon__header}>
              <use href={icons + "#person"}></use>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

Header.propTypes = {
  setActive: PropTypes.func,
};
