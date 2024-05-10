import icons from "src/images/icons.svg";

import css from "./Header.module.scss";

import PropTypes from "prop-types";
import { useState } from "react";
import HeaderDropDown from "components/HeaderDropDown/HeaderDropDown";
import HeaderSearch from "components/HeaderSearch/HeaderSearch";
import Logo from "components/Logo/Logo";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Link } from "react-router-dom";

const Header = ({ setActiveAuthModal, setActiveCartModal }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [contactsVisible, setContactsVisible] = useState(false);

  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={css.header}>
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
            <div className={css.contactsWrapper}>
              <p className={css.contactsText}>Контакти</p>
              <svg
                className={`${css.headerIcon} ${css.icon__down__header} ${
                  contactsVisible ? css.iconOpen : ""
                }`}
                onClick={() => setContactsVisible((prev) => !prev)}
              >
                <use href={icons + "#icon-down"}></use>
              </svg>
            </div>
            <ul
              className={`${css.contactsDropDownList} ${
                contactsVisible ? css.contactsVisible : ""
              }`}
            >
              <a href="tel:+000-000-00-00" className={css.contactLink}>
                000-000-00-00
              </a>
              <a href="mailto:pettopia@gmail.com" className={css.contactLink}>
                pettopia@gmail.com
              </a>
            </ul>
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
          {isLoggedIn ? (
            <Link to="/user/profile" className={css.userLink}>
              <svg className={css.headerIcon}>
                <use href={icons + "#person"}></use>
              </svg>
            </Link>
          ) : (
            <button
              className={css.user__button}
              onClick={() => setActiveAuthModal(true)}
            >
              <svg className={css.headerIcon}>
                <use href={icons + "#person"}></use>
              </svg>
            </button>
          )}
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
