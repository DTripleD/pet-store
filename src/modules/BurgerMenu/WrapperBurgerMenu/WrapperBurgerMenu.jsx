import icons from "src/images/icons.svg";
import css from "./WrapperBurgerMenu.module.scss";
import { useEffect } from "react";

import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const WrapperBurgerMenu = ({ children, isOpen, setIsOpen }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    if (!isOpen) {
      document.body.style.overflow = "";
    }
  });

  return (
    <div className={`${css.burgerWrapper} ${isOpen ? css.open : ""}`}>
      {children?.key === "auth" ? (
        <svg
          className={`${css.burgerIcon} ${css.authCloseIcon}`}
          onClick={() => setIsOpen(false)}
        >
          <use href={icons + "#cross"}></use>
        </svg>
      ) : (
        <div className={`${css.burgerContainer} ${css.burgerHeader}`}>
          <Link to="/" className={css.menu__logo}>
            <svg className={css.icon_paw}>
              <use href={icons + "#icon-paw"}></use>
            </svg>
            <svg className={css.icon_name}>
              <use href={icons + "#icon-pettopia"}></use>
            </svg>
          </Link>

          <svg className={css.burgerIcon} onClick={() => setIsOpen(false)}>
            <use href={icons + "#cross"}></use>
          </svg>
        </div>
      )}

      <div className={css.burgerContainer}>{children}</div>

      {children?.key !== "auth" && (
        <>
          {" "}
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
        </>
      )}
    </div>
  );
};

export default WrapperBurgerMenu;

WrapperBurgerMenu.propTypes = {
  children: PropTypes.node,
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
};
