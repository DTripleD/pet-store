import css from "./FilterForm.module.scss";
import PropTypes from "prop-types";

import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getProducts } from "../../redux/products/productsOperations";
import FilterElement from "./components/FilterElement/FilterElement";
import { useSelector } from "react-redux";
import Slider from "@mui/material/Slider";
import Button from "../Button/Button";
import { selectPriceRange } from "../../redux/products/productsSelectors";

const FilterForm = ({
  value,
  setValue,
  animalId,
  productsId,
  subcategory,
  priceRange,
  handleClearFilters,
}) => {
  const [isNew, setIsNew] = useState(false);
  const [isDiscount, setIsDiscount] = useState(false);
  const [isSubmitDisable, setIsSubmitDisable] = useState(true);

  const [isDisable, setIsDisable] = useState(true);
  const selectedPriceRange = useSelector(selectPriceRange);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setIsNew(!!searchParams.get("isNew"));
    setIsDiscount(!!searchParams.get("hasDiscount"));
  }, [searchParams]);

  const dispatch = useDispatch();

  useEffect(() => {
    if (searchParams.size) {
      setIsDisable(false);
    } else {
      setIsDisable(true);
    }
  }, [searchParams]);

  useEffect(() => {
    const isNewFromSearchParams = !!searchParams.get("isNew");
    const isDiscountFromSearchParams = !!searchParams.get("hasDiscount");
    const minPriceSearchParams = searchParams.get("minPrice");
    const maxPriceSearchParams = searchParams.get("maxPrice");
    const minPriceLocal = value[0];
    const maxPriceSearchLocal = value[1];

    setIsSubmitDisable(
      isNew !== isNewFromSearchParams ||
        isDiscount !== isDiscountFromSearchParams ||
        minPriceLocal !== Number(minPriceSearchParams) ||
        maxPriceSearchLocal !== Number(maxPriceSearchParams)
    );
  }, [isDiscount, isNew, searchParams, value]);

  function handleSubmit(event) {
    event.preventDefault();

    const searchValue = searchParams.get("searchValue");

    const formData = {};

    if (priceRange[0] !== value[0] || priceRange[1] !== value[1]) {
      formData.minPrice = value[0];
      formData.maxPrice = value[1];
    }

    if (isNew) {
      formData.isNew = isNew;
    }

    if (isDiscount) {
      formData.hasDiscount = isDiscount;
    }

    if (searchValue) {
      formData.searchValue = searchValue;
    }

    if (Object.keys(formData).length > 0) {
      setSearchParams(formData);
      dispatch(
        getProducts({
          productsId,
          animalId,
          subcategory,
          value: [formData.minPrice, formData.maxPrice],
          isNew: formData.isNew,
          hasDiscount: formData.hasDiscount,
        })
      );
    }
  }

  function handleChange(event, newValue) {
    if (Array.isArray(newValue) && !newValue.includes(NaN)) {
      if (newValue[0] !== value[0] || newValue[1] !== value[1]) {
        setValue(newValue);
      }
    }
  }

  const handleInputChange = (index, newValue) => {
    const parsedValue = newValue === "" ? "" : parseInt(newValue, 10);
    const updatedValue = [...value];
    updatedValue[index] = isNaN(parsedValue) ? 0 : parsedValue;

    setValue(updatedValue);
  };

  return (
    <div className={css.filtersWrapper}>
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
          min={selectedPriceRange[0]}
          max={selectedPriceRange[1]}
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

        <Button
          type="submit"
          text="Застосувати"
          isSmall={true}
          isAble={isSubmitDisable}
        />
      </form>
      <button
        className={css.clearButton}
        disabled={isDisable}
        onClick={handleClearFilters}
      >
        Очистити
      </button>
    </div>
  );
};

FilterForm.propTypes = {
  value: PropTypes.array,
  setValue: PropTypes.func,
  animalId: PropTypes.string,
  productsId: PropTypes.string,
  subcategory: PropTypes.string,
  priceRange: PropTypes.array,
  handleClearFilters: PropTypes.func,
};

export default FilterForm;
