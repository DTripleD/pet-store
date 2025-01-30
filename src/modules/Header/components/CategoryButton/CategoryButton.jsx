import HeaderDropDown from "components/HeaderDropDown/HeaderDropDown";
import css from "./CategoryButton.module.scss";
import { useState } from "react";
import icons from "src/images/icons.svg";

const CategoryButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={css.dropdown}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onClick={() => setIsOpen(false)}
    >
      <button className={css.category__header_button} type="button">
        <svg className={css.headerIcon}>
          <use href={icons + "#lines"}></use>
        </svg>
        <p className={css.header__btn_text}>Категорії</p>
      </button>
      <HeaderDropDown isOpen={isOpen} />
    </div>
  );
};

export default CategoryButton;
