import css from "./ProfilePage.module.scss";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getUserInfo } from "src/redux/auth/operations";
import { selectAuthToken } from "src/redux/auth/selectors";

import UserInfoItem from "components/UserInfoItem/UserInfoItem";

const ProfilePage = () => {
  const [userValue, setUserValue] = useState({});

  const authToken = useSelector(selectAuthToken);

  console.log(userValue);

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
        <UserInfoItem
          title="Ім’я"
          userValue={userValue}
          setUserValue={setUserValue}
          itemKey="first_name"
        />
        <UserInfoItem
          title="Прізвище"
          userValue={userValue}
          setUserValue={setUserValue}
          itemKey="last_name"
        />
        <UserInfoItem
          title="Номер телефону"
          userValue={userValue}
          setUserValue={setUserValue}
          itemKey="phone_number"
        />
        <UserInfoItem
          title="Електронна пошта"
          userValue={userValue}
          setUserValue={setUserValue}
          itemKey="email"
        />
      </ul>
    </section>
  );
};

export default ProfilePage;
