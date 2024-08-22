import css from "./LoginBurgerMenu.module.scss";
import ModalLogin from "../../../components/AuthModals/ModalLogin";
import PropTypes from "prop-types";
import ProfileBurgerMenu from "../ProfileBurgerMenu/ProfileBurgerMenu";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../../redux/auth/selectors";
import { useState, useEffect } from "react";

const LoginBurgerMenu = ({ setOpenedBurger }) => {
  const [passwordShown, setPasswordShown] = useState(false);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      setOpenedBurger("profile");
    }
  }, [isLoggedIn, setOpenedBurger]);

  const handleCloseModal = () => {
    setOpenedBurger("profile")
  };

  return (
  <div className={css.login}>
    {!isLoggedIn ? (
      <div className={css.loginWrapper}>
        <ModalLogin
          setOpenedBurger={setOpenedBurger}
          isBurger={true}
          passwordShown={passwordShown}
          setPasswordShown={setPasswordShown}
          onCloseModal={handleCloseModal}
        />
    </div>
      ) : (
        <div className={css.profileWrapper}>
          <ProfileBurgerMenu setOpenedBurger={setOpenedBurger} />
        </div>
      )}
    </div>
  );
};

export default LoginBurgerMenu;

LoginBurgerMenu.propTypes = {
  setOpenedBurger: PropTypes.func,
};
