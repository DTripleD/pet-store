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
    subCategory: "",
  });

  const [searchParams, setSearchParams] = useSearchParams();

  const handleCheckboxChange = (event) => {
    const key = event.target.name;

    setFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };

      updatedFilters[key] = event.target.checked;

      const filteredFilters = Object.entries(updatedFilters)
        .filter(([_, v]) => v !== "" && v !== false)
        .reduce((acc, [k, v]) => {
          acc[k] = v;
          return acc;
        }, {});

      setSearchParams(filteredFilters);
      return updatedFilters;
    });
  };

  const handleClearFilters = () => {
    setFilters({
      new: false,
      discounts: false,
    });
    setValue([0, 0]);
  };

  useEffect(() => {
    const params = Object.fromEntries(searchParams.entries());
    const updatedFilters = { ...filters };

    for (const [key, value] of Object.entries(params)) {
      updatedFilters[key] = value === "true";
    }

    setFilters(updatedFilters);
  }, [searchParams]);

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
