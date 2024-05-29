import css from "./PriceSlider.module.scss";
import Slider from "@mui/material/Slider";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { getProducts } from "../../redux/products/productsOperations";

const PriceSlider = ({ setValue, value, animalId, productsId }) => {
  const dispatch = useDispatch();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function valuetext(value) {
    return `${value}°C`;
  }

  const handlePrice = (event) => {
    event.preventDefault();

    dispatch(getProducts({ productsId, animalId, value }));
  };

  return (
    <form className={css.priceForm} onSubmit={handlePrice}>
      <p className={css.form__title}>Ціна</p>

      <Slider
        getAriaLabel={() => "Price"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />

      <div className={css.priceInputsWrapper}>
        <label className={css.priceLabel}>
          від
          <input
            type="text"
            className={css.priceInput}
            maxLength="7"
            value={value[0]}
            onChange={(e) => setValue([parseInt(e.target.value), value[1]])}
          />
        </label>
        <label className={css.priceLabel}>
          до
          <input
            type="text"
            className={css.priceInput}
            maxLength="7"
            value={value[1] || 0}
            onChange={(e) => setValue([value[0], parseInt(e.target.value)])}
          />
        </label>
      </div>

      <Button type="submit" text="Застосувати" isSmall={true} />
    </form>
  );
};

export default PriceSlider;
