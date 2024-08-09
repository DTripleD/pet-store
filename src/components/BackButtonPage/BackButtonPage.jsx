import { Link } from "react-router-dom";
import css from './BackButtonPage.module.scss';
import icons from "../../images/icons.svg";
import PropTypes from "prop-types";

const BackButtonPage = ({ text }) => {
  return (
    <Link
      to="/"
      className={css.backButton}
    >
      <svg className={css.iconBack}>
        <use href={icons + "#icon-down"}></use>
      </svg>
      <p className={css.textBack}>{text}</p>
    </Link>
  );
}

BackButtonPage.propTypes = {
  text: PropTypes.string,
};

export default BackButtonPage;