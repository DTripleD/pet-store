import { useSearchParams } from "react-router-dom";
import FilterElement from "../FilterElement/FilterElement";
import css from "./FilterBlock.module.scss";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSubCategories } from "../../../../redux/subCategories/subCategoriesOperations";
import { selectSubCategories } from "../../../../redux/subCategories/subCategoriesSelectors";

const FilterBlock = ({
  filters,
  animalId,
  productsId,
  handleCheckboxChange,
}) => {
  const [searchParams] = useSearchParams();
  // console.log(searchParams.get("subCategory"));

  const subCategories = useSelector(selectSubCategories);
  const filteredData = subCategories.filter((item) => {
    return item.key.includes(animalId) && item.key.includes(productsId);
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSubCategories());
  }, [dispatch]);

  const filtersArray = [
    {
      title: "Підкатегорія",
      filters: filteredData,
    },
  ];

  return (
    <>
      {filtersArray.map((filter) => (
        <div className={css.labelsSection} key={filter.title}>
          <p className={css.formTitle}>{filter.title}</p>
          <ul className={css.labelsList}>
            {filter.filters.map((item) => (
              <FilterElement
                key={item.id}
                text={item.name}
                id="subCategory"
                name={item.key}
                checked={filters[item.key]}
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
  animalId: PropTypes.string,
  productsId: PropTypes.string,
  handleCheckboxChange: PropTypes.func,
};

export default FilterBlock;
