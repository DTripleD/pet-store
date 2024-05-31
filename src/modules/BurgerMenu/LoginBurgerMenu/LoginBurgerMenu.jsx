import css from "./LoginBurgerMenu.module.scss";
import ModalLogin from "../../../components/AuthModals/ModalLogin";
import PropTypes from "prop-types";

const LoginBurgerMenu = ({ setOpenedBurger }) => {
  return (
    <div className={css.loginWrapper}>
      <ModalLogin setOpenedBurger={setOpenedBurger} isBurger={true} />
    </div>
  );
};

export default LoginBurgerMenu;

LoginBurgerMenu.propTypes = {
  setOpenedBurger: PropTypes.func,
};
