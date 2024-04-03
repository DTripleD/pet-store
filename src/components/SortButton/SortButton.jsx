import css from "./SortButton.module.scss";

const SortButton = ({ isActive, text, setSelectedButton }) => {
  return (
    <button
      className={`${css.product__nav_button} ${
        isActive
          ? css.product__nav_button_active
          : css.product__nav_button_inactive
      }`}
      onClick={() => setSelectedButton(text)}
    >
      {text}
    </button>
  );
};

export default SortButton;
