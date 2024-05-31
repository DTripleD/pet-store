import css from "./RegisterBurgerMenu.module.scss";

import ModalRegister from "../../../components/AuthModals/ModalRegister";
import PropTypes from "prop-types";

const RegisterBurgerMenu = ({ setOpenedBurger }) => {
  return (
    <div className={css.registerWrapper}>
      <ModalRegister setOpenedBurger={setOpenedBurger} isBurger={true} />
    </div>
  );
};

export default RegisterBurgerMenu;

RegisterBurgerMenu.propTypes = {
  setOpenedBurger: PropTypes.func,
};
