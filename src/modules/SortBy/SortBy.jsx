import css from "./SortBy.module.scss";

import icons from "src/images/icons.svg";
import { useState } from "react";

const SortBy = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [sortBy, setSortBy] = useState("");
  return (
    <div>
      <div className={css.sort__text__wrapper}>
        <p className={css.sort__text}>Сортувати</p>
        <div
          className={css.select__header}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <p className={`${css.sort__text} ${css.sort_by__text}`}>
            {sortBy.length > 0 ? sortBy : "За рейтингом"}
          </p>
          <svg
            className={`${css.icon__down__sort} ${
              isOpen ? css.icon__sort__open : ""
            }`}
          >
            <use href={icons + "#icon-down"}></use>
          </svg>
        </div>
      </div>

      {isOpen && (
        <ul className={css.dropdown}>
          <li
            className={css.dropdownItem}
            onClick={() => {
              setSortBy("Від дешевих до дорогих");
              setIsOpen(false);
            }}
          >
            Від дешевих до дорогих
          </li>
          <li
            className={css.dropdownItem}
            onClick={() => {
              setSortBy("Від дорогих до дешевих");
              setIsOpen(false);
            }}
          >
            Від дорогих до дешевих
          </li>
        </ul>
      )}
    </div>
  );
};

export default SortBy;
