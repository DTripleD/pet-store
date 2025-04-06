import css from "./SortBy.module.scss";

import icons from "src/images/icons.svg";
import { useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";

const SortBy = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const dropdownRef = useRef(null);

  const sortBy = searchParams.get("sortBy");

  function setSortByd(sortBy) {
    searchParams.set("sortBy", sortBy);
    setSearchParams(searchParams);
  }

  const sortByValues = ["Від дешевих до дорогих", "Від дорогих до дешевих"];

  return (
    <div
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onClick={() => setIsOpen(false)}
    >
      <div className={css.sortTextWrapper}>
        <p className={css.sortText}>Сортувати від</p>
        <div className={css.selectHeader}>
          <p className={`${css.sortText} ${css.sortByText}`}>
            {sortBy ? sortBy : ""}
          </p>
          <svg
            className={`${css.iconDownSort} ${
              isOpen ? css.icon__sort__open : ""
            }`}
          >
            <use href={icons + "#icon-down"}></use>
          </svg>
        </div>
      </div>

      <ul
        ref={dropdownRef}
        className={`${css.dropdown} ${isOpen ? css.isOpen : ""}`}
      >
        {sortByValues.map((value) => (
          <li
            key={value}
            className={css.dropdownItem}
            onClick={() => {
              setSortByd(value);
              setIsOpen(false);
            }}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SortBy;
