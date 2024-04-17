import css from "./HeaderSearch.module.scss";
import icons from "../../images/icons.svg";

const HeaderSearch = () => {
  return (
    <form className={css.headerSearch}>
      <label className={css.headerLabel}>
        <svg className={css.headerIcon}>
          <use href={icons + "#loop"}></use>
        </svg>
        <input type="text" placeholder="Пошук..." className={css.headerInput} />
      </label>
      <button type="submit" className={css.searchButton}>
        Пошук
      </button>
    </form>
  );
};

export default HeaderSearch;
