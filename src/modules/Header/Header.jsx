import icons from "src/images/icons.svg";

import css from "./Header.module.scss";

import PropTypes from "prop-types";

import HeaderSearch from "components/HeaderSearch/HeaderSearch";
import Logo from "components/Logo/Logo";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Link } from "react-router-dom";
import CategoryButton from "../../components/CategoryButton/CategoryButton";
import Contacts from "../../components/Contacts/Contacts";
import MediaQuery from "react-responsive";
import { useState } from "react";

import AnimalBurgerMenu from "../BurgerMenu/AnimalBurgerMenu/AnimalBurgerMenu";
import WrapperBurgerMenu from "../BurgerMenu/WrapperBurgerMenu/WrapperBurgerMenu";
import CategoryBurgerMenu from "../BurgerMenu/CategoryBurgerMenu/CategoryBurgerMenu";
import RegisterBurgerMenu from "../BurgerMenu/RegisterBurgerMenu/RegisterBurgerMenu";
import MainBurgerMenu from "../BurgerMenu/MainBurgerMenu/MainBurgerMenu";
import LoginBurgerMenu from "../BurgerMenu/LoginBurgerMenu/LoginBurgerMenu";

const Header = ({ setActiveAuthModal, setActiveCartModal }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const [isOpen, setIsOpen] = useState(false);

  const [openedBurger, setOpenedBurger] = useState("");

  const obj = {
    main: <MainBurgerMenu setOpenedBurger={setOpenedBurger} />,
    animal: <AnimalBurgerMenu setOpenedBurger={setOpenedBurger} />,
    category: <CategoryBurgerMenu setOpenedBurger={setOpenedBurger} />,
    login: <LoginBurgerMenu setOpenedBurger={setOpenedBurger} key="auth" />,
    register: (
      <RegisterBurgerMenu setOpenedBurger={setOpenedBurger} key="auth" />
    ),
  };

  return (
    <header className={css.header}>
      <div className={`container ${css.header__container}`}>
        <div className={css.logoWrapper}>
          <MediaQuery maxWidth={1919}>
            <svg
              className={css.menuIcon}
              onClick={() => {
                setOpenedBurger("main");
                setIsOpen((prev) => !prev);
              }}
            >
              <use href={icons + "#menu"}></use>
            </svg>
          </MediaQuery>
          <Logo color={"logo__header"} />
        </div>

        <MediaQuery minWidth={744}>
          <div className={css.search__section}>
            <MediaQuery minWidth={1920}>
              <CategoryButton />
            </MediaQuery>
            <HeaderSearch />
          </div>
        </MediaQuery>
        <div className={css.info__wrapper}>
          <MediaQuery minWidth={1920}>
            <Contacts />
          </MediaQuery>
          <MediaQuery minWidth={1920}>
            <button className={css.user__button}>
              <svg className={css.headerIcon}>
                <use href={icons + "#heart"}></use>
              </svg>
            </button>
          </MediaQuery>
          <MediaQuery maxWidth={743}>
            <button className={css.user__button}>
              <svg className={css.headerIcon}>
                <use href={icons + "#loop"}></use>
              </svg>
            </button>
          </MediaQuery>
          <button
            className={css.user__button}
            onClick={() => setActiveCartModal(true)}
          >
            <svg className={css.headerIcon}>
              <use href={icons + "#cart"}></use>
            </svg>
          </button>
          <MediaQuery minWidth={1920}>
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
          </MediaQuery>
        </div>
        <MediaQuery maxWidth={1919}>
          <WrapperBurgerMenu isOpen={isOpen} setIsOpen={setIsOpen}>
            {obj[openedBurger]}
          </WrapperBurgerMenu>
        </MediaQuery>
      </div>
    </header>
  );
};

export default Header;

Header.propTypes = {
  setActiveAuthModal: PropTypes.func,
  setActiveCartModal: PropTypes.func,
};
