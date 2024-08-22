import css from "./FilterBurger.module.scss";
import icons from "../../images/icons.svg";
import FilterForm from "../../components/FilterFrom/FilterForm";
import PropTypes from "prop-types";

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

FilterBurger.propTypes = {
  filtersIsOpen: PropTypes.bool,
  setFiltersIsOpen: PropTypes.func,
  value: PropTypes.array,
  setValue: PropTypes.func,
  animalId: PropTypes.string,
  productsId: PropTypes.string,
};


export default FilterBurger;
