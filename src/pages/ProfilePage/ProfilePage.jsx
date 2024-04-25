import css from "./ProfilePage.module.scss";

const ProfilePage = () => {
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
    </section>
  );
};

export default ProfilePage;
