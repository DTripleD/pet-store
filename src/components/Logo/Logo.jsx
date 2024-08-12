import { Link } from 'react-router-dom';
import css from './Logo.module.scss';
import icons from "src/images/icons.svg";
import PropTypes from "prop-types";

const Logo = ({ color }) => {
  return (
    <Link to="/" className={css.logo}>
      <svg className={`${css.icon_paw} ${css[color]}`}>
        <use href={icons + "#icon-paw"}></use>
      </svg>
      <svg className={`${css.icon_name} ${css[color]}`}>
        <use href={icons + "#icon-pettopia"}></use>
      </svg>
    </Link>
  );
};

export default Logo;

Logo.propTypes = {
  color: PropTypes.string,
};