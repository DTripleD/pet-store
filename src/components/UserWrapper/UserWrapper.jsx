import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";

import css from "./UserWrapper.module.scss";

import icons from "src/images/icons.svg";
import { logOut } from "../../redux/auth/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectAuthToken } from "../../redux/auth/selectors";
import Loader from "../Loader/Loader";

const profileSidebarItems = [
  { title: "Персональні дані", link: "profile", icon: "person" },
  { title: "Мої замовлення", link: "delivery", icon: "car-icon" },
  { title: "Бажане", link: "favorite", icon: "heart" },
  { title: "Кошик", link: "cart", icon: "cart" },
  { title: "Вийти", link: "", icon: "exit" },
];

const UserWrapper = () => {
  const dispatch = useDispatch();

  const token = useSelector(selectAuthToken);

  const handleLogOut = () => {
    dispatch(logOut(token));
  };

  return (
    <div className={`container ${css.userInfoWrapper}`}>
      <ul className={css.userInfoList}>
        {profileSidebarItems.map((item) => (
          <li key={item.title} className={css.userSidebarItem}>
            <svg className={css.userSidebarIcon}>
              <use href={icons + `#${item.icon}`}></use>
            </svg>
            {item.link.length > 0 ? (
              <Link to={item.link} className={css.userNavItem}>
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

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default UserWrapper;
