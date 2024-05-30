const RegisterBurgerMenu = ({ setOpenedBurger }) => {
  return (
    <>
      Regilter
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

export default RegisterBurgerMenu;
