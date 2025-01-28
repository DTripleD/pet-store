import { Link } from "react-router-dom";
import itemImage from "src/images/img.png";
import css from "./CategoryList.module.scss";
import PropTypes from "prop-types";

const CategoryList = ({ animals }) => (
  <ul className={css.subCatList}>
    {animals.map((category) => (
      <li key={category.id} className={css.subCatItem}>
        <Link to={`${category.key}`}>
          <div className={css.subCatImgWrapper}>
            <img
              className="img"
              src={category.image_url || itemImage}
              alt={category.name}
            />
          </div>
          <p className={css.subCatText}>{category.name}</p>
        </Link>
      </li>
    ))}
  </ul>
);

CategoryList.propTypes = {
  animals: PropTypes.array,
  parentPath: PropTypes.string,
};

export default CategoryList;
