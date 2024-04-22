import Slider from "@mui/material/Slider";
import { useState } from "react";
import css from "./FilterForm.module.scss";

import FilterElement from "../FilterElement/FilterElement";

const FilterForm = () => {
  const [value, setValue] = useState([0, 100]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function valuetext(value) {
    return `${value}°C`;
  }

  return (
    <div className={css.filters__wrapper}>
      <div className={css.labelsSection}>
        <p className={css.form__title}>Фільтри</p>
        <ul className={css.labelsList}>
          <FilterElement text={"Новинки"} id={"new"} name={"new"} />
          <FilterElement text={"Знижка"} id={"discounts"} name={"discounts"} />
        </ul>
      </div>
      <form className={css.price__form}>
        <p className={css.form__title}>Ціна</p>
        <Slider
          getAriaLabel={() => "Price"}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
        />
        <div className={css.price__inputs__wrapper}>
          <label className={css.price__label}>
            від
            <input
              type="text"
              className={css.price__input}
              maxLength="7"
              value={value[0]}
              onChange={(e) => setValue([parseInt(e.target.value), value[1]])}
            />
          </label>
          <label className={css.price__label}>
            до
            <input
              type="text"
              className={css.price__input}
              maxLength="7"
              value={value[1]}
              onChange={(e) => setValue([value[0], parseInt(e.target.value)])}
            />
          </label>
        </div>

        <button type="submit" className={css.apply__button}>
          Застосувати
        </button>
      </form>
      <div className={css.labelsSection}>
        <p className={css.form__title}>Lorem Ipsum</p>
        <ul className={css.labelsList}>
          <FilterElement text={"Lorem Ipsum"} id={"new"} name={"new"} />
          <FilterElement
            text={"Lorem Ipsum"}
            id={"discounts"}
            name={"discounts"}
          />
        </ul>
      </div>
      <div className={css.labelsSection}>
        <p className={css.form__title}>Lorem Ipsum</p>
        <ul className={css.labelsList}>
          <FilterElement text={"Lorem Ipsum"} id={"new"} name={"new"} />
          <FilterElement
            text={"Lorem Ipsum"}
            id={"discounts"}
            name={"discounts"}
          />
        </ul>
      </div>
      <div className={css.labelsSection}>
        <p className={css.form__title}>Lorem Ipsum</p>
        <ul className={css.labelsList}>
          <FilterElement text={"Lorem Ipsum"} id={"new"} name={"new"} />
          <FilterElement
            text={"Lorem Ipsum"}
            id={"discounts"}
            name={"discounts"}
          />
        </ul>
      </div>

      <button className={css.clear__button}>Очистити</button>
    </div>
  );
};

export default FilterForm;
