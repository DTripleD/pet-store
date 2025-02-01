import css from "./Footer.module.scss";
import { Link } from "react-router-dom";
import icons from "src/images/icons.svg";
import Logo from "../../components/Logo/Logo";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import PropTypes from "prop-types";

const navOnSiteArray = [
  { text: "Вхід до кабінету", to: "/user/profile", id: 1, isAuth: true },
  { text: "Оплата і доставка", to: "/about/oplata-i-dostavka", id: 2 },
  { text: "Про нас", to: "/about", id: 3 },
  { text: "Відгуки", to: "/about/reviews", id: 4 },
  { text: "Блог", to: "/about/blog", id: 5 },
];

const animalsArray = [
  { text: "Собакам", to: "/dogs", id: 1 },
  { text: "Котам", to: "/cats", id: 2 },
  { text: "Гризунам", to: "/rodents", id: 3 },
  { text: "Птахам", to: "/birds", id: 4 },
  { text: "Рибам", to: "/fish", id: 5 },
];

const Footer = ({ setActiveAuthModal }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <footer className={css.footer}>
      <div className={css.footerInfo}>
        <div className={css.logoWrapper}>
          <Logo color={"logoFooter"} />
          <div className={css.footerAddressWrapper}>
            <p className={css.footerAddress}>
              Графік роботи: Пн-Нд: 9:00-18:00
            </p>
            <p className={css.footerAddress}>
              Адреса: Харків, вул. Героїв Праці, 9 ТРЦ «Дафі»
            </p>
          </div>
        </div>
        <div>
          <h3 className={css.footerNavTitle}>Товари</h3>
          <ul className={css.footerNavList}>
            {animalsArray.map((item) => (
              <li key={item.id}>
                <Link to={item.to} className={css.footerNavText}>
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className={css.footerNavTitle}>Клієнтам</h3>
          <ul className={css.footerNavList}>
            {navOnSiteArray.map((item) => (
              <li key={item.id}>
                {item.isAuth && !isLoggedIn ? (
                  <button
                    onClick={() => setActiveAuthModal(true)}
                    className={`${css.footerNavText} ${css.footerNavButton}`}
                  >
                    {item.text}
                  </button>
                ) : (
                  <Link to={item.to} className={css.footerNavText}>
                    {item.text}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className={css.contactsWrapper}>
          <div>
            <h4 className={css.infoTitle}>Контакти</h4>
            <ul className={css.contactsList}>
              <li>
                <a
                  href="tel:+38(000)-000-00-00"
                  className={`${css.footerNavText} ${css.contact}`}
                >
                  +38(000)-000-00-00
                </a>
              </li>
              <li>
                <a
                  href="mailto:pettopiateamchallenge@gmail.com"
                  className={`${css.footerNavText} ${css.contact}`}
                >
                  pettopiateamchallenge@gmail.com
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className={css.infoTitle}>Ми у соц. мережах:</h4>
            <ul className={css.socLinkList}>
              <li>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className={css.socLinkIcon}>
                    <use href={icons + "#instagram"}></use>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className={css.socLinkIcon}>
                    <use href={icons + "#facebook"}></use>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/uk-UA/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className={css.socLinkIcon}>
                    <use href={icons + "#tiktok"}></use>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={css.copyrightWrapper}>
        <ul className={css.footerPaymentList}>
          <li>
            <svg className={css.footerPaymentIcon}>
              <use href={icons + "#mastercard"}></use>
            </svg>
          </li>
          <li>
            <svg className={css.footerPaymentIcon}>
              <use href={icons + "#visa"}></use>
            </svg>
          </li>
        </ul>
        <p className={css.copyrightText}>
          Copyright © 2023, Pettopia. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

Footer.propTypes = {
  setActiveAuthModal: PropTypes.func,
};
