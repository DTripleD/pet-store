import css from "./Modal.module.scss";
import icons from "../../images/icons.svg";
import { useState } from "react";

import PropTypes from "prop-types";

const Modal = ({ active, setActive }) => {
  return (
    <div
      className={`${css.modal} ${active ? css.active : ""}`}
      onClick={() => setActive(false)}
    >
      <div
        className={`${css.modal__content} ${active ? css.active : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        {active === "register" ? <Register setActive={setActive} /> : null}
        {active === "login" ? <Login setActive={setActive} /> : null}
        {active === "cart" ? <Cart setActive={setActive} /> : null}
      </div>
    </div>
  );
};

Modal.propTypes = {
  active: PropTypes.string,
  setActive: PropTypes.func,
};

export default Modal;

const Register = ({ setActive }) => {
  const [passwordShown, setPasswordShown] = useState(false);
  return (
    <>
      <h3 className="modal__title">Реєстрація</h3>
      <form className="register__form">
        <div className="inputs__wrapper">
          <label className="register__label">
            Ваше ім’я*
            <div className="input__wrapper">
              <input
                type="text"
                placeholder="Введіть номер або email"
                className="register__input"
              />
            </div>
          </label>
          <label className="register__label">
            Електронна пошта*
            <div className="input__wrapper">
              <input
                type="text"
                placeholder="Введіть email"
                className="register__input"
              />
            </div>
          </label>
          <label className="register__label">
            Пароль
            <div className="input__wrapper">
              <input
                type={passwordShown ? "text" : "password"}
                placeholder="Введіть пароль"
                className="register__input"
              />
              <svg
                className="icon__password"
                onClick={() => setPasswordShown((prev) => !prev)}
              >
                <use href={icons + "#eye"}></use>
              </svg>
            </div>
          </label>
        </div>
        <button type="submit" className="register__button">
          Увійти
        </button>
        <div className="have__acc_wrapper">
          <p className="have__acc_text">Вже маєте акаунт?</p>
          <button
            onClick={() => setActive("login")}
            className="have__acc_button"
          >
            Увійдіть
          </button>
        </div>
      </form>
    </>
  );
};

Register.propTypes = {
  setActive: PropTypes.func,
};

const Login = ({ setActive }) => {
  const [passwordShown, setPasswordShown] = useState(false);

  return (
    <>
      <h3 className="modal__title">Вхід до акаунту</h3>
      <form className="register__form">
        <div className="inputs__wrapper">
          <label className="register__label">
            Електронна пошта
            <div className="input__wrapper">
              <input
                type="text"
                placeholder="Введіть email"
                className="register__input"
              />
            </div>
          </label>
          <label className="register__label">
            Пароль
            <div className="input__wrapper">
              <input
                type={passwordShown ? "text" : "password"}
                placeholder="Введіть пароль"
                className="register__input"
                autoComplete="off"
              />
              <svg
                className="icon__password"
                onClick={() => setPasswordShown((prev) => !prev)}
              >
                <use href={icons + "#eye"}></use>
              </svg>
            </div>
          </label>
        </div>
        <button type="submit" className="register__button">
          Увійти
        </button>

        <div className="have__acc_wrapper">
          <p className="have__acc_text">Немає акаунту?</p>
          <button
            onClick={() => setActive("register")}
            className="have__acc_button"
          >
            Зареєструватися
          </button>
        </div>
      </form>
    </>
  );
};

Login.propTypes = {
  setActive: PropTypes.func,
};

const Cart = () => {
  return (
    <div className="cart__wrapper">
      <h3 className="cart__title">Кошик</h3>
      <div className="empty__wrapper">
        <svg className="icon__empty_cart">
          <use href={icons + "#empty-cart"}></use>
        </svg>
        <p className="empty__text">Ваш кошик порожній</p>
      </div>
      <button className="empty__button">Продовжити покупки</button>
    </div>
  );
};
