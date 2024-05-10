import { Link } from "react-router-dom";

import icons from "src/images/icons.svg";

import css from "./Sidebar.module.scss";
import { sidebarItems } from "src/data/sidebarItems";

const Sidebar = () => {
  return (
    <div className={css.sidebar__wrapper}>
      <ul className={css.category_list}>
        {sidebarItems.map((item) => (
          <li key={item.id}>
            <Link to={`${item.id}`} className={css.category_link}>
              <svg className={css.category_logo}>
                <use href={icons + `#${item.icon}`}></use>
              </svg>
              <p>{item.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
