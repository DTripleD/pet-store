import Logo from "components/Logo/Logo";
import icons from "src/images/icons.svg";

import css from "./BurgerMenuWrapper.module.scss";

import PropTypes from "prop-types";

const BurgerMenuWrapper = ({ children, isOpen, setIsOpen }) => {
  return (
    <div className={`${css.burgerWrapper} ${isOpen ? css.open : ""}`}>
      <div className={`${css.burgerContainer} ${css.burgerHeader}`}>
        <Logo color={"logo__header"} />

        <svg className={css.burgerIcon} onClick={() => setIsOpen(false)}>
          <use href={icons + "#cross"}></use>
        </svg>
      </div>
      {children}
    </div>
  );
};

BurgerMenuWrapper.propTypes = {
  setIsOpen: PropTypes.func,
  isOpen: PropTypes.bool,
  children: PropTypes.node,
};

export default BurgerMenuWrapper;
