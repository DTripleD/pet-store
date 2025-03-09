import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getProducts } from "../../redux/products/productsOperations";
import FilterElement from "../FilterFrom/components/FilterElement/FilterElement";
import PropTypes from "prop-types";
import Slider from "@mui/material/Slider";
import Button from "../Button/Button";
import css from "./PriceSlider.module.scss";

const PriceSlider = ({
  setValue,
  value,
  animalId,
  productsId,
  initialValue,
  handleSubmit, // Добавляем обработчик сабмита
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

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

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;

    setSearchParams((prevParams) => {
      const updatedParams = new URLSearchParams(prevParams);
      if (checked) {
        updatedParams.set(name, "true");
      } else {
        updatedParams.delete(name);
      }

      // Применяем фильтры через запрос
      const isNew = updatedParams.get("new") === "true";
      const discount = updatedParams.get("discounts") === "true";

      dispatch(
        getProducts({
          productsId,
          animalId,
          value,
          isNew,
          discount,
        })
      );

      return updatedParams;
    });
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
            checked={searchParams.has("new")} // проверяем наличие параметра
            onChange={handleCheckboxChange}
          />
          <FilterElement
            text={"Знижка"}
            id={"discounts"}
            name={"discounts"}
            checked={searchParams.has("discounts")} // проверяем наличие параметра
            onChange={handleCheckboxChange}
          />
        </ul>
      </div>
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
  animalId: PropTypes.string,
  productsId: PropTypes.string,
  initialValue: PropTypes.array,
  handleSubmit: PropTypes.func,
};

export default PriceSlider;
