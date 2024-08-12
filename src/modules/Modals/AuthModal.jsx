import { useState } from "react";

import PropTypes from "prop-types";

import css from "./Modals.module.scss";
import ModalRegister from "components/AuthModals/ModalRegister";
import ModalLogin from "components/AuthModals/ModalLogin";

const AuthModal = ({ activeAuthModal, setActiveAuthModal, onCloseModal }) => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div
      className={`${css.modal} ${activeAuthModal ? css.active : ""}`}
      onClick={() => setActiveAuthModal(false)}
    >
      <div
        className={`${css.modal__content} ${activeAuthModal ? css.active : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        {isLogin ? (
          <>
            <ModalLogin
              passwordShown={passwordShown}
              setPasswordShown={setPasswordShown}
              setIsLogin={setIsLogin}
              onCloseModal={onCloseModal}
            />
          </>
        ) : (
          <ModalRegister
            passwordShown={passwordShown}
            setPasswordShown={setPasswordShown}
              setIsLogin={setIsLogin}
              onCloseModal={onCloseModal}
          />
        )}
      </div>
    </div>
  );
};

AuthModal.propTypes = {
  activeAuthModal: PropTypes.bool,
  setActiveAuthModal: PropTypes.func,
  onCloseModal: PropTypes.func,
};

export default AuthModal;
