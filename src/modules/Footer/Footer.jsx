import Logo from "components/Logo/Logo";

import css from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className="container">
        <Logo color={"logo__footer"} />
      </div>
    </footer>
  );
};

export default Footer;
