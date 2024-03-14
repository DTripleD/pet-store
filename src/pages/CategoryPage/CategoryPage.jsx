import { Link, useParams } from "react-router-dom";
import { getCategoryByPath } from "../../data/categorys";
import Routes from "../../components/Routes/Routes";

import css from "./CategoryPage.module.scss";

const CategoryPage = () => {
  const { category } = useParams();

  const categoryObj = getCategoryByPath(category);

  return (
    <div className="container">
      <Routes
        routes={[{ display: categoryObj.display, path: categoryObj.path }]}
      />
      <h2 className={css.sub_cat_title}>{categoryObj.display}</h2>
      <ul className={css.sub_cat_list}>
        {categoryObj.dropdown.map((subCat) => (
          <Link
            to={`/${category}/${subCat.path}`}
            state={{ from: categoryObj, to: subCat }}
            key={subCat.id}
            className={css.sub_cat_item}
          >
            <div className={css.sub_cat_img_wrapper}>
              <img src="../../src/images/img.png" alt={subCat.display} />
            </div>
            <p className={css.sub_cat_text}>{subCat.display}</p>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default CategoryPage;
