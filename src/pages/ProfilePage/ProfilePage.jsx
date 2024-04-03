import css from "./ProfilePage.module.scss";

const ProfilePage = () => {
  return (
    <div>
      <h2>Персональні дані</h2>

      <form className={css.profileForm}>
        <label>
          Ім’я
          <input type="text" placeholder="Введіть ім’я" />
        </label>
        <label>
          Прізвище
          <input type="text" placeholder="Введіть прізвище" />
        </label>
        <label>
          Номер телефону
          <input type="text" placeholder="+380" />
        </label>
        <label>
          Електронна пошта
          <input type="email" placeholder="example@gmail.com" />
        </label>
      </form>
    </div>
  );
};

export default ProfilePage;
