import css from "./ProfilePage.module.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserInfoItem from "components/UserInfoItem/UserInfoItem";

import { updateUserInfo } from "src/redux/auth/operations";
import Button from "../../components/Button/Button";
import { selectUser } from "../../redux/auth/selectors";
import BackButtonPage from "../../components/BackButtonPage/BackButtonPage";

const ProfilePage = () => {
  const [userValue, setUserValue] = useState({
    first_name: "",
    last_name: "",
    phone_number: "",
    email: "",
  });

  const [isAble, setIsAble] = useState(false);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    setUserValue(user);
  }, [user]);

  useEffect(() => {
    setIsAble(
      () =>
        userValue.first_name !== user.first_name ||
        userValue.last_name !== user.last_name ||
        userValue.email !== user.email ||
        userValue.phone_number !== user.phone_number
    );
  }, [user, userValue]);

  const updateUser = (e) => {
    e.preventDefault();
    dispatch(updateUserInfo(userValue)).then(() => setIsAble(false));
  };

  return (
    <section className={css.profilePage}>
      <div className={css.wrapper}>
        <div className={css.btnBack}>
          <BackButtonPage text={"Персональні дані"} />
        </div>
      </div>

        <div className="container">
        <h2 className={css.userTitle}>Персональні дані</h2>
        <form onSubmit={updateUser} className={css.userForm}>
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
            placeholder="+380"
          />
          <UserInfoItem
            title="Електронна пошта"
            userValue={userValue}
            setUserValue={setUserValue}
            itemKey="email"
            type="email"
            placeholder="email@example.com"
          />
          <Button text="Зберегти зміни" type="submit" isAble={isAble} />
        </form>
      </div>
    </section>
  );
};

export default ProfilePage;
