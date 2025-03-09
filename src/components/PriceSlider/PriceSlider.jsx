import css from "./PriceSlider.module.scss";
import Slider from "@mui/material/Slider";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { getProducts } from "../../redux/products/productsOperations";
import PropTypes from "prop-types";
import { useSearchParams } from "react-router-dom";

const PriceSlider = ({
  setValue,
  value,
  animalId,
  productsId,
  initialValue,
}) => {
  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();

  function handleChange(event, newValue) {
    if (Array.isArray(newValue) && !newValue.includes(NaN)) {
      if (newValue[0] !== value[0] || newValue[1] !== value[1]) {
        setValue(newValue);
      }
    }
  }

  function handleInputChange(index, newValue) {
    const parsedValue = newValue === "" ? "" : parseInt(newValue, 10);
    const updatedValue = [...value];
    updatedValue[index] = isNaN(parsedValue) ? 0 : parsedValue;

    setValue(updatedValue);
  }

  function handlePrice(event) {
    event.preventDefault();

    if (
      value[0] !== searchParams.get("min") ||
      value[1] !== searchParams.get("max")
    ) {
      searchParams.set("min", value[0]);
      searchParams.set("max", value[1]);
      setSearchParams(searchParams);
      dispatch(getProducts({ productsId, animalId, value }));
    }
  }

  return (
    <form className={css.priceForm} onSubmit={handlePrice}>
      <p className={css.formTitle}>Ціна</p>

      <Slider
        getAriaLabel={() => "Price"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        min={initialValue[0]}
        max={initialValue[1]}
      />

      <div className={css.priceInputsWrapper}>
        <label className={css.priceLabel}>
          від
          <input
            type="text"
            className={css.priceInput}
            maxLength="7"
            value={value[0] | ""}
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
            value={value[1] || ""}
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
  initialValue: PropTypes.array,
};

export default PriceSlider;
