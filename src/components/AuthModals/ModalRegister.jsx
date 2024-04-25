import icons from "src/images/icons.svg";

import PropTypes from "prop-types";

import css from "./AuthModals.module.scss";
import axios from "axios";
import toast from "react-hot-toast";

const ModalRegister = ({ passwordShown, setPasswordShown, setIsLogin }) => {
  const register = async (e) => {
    e.preventDefault();

    const form = e.target;

    const first_name = form.name.value;

    const email = form.email.value;

    const password = form.password.value;

    try {
      const res = await axios.post("http://127.0.0.1:8000/api/v1/auth/users/", {
        first_name,
        email,
        password,
        re_password: password,
      });
      console.log(res);
    } catch (error) {
      for (const key in error.response.data) {
        error.response.data[key].map((problem) => toast.error(problem));
      }

      return error;
    }
  };

  return (
    <>
      <h3 className={css.modalTitle}>Реєстрація</h3>
      <form className={css.registerForm} onSubmit={register}>
        <div className={css.inputsWrapper}>
          <label className={css.registerLabel}>
            Ваше ім’я*
            <div className={css.inputWrapper}>
              <input
                type="text"
                name="name"
                placeholder="Введіть номер або email"
                className={css.registerInput}
              />
            </div>
          </label>
          <label className={css.registerLabel}>
            Електронна пошта*
            <div className={css.inputWrapper}>
              <input
                type="text"
                name="email"
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
                name="password"
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
          <p className={css.haveAccText}>Вже маєте акаунт?</p>
          <button
            type="button"
            onClick={() => setIsLogin((prev) => !prev)}
            className={css.haveAccButton}
          >
            Увійдіть
          </button>
        </div>
      </form>
    </>
  );
};

export default ModalRegister;

ModalRegister.propTypes = {
  passwordShown: PropTypes.bool,
  setPasswordShown: PropTypes.func,
  setIsLogin: PropTypes.func,
};
