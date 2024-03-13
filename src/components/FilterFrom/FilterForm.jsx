import Slider from "@mui/material/Slider";
import { useState } from "react";

const FilterForm = () => {
  const [value, setValue] = useState([0, 100]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function valuetext(value) {
    return `${value}°C`;
  }

  return (
    <div className="filters__wrapper">
      <div>
        <p className="form__title">Фільтри</p>
        <div>
          <input type="checkbox" id="new" name="new" />
          <label htmlFor="new">Новинки</label>
        </div>
        <div>
          <input type="checkbox" id="discounts" name="discounts" />
          <label htmlFor="discounts">Знижка</label>
        </div>
      </div>
      <form className="price__form">
        <p className="form__title">Ціна</p>
        <Slider
          getAriaLabel={() => "Price"}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
        />
        <div className="price__inputs__wrapper">
          <label className="price__label">
            від
            <input
              type="text"
              className="price__input"
              maxLength="7"
              value={value[0]}
              onChange={(e) => setValue([parseInt(e.target.value), value[1]])}
            />
          </label>
          <label className="price__label">
            до
            <input
              type="text"
              className="price__input"
              maxLength="7"
              value={value[1]}
              onChange={(e) => setValue([value[0], parseInt(e.target.value)])}
            />
          </label>
        </div>

        <button type="submit" className="apply__button">
          Застосувати
        </button>
      </form>
      <div>
        <p className="form__title">Lorem Ipsum</p>
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
        <p className="form__title">Lorem Ipsum</p>
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
      <button className="clear__button">Очистити</button>
    </div>
  );
};

export default FilterForm;
