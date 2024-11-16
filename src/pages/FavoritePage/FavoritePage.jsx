import CatalogItem from "components/CatalogItem/CatalogItem";
import css from "./FavoritePage.module.scss";
// import { getProducts } from "src/api/getProducts";
import { useSelector } from "react-redux";
import { selectFeaturedList } from "../../redux/featured/featuredSelectors";
import BackButtonPage from "../../components/BackButtonPage/BackButtonPage";

const FavoritePage = () => {
  // const [products, setProducts] = useState([]);
  const featuredList = useSelector(selectFeaturedList);

  // useEffect(() => {
  //   getProducts(1, 1).then((data) => setProducts(data.results));
  // }, []);

  return (
    <section className={css.favoriteSection}>
      <div className={css.wrapper}>
        <div className={css.btnBack}>
          <BackButtonPage text={"Бажане"} />
        </div>
      </div>

      <div className="container">
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

export default FavoritePage;
