import { Link } from "react-router-dom";
import icons from "src/images/icons.svg";
import PropTypes from "prop-types";
import React from "react";

import css from "./Routes.module.scss";

const Routes = ({ routes }) => {
  return (
    <div className={css.routes__wrapper}>
      <svg className={css.icon__house}>
        <use href={icons + "#house"}></use>
      </svg>
      <Link to="/" className={css.route__text}>
        Головна
      </Link>

      {routes.map((route, index) => (
        <React.Fragment key={route.id || index + 1}>
          {routes.length > index && <p className={css.route__slash}>/</p>}
          {routes.length === index + 1 ? (
            <p className={`${css.last__route} ${css.route__text}`}>
              {route.name}
            </p>
          ) : (
            <Link to={route.path} className={css.route__text}>
              {route.name}
            </Link>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Routes;

Routes.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object),
};
