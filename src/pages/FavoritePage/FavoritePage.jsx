import { useEffect, useState } from "react";
import CatalogItem from "components/CatalogItem/CatalogItem";
import css from "./FavoritePage.module.scss";
import PropTypes from "prop-types";
import { getProducts } from "src/api/getProducts";
import { getFeatured } from "../../redux/featured/featuredOperations";
import { useDispatch, useSelector } from "react-redux";
import { getCookies } from "../../shared/cookies/cookies";
import { selectFeaturedList } from "../../redux/featured/featuredSelectors";
import ButtonBack from "../../components/ButtonBack/ButtonBack";

const FavoritePage = ({ setOpenedBurger }) => {
  const [products, setProducts] = useState([]);
  const featuredList = useSelector(selectFeaturedList);
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


  console.log(featuredList);

  return (
    <section className={css.favoriteSection}>
      <div className={css.wrapper}>
        <div className={css.btnBack}>
          <ButtonBack
            text={"Бажане"}
            backTo={"main"}
            setOpenedBurger={setOpenedBurger}
          />
        </div>
        <h2 className={css.favoriteTitle}>Бажане</h2>
        {featuredList.length > 0 && (
          <ul className={css.favoriteList}>
            {featuredList.map((item) => (
              <CatalogItem key={item.id} item={item.product} />
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};


FavoritePage.propTypes = {
  setOpenedBurger: PropTypes.func.isRequired,
};

export default FavoritePage;
