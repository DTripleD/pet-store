import axios from "axios";
import { useEffect, useState } from "react";
import { redirect, useNavigate, useParams } from "react-router-dom";
import css from "./ActivatePage.module.scss";
import icons from "src/images/icons.svg";

const ActivatePage = () => {
  const { uid, token } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const activateUser = async (userId, userToken) => {
    try {
      //   axios.defaults.headers.common["Authorization"] = userToken;

      const res = await axios
        .post("http://127.0.0.1:8000/api/v1/auth/users/activation/", {
          uid: userId,
          token: userToken,
        })
        .then(() => redirect("/"));

      return res;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    activateUser(uid, token);
  }, [token, uid]);

  const handleClose = () => {
    setIsOpen(false);
    navigate("/");
  };

  setTimeout(() => handleClose(), 2000);

  return (
    !isOpen && (
      <div className={css.wrapper}>
        <div className={css.activateContainer}>
          <div className={css.content}>
            <button type="button" onClick={handleClose} className={css.btn}>
              <svg className={css.close}>
                <use href={icons + "#close"}></use>
              </svg>
            </button>
            <div className={css.iconBox}>
              <svg className={css.icon}>
                <use href={icons + "#activation"}></use>
              </svg>
            </div>
            <p className={css.text}>Дякуємо за підтвердження!</p>
          </div>
        </div>
      </div>
    )
  );
};

export default ActivatePage;
