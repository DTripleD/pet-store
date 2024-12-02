import { Link, useParams } from "react-router-dom";
import Routes from "components/Routes/Routes";
import itemImage from "src/images/img.png";
import css from "./CategoryPage.module.scss";
import { useEffect, useState } from "react";
import icons from "../../images/icons.svg";
import Loader from "../../components/Loader/Loader";

const CategoryPage = () => {
  const { category } = useParams();
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState(null);

  const getCategoryPage = async (id) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/v1/animalcategories/${id}`);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      setCategories(data);
      console.log(data);
    } catch (error) {
      console.error("Failed to fetch category data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    getCategoryPage(category);
  }, [category]);

  return loading ? (
      <div className={css.loader}><Loader /></div>
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
