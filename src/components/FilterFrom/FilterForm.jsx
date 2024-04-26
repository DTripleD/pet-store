import Slider from "@mui/material/Slider";
import css from "./FilterForm.module.scss";

import FilterElement from "components/FilterElement/FilterElement";
import { useDispatch } from "react-redux";
import { getProducts } from "../../redux/products/productsOperations";

const filtersArray = [
  {
    title: "SubCat",
    filters: [
      { text: "Lorem Ipsum", id: "dogs", name: "dogs" },
      { text: "Lorem Ipsum", id: "cats", name: "cats" },
    ],
  },
  {
    title: "Type",
    filters: [
      { text: "Lorem Ipsum", id: "Pack", name: "Pack" },
      { text: "Lorem Ipsum", id: "Box", name: "Box" },
    ],
  },
  {
    title: "Size",
    filters: [
      { text: "Lorem Ipsum", id: "small", name: "small" },
      { text: "Lorem Ipsum", id: "big", name: "big" },
    ],
  },
];

const FilterForm = ({ value, setValue, animalId, productsId }) => {
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function valuetext(value) {
    return `${value}°C`;
  }

  const dispatch = useDispatch();

  const handlePrice = (event) => {
    event.preventDefault();

    dispatch(getProducts({ productsId, animalId, value }));
  };

  return (
    <div className={css.filters__wrapper}>
      <div className={css.labelsSection}>
        <p className={css.form__title}>Фільтри</p>
        <ul className={css.labelsList}>
          <FilterElement text={"Новинки"} id={"new"} name={"new"} />
          <FilterElement text={"Знижка"} id={"discounts"} name={"discounts"} />
        </ul>
      </div>
      <form className={css.price__form} onSubmit={handlePrice}>
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
              value={value[1] || 0}
              onChange={(e) => setValue([value[0], parseInt(e.target.value)])}
            />
          </label>
        </div>

        <button type="submit" className={css.apply__button}>
          Застосувати
        </button>
      </form>

      {filtersArray.map((filter) => (
        <div className={css.labelsSection} key={filter.title}>
          <p className={css.form__title}>{filter.title}</p>
          <ul className={css.labelsList}>
            {filter.filters.map((item) => (
              <FilterElement
                key={item.id}
                text={item.text}
                id={item.id}
                name={item.name}
              />
            ))}
          </ul>
        </div>
      ))}

      <button className={css.clear__button}>Очистити</button>
    </div>
  );
};

export default FilterForm;
