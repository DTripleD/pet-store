import css from "./PriceSlider.module.scss";
import Slider from "@mui/material/Slider";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { getProducts } from "../../redux/products/productsOperations";
import PropTypes from "prop-types";
import { useState } from "react";

const PriceSlider = ({ setValue, value = [0, 1000], animalId, productsId }) => {
  const dispatch = useDispatch();
  const [sliderValue, setSliderValue] = useState(value);

  const handleChange = (event, newValue) => {
    if (Array.isArray(newValue) && !newValue.includes(NaN)) {
      setSliderValue(newValue);
      setValue(newValue);
    }
  };

  const handleInputChange = (index, newValue) => {
    const parsedValue = newValue === "" ? "" : parseInt(newValue, 10);
    const updatedValue = [...sliderValue];
    updatedValue[index] = isNaN(parsedValue) ? 0 : parsedValue;
    setSliderValue(updatedValue);
    setValue(updatedValue);
  };

  const handlePrice = (event) => {
    event.preventDefault();
    dispatch(getProducts({ productsId, animalId, value: sliderValue }));
  };


  return (
    <form className={css.priceForm} onSubmit={handlePrice}>
      <p className={css.formTitle}>Ціна</p>

      <Slider
        getAriaLabel={() => "Price"}
        value={sliderValue}
        onChange={handleChange}
        valueLabelDisplay="auto"
        min={0}
        max={1000}
      />

      <div className={css.priceInputsWrapper}>
        <label className={css.priceLabel}>
          від
          <input
            type="text"
            className={css.priceInput}
            maxLength="7"
            value={sliderValue[0] | ""}
            onChange={(e) => handleInputChange(0, e.target.value)}
          />
        </label>
        <label className={css.priceLabel}>
          до
          <input
            type="text"
            className={css.priceInput}
            maxLength="1000"
            placeholder="1000"
            value={sliderValue[1] || ""}
            onChange={(e) => handleInputChange(1, e.target.value)}
          />
        </label>
      </div>

      <Button type="submit" text="Застосувати" isSmall={true} />
    </form>
  );
};

PriceSlider.propTypes = {
  value: PropTypes.array,
  setValue: PropTypes.func,
  animalId: PropTypes.string,
  productsId: PropTypes.string,
};

export default PriceSlider;
