import css from "./Button.module.scss";
import PropTypes from "prop-types";

const Button = ({ text, type, isSmall = false, isAble = true }) => {
  return (
    <button
      type={type}
      disabled={!isAble}
      className={`${css.button} ${isSmall ? css.smallButton : ""}`}
    >
      {text}
    </button>
  );
};

export default Button;

Button.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  isSmall: PropTypes.bool,
  isAble: PropTypes.bool,
};
