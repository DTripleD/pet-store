import css from "./FilterForm.module.scss";
import PropTypes from "prop-types";

import PriceSlider from "../PriceSlider/PriceSlider";
import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getProducts } from "../../redux/products/productsOperations";

const FilterForm = ({
  value,
  setValue,
  animalId,
  productsId,
  initialValue,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleClearFilters = useCallback(() => {
    setSearchParams({});
    setValue(initialValue);
  }, [initialValue, setSearchParams, setValue]);

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = gatherFormData();

    if (
      formData.minPrice !== searchParams.get("min") ||
      formData.maxPrice !== searchParams.get("max")
    ) {
      searchParams.set("min", formData.minPrice);
      searchParams.set("max", formData.maxPrice);
      setSearchParams(searchParams);
    }

    dispatch(
      getProducts({
        productsId,
        animalId,
        value: [formData.minPrice, formData.maxPrice],
        isNew: formData.isNew,
        discount: formData.isDiscount,
      })
    );
  };

  const gatherFormData = () => {
    const minPrice = value[0];
    const maxPrice = value[1];
    const isNew = searchParams.get("new") === "true";
    const isDiscount = searchParams.get("discounts") === "true";

    return { minPrice, maxPrice, isNew, isDiscount };
  };

  return (
    <div className={css.filtersWrapper}>
      <PriceSlider
        setValue={setValue}
        value={value}
        initialValue={initialValue}
        animalId={animalId}
        productsId={productsId}
        handleSubmit={handleSubmit}
      />

      <button className={css.clearButton} onClick={handleClearFilters}>
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
  initialValue: PropTypes.array,
};

export default FilterForm;
