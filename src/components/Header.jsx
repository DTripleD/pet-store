import { NavLink } from "react-router-dom";

import icons from "../images/icons.svg";

const Header = () => {
  return (
    <div className="container">
      <NavLink to="/">
        <svg className="logo">
          <use href={icons + "#logo"}></use>
        </svg>
      </NavLink>

      <p>Категорії</p>

      <label>
        <svg className="category-logo">
          <use href={icons + "#turtle"}></use>
        </svg>
        <input type="text" placeholder="Пошук..." />
      </label>

      <svg className="category-logo">
        <use href={icons + "#turtle"}></use>
      </svg>
      <svg className="category-logo">
        <use href={icons + "#turtle"}></use>
      </svg>
      <svg className="category-logo">
        <use href={icons + "#turtle"}></use>
      </svg>
    </div>
  );
};

export default Header;
