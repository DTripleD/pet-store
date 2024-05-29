import { Link, useParams } from "react-router-dom";

import Routes from "components/Routes/Routes";

import itemImage from "src/images/img.png";

import css from "./CategoryPage.module.scss";
import { useEffect, useState } from "react";
import MediaQuery from "react-responsive";

import icons from "../../images/icons.svg";

const CategoryPage = () => {
  const { category } = useParams();

  const [categorys, setCategorys] = useState(null);

  const getCategoryPage = async (id) => {
    return fetch(`http://127.0.0.1:8000/api/v1/animalcategories/${id}/`)
      .then((res) => res.json())
      .then((data) => setCategorys(data));
  };

  useEffect(() => {
    getCategoryPage(category);
  }, [category]);

  return categorys ? (
    <section className={css.categorySection}>
      <div className="container">
        <MediaQuery maxWidth={1919}>
          <Link to="/" className={css.linkBack}>
            <svg className={css.iconBack}>
              <use href={icons + "#icon-down"}></use>
            </svg>
            <p className={css.textBack}>Головна сторінка</p>
          </Link>
        </MediaQuery>
        <MediaQuery minWidth={1920}>
          <Routes routes={[{ name: categorys.name, key: categorys.key }]} />

          <h2 className={css.sub_cat_title}>{categorys.name}</h2>
        </MediaQuery>
        <ul className={css.sub_cat_list}>
          {categorys.product_categories.map((subCat) => (
            <li key={subCat.id} className={css.subCatItem}>
              <Link
                to={`/${categorys.id}/${subCat.id}`}
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
    </section>
  ) : (
    <div>Loading...</div>
  );
};

export default CategoryPage;
