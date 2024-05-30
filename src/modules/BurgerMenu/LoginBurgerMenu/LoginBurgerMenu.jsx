import css from "./LoginBurgerMenu.module.scss";

const LoginBurgerMenu = ({ setOpenedBurger }) => {
  return (
    <>
      Login
      <button
        onClick={() => {
          setOpenedBurger("main");
        }}
      >
        Назад
      </button>
    </>
  );
};

export default LoginBurgerMenu;
