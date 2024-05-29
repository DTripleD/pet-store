import css from "./AnimalBurgerMenu.module.scss";

const AnimalBurgerMenu = ({ isOpen, setIsOpen }) => {
  return (
    <div className={`${css.burgerWrapper} ${isOpen ? css.open : ""}`}>
      Категорії
      <button
        onClick={() => {
          setIsOpen(false);
        }}
      >
        Назад
      </button>
    </div>
  );
};

export default AnimalBurgerMenu;
