import { NavLink, useLocation, useParams } from "react-router-dom";  
import PropTypes from "prop-types";
import css from './DescriptionNavigation.module.scss';
import { useEffect } from "react";

const DescriptionNavigation = () => {
  const { category, catalog, productId } = useParams();
  const location = useLocation();

  useEffect(() => {
    const activeLink = document.querySelector(`.${css.isActive}`);
    if (activeLink) {
      activeLink.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }, [location.pathname]);

  return (
    <nav className={css.nav}>
      <NavLink 
        className={({ isActive }) => isActive ? `${css.link} ${css.isActive}` : css.link} 
        to={`/${category}/${catalog}/${productId}`}
        end
      >
        Все про товар
      </NavLink>
      <NavLink
        className={({ isActive }) => isActive ? `${css.link} ${css.isActive}` : css.link} 
        to={`/${category}/${catalog}/${productId}/description`}
      >
        Опис</NavLink>
      <NavLink
        className={({ isActive }) => isActive ? `${css.link} ${css.isActive}` : css.link}  
        to={`/${category}/${catalog}/${productId}/characteristic`}
      >
        Характеристики
      </NavLink>
    </nav>
  );
}

DescriptionNavigation.propTypes = {
  productId: PropTypes.string,
};

export default DescriptionNavigation;