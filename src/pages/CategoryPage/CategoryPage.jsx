import { Link, useLocation } from "react-router-dom";

import Routes from "components/Routes/Routes";

import itemImage from "src/images/img.png";

import css from "./CategoryPage.module.scss";
import { useEffect, useState } from "react";

const CategoryPage = () => {
  const { state } = useLocation();

  const [categorys, setCategorys] = useState(null);

  const getCategoryPage = async (id) => {
    return fetch(`http://127.0.0.1:8000/api/v1/animalcategories/${id}/`)
      .then((res) => res.json())
      .then((data) => setCategorys(data));
  };

  useEffect(() => {
    getCategoryPage(state);
  }, [state]);

  return categorys ? (
    <div className="container">
      <Routes routes={[{ name: categorys.name, key: categorys.key }]} />

      <h2 className={css.sub_cat_title}>{categorys.name}</h2>
      <ul className={css.sub_cat_list}>
        {categorys.product_categories.map((subCat) => (
          <li key={subCat.id} className={css.subCatItem}>
            <Link
              to={`/${categorys.key}/${subCat.key}`}
              state={{
                from: { ...categorys, animalId: state, productsId: subCat.id },
                to: subCat,
              }}
              className={css.sub_cat_item}
            >
              <div className={css.sub_cat_img_wrapper}>
                <img src={itemImage} alt={subCat.name} />
              </div>
              <p className={css.sub_cat_text}>{subCat.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default CategoryPage;
