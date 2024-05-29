import css from "./FilterForm.module.scss";

import PropTypes from "prop-types";

import FilterElement from "components/FilterElement/FilterElement";

import FilterBlock from "../FilterBlock/FilterBlock";
import PriceSlider from "../PriceSlider/PriceSlider";

const FilterForm = ({ value, setValue, animalId, productsId }) => {
  return (
    <div className={css.filters__wrapper}>
      <div className={css.labelsSection}>
        <p className={css.form__title}>Фільтри</p>
        <ul className={css.labelsList}>
          <FilterElement text={"Новинки"} id={"new"} name={"new"} />
          <FilterElement text={"Знижка"} id={"discounts"} name={"discounts"} />
        </ul>
      </div>
      <PriceSlider
        setValue={setValue}
        value={value}
        animalId={animalId}
        productsId={productsId}
      />

      <FilterBlock />

      <button className={css.clear__button}>Очистити</button>
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
