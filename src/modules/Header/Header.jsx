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

const Header = ({ setActiveAuthModal, setActiveCartModal }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={css.header}>
      <div className={`container ${css.header__container}`}>
        <Logo color={"logo__header"} />

        <MediaQuery minWidth={744}>
          <div className={css.search__section}>
            <CategoryButton />
            <HeaderSearch />
          </div>
        </MediaQuery>
        <div className={css.info__wrapper}>
          <MediaQuery minWidth={744}>
            <Contacts />
          </MediaQuery>

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
