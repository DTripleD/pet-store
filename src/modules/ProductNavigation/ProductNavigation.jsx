import { useLocation } from "react-router-dom";
import SortButton from "components/SortButton/SortButton";

import PropTypes from "prop-types";

import css from "./ProductNavigation.module.scss";
import { buttonsArray } from "src/data/buttonsArray";

const ProductNavigation = ({ productId }) => {
  const { pathname } = useLocation();

  return (
    <ul className={css.prodNavButtonsList}>
      {buttonsArray.map((button) => (
        <li key={button.id}>
          <SortButton
            link={button.link}
            isActive={
              button.link.length > 1
                ? pathname.endsWith(button.link)
                : pathname.endsWith(productId)
            }
            text={button.text}
          />
        </li>
      ))}
    </ul>
  );
};

export default ProductNavigation;

ProductNavigation.propTypes = {
  productId: PropTypes.string,
};
