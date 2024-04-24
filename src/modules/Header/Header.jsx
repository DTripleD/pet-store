import icons from "src/images/icons.svg";

import css from "./Header.module.scss";

import PropTypes from "prop-types";
import { useState } from "react";
import HeaderDropDown from "components/HeaderDropDown/HeaderDropDown";
import HeaderSearch from "components/HeaderSearch/HeaderSearch";
import Logo from "components/Logo/Logo";

const Header = ({ setActiveAuthModal, setActiveCartModal }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <div className={`container ${css.header__container}`}>
        <Logo color={"logo__header"} />

        <div className={css.search__section}>
          <div
            className={css.dropdown}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            onClick={() => setIsOpen(false)}
          >
            <button className={css.category__header_button} type="button">
              <svg className={css.headerIcon}>
                <use href={icons + "#lines"}></use>
              </svg>
              <p className={css.header__btn_text}>Категорії</p>
            </button>
            <HeaderDropDown isOpen={isOpen} />
          </div>

          <HeaderSearch />
        </div>
        <div className={css.info__wrapper}>
          <div>
            <div className={css.phone__wrapper}>
              <svg className={css.headerIcon}>
                <use href={icons + "#phone"}></use>
              </svg>
              <a href="tel:+000-000-00-00" className={css.phone}>
                000-000-00-00
              </a>
              <svg className={`${css.headerIcon} ${css.icon__down__header}`}>
                <use href={icons + "#icon-down"}></use>
              </svg>
            </div>
            <p className={css.work_hours}>Без вихідних, з 8 до 20 </p>
          </div>
          <button className={css.user__button}>
            <svg className={css.headerIcon}>
              <use href={icons + "#heart"}></use>
            </svg>
          </button>
          <button
            className={css.user__button}
            onClick={() => setActiveCartModal(true)}
          >
            <svg className={css.headerIcon}>
              <use href={icons + "#cart"}></use>
            </svg>
          </button>
          <button
            className={css.user__button}
            onClick={() => setActiveAuthModal(true)}
          >
            <svg className={css.headerIcon}>
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
  setActiveAuthModal: PropTypes.func,
  setActiveCartModal: PropTypes.func,
};
