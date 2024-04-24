import icons from "src/images/icons.svg";

import css from "./AuthModals.module.scss";

import PropTypes from "prop-types";

const ModalLogin = ({ passwordShown, setPasswordShown, setIsLogin }) => {
  return (
    <>
      <h3 className={css.modalTitle}>Вхід до акаунту</h3>
      <form className={css.registerForm}>
        <div className={css.inputsWrapper}>
          <label className={css.registerLabel}>
            Електронна пошта
            <div className={css.inputWrapper}>
              <input
                type="text"
                placeholder="Введіть email"
                className={css.registerInput}
              />
            </div>
          </label>
          <label className={css.registerLabel}>
            Пароль
            <div className={css.inputWrapper}>
              <input
                type={passwordShown ? "text" : "password"}
                placeholder="Введіть пароль"
                className={css.registerInput}
              />
              <svg
                className={css.iconPassword}
                onClick={() => setPasswordShown((prev) => !prev)}
              >
                <use href={icons + "#eye"}></use>
              </svg>
            </div>
          </label>
        </div>
        <button type="submit" className={css.registerButton}>
          Увійти
        </button>

        <div className={css.haveAccWrapper}>
          <p className={css.haveAccText}>Немає акаунту?</p>
          <button
            type="button"
            onClick={() => setIsLogin((prev) => !prev)}
            className={css.haveAccButton}
          >
            Зареєструватися
          </button>
        </div>
      </form>
    </>
  );
};

export default ModalLogin;

ModalLogin.propTypes = {
  passwordShown: PropTypes.bool,
  setPasswordShown: PropTypes.func,
  setIsLogin: PropTypes.func,
};
