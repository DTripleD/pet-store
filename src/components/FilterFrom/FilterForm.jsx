import css from "./FilterForm.module.scss";
import PropTypes from "prop-types";

import PriceSlider from "../PriceSlider/PriceSlider";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getProducts } from "../../redux/products/productsOperations";

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

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setIsNew(!!searchParams.get("isNew"));
    setIsDiscount(!!searchParams.get("hasDiscount"));
  }, [searchParams]);

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
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
  };

  return (
    <div className={css.filtersWrapper}>
      <PriceSlider
        setValue={setValue}
        value={value}
        handleSubmit={handleSubmit}
        isNew={isNew}
        setIsNew={setIsNew}
        isDiscount={isDiscount}
        setIsDiscount={setIsDiscount}
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
  subcategory: PropTypes.string,
  priceRange: PropTypes.array,
  handleClearFilters: PropTypes.func,
};

export default FilterForm;
