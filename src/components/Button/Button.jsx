import css from "./Button.module.scss";

const Button = ({ text, type, isSmall = false }) => {
  return (
    <button
      type={type}
      className={`${css.button} ${isSmall ? css.smallButton : ""}`}
    >
      {text}
    </button>
  );
};

export default Button;
