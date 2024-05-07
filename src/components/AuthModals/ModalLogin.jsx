import css from "./AuthModals.module.scss";

import PropTypes from "prop-types";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

import icons from "src/images/icons.svg";
import { signIn } from "src/redux/auth/operations";
import Button from "../Button/Button";

const ModalLogin = ({ passwordShown, setPasswordShown, setIsLogin }) => {
  const dispatch = useDispatch();

  const login = async (e) => {
    e.preventDefault();

    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    try {
      const res = await dispatch(signIn({ email, password }));

      if (res.payload.response?.status === 400) {
        for (const key in res.payload.response.data) {
          res.payload.response.data[key].map((problem) => toast.error(problem));
        }

        // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        throw new Error(res.payload.response.data);
      }

      toast.success("User login succesfully!");

      return res;
    } catch (error) {
      return error;
    }
  };

  return (
    <>
      <h3 className={css.modalTitle}>Вхід до акаунту</h3>
      <form className={css.registerForm} onSubmit={login}>
        <div className={css.inputsWrapper}>
          <label className={css.registerLabel}>
            Електронна пошта
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

        <div className={css.authButtonWraper}>
          <Button text="Увійти" type="submit" />

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
