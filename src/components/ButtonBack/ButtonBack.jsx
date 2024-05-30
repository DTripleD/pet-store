import css from "./ButtonBack.module.scss";
import icons from "../../images/icons.svg";

const ButtonBack = ({ text, backTo, setOpenedBurger }) => {
  return (
    <button
      type="button"
      onClick={() => {
        setOpenedBurger(backTo);
      }}
      className={css.backButton}
    >
      <svg className={css.iconBack}>
        <use href={icons + "#icon-down"}></use>
      </svg>
      <p className={css.textBack}>{text}</p>
    </button>
  );
};

export default ButtonBack;
