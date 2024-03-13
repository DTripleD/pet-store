import { Link } from "react-router-dom";
import icons from "../../images/icons.svg";
import PropTypes from "prop-types";
import React from "react";

const Routes = ({ routes }) => {
  return (
    <div className="routes__wrapper">
      <svg className="icon__house">
        <use href={icons + "#house"}></use>
      </svg>
      <Link to="/" className="route__text">
        Головна
      </Link>
      {routes.map((route, index) => (
        <React.Fragment key={route.path}>
          {routes.length > index && <p className="route__slash">/</p>}
          {routes.length === index + 1 ? (
            <p className="last__route route__text">{route.display}</p>
          ) : (
            <Link
              to={`/${route.path}`}
              key={route.display}
              className="route__text"
            >
              {route.display}
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
