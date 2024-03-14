import { NavLink } from "react-router-dom";
import icons from "../../images/icons.svg";
import css from "./Logo.module.scss";

import PropTypes from "prop-types";

const Logo = ({ color }) => {
  return (
    <NavLink to="/" className={css.logo__wrapper}>
      <svg className={`${css.logo} ${css[color]}`}>
        <use href={icons + "#logo"}></use>
      </svg>
    </NavLink>
  );
};

export default Logo;

Logo.propTypes = {
  color: PropTypes.string,
};
