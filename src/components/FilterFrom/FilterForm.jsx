import Slider from "@mui/material/Slider";
import { useState } from "react";
import css from "./FilterForm.module.scss";

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
      <div>
        <p className={css.form__title}>Фільтри</p>
        <div>
          <input type="checkbox" id="new" name="new" />
          <label htmlFor="new">Новинки</label>
        </div>
        <div>
          <input type="checkbox" id="discounts" name="discounts" />
          <label htmlFor="discounts">Знижка</label>
        </div>
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
      <div>
        <p className={css.form__title}>Lorem Ipsum</p>
        <div>
          <input type="checkbox" id="new" name="new" />
          <label htmlFor="new">Lorem Ipsum</label>
        </div>
        <div>
          <input type="checkbox" id="discounts" name="discounts" />
          <label htmlFor="discounts">Lorem Ipsum</label>
        </div>
      </div>
      <div>
        <p className={css.form__title}>Lorem Ipsum</p>
        <div>
          <input type="checkbox" id="new" name="new" />
          <label htmlFor="new">Lorem Ipsum</label>
        </div>
        <div>
          <input type="checkbox" id="discounts" name="discounts" />
          <label htmlFor="discounts">Lorem Ipsum</label>
        </div>
      </div>
      <div>
        Lorem Ipsum
        <div>
          <input type="checkbox" id="new" name="new" />
          <label htmlFor="new">Lorem Ipsum</label>
        </div>
        <div>
          <input type="checkbox" id="discounts" name="discounts" />
          <label htmlFor="discounts">Lorem Ipsum</label>
        </div>
      </div>
      <button className={css.clear__button}>Очистити</button>
    </div>
  );
};

export default FilterForm;
