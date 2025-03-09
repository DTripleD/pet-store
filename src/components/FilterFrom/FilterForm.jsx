import css from "./FilterForm.module.scss";
import PropTypes from "prop-types";
import FilterElement from "./components/FilterElement/FilterElement";
import PriceSlider from "../PriceSlider/PriceSlider";
import FilterBlock from "./components/FilterBlock/FilterBlock";
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

  const dispatch = useDispatch();

  const handleCheckboxChange = useCallback(
    (event) => {
      const { name, checked } = event.target;

      setSearchParams((prevParams) => {
        const updatedParams = new URLSearchParams(prevParams);
        if (checked) {
          updatedParams.set(name, "true");
        } else {
          updatedParams.delete(name);
        }

        const isNew = updatedParams.get("new") === "true";
        const hasDiscount = updatedParams.get("discounts") === "true";

        dispatch(
          getProducts({
            productsId,
            animalId,
            value,
            isNew,
            hasDiscount,
          })
        );

        return updatedParams;
      });
    },
    [animalId, dispatch, productsId, setSearchParams, value]
  );

  const handleClearFilters = useCallback(() => {
    setSearchParams({});
    setValue(initialValue);
  }, [initialValue, setSearchParams, setValue]);

  return (
    <div className={css.filtersWrapper}>
      <div className={css.labelsSection}>
        <p className={css.formTitle}>Фільтри</p>
        <ul className={css.labelsList}>
          <FilterElement
            text={"Новинки"}
            id={"new"}
            name={"new"}
            checked={searchParams.has("new")}
            onChange={handleCheckboxChange}
          />
          <FilterElement
            text={"Знижка"}
            id={"discounts"}
            name={"discounts"}
            checked={searchParams.has("discounts")}
            onChange={handleCheckboxChange}
          />
        </ul>
      </div>
      <PriceSlider
        setValue={setValue}
        value={value}
        initialValue={initialValue}
        animalId={animalId}
        productsId={productsId}
      />
      <FilterBlock
        filters={Object.fromEntries(searchParams.entries())}
        animalId={animalId}
        productsId={productsId}
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
