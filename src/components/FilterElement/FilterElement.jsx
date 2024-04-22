import { Checkbox } from "@mui/material";

import css from "./FilterElement.module.scss";

const FilterElement = ({ text, id, name }) => {
  return (
    <li className={css.labelWrapper}>
      <Checkbox
        id={id}
        name={name}
        sx={{
          padding: 0,
          width: "20px",
          height: "20px",
          color: "#B0B0B0",
          "&.Mui-checked": {
            color: "#34955D",
          },
        }}
      />
      <label className={css.labelText} htmlFor={id}>
        {text}
      </label>
    </li>
  );
};

export default FilterElement;
