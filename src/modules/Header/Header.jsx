import icons from "src/images/icons.svg";
import css from "./Header.module.scss";
import PropTypes from "prop-types";

import HeaderSearch from "components/HeaderSearch/HeaderSearch";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Link } from "react-router-dom";
import CategoryButton from "../../components/CategoryButton/CategoryButton";
import Contacts from "../../components/Contacts/Contacts";
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
      <div className="container">
        <div className={css.header__container}>
          <div className={css.header__box}>
            <button 
              className={css.header__burger}
              onClick={() => {
                setOpenedBurger("main");
                setIsOpen((prev) => !prev);
              }}>
                <svg
                  className={css.icon_menu}
                >
                  <use href={icons + "#menu"}></use>
                </svg>
              </button>
              <Link to="/" className={css.header__logo}>
                <svg className={css.icon_paw}>
                  <use href={icons + "#icon-paw"}></use>
                </svg>
                <svg className={css.icon_name}>
                  <use href={icons + "#icon-pettopia"}></use>
                </svg>
              </Link>
          </div>

          <div className={css.header__search}>
              <CategoryButton />
              <HeaderSearch />
          </div>
          
          <div className={css.info}>
              <Contacts />
              <button className={css.info__btn}>
                <svg className={css.icon_heart}>
                  <use href={icons + "#heart"}></use>
                </svg>
              </button>
              <button className={css.info__search}>
                <svg className={css.icon_loop}>
                  <use href={icons + "#loop"}></use>
                </svg>
              </button>
            <button
              className={css.info__cart}
              onClick={() => setActiveCartModal(true)}
            >
              <svg className={css.icon_cart}>
                <use href={icons + "#cart"}></use>
              </svg>
              {/* {!!totalCount && (
                <span className={css.cart_count}>{({totalCount})}</span>
              )} */}
            </button>
              {isLoggedIn ? (
                <Link to="/user/profile" className={css.info__user}>
                  <svg className={css.icon_person}>
                    <use href={icons + "#person"}></use>
                  </svg>
                </Link>
              ) : (
                <button
                  className={css.info__button}
                  onClick={() => setActiveAuthModal(true)}
                >
                  <svg className={css.icon_person}>
                    <use href={icons + "#person"}></use>
                  </svg>
                </button>
              )}
          </div>
        </div>
            <WrapperBurgerMenu isOpen={isOpen} setIsOpen={setIsOpen}>
              {obj[openedBurger]}
            </WrapperBurgerMenu>
      </div>
    </header>
  );
};

export default Header;

Header.propTypes = {
  setActiveAuthModal: PropTypes.func,
  setActiveCartModal: PropTypes.func,
};
