import { useNavigate } from "react-router-dom";
import css from './BackButtonPage.module.scss';
import icons from "../../images/icons.svg";
import PropTypes from "prop-types";

const BackButtonPage = ({ text, onClick }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      navigate(-1);
    }
  };

  return (
    <button
      onClick={handleClick} 
      className={css.backButton}
    >
      <svg className={css.iconBack}>
        <use href={icons + "#icon-down"}></use>
      </svg>
      <p className={css.textBack}>{text}</p>
    </button>
  );
}

BackButtonPage.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default BackButtonPage;