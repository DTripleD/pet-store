import FilterElement from "../FilterElement/FilterElement";
import css from "./FilterBlock.module.scss";

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

const FilterBlock = () => {
  return (
    <>
      {filtersArray.map((filter) => (
        <div className={css.labelsSection} key={filter.title}>
          <p className={css.form__title}>{filter.title}</p>
          <ul className={css.labelsList}>
            {filter.filters.map((item) => (
              <FilterElement
                key={item.id}
                text={item.text}
                id={item.id}
                name={item.name}
              />
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default FilterBlock;
