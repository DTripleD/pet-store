import { NavLink } from "react-router-dom";

import icons from "../../images/icons.svg";
import { useState } from "react";

import Sidebar from "../Sidebar/Sidebar";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="container header__container">
        <NavLink to="/" className="logo__wrapper">
          <svg className="logo logo__header">
            <use href={icons + "#logo"}></use>
          </svg>
        </NavLink>
        <div className="search__section">
          <button
            className="category__header--button"
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <svg className="icon__header">
              <use href={icons + "#lines"}></use>
            </svg>
            <p className="header__btn--text">Категорії</p>
          </button>
          <label className="header__label">
            <svg className="icon__header">
              <use href={icons + "#loop"}></use>
            </svg>
            <input
              type="text"
              placeholder="Пошук..."
              className="header__input"
            />
          </label>
        </div>
        <div className="info__wrapper">
          <div>
            <div className="phone__wrapper">
              <svg className="icon__header">
                <use href={icons + "#phone"}></use>
              </svg>
              <a href="tel:+000-000-00-00" className="phone">
                000-000-00-00
              </a>
              <svg className={`icon__header icon__down__header`}>
                <use href={icons + "#icon-down"}></use>
              </svg>
            </div>
            <p className="work_hours">Без вихідних, з 8 до 20 </p>
          </div>
          <button className="user__button">
            <svg className="icon__header">
              <use href={icons + "#heart"}></use>
            </svg>
          </button>
          <button className="user__button">
            <svg className="icon__header">
              <use href={icons + "#cart"}></use>
            </svg>
          </button>
          <button className="user__button">
            <svg className="icon__header">
              <use href={icons + "#person"}></use>
            </svg>
          </button>
        </div>

        <div className={`menu ${!menuOpen ? "visually_hidden" : ""}`}>
          <Sidebar />
        </div>
      </div>
    </header>
  );
};

export default Header;
