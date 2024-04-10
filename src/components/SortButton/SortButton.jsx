import { Link } from "react-router-dom";
import css from "./SortButton.module.scss";
import PropTypes from "prop-types";

const SortButton = ({ isActive, text, link }) => {
  return (
    <Link
      to={link}
      className={`${css.product__nav_button} ${
        isActive
          ? css.product__nav_button_active
          : css.product__nav_button_inactive
      }`}
    >
      {text}
    </Link>
  );
};

export default SortButton;

SortButton.propTypes = {
  isActive: PropTypes.bool,
  text: PropTypes.string,
  link: PropTypes.string,
};
