import { Link } from "react-router-dom";
import itemImage from "src/images/img.png";
import css from "./CategoryList.module.scss";
import PropTypes from "prop-types";

const CategoryList = ({ categories }) => (
  <ul className={css.subCatList}>
    {categories.map((category) => (
      <li key={category.id} className={css.subCatItem}>
        <Link to={`/${category.id}`}>
          <div className={css.subCatImgWrapper}>
            <img
              className={css.img}
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
  categories: PropTypes.array,
  parentPath: PropTypes.string,
};

export default CategoryList;
