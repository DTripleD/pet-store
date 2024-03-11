import { Link } from "react-router-dom";

import icons from "../../images/icons.svg";

const Sidebar = () => {
  return (
    <div className="sidebar__wrapper">
      <ul className="category-list">
        <li>
          <Link to="discount" className="category-link">
            <svg className="category-logo">
              <use href={icons + "#discount"}></use>
            </svg>
            <p>Акції</p>
          </Link>
        </li>
        <li>
          <Link to="dogs" className="category-link">
            <svg className="category-logo">
              <use href={icons + "#dog"}></use>
            </svg>
            <p>Собаки</p>
          </Link>
        </li>
        <li>
          <Link to="cats" className="category-link">
            <svg className="category-logo">
              <use href={icons + "#cat"}></use>
            </svg>
            <p>Коти</p>
          </Link>
        </li>
        <li>
          <Link to="smallpets" className="category-link">
            <svg className="category-logo">
              <use href={icons + "#mouse"}></use>
            </svg>
            <p>Гризуни</p>
          </Link>
        </li>
        <li>
          <Link to="birds" className="category-link">
            <svg className="category-logo">
              <use href={icons + "#bird"}></use>
            </svg>
            <p>Птахи</p>
          </Link>
        </li>
        <li>
          <Link to="reptiles" className="category-link">
            <svg className="category-logo">
              <use href={icons + "#turtle"}></use>
            </svg>
            <p>Рептилії</p>
          </Link>
        </li>
        <li>
          <Link to="fish" className="category-link">
            <svg className="category-logo">
              <use href={icons + "#fish"}></use>
            </svg>
            <p>Риби</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
