import css from "./FilterForm.module.scss";
import PropTypes from "prop-types";
import FilterElement from "./components/FilterElement/FilterElement";
import FilterBlock from "./components/FilterBlock/FilterBlock";
import PriceSlider from "../PriceSlider/PriceSlider";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const FilterForm = ({ value, setValue, animalId, productsId }) => {
  const [filters, setFilters] = useState({
    new: false,
    discounts: false,
    subCategory: false,
  });

  const [searchParams, setSearchParams] = useSearchParams();

  const handleCheckboxChange = (event) => {
    if (event.target.id === "new") {
      setFilters({
        ...filters,
        new: event.target.checked,
      });
    } else if (event.target.id === "discounts") {
      setFilters({
        ...filters,
        discounts: event.target.checked,
      });
    } else if (event.target.id === "subCategory") {
      console.log("sdf");
      setFilters({
        ...filters,
        discounts: event.target.key,
      });
    }

    const filteredFilters = Object.entries(filters)
      .filter(([key, value]) => value !== false)
      .reduce((acc, [key, value]) => {
        acc[key] = value;
        return acc;
      }, {});

    // console.log(filteredFilters);

    setSearchParams(filters);
  };

  const handleClearFilters = () => {
    setFilters({
      new: false,
      discounts: false,
    });
    setValue([0, 0]);
  };

  return (
    <div className={css.filtersWrapper}>
      <div className={css.labelsSection}>
        <p className={css.formTitle}>Фільтри</p>
        <ul className={css.labelsList}>
          <FilterElement
            text={"Новинки"}
            id={"new"}
            name={"new"}
            checked={filters.new}
            onChange={handleCheckboxChange}
          />
          <FilterElement
            text={"Знижка"}
            id={"discounts"}
            name={"discounts"}
            checked={filters.discounts}
            onChange={handleCheckboxChange}
          />
        </ul>
      </div>
      <PriceSlider
        setValue={setValue}
        value={value}
        animalId={animalId}
        productsId={productsId}
      />

      <FilterBlock
        filters={filters}
        animalId={animalId}
        productsId={productsId}
        handleCheckboxChange={handleCheckboxChange}
      />

      <button className={css.clearButton} onClick={handleClearFilters}>
        Очистити
      </button>
    </div>
  );
};

export default FilterForm;

FilterForm.propTypes = {
  value: PropTypes.array,
  setValue: PropTypes.func,
  animalId: PropTypes.string,
  productsId: PropTypes.string,
};
