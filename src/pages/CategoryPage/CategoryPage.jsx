import { Link, useParams } from "react-router-dom";
import Routes from "components/Routes/Routes";
import itemImage from "src/images/img.png";
import css from "./CategoryPage.module.scss";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
import { fetchCategoryData } from "../../helpers/getCategoryData";
import icons from "src/images/icons.svg";

const CategoryPage = () => {
  const { category } = useParams();
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await fetchCategoryData(
          `http://127.0.0.1:8000/api/v1/animalcategories/${category}`
        );
        setCategories(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [category]);

  return loading ? (
    <div className={css.loader}>
      <Loader />
    </div>
  ) : (
    <section className={css.categorySection}>
      <div className="container">
        <div className={css.btnBack}>
          <Link to="/" className={css.linkBack}>
            <svg className={css.iconBack}>
              <use href={icons + "#icon-down"}></use>
            </svg>
            <p className={css.textBack}>Головна сторінка</p>
          </Link>
        </div>
        <div className={css.routes}>
          <Routes routes={[{ name: categories.name, key: categories.key }]} />
          <h2 className={css.subCatTitle}>{categories.name}</h2>
        </div>
        <ul className={css.subCatList}>
          {categories.product_categories.map((subCat) => (
            <li key={subCat.id} className={css.subCatItem}>
              <Link to={`/${category}/${subCat.id}`}>
                <div className={css.subCatImgWrapper}>
                  <img className={css.img} src={itemImage} alt={subCat.name} />
                </div>
                <p className={css.subCatText}>{subCat.name}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CategoryPage;
