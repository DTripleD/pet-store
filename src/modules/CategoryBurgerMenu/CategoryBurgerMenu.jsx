import css from "./CategoryBurgerMenu.module.scss";

const CategoryBurgerMenu = ({ isOpen, setIsOpen }) => {
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

export default CategoryBurgerMenu;
