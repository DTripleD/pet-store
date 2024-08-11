import { useDispatch, useSelector } from 'react-redux';
import BackButtonPage from '../../../components/BackButtonPage/BackButtonPage';
import { selectAuthToken } from '../../../redux/auth/selectors';
import { logOut } from '../../../redux/auth/operations';
import { Link } from 'react-router-dom';
import css from "./ProfileBurgerMenu.module.scss";
import icons from '../../../images/icons.svg';
import PropTypes from "prop-types";

const profileSidebarItems = [
  { title: "Персональні дані", link: "profile", icon: "person" },
  { title: "Мої замовлення", link: "delivery", icon: "car-icon" },
  { title: "Бажане", link: "favorite", icon: "heart" },
  { title: "Кошик", link: "cart", icon: "cart" },
  { title: "Вийти", link: "main", icon: "exit" },
];

const ProfileBurgerMenu = ({ setOpenedBurger, setIsOpen }) => {
  const token = useSelector(selectAuthToken);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut(token));
    setOpenedBurger("main");
  };

  const handleBackClick = () => {
    setOpenedBurger("main");
  };

  const onClose = () => {
    setIsOpen(false);
  }

  return (
    <div className={css.profile}>
      <div className={css.wrapper}>
        <div className={css.btnBack}>
          <BackButtonPage
          text={"Профіль"}
          onClick={handleBackClick}
           />
        </div>
      <ul className={css.userInfoList}>
          {profileSidebarItems.map((item) => (
            <li key={item.title} className={css.userSidebarItem}>
              <svg className={css.userSidebarIcon}>
                <use href={icons + `#${item.icon}`}></use>
              </svg>
              {item.link.length > 0 ? (
                <Link to={`/user/${item.link}`} className={css.userNavItem} onClick={onClose}>
                  {item.title}
                </Link>
              ) : (
                <button className={css.userNavItem} onClick={handleLogOut}>
                  Вийти
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

ProfileBurgerMenu.propTypes = {
  setOpenedBurger: PropTypes.func.isRequired,
  setIsOpen: PropTypes.func,
};

export default ProfileBurgerMenu;