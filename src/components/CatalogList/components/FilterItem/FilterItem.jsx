import css from "./FilterItem.module.scss";
import icons from "src/images/icons.svg";
import PropTypes from "prop-types";

const FilterItem = ({ filterValue }) => {
  return (
    <div className={css.filterLabel}>
      <p className={css.labelText}>{filterValue}</p>
      <svg className={css.iconClose}>
        <use href={icons + "#cross"}></use>
      </svg>
    </div>
  );
};

FilterItem.propTypes = {
  filterValue: PropTypes.string,
};

export default FilterItem;
