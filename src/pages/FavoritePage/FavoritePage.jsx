import { useEffect, useState } from "react";
import CatalogItem from "components/CatalogItem/CatalogItem";
import css from "./FavoritePage.module.scss";

import { getProducts } from "src/api/getProducts";

const FavoritePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts(1, 1).then((data) => setProducts(data.results));
  }, []);

  return (
    <section className={css.favoriteSection}>
      <h2 className={css.favoriteTitle}>Бажане</h2>
      <ul className={css.favoriteList}>
        {products.map((item) => (
          <CatalogItem key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
};

export default FavoritePage;
