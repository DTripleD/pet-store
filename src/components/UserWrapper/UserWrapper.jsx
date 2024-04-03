import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";

import css from "./UserWrapper.module.scss";

import icons from "../../images/icons.svg";

const profileSidebarItems = [
  { title: "Персональні дані", link: "profile", icon: "person" },
  { title: "Мої замовлення", link: "delivery", icon: "car-icon" },
  { title: "Бажане", link: "favorite", icon: "heart" },
  { title: "Кошик", link: "cart", icon: "cart" },
  { title: "Вийти", link: "", icon: "exit" },
];

const UserWrapper = () => {
  return (
    <div className="container">
      <div className={css.userInfoWrapper}>
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
                <button className={css.userNavItem}>Вийти</button>
              )}
            </li>
          ))}
        </ul>

        <Suspense fallback={<div>Loading</div>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default UserWrapper;
