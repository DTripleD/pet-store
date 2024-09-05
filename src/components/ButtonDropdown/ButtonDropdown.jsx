import css from './ButtonDropdown.module.scss';
import icons from "src/images/icons.svg";
import PropTypes from "prop-types";

const ButtonDropdown = ({ onClick, isActive}) => {
  return (
    <button 
      type="button" 
      className={css.dropdownTrigger} 
      onClick={onClick}
    >
      {isActive ? (
        <svg className={css.iconDown}>
          <use href={`${icons}#icon-up`}></use>
        </svg>
      ) : (
        <svg className={css.iconUp}>
          <use href={`${icons}#icon-down`}></use>
        </svg>
      )}
    </button>
  );
}

ButtonDropdown.propTypes = {
  onClick: PropTypes.func,
  isActive: PropTypes.bool,
};

export default ButtonDropdown;