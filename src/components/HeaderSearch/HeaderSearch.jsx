import { useState } from "react";
import css from "./HeaderSearch.module.scss";
import icons from "src/images/icons.svg";

const HeaderSearch = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");

  function clearFormInput() {
    setValue("");
  }

  return (
    <form className={css.headerSearch}>
      <label className={`${css.headerLabel} ${isFocused ? css.focused : ""}`}>
        {value.length > 0 ? (
          <svg className={css.icon_cross} onClick={clearFormInput}>
            <use href={icons + "#cross"}></use>
          </svg>
        ) : (
          <svg className={css.icon_loop}>
            <use href={icons + "#loop"}></use>
          </svg>
        )}

        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          placeholder="Пошук..."
          className={css.headerInput}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </label>
      <button type="submit" className={css.searchButton}>
        Знайти
      </button>
    </form>
  );
};

export default HeaderSearch;
