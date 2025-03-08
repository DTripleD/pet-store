import PropTypes from "prop-types";
import { Checkbox } from "@mui/material";
import css from "./FilterElement.module.scss";

const FilterElement = ({ text, id, name, checked, onChange }) => {
  return (
    <li className={css.labelWrapper}>
      <Checkbox
        id={id}
        name={name}
        value={name}
        checked={checked}
        onChange={onChange}
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

FilterElement.propTypes = {
  text: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};

export default FilterElement;
