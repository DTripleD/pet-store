import css from "./SortBy.module.scss";

import icons from "src/images/icons.svg";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const SortBy = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  function setSortByd(sortBy) {
    setSearchParams({ sortBy });
  }

  return (
    <div>
      <div className={css.sortTextWrapper}>
        <p className={css.sortText}>Сортувати від</p>
        <div
          className={css.selectHeader}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {/* <p className={`${css.sortText} ${css.sortByText}`}>
            {sortBy.length > 0 ? sortBy : "За рейтингом"}
          </p> */}
          <svg
            className={`${css.iconDownSort} ${
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
              setSortByd("Від дешевих до дорогих");
              setIsOpen(false);
            }}
          >
            Від дешевих до дорогих
          </li>
          <li
            className={css.dropdownItem}
            onClick={() => {
              setSortByd("Від дорогих до дешевих");
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
