import { useEffect, useState } from "react";
import css from "./BurgerMenu.module.scss";
import icons from "src/images/icons.svg";

import PropTypes from "prop-types";
import AnimalBurgerMenu from "../AnimalBurgerMenu/AnimalBurgerMenu";
import BurgerMenuWrapper from "../BurgerMenuWrapper/BurgerMenuWrapper";

const BurgerMenu = ({ isOpen, setIsOpen, setOpenedBurger }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    if (!isOpen) {
      document.body.style.overflow = "";
    }
  });

  const isLogIn = false;

  const [categoryIsOpen, setCategoryIsOpen] = useState(false);

  return (
    <>
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
            onClick={() => setOpenedBurger("category")}
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
      <div className={css.burgerContainer}>
        <p className={css.contactsTitle}>Контакти</p>
        <ul className={css.contactsList}>
          <li className={css.contactItem}>
            <a href="tel:+380 000 000 00" className={css.contactText}>
              +380 000 000 00
            </a>
          </li>
          <li className={css.contactItem}>
            <a href="mailto:pettopia@gmail.com" className={css.contactText}>
              pettopia@gmail.com
            </a>
          </li>
        </ul>
      </div>
      <div className={css.burgerContainer}>
        <p className={css.contactsTitle}>Ми у соц. мережах:</p>
        <ul className={css.burgerSocList}>
          <li>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className={css.socIcon}>
                <use href={icons + "#instagram"}></use>
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className={css.socIcon}>
                <use href={icons + "#facebook"}></use>
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://www.tiktok.com/uk-UA/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className={css.socIcon}>
                <use href={icons + "#tiktok"}></use>
              </svg>
            </a>
          </li>
        </ul>
      </div>

      <BurgerMenuWrapper isOpen={categoryIsOpen} setIsOpen={setCategoryIsOpen}>
        <AnimalBurgerMenu />
      </BurgerMenuWrapper>
    </>
  );
};

export default BurgerMenu;

BurgerMenu.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
  setOpenedBurger: PropTypes.func,
};
