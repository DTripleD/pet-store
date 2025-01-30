import FilterElement from "../FilterElement/FilterElement";
import css from "./FilterBlock.module.scss";
import PropTypes from "prop-types";

const filtersArray = [
  {
    title: "SubCat",
    filters: [
      { text: "Lorem Ipsum", id: "dogs", name: "dogs" },
      { text: "Lorem Ipsum", id: "cats", name: "cats" },
    ],
  },
  {
    title: "Type",
    filters: [
      { text: "Lorem Ipsum", id: "Pack", name: "Pack" },
      { text: "Lorem Ipsum", id: "Box", name: "Box" },
    ],
  },
  {
    title: "Size",
    filters: [
      { text: "Lorem Ipsum", id: "small", name: "small" },
      { text: "Lorem Ipsum", id: "big", name: "big" },
    ],
  },
];

const FilterBlock = ({ filters, setFilters }) => {
  const handleCheckboxChange = (event) => {
    setFilters({
      ...filters,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <>
      {filtersArray.map((filter) => (
        <div className={css.labelsSection} key={filter.title}>
          <p className={css.formTitle}>{filter.title}</p>
          <ul className={css.labelsList}>
            {filter.filters.map((item) => (
              <FilterElement
                key={item.id}
                text={item.text}
                id={item.id}
                name={item.name}
                checked={filters[item.name] || false}
                onChange={handleCheckboxChange}
              />
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

FilterBlock.propTypes = {
  filters: PropTypes.object,
  setFilters: PropTypes.func,
};

export default FilterBlock;
