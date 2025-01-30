import { useState } from "react";
import css from "./Contacts.module.scss";
import icons from "src/images/icons.svg";

const Contacts = () => {
  const [contactsVisible, setContactsVisible] = useState(false);

  return (
    <div>
      <div className={css.contactsWrapper}>
        <p className={css.contactsText}>Контакти</p>
        <svg
          className={`${css.headerIcon} ${css.icon__down__header} ${
            contactsVisible ? css.iconOpen : ""
          }`}
          onClick={() => setContactsVisible((prev) => !prev)}
        >
          <use href={icons + "#icon-down"}></use>
        </svg>
      </div>
      <ul
        className={`${css.contactsDropDownList} ${
          contactsVisible ? css.contactsVisible : ""
        }`}
      >
        <li>
          <a href="tel:+000-000-00-00" className={css.contactLink}>
            000-000-00-00
          </a>
        </li>
        <li>
          <a href="mailto:pettopia@gmail.com" className={css.contactLink}>
            pettopia@gmail.com
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contacts;
