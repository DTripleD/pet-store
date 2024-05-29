import css from "./FilterBurger.module.scss";
import icons from "../../images/icons.svg";
import FilterElement from "../../components/FilterElement/FilterElement";
import FilterBlock from "../../components/FilterBlock/FilterBlock";
import PriceSlider from "../../components/PriceSlider/PriceSlider";
import FilterForm from "../../components/FilterFrom/FilterForm";

const FilterBurger = ({
  filtersIsOpen,
  setFiltersIsOpen,
  value,
  setValue,
  animalId,
  productsId,
}) => {
  return (
    <div
      className={`${css.filterBurgerWrapper} ${filtersIsOpen ? css.open : ""}`}
    >
      <div className={`${css.burgerContainer} ${css.burgerHeader}`}>
        <p className={css.burgerHeaderText}>Фільтри</p>
        <svg
          className={css.iconClose}
          onClick={() => {
            setFiltersIsOpen(false);
          }}
        >
          <use href={icons + "#cross"}></use>
        </svg>
      </div>
      <div className={`${css.burgerContainer} ${css.filterSection}`}>
        <FilterForm
          value={value}
          setValue={setValue}
          animalId={animalId}
          productsId={productsId}
        />
      </div>
    </div>
  );
};

export default FilterBurger;
