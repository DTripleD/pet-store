import { useSelector } from "react-redux";
import FilterElement from "../FilterFrom/components/FilterElement/FilterElement";
import PropTypes from "prop-types";
import Slider from "@mui/material/Slider";
import Button from "../Button/Button";
import css from "./PriceSlider.module.scss";
import { selectPriceRange } from "../../redux/products/productsSelectors";

const PriceSlider = ({
  setValue,
  value,
  handleSubmit,
  isNew,
  setIsNew,
  isDiscount,
  setIsDiscount,
}) => {
  const priceRange = useSelector(selectPriceRange);

  const handleChange = (event, newValue) => {
    if (Array.isArray(newValue) && !newValue.includes(NaN)) {
      if (newValue[0] !== value[0] || newValue[1] !== value[1]) {
        setValue(newValue);
      }
    }
  };

  const handleInputChange = (index, newValue) => {
    const parsedValue = newValue === "" ? "" : parseInt(newValue, 10);
    const updatedValue = [...value];
    updatedValue[index] = isNaN(parsedValue) ? 0 : parsedValue;

    setValue(updatedValue);
  };

  return (
    <form className={css.priceForm} onSubmit={handleSubmit}>
      <div className={css.labelsSection}>
        <p className={css.formTitle}>Фільтри</p>
        <ul className={css.labelsList}>
          <FilterElement
            text={"Новинки"}
            id={"new"}
            name={"new"}
            checked={isNew}
            onChange={() => setIsNew((prev) => !prev)}
          />
          <FilterElement
            text={"Знижка"}
            id={"discounts"}
            name={"discounts"}
            checked={isDiscount}
            onChange={() => setIsDiscount((prev) => !prev)}
          />
        </ul>
      </div>
      <p className={css.formTitle}>Ціна</p>

      <Slider
        getAriaLabel={() => "Price"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        min={priceRange[0]}
        max={priceRange[1]}
      />

      <div className={css.priceInputsWrapper}>
        <label className={css.priceLabel}>
          від
          <input
            type="text"
            className={css.priceInput}
            maxLength="7"
            value={value[0] || ""}
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
  handleSubmit: PropTypes.func,
  isNew: PropTypes.bool,
  setIsNew: PropTypes.func,
  isDiscount: PropTypes.bool,
  setIsDiscount: PropTypes.func,
};

export default PriceSlider;
