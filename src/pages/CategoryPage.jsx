import { Link, useParams } from "react-router-dom";
import { getCategoryByPath } from "../data/categorys";
import Routes from "../components/Routes/Routes";

const CategoryPage = () => {
  const { category } = useParams();

  const categoryObj = getCategoryByPath(category);

  return (
    <div className="container">
      <Routes
        routes={[{ display: categoryObj.display, path: categoryObj.path }]}
      />
      <h2 className="sub-cat-title">{categoryObj.display}</h2>
      <ul className="sub-cat-list">
        {categoryObj.dropdown.map((subCat) => (
          <Link
            to={`/${category}/${subCat.path}`}
            state={{ from: categoryObj, to: subCat }}
            key={subCat.id}
            className="sub-cat-item"
          >
            <div className="sub-cat-img-wrapper">
              <img src="../../src/images/img.png" alt={subCat.display} />
            </div>
            <p className="sub-cat-text">{subCat.display}</p>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default CategoryPage;
