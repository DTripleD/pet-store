import css from "./ProfilePage.module.scss";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getUserInfo } from "src/redux/auth/operations";
import { selectAuthToken } from "src/redux/auth/selectors";

import UserInfoItem from "components/UserInfoItem/UserInfoItem";

const ProfilePage = () => {
  const [userValue, setUserValue] = useState({});

  const authToken = useSelector(selectAuthToken);

  // console.log(userValue);

  // ;
  // ;
  // ;
  // ;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserInfo(authToken)).then((data) => setUserValue(data.payload));
  }, [authToken, dispatch]);

  return (
    <section>
      <h2 className={css.userTitle}>Персональні дані</h2>

      <ul className={css.infoList}>
        <UserInfoItem
          title="Ім’я"
          userValue={userValue}
          setUserValue={setUserValue}
          itemKey="first_name"
          type="text"
          placeholder="Введіть ім’я"
        />
        <UserInfoItem
          title="Прізвище"
          userValue={userValue}
          setUserValue={setUserValue}
          itemKey="last_name"
          type="text"
          placeholder="Введіть прізвище"
        />
        <UserInfoItem
          title="Номер телефону"
          userValue={userValue}
          setUserValue={setUserValue}
          itemKey="phone_number"
          type="tel"
          placeholder="example@gmail.com"
        />
        <UserInfoItem
          title="Електронна пошта"
          userValue={userValue}
          setUserValue={setUserValue}
          itemKey="email"
          type="email"
          placeholder="+380"
        />
      </ul>
    </section>
  );
};

export default ProfilePage;
