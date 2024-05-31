import { useEffect, useState } from "react";
import CatalogItem from "components/CatalogItem/CatalogItem";
import css from "./FavoritePage.module.scss";

import { getProducts } from "src/api/getProducts";
import { getFeatured } from "../../redux/featured/featuredOperations";
import { useDispatch, useSelector } from "react-redux";
import { getCookies } from "../../shared/cookies/cookies";
import { selectFeaturedList } from "../../redux/featured/featuredSelectors";

const FavoritePage = () => {
  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    getProducts(1, 1).then((data) => setProducts(data.results));
  }, []);

  useEffect(() => {
    const cookies = getCookies();

    if (cookies.featuredTokenPetStore) {
      dispatch(getFeatured(cookies.featuredTokenPetStore));
    }
  }, [dispatch]);

  const featuredList = useSelector(selectFeaturedList);

  console.log(featuredList);

  return (
    <section className={css.favoriteSection}>
      <h2 className={css.favoriteTitle}>Бажане</h2>
      {featuredList.length > 0 && (
        <ul className={css.favoriteList}>
          {featuredList.map((item) => (
            <CatalogItem key={item.id} item={item.product} />
          ))}
        </ul>
      )}
    </section>
  );
};

export default FavoritePage;
