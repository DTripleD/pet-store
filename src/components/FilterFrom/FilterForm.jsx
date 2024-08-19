import css from "./FilterForm.module.scss";
import PropTypes from "prop-types";
import FilterElement from "components/FilterElement/FilterElement";
import FilterBlock from "../FilterBlock/FilterBlock";
import PriceSlider from "../PriceSlider/PriceSlider";
import { useState } from "react";

const FilterForm = ({ value, setValue, animalId, productsId }) => {
  const [filters, setFilters] = useState({
    new: false,
    discounts: false,
  });

  const handleCheckboxChange = (event) => {
    setFilters({
      ...filters,
      [event.target.name]: event.target.checked,
    });
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
        setFilters={setFilters} 
        handleCheckboxChange={handleCheckboxChange} 
      />

      <button className={css.clearButton} onClick={handleClearFilters}>Очистити</button>
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
