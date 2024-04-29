import { useDispatch, useSelector } from "react-redux";
import css from "./ProfilePage.module.scss";
import { selectAuthToken, selectUser } from "../../redux/auth/selectors";
import { useEffect, useState } from "react";
import { getUserInfo } from "../../redux/auth/operations";

import icons from "../../images/icons.svg";

const ProfilePage = () => {
  const user = useSelector(selectUser);
  const [isEditing, setIsEditing] = useState(false);

  const [userValue, setUserValue] = useState({});

  console.log(userValue);

  const authToken = useSelector(selectAuthToken);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserInfo(authToken)).then((data) => setUserValue(data.payload));
  }, [authToken, dispatch]);

  return (
    <section>
      <h2 className={css.userTitle}>Персональні дані</h2>

      <form className={css.profileForm}>
        <label className={css.profileLabel}>
          Ім’я
          <input
            className={css.profileInput}
            type="text"
            placeholder="Введіть ім’я"
          />
        </label>
        <label className={css.profileLabel}>
          Прізвище
          <input
            className={css.profileInput}
            type="text"
            placeholder="Введіть прізвище"
          />
        </label>
        <label className={css.profileLabel}>
          Номер телефону
          <input className={css.profileInput} type="tel" placeholder="+380" />
        </label>
        <label className={css.profileLabel}>
          Електронна пошта
          <input
            className={css.profileInput}
            type="email"
            placeholder="example@gmail.com"
          />
        </label>
      </form>

      <ul className={css.infoList}>
        <li>
          <p className={css.fieldTitle}>Ім’я</p>
          {isEditing ? (
            <>
              <input
                value={userValue.first_name}
                onChange={(e) =>
                  setUserValue((prev) => {
                    return { ...prev, first_name: e.target.value };
                  })
                }
              />
              <p>Save</p>
              <p
                onClick={() => {
                  setIsEditing(false);
                  setUserValue((prev) => {
                    return { ...prev, first_name: user.firstName };
                  });
                }}
              >
                Cancel
              </p>
            </>
          ) : (
            <>
              <p>{user.firstName}</p>
              <p
                onClick={() => {
                  setIsEditing(true);
                }}
              >
                Edit
              </p>
            </>
          )}
        </li>
        <li>
          <p>Прізвище</p>
          <p>{user.lastName}</p>
        </li>
        <li>
          <p>Номер телефону</p>
          <p>{user.phoneNumber}</p>
        </li>
        <li>
          <p>Електронна пошта</p>
          <p>{user.email}</p>
        </li>
      </ul>
    </section>
  );
};

export default ProfilePage;
