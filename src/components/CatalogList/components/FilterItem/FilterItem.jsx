import css from "./FilterItem.module.scss";
import icons from "src/images/icons.svg";
import PropTypes from "prop-types";
import { useSearchParams } from "react-router-dom";

const FilterItem = ({ title, id }) => {
  const [_, setSearchParams] = useSearchParams();

  function deleteFilter() {
    setSearchParams((prevParams) => {
      const updatedParams = new URLSearchParams(prevParams);

      if (id === "price") {
        updatedParams.delete("min");
        updatedParams.delete("max");
      } else {
        updatedParams.delete(id);
      }

      return updatedParams;
    });
  }

  return (
    <div className={css.filterLabel}>
      <p className={css.labelText}>{title}</p>
      <svg className={css.iconClose} onClick={deleteFilter}>
        <use href={icons + "#cross"}></use>
      </svg>
    </div>
  );
};

FilterItem.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
};

export default FilterItem;
