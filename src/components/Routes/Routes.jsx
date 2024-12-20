import { Link } from "react-router-dom";
import icons from "src/images/icons.svg";
import PropTypes from "prop-types";
import React from "react";

import css from "./Routes.module.scss";

const Routes = ({ routes }) => {
  function getPath(key) {
    let fullPath = "";

    for (let i = 0; i <= routes.length; i += 1) {
      fullPath = fullPath + "/" + routes[i]?.id;

      if (routes[i]?.key === key) {
        return fullPath;
      }
    }
  }

  return (
    <div className={css.routes__wrapper}>
      <svg className={css.icon__house}>
        <use href={icons + "#house"}></use>
      </svg>
      <Link to="/" className={css.route__text}>
        Головна
      </Link>

      {routes.map((route, index) => (
        <React.Fragment key={route.key}>
          {routes.length > index && <p className={css.route__slash}>/</p>}
          {routes.length === index + 1 ? (
            <p className={`${css.last__route} ${css.route__text}`}>
              {route.name}
            </p>
          ) : (
            <Link to={getPath(route.key)} className={css.route__text}>
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
