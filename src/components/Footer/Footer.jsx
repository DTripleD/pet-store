import { NavLink } from "react-router-dom";

import icons from "../../images/icons.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <NavLink to="/" className="logo__wrapper">
          <svg className="logo logo__footer">
            <use href={icons + "#logo"}></use>
          </svg>
        </NavLink>
      </div>
    </footer>
  );
};

export default Footer;
